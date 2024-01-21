import Navbar from "./Navbar";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import { FaArrowRight } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import { useEffect, useState } from "react";
import { DATA } from "./constant";
import { v4 as uuidv4 } from "uuid";
import { FeedbackProvder } from "./context/FeedbackContext";

function App() {
  return (
    <FeedbackProvder>
      <Navbar />
      <div className="container">
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
          <Link to="/about">
            <FaArrowRight fill="white" />
          </Link>
        </Router>
      </div>
    </FeedbackProvder>
  );
}

export default App;
