import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Navbar from "./component/Navbar/Navbar";
import  Home  from "./pages/Home";
import CreateOrganization from "./pages/CreateOrganizations";
import Login from "./pages/Login";
import Organizations from "./component/Organizations/Organizations";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/CreateOrganization" element={<CreateOrganization />} />
        <Route path="/Organizations" element={<Organizations />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
