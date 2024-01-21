import { createContext, useEffect, useState } from "react";
import { DATA } from "../constant";
import { v4 as uuidv4 } from "uuid";

const feebackContext = createContext();
// const url = "http://localhost:5000/data";

export const FeedbackProvder = ({ children }) => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [editFeedback, setEditFeedback] = useState({
    item: {},
    edit: false,
  });
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    let response = await fetch(
      `http://localhost:5000/feedback?_sort=id&_order=desc`
    );
    let data = await response.json();
    console.log(data);
    setFeedbacks(data);
  };
  const AddFeedback = (newFeeback) => {
    newFeeback.id = uuidv4();
    setFeedbacks([newFeeback, ...feedbacks]);
  };
  const deleteFeedback = (id) => {
    setFeedbacks(feedbacks.filter((feedback) => feedback.id !== id));
  };
  const updateFeedback = (id, updateItem) => {
    setFeedbacks(
      feedbacks.map((feedback) => (feedback.id === id ? updateItem : feedback))
    );
    setEditFeedback({
      item: {},
      edit: false,
    });
  };
  const selectedFeedback = (item) => {
    setEditFeedback({
      item,
      edit: true,
    });
  };

  return (
    <feebackContext.Provider
      value={{
        feedbacks,
        AddFeedback,
        deleteFeedback,
        editFeedback,
        updateFeedback,
        selectedFeedback,
      }}
    >
      {children}
    </feebackContext.Provider>
  );
};

export default feebackContext;
