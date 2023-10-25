import React from 'react';
import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='top'>
            <div>
                <h1>Ambassade du Burkina-Faso.</h1>
                <p>Le Pays des hommes intègres.</p>
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
                <h4>Ambassade</h4>
                <a href='/'>Ambassadeur</a>
                <a href='/'>Charte</a>
                <a href='/'>Fériés</a>
                <a href='/'>Galeries</a>
            </div>
            <div>
                <h4>Consulat</h4>
                <a href='/'>Visas</a>
                <a href='/'>Passeport</a>
                <a href='/'>Certificats</a>
                <a href='/'>Autres</a>
            </div>
            <div>
                <h4>Communautées</h4>
                <a href='/'>Pays</a>
                <a href='/'>Villes</a>
                <a href='/'>Provinces</a>
                <a href='/'>Actualités</a>
            </div>
            <div>
                <h4>Aide</h4>
                <a href='/'>Support</a>
                <a href='/'>Plan-du-site</a>
                <a href='/'>Handicapes</a>
                <a href='/'>Contacts</a>
            </div>
        </div>
        <div className='credit'>
            <hr/>Ambassade du Burkina-Faso @2023 - <a href='www.armelrik.com'>Melrik's design.</a>
        </div>
    </div>
  )
}

export default Footer;