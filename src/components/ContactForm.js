import './ContactFormStyle.css';
import { useTranslation } from 'react-i18next';

import React from 'react';

function ContactForm() {
  const { t } = useTranslation();
  return (
    <div className='form-container'>
        <h1>{t('contact_head1')}</h1>
          <span>{t('contact_text1')}</span>
          <span>{t('contact_text2')}</span>
          <span>{t('contact_text3')}</span>

        <h1>{t('contact_head2')}</h1>
        <div className='form_info'>
          <span>{t('contact_text4')}</span>
          <span>{t('contact_text5')}</span>
          <span>{t('contact_text6')}</span>
          <span>{t('contact_text7')}</span>
          <span>{t('contact_text8')}</span>
        </div>
        <h1>{t('contact_head3')}</h1>
          <form>
            <input placeholder={t('contact_name')} />
            <input placeholder={t('contact_mail')}/>
            <input placeholder={t('contact_subject')} />
            <textarea placeholder={t('contact_message')} rows="6"></textarea>
            <button>{t('contact_button')}</button>
          </form>
    </div>
  )
}

export default ContactForm;

