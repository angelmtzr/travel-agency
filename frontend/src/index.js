import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingWrapper from "./Components/Landing/LandingWrapper";
import Login from "./Components/Landing/Login";
import BookedList from "./Components/Home/BookedList";
import FlightSearch from "./Components/Home/FlightSearch";
import Account from "./Components/Home/Account";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingWrapper />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/home" element={<FlightSearch />} />
      <Route path="/booked" element={<BookedList />} />
      <Route path="/account" element={<Account />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
