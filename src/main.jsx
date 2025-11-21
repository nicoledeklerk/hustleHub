import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Pages (MVP)
import Home from "./pages/Home";
import Search from "./pages/Search";
import Providers from "./pages/Providers";
import ProviderDetail from "./pages/ProviderDetail";
import Book from "./pages/Book";
import BookingConfirmation from "./pages/BookingConfirmation";
import Login from "./pages/Login";
import Account from "./pages/Account";
import AccountBookings from "./pages/AccountBookings";
import Dashboard from "./pages/Dashboard";
import DashboardListings from "./pages/DashboardListings";

function App() {
  return (
    <BrowserRouter>
      {/* Top Navigation (Airbnb-style) */}
      <header>
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/search">Search</Link> |{" "}
          <Link to="/providers">Providers</Link> |{" "}
          <Link to="/account/bookings">Bookings</Link> |{" "}
          <Link to="/login">Login</Link> |{" "}
          <Link to="/dashboard">Dashboard</Link>
        </nav>
      </header>

      {/* Routes */}
      <Routes>
        {/* Public / Client */}
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/providers" element={<Providers />} />
        <Route path="/providers/:providerId" element={<ProviderDetail />} />

        {/* Booking Flow */}
        <Route path="/book/:providerId" element={<Book />} />
        <Route path="/booking/:bookingId/confirmation" element={<BookingConfirmation />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />

        {/* Client Account */}
        <Route path="/account" element={<Account />} />
        <Route path="/account/bookings" element={<AccountBookings />} />

        {/* Provider Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/listings" element={<DashboardListings />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);
