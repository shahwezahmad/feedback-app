import React from "react";
import FeedbackItem from "./FeedbackItem";

const FeedbackList = ({
  feedbacks,
  deleteFeedback,
  updateFeedback,
  editItem,
}) => {
  // console.log(feedbacks);
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
