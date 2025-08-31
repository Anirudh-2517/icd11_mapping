function Certificates() {
  return (
    <div className="p-10 max-w-5xl mx-auto text-center">
      <h1 className="text-4xl font-bold text-green-700 mb-6">
        Certifications & Quality Assurance
      </h1>
      <p className="text-gray-700 mb-6">
        We are proud to be recognized and certified by global quality standards.
        Our operations strictly follow international regulations ensuring
        top-quality exports.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <img src="https://via.placeholder.com/150?text=ISO+9001" alt="ISO" />
        <img src="https://via.placeholder.com/150?text=FSSAI" alt="FSSAI" />
        <img src="https://via.placeholder.com/150?text=APEDA" alt="APEDA" />
        <img src="https://via.placeholder.com/150?text=HACCP" alt="HACCP" />
      </div>
    </div>
  );
}
export default Certificates;
