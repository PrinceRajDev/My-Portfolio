import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, User, AtSign, Instagram } from 'lucide-react';
import emailjs from 'emailjs-com';

const ContactSection: React.FC = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // State to manage form submission status
  const [formStatus, setFormStatus] = useState('');

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');

    emailjs
      .send(
        'service_bgj7rqc', // Replace with your EmailJS service ID
        'template_kt5a5tm', // Replace with your EmailJS template ID
        {
          to_name: "Prince Raj",
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'fHcWg2g4OBFBFtBuj' // Replace with your EmailJS public key
      )
      .then(
        () => {
          setFormStatus('success');
          setFormData({ name: '', email: '', message: '' }); // Reset form
          setTimeout(() => setFormStatus(''), 3000);
        },
        (error) => {
          console.error('Email sending failed:', error);
          setFormStatus('error');
        }
      );
  };

  return (
    <section id="contact" className="relative py-20 px-4 bg-black/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Contact Details */}
          <div className="md:col-span-2 space-y-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold mb-6">Connect With Me</h3>
              <div className="space-y-4">
                <a
                  href="mailto:praj01012003@gmail.com"
                  className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-gray-800/50 flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <span>praj01012003@gmail.com</span>
                </a>
                <a
                  href="https://github.com/vickyyadav12t"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-gray-800/50 flex items-center justify-center">
                    <Github className="w-6 h-6" />
                  </div>
                  <span>github.com/vickyyadav12t</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/prince-raj2003/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-gray-800/50 flex items-center justify-center">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <span>linkedin.com/in/prince-raj2003/</span>
                </a>
                <a
                  href="https://www.instagram.com/prince.___yadav__?igsh=cTFsdGR3ZXhpcXo1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-gray-800/50 flex items-center justify-center">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <span>instagram.com/prince__.yadav__</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full bg-gray-800/50 rounded-lg px-10 py-3 outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                />
              </div>
              <div className="relative">
                <AtSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full bg-gray-800/50 rounded-lg px-10 py-3 outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows={5}
                className="w-full bg-gray-800/50 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              ></textarea>
              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className="group relative w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg overflow-hidden transition-all hover:scale-[1.02]"
              >
                <span className="relative flex items-center justify-center gap-2">
                  <Send className={`w-5 h-5 ${formStatus === 'sending' ? 'animate-ping' : ''}`} />
                  {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                </span>
              </button>
              {formStatus === 'success' && (
                <div className="text-center text-green-400 animate-fade-in">
                  Message sent successfully!
                </div>
              )}
              {formStatus === 'error' && (
                <div className="text-center text-red-400 animate-fade-in">
                  Oops! Something went wrong. Try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
