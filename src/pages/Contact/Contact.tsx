import React, { useState } from "react";
import "../../styles/global.css";
import "./Contact.css";
import { useTranslation } from 'react-i18next';
import SEO from '../../components/common/SEO';
import { FaLinkedin } from 'react-icons/fa';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const contactEmail = process.env.REACT_APP_CONTACT_EMAIL;
    if (!contactEmail) {
      console.error('Contact email not set in environment variables');
      return;
    }
    const mailtoLink = `mailto:${contactEmail}?subject=Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0D%0A%0D%0AFrom: ${formData.name}%0D%0AEmail: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="contact-page">
      <SEO 
        title={t('contact.title')}
        description={t('contact.title')}
        keywords="contact, email, message"
      />
      <h1>{t('contact.title')}</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">{t('contact.form.name')}</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">{t('contact.form.email')}</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">{t('contact.form.message')}</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">
          {t('contact.form.send')}
        </button>
      </form>
      <div className="linkedin-section">
        <h2>{t('contact.linkedinTitle')}</h2>
        <p>{t('contact.linkedinDescription')}</p>
        <a
          href="https://www.linkedin.com/in/adrien-bony-826b0a213/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-button"
        >
          <FaLinkedin /> {t('contact.linkedinButton')}
        </a>
      </div>
    </div>
  );
};

export default Contact;
