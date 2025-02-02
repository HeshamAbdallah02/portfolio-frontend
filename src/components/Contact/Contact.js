import './Contact.css';

function Contact({ profile }) {
  return (
    <div className="contact" id="contact">
      <div className="contact-content">
        <h2>{profile.contact?.title || "Get In Touch"}</h2>
        
        <form 
          className="contact-form"
          action={`https://formspree.io/f/xgvoylgn`}
          method="POST"
        >
          <div className="form-group">
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              required 
            />
          </div>
          
          <div className="form-group">
            <input 
              type="email" 
              name="_replyto" 
              placeholder="Your Email" 
              required 
            />
          </div>
          
          <div className="form-group">
            <textarea 
              name="message" 
              rows="5" 
              placeholder="Your Message" 
              required
            ></textarea>
          </div>
          
          <button type="submit" className="btn send-btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;