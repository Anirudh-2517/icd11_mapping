import React, { useState } from 'react';
import { Mail, Phone, Smartphone, MessageSquare, MapPin } from 'lucide-react';
function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    countryCode: '+91',
    mobile: '',
    company: '',
    message: ''
  });
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200 py-4">
      <div className="relative bg-gradient-to-r from-slate-600 to-slate-800 py-16 px-6 mb-8 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80')`
          }}
        ></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="flex items-center mb-8">
            <h1 className="text-7xl font-bold text-white mr-8">Contact Us</h1>
            <div className="text-white text-sm">
              <span>HOME</span> <span className="mx-2">/</span> <span>CONTACT US</span>
            </div>
          </div>          
          <div className="flex gap-6 justify-center">
            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/30 transition-colors duration-200">
              <Mail className="w-12 h-12 text-white" />
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/30 transition-colors duration-200">
              <Phone className="w-12 h-12 text-white" />
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/30 transition-colors duration-200">
              <Smartphone className="w-12 h-12 text-white" />
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/30 transition-colors duration-200">
              <MessageSquare className="w-12 h-12 text-white" />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">REGISTERED ADDRESS:</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
                <div className="text-gray-700">
                  <p>#2, Basement, Mannat Apartment ,</p>
                  <p>1st cross, Mannat Colony,</p>
                  <p>Mahantesh Nagar, Belgaum 590016 India</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-600" />
                <p className="text-gray-700">numaagriprime@gmail.com</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-600" />
                <p className="text-gray-700">+91 9880204002 / 7411041565</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">CONNECT WITH US</h2>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Country Code <span className="text-red-500">*</span>
                </label>
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="+91">India (+91)</option>
                  <option value="+1">USA (+1)</option>
                  <option value="+44">UK (+44)</option>
                  <option value="+61">Australia (+61)</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter mobile number"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter company name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="6"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="Enter your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 shadow-lg hover:shadow-xl">
              Send Message
            </button>
          </div>
        </div>
      </div>
      <div className="mt-16 max-w-6xl mx-auto px-6">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3837.7489124730128!2d74.52854827513168!3d15.869788684781133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf679a6d05594b%3A0xf26e214370c590b9!2sNuma%20Agri%20Prime!5e0!3m2!1sen!2sin!4v1756575952967!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
            title="Numa Agri Prime Location Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;