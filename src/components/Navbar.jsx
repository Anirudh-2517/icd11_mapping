import React from "react";
import { NavLink } from "react-router-dom";
export default function Navbar(){
  return (
    <nav className="bg-indigo-700 text-white">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-xl font-bold">NAMASTE India</div>
        <div className="space-x-6">
          <NavLink to="/" className={({isActive})=> isActive ? "underline": ""}>Dashboard</NavLink>
          <NavLink to="/terminology" className={({isActive})=> isActive ? "underline": ""}>Terminology</NavLink>
          <NavLink to="/fhir-tools" className={({isActive})=> isActive ? "underline": ""}>FHIR Tools</NavLink>
        </div>
      </div>
    </nav>
  );
}