import './App.css';
import{ BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Apply } from "./pages/apply/apply";
import { Cust } from "./pages/cust/cust";
import { PCust } from "./pages/pcust/pcust";
import { Loan } from "./pages/loan/loan";
import { Dloan } from "./pages/dloan";

function BankPage() {
  return(<div className="App">
  
      <Navbar />
      <Routes>
        <Route path="/" element={<Apply />}/>
        <Route path="/cust" element={<Cust />}/>
        <Route path="/pcust" element={<PCust />}/>
        <Route path="/loan"element={<Loan/>}/>
        <Route path="/dloan"element={<Dloan/>}/>
      </Routes>
    
  </div>
  );
}

export default BankPage;
