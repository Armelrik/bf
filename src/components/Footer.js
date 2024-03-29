import React from 'react';
import "./FooterStyles.css";
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
  return (
    <div className='footer'>
        <div className='top'>
            <div>
                <h2>{t('footer_head')}</h2>
                <p>{t('welcome_message')}</p>
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
                <h4>Adress</h4>
                <div>
                <span>15 Al Khawarizmi Street Al Mushrif</span>
                <span>P.O.B. 5928 Abu Dhabi-United Arab Emirates</span>
                <span>Phone: (+971) 2 447 8476 | Fax: (+971) 2 447 6778</span>
                <span>Mail: amba.abudhabi@diplomatie.gov.bf</span>
                <span>Ouvert du lundi au Jeudi de 9h a 16h</span>
                <span>Le vendredi de 9h a 12h</span>
                </div>
            </div>
            <div>
                <h4>Embassy</h4>
                {/* <a href='/ambassador'>Ambassadeur</a> */}
                <a href='/'>Charte</a>
                <a href='/'>Fériés</a>
                <a href='/'>Galeries</a>
            </div>
            <div>
                <h4>Consulat</h4>
                <a href='/visas'>Visas</a>
                <a href='/passport'>Passeport</a>
                <a href='/certificate'>Certificates</a>
                <a href='/otherDoc'>Autres</a>
            </div>
            {/* <div>
                <h4>Communautées</h4>
                <a href='/'>Pays</a>
                <a href='/'>Villes</a>
                <a href='/'>Provinces</a>
                <a href='/'>Actualités</a>
            </div> */}
            <div>
                <h4>Help</h4>
                <a href='/'>Support</a>
                <a href='/'>Plan-du-site</a>
                <a href='/'>Handicapes</a>
                <a href='/contact'>Contacts</a>
            </div>
        </div>
        <div className='credit'>
            <hr/>{t('footer_head')} @2024 - <a href='www.armelrik.com'>Melrik's digital.</a>
        </div>
    </div>
  )
}

export default Footer;