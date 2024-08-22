import React, { useState } from 'react';
import './contact.css';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<string>('');

  const submitForm = (ev: React.FormEvent) => {
    ev.preventDefault();
    const form = ev.target as HTMLFormElement;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
      }
    };
    xhr.send(data);
  }

  return (
    <form
      className="contact-form"
      onSubmit={submitForm}
      action="https://formspree.io/f/your-form-id"
      method="POST"
    >
      <input type="email" name="email" placeholder="Your email" required />
      <textarea name="message" placeholder="Your message" required></textarea>
      {status === "SUCCESS" ? <p className="success">Thanks!</p> : <button>Submit</button>}
      {status === "ERROR" && <p className="error">Oops! There was an error.</p>}
    </form>
  );
}

export default ContactForm;