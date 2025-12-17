import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((f) => ({ ...f, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // simple validation
        if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
            setStatus({ type: 'error', message: 'Please fill all fields.' });
            return;
        }

        // Demo submit - no network request. Show success and clear form.
        setStatus({ type: 'success', message: 'Thanks! Your message has been received (demo).' });
        setForm({ name: '', email: '', message: '' });
    };

    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <p className="lead">Have a question or feedback? Send us a message — this is a demo contact form.</p>

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <label>
                    Name
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
                </label>

                <label>
                    Email
                    <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
                </label>

                <label>
                    Message
                    <textarea name="message" value={form.message} onChange={handleChange} placeholder="Write your message..." rows={6} />
                </label>

                <div className="form-actions">
                    <button type="submit" className="btn-primary">Send Message</button>
                </div>
            </form>

            {status && (
                <div className={`status ${status.type === 'success' ? 'status-success' : 'status-error'}`}>
                    {status.message}
                </div>
            )}
        </div>
    );
};

export default Contact;
