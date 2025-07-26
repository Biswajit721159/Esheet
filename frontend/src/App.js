import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import  Home  from "./pages/Home";
import CreateOrganization from "./pages/CreateOrganizations";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CreateOrganization" element={<CreateOrganization />} />
      </Routes>
    </Router>
  );
}

export default App;
