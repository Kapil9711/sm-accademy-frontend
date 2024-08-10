import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import AuthPage from "./pages/AuthPage.jsx";
import DashboardPage from "./pages/DashboardPage";
import styled from "styled-components";
import "./Index.css"
//styles for App 
const AppWraper = styled.div`
     width:min(100%,1500px);
     margin-inline:auto;


`

function App() {
  return (
    <AppWraper>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </AppWraper>
  );
}

export default App;
