import { Routes, Route } from "react-router-dom"

// pages
import LandingPage from "../pages/Customer/LandingPage"
import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/Customer/RegisterPage"
import HomePage from "../pages/Customer/HomePage"
import MeetingPage from "../pages/Customer/MeetingPage"
import EventPage from "../pages/Customer/EventPage"
import CospacePage from "../pages/Customer/CospacePage"
import PaymentPage from "../pages/Customer/PaymentPage"
import SuccessPage from "../pages/Customer/SuccessPage"
import OrderPage from "../pages/Customer/OrderPage"

// dashboard
import DashboardPage from "../pages/Dashboard/DashboardPage"
import UserPage from "../pages/Dashboard/users/UserPage"

function RouteIndex() {
    return (
    <Routes>
        {/* ======routes customer===== */}
      <Route path="/" Component={LandingPage} />
      <Route path="/login" Component={LoginPage} />
      <Route path="/register" Component={RegisterPage} />
      <Route path="/home" Component={HomePage} />
      <Route path="/ruang-meeting" Component={MeetingPage} />
      <Route path="/ruang-acara" Component={EventPage} />
      <Route path="/cospace" Component={CospacePage} />
      <Route path="/payment" Component={PaymentPage} />
      <Route path="/success" Component={SuccessPage} />
      <Route path="/order" Component={OrderPage} />

      {/*===== routes dashboard===== */}
      <Route path="/admin/dashboard" element={<DashboardPage />} />
      <Route path="/admin/user" element={<UserPage />} />

    </Routes>
  )
}

export default RouteIndex
