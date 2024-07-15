import React from "react";
import { Route, Routes } from "react-router-dom";
import AutomationDocs from "../pages/AutomationDocs";
import LoginPage from "../pages/LoginPage";
import SignUp from "../pages/SignUp";
import Projects from "../pages/Projects";

function AppRoutes() {
  return (
    
      <div className="flex">
        <div className="flex-grow">
          <Routes>
            {/* <Route index element={<Login />} /> */}
            { <Route index element={<LoginPage />} /> }
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/docs" element={<AutomationDocs />} />
            <Route path="/sign-up" element={<SignUp />} />

          </Routes>
        </div>
      </div>
   
  );
}

export default AppRoutes;
