function Certificates() {
  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-green-700 mb-4 sm:mb-6">
          Certifications & Quality Assurance
        </h1>
        <p className="text-gray-700 text-sm sm:text-base max-w-3xl mx-auto mb-8">
          We are proud to be recognized and certified by global quality standards. 
          Our operations strictly follow international regulations ensuring 
          top-quality exports.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8">
          <img
            src="https://via.placeholder.com/150?text=ISO+9001"
            alt="ISO"
            className="w-full max-w-[140px] mx-auto"/>
          <img
            src="https://via.placeholder.com/150?text=FSSAI"
            alt="FSSAI"
            className="w-full max-w-[140px] mx-auto"/>
          <img
            src="https://via.placeholder.com/150?text=APEDA"
            alt="APEDA"
            className="w-full max-w-[140px] mx-auto"/>
          <img
            src="https://via.placeholder.com/150?text=HACCP"
            alt="HACCP"
            className="w-full max-w-[140px] mx-auto"/>
        </div>
      </div>
    </section>
  );
}
export default Certificates;
