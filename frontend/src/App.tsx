import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/page";
import Home from "./pages/Home/page";
import requireAuth from "./hoc/requireAuth";

const ProtectedDashboard = requireAuth(Dashboard);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<ProtectedDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
