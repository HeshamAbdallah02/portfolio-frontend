import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import API_BASE_URL from '../../config/api.config';
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
          confirmButtonColor: "#3085d6",
          confirmButtonText: "OK"
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
        confirmButtonColor: "#d33",
        confirmButtonText: "OK"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact" id="contact">
      <h2>{profile.contact?.title || "Get In Touch"}</h2>
      
      {/* Persistent Success Message */}
      {(showSuccess || isPersistentSuccess) && (
        <div className="success-message">
          <p>✓ Message sent successfully!</p>
        </div>
      )}

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            required
            className={errors.name ? 'invalid' : ''}
          />
          {errors.name && <span className="error-text">{errors.name}</span>}
        </div>
        
        <div className="form-group">
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            required
            className={errors.email ? 'invalid' : ''}
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>
        
        <div className="form-group">
          <textarea 
            name="message" 
            rows="5" 
            placeholder="Your Message" 
            required
            className={errors.message ? 'invalid' : ''}
          ></textarea>
          {errors.message && <span className="error-text">{errors.message}</span>}
        </div>
        
        <button 
          type="submit" 
          className="btn send-btn"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className="spinner"></span>
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </div>
  );
}

export default Contact;