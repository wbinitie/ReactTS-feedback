import React, { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
// import { Item } from "../models/models";
import { FeedbackItem } from "./FeedbackItem";
import { FeedbackContextType } from "../models/models";
// import { motion, AnimatePresence } from "framer-motion";
import Spinner from "./Spinner";

const FeedbackList: React.FC = () => {
  const { feedback, isLoading } = useContext(
    FeedbackContext
  ) as FeedbackContextType;
  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No Feedback Yet</p>;
  }
  return isLoading ? (
    <Spinner />
  ) : (
    <div className="feedback-list">
      {/* <AnimatePresence> */}
      {feedback.map((item) => (
        // <motion.div
        // key={item.id}
        // exit={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // initial={{ opacity: 0 }}
        // >
        <FeedbackItem key={item.id} item={item} />
        // </motion.div>
      ))}
      {/* </AnimatePresence> */}
    </div>
  );
};

export default FeedbackList;
