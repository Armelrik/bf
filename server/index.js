const express = require("express");
const app = express();
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST);
const bodyParser = require("body-parser");
const cors = require("cors")

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

app.post("/stripe/charge", cors(), async(req, res) => {
    let { amount, id } = req.body;
    console.log("amount: ", amount, "id: ", id);
    try{
        const payment = await stripe.paymentIntents.create({
            amount: amount,
            currency: "EUR",
            description: "Your company description",
            payment_method: id,
            confirm: true,
            //return_url: 'http://localhost:8080/',
        });
        res.json({
            message: "|Payment succeed|",
            success: true,
        })
    } catch(error){
        console.log("error occured...", error);
        res.json({
            message: "Payment failed!",
            success: false,
        })
    }
})

app.listen(process.env.PORT || 8080, () => {
    console.log("Server is starting...");
})