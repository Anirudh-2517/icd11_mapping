function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center px-4 py-6 mt-1 text-sm md:text-base">
      <p>
        © {new Date().getFullYear()} NUMA AGRI PRIME. All rights reserved. | Designed by{" "}
        <span className="font-semibold">Anirudh.More</span>
      </p>
    </footer>
  );
}
export default Footer;