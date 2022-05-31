import React, { useContext } from "react";
import { FeedbackContextType } from "../models/models";
import FeedbackContext from "../context/FeedbackContext";

// interface FeedbackStatsProps {
//   feedback: Item[];
// }

const FeedbackStats: React.FC = () => {
  const { feedback } = useContext(FeedbackContext) as FeedbackContextType;

  let average =
    feedback.reduce((acc: any, cur: any) => {
      return acc + cur.rating;
    }, 0) / feedback.length;

  average = Number(average.toFixed(1).replace(/[.,]0$/, ""));
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
};

export default FeedbackStats;
