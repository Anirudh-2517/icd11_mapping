function Careers() {
  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-green-700 mb-6">Careers</h1>
      <p className="text-gray-700 mb-6">
        Join our growing team and be part of an international export company.
        We are always looking for passionate individuals to drive innovation in
        agro trading.
      </p>
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Export Manager</h2>
        <p className="text-gray-600 mt-2">
          Responsible for handling international clients, managing shipments,
          and coordinating logistics.
        </p>
        <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg">
          Apply Now
        </button>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800">Quality Analyst</h2>
        <p className="text-gray-600 mt-2">
          Ensure product quality meets international standards before export.
        </p>
        <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg">
          Apply Now
        </button>
      </div>
    </div>
  );
}
export default Careers;
