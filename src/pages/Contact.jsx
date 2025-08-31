function Contact() {
  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-green-700 mb-6">Contact Us</h1>
      <form className="space-y-4 bg-white shadow-lg p-6 rounded-lg">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border rounded-lg"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border rounded-lg"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 border rounded-lg"
          rows="5"
        ></textarea>
        <button className="bg-green-600 text-white px-6 py-2 rounded-lg">
          Send Message
        </button>
      </form>
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Office Address :</h2>
        <p className="text-gray-700">
          #2, Basement, Mannat Apartment ,<br />
          1st cross, Mannat Colony,<br />
          Mahantesh Nagar, Belgaum 590016 India
        </p>
        <p className="text-gray-700">📧 numaagriprime@gmail.com</p>
        <p className="text-gray-700">📞 +91 9880204002 / 7411041565</p>

        {/* Responsive map iframe */}
        <div className="mt-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3837.7489124730128!2d74.52854827513168!3d15.869788684781133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf679a6d05594b%3A0xf26e214370c590b9!2sNuma%20Agri%20Prime!5e0!3m2!1sen!2sin!4v1756575952967!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
