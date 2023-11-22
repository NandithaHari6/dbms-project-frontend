import React from "react";
import { Link } from "react-router-dom"; 
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
    <div className="links">
     <ul> 
        <li className="yoo"><Link to="/">Apply new loan </Link></li>
        <li className="yoo"><Link to="/cust"> Search customer Loans</Link></li>
        <li className="yoo"><Link to="/pcust"> Search customer Personal Details</Link></li>
        <li className="yoo"><Link to="/loan"> Search Loans</Link></li>
        <li className="yoo"><Link to="/dloan"> Delete Loans</Link></li>
        </ul>
    </div>
    </div>
  )
}
