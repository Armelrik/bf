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
                <h4>{t('footer_bottom1')}</h4>
                <div>
                <span>{t('footer_bottom_child1')}</span>
                <span>{t('footer_bottom_child2')}</span>
                <span>{t('footer_bottom_child3')}</span>
                <span>{t('footer_bottom_child4')}</span>
                <span>{t('footer_bottom_child5')}</span>
                <span>{t('footer_bottom_child6')}</span>
                </div>
            </div>
            <div>
                <h4>{t('footer_bottom2')}</h4>
                {/* <a href='/ambassador'>Ambassadeur</a> */}
                <a href='/'>{t('footer_bottom_child7')}</a>
                <a href='/'>{t('footer_bottom_child8')}</a>
                <a href='/'>{t('footer_bottom_child9')}</a>
            </div>
            <div>
                <h4>{t('footer_bottom3')}</h4>
                <a href='/visas'>{t('footer_bottom_child10')}</a>
                <a href='/passport'>{t('footer_bottom_child11')}</a>
                <a href='/certificate'>{t('footer_bottom_child12')}</a>
                <a href='/otherDoc'>{t('footer_bottom_child13')}</a>
            </div>
            {/* <div>
                <h4>Communautées</h4>
                <a href='/'>Pays</a>
                <a href='/'>Villes</a>
                <a href='/'>Provinces</a>
                <a href='/'>Actualités</a>
            </div> */}
            <div>
                <h4>{t('footer_bottom4')}</h4>
                <a href='/'>{t('footer_bottom_child14')}</a>
                <a href='/'>{t('footer_bottom_child15')}</a>
                <a href='/'>{t('footer_bottom_child16')}</a>
                <a href='/contact'>{t('footer_bottom_child17')}</a>
            </div>
        </div>
        <div className='credit'>
            <hr/>{t('footer_head')} @2024 - <a href='www.armelrik.tech'>Melrik's digital.</a>
        </div>
    </div>
  )
}

export default Footer;