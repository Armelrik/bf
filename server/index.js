const express = require("express");
const bodyParser = require("body-parser");
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST);
const app = express();

require("dotenv").config();


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
            description: "AmbaBF-Abudhabi",
            payment_method: id,
            confirm: true,
            return_url: 'http://localhost:8080/',
        });
        res.json({
            message: "|Payment succeed|",
            success: true,
        })
    } catch(error){
        console.log("Error occured...", error);
        res.json({
            message: "Payment failed!",
            success: false,
        })
    }
})

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is starting...shortly!");
})