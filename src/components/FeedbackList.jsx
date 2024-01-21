import React from "react";
import FeedbackItem from "./FeedbackItem";
import { useContext } from "react";
import feebackContext from "../context/FeedbackContext";

const FeedbackList = ({ deleteFeedback, updateFeedback, editItem }) => {
  // console.log(feedbacks);
  const { feedbacks } = useContext(feebackContext);

  return (
    <div>
      {feedbacks.map((item) => (
        <FeedbackItem
          item={item}
          key={item.id}
          deleteFeedback={deleteFeedback}
          updateFeedback={updateFeedback}
          editItem={editItem}
        />
      ))}
    </div>
  );
};

export default FeedbackList;
