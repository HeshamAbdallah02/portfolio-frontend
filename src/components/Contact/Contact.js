import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import Swal from 'sweetalert2';
import API_BASE_URL from '../../config/api.config.js';
import './Contact.css';

function Contact({ profile }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isPersistentSuccess, setIsPersistentSuccess] = useState(false);

  // Check for existing success state on component mount
  useEffect(() => {
    const savedSuccess = localStorage.getItem('contactSuccess');
    if (savedSuccess) {
      setShowSuccess(true);
      setIsPersistentSuccess(true);
      const timer = setTimeout(() => {
        localStorage.removeItem('contactSuccess');
        setShowSuccess(false);
        setIsPersistentSuccess(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const validateForm = (formData) => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (formData.message.length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({ name: '', email: '', message: '' });

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value
    };

    // Client-side validation
    if (!validateForm(formData)) {
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await axios.post(`${API_BASE_URL}/api/contact`, formData, {
        timeout: 10000,
        headers: { 'Content-Type': 'application/json' }
      });

      if (response.status === 200) {
        // Save to localStorage for persistence
        localStorage.setItem('contactSuccess', 'true');
        setShowSuccess(true);

        Swal.fire({
          title: "Message Sent!",
          text: "Thank you for reaching out. I'll respond soon!",
          icon: "success",
          confirmButtonColor: "#8b5cf6",
          confirmButtonText: "OK",
          background: '#141432',
          color: '#f0f0f8'
        });

        e.target.reset();

        // Auto-clear after 5 seconds
        setTimeout(() => {
          localStorage.removeItem('contactSuccess');
          setShowSuccess(false);
        }, 5000);
      }
    } catch (error) {
      let errorMessage = "Message failed to send. Please try again later.";

      if (error.code === 'ECONNABORTED') {
        errorMessage = "Request timed out. Please check your connection and try again.";
      } else if (error.response) {
        errorMessage = error.response.data.message || errorMessage;
      }

      Swal.fire({
        title: "Error!",
        text: errorMessage,
        icon: "error",
        confirmButtonColor: "#ef4444",
        confirmButtonText: "OK",
        background: '#141432',
        color: '#f0f0f8'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-container">
        <h2 className="section-title">
          <span className="gradient-text">{profile.contact?.title || "Get In Touch"}</span>
        </h2>
        <p className="section-subtitle">Have a project in mind? Let's talk about it.</p>

        {/* Persistent Success Message */}
        {(showSuccess || isPersistentSuccess) && (
          <motion.div
            className="success-message"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p>✓ Message sent successfully!</p>
          </motion.div>
        )}

        <motion.form
          className="contact-form"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <input
              type="text"
              name="name"
              id="contact-name"
              placeholder=" "
              required
              className={errors.name ? 'invalid' : ''}
            />
            <label htmlFor="contact-name">Your Name</label>
            {errors.name && <span className="error-text">{errors.name}</span>}
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              id="contact-email"
              placeholder=" "
              required
              className={errors.email ? 'invalid' : ''}
            />
            <label htmlFor="contact-email">Your Email</label>
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <div className="form-group">
            <textarea
              name="message"
              id="contact-message"
              rows="5"
              placeholder=" "
              required
              className={errors.message ? 'invalid' : ''}
            ></textarea>
            <label htmlFor="contact-message">Your Message</label>
            {errors.message && <span className="error-text">{errors.message}</span>}
          </div>

          <button
            type="submit"
            className="send-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="spinner"></span>
                Sending...
              </>
            ) : (
              <>
                Send Message
                <span className="btn-arrow">→</span>
              </>
            )}
          </button>
        </motion.form>
      </div>
    </div>
  );
}

export default Contact;