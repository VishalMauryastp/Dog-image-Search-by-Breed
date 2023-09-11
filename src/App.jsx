import React, { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
      
        </Routes>
        <ToastContainer position="top-right" autoClose={800} />
      </main>
    </>
  );
}

export default App;
