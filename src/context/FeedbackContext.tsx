import React, { createContext, useState, useEffect } from "react";
import { Item, FeedbackContextType } from "../models/models";

const FeedbackContext = createContext<FeedbackContextType | null>(null);
interface FeedbackContextInterface {
  children: React.ReactNode;
}
export const FeedbackProvider: React.FC<FeedbackContextInterface> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState<Item[]>([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });
  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    const response = await fetch(`/feedback?_sort=id&_order=desc`);
    const data = await response.json();
    setFeedback(data);
    setIsLoading(false);
  };
  const handleDelete = async (id: number | string) => {
    if (window.confirm("Are you sure you want to delete this")) {
      await fetch(`/feedback/${id}`, { method: "DELETE" });
      setFeedback(feedback.filter((item: any) => item.id !== id));
    }
  };
  const addFeedback = async (newFeedback: Item) => {
    const response = await fetch("/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });
    const data = await response.json();
    // setFeedback([newFeedback, ...feedback]); will work also
    setFeedback((prevFeedback) => [data, ...prevFeedback]);
  };
  const editFeedback = (item: Item) => {
    setFeedbackEdit({ item, edit: true });
  };
  const updateFeedback = async (id: string | number, updItem: Item) => {
    const response = await fetch(`/feedback/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updItem),
    });
    const data = await response.json();

    setFeedback(feedback.map((item: Item) => (item.id === id ? data : item)));
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        handleDelete,
        isLoading,
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
