import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Navbar from "./component/Navbar/Navbar";
import  Home  from "./pages/Home";
import CreateOrganization from "./pages/CreateOrganizations";
import Login from "./pages/Login";
import Organizations from "./component/Organizations/Organizations";
import RequireAuth from "./importants/RequireAuth";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/superAdmin"
          element={
          <RequireAuth>
             <Navbar />
          </RequireAuth>
        }
        >
          <Route
            index
            element={<Home />}
          />
          <Route path="createOrganization" element={<CreateOrganization />} />
          <Route path="Organizations" element={<Organizations />} />
        </Route>
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
