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

function App() {
  const [feedbacks, setFeedbacks] = useState(DATA);
  useEffect(() => {
    console.log(feedbacks);
  }, [feedbacks]);
  const [editFeedback, setEditFeedback] = useState({
    item: {},
    edit: false,
  });
  const deleteFeedback = (id) => {
    console.log(id);
    setFeedbacks(feedbacks.filter((item) => item.id !== id));
  };
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    console.log(newFeedback);
    setFeedbacks([newFeedback, ...feedbacks]);
  };

  const editItem = (item) => {
    setEditFeedback({ item, edit: true });
    // console.log(editFeedback);
  };
  const updateFeedback = (id, upDatedItem) => {
    console.log(upDatedItem);
    setFeedbacks(
      feedbacks.map((item) => (item.id === id ? upDatedItem : item))
    );
    console.log(feedbacks);
    setEditFeedback({ item: {}, edit: false });
    console.log(editFeedback);
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedbackForm
                    addFeedback={addFeedback}
                    updateFeedback={updateFeedback}
                    editFeedback={editFeedback}
                  />
                  <FeedbackStats feedbacks={feedbacks} />
                  <FeedbackList
                    feedbacks={feedbacks}
                    deleteFeedback={deleteFeedback}
                    updateFeedback={updateFeedback}
                    editItem={editItem}
                  />
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
    </>
  );
}

export default App;
