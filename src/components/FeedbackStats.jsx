import React from "react";
import { useContext } from "react";
import feebackContext from "../context/FeedbackContext";

const FeedbackStats = () => {
  const { feedbacks } = useContext(feebackContext);
  let average =
    feedbacks.reduce((acc, { rating }) => {
      return acc + rating;
    }, 0) / feedbacks.length;
  return (
    <div className="feedback-stats">
      <h4>{feedbacks.length} Reviews</h4>
      <h4>
        {" "}
        Average {isNaN(average)
          ? 0
          : average.toFixed(1).replace(/[.,]0$/, "")}{" "}
      </h4>
    </div>
  );
};

export default FeedbackStats;
