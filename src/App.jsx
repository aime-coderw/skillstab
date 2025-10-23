import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Signup from "./Signup";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import CoursesCategory from "./CoursesCategory";
import CourseDetail from "./CourseDetail";
import Store from "./ToolkitStore";
import Checkout from "./Checkout";
import AdminDashboard from "./AdminDashboard";
import Contact from "./Contact";
import Experts from "./Experts";
import Order from "./order";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/experts" element={<Experts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/store" element={<Store />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses/:category" element={<CoursesCategory />} />
        {/* Route for detailed course info */}
        <Route path="/courses/:category/:courseSlug" element={<CourseDetail />} />
      </Routes>
    </Router>
  );
}
