import React from 'react';
import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='top'>
            <div>
                <h1>Ambassade du Burkina-Faso</h1>
                <p>Le Pays des hommes integres.</p>
            </div>
            <div>
                <a href='/facebook'>
                    <i className='fa-brands fa-facebook-square'></i>
                </a>
                <a href='/instagram'>
                    <i className='fa-brands fa-instagram-square'></i>
                </a>
                <a href='/twitter'>
                    <i className='fa-brands fa-twitter-square'></i>
                </a>
            </div>
        </div>
        <div className='bottom'>
            <div>
                <h4>Projets</h4>
                <a href='/'>Charte</a>
                <a href='/'>License</a>
                <a href='/'>Agrements</a>
                <a href='/'>Versions</a>
            </div>
            <div>
                <h4>Comunaute</h4>
                <a href='/'>Pays</a>
                <a href='/'>Ville</a>
                <a href='/'>Province</a>
                <a href='/'>Autres</a>
            </div>
            <div>
                <h4>Aide</h4>
                <a href='/'>Support</a>
                <a href='/'>Plan du site</a>
                <a href='/'>Handicapes</a>
                <a href='/'>Contacts</a>
            </div>
        </div>
    </div>
  )
}

export default Footer;