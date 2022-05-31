import React, { createContext, useState } from "react";
import { Item, FeedbackContextType } from "../models/models";
import FeedbackData from "../data/data";

const FeedbackContext = createContext<FeedbackContextType | null>(null);
interface FeedbackContextInterface {
  children: React.ReactNode;
}
export const FeedbackProvider: React.FC<FeedbackContextInterface> = ({
  children,
}) => {
  const [feedback, setFeedback] = useState<Item[]>(FeedbackData);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });
  const handleDelete = (id: number | string) => {
    if (window.confirm("Are you sure you want to delete this")) {
      setFeedback(feedback.filter((item: any) => item.id !== id));
    }
  };
  const addFeedback = (newFeedback: Item) => {
    // setFeedback([newFeedback, ...feedback]); will work also
    setFeedback((prevFeedback) => [newFeedback, ...prevFeedback]);
  };
  const editFeedback = (item: Item) => {
    setFeedbackEdit({ item, edit: true });
  };
  const updateFeedback = (id: string | number, updItem: Item) => {
    setFeedback(
      feedback.map((item: Item) =>
        item.id === id ? { ...item, ...updItem } : item
      )
    );
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        handleDelete,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
export default FeedbackContext;
