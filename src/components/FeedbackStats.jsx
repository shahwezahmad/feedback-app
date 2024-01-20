import React from "react";

const FeedbackStats = ({ feedbacks }) => {
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
