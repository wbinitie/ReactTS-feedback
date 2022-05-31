import React, { useContext } from "react";
import Card from "./Card";
import FeedbackContext from "../context/FeedbackContext";

import { Item, FeedbackContextType } from "../models/models";

import { FaTimes, FaEdit } from "react-icons/fa";
interface FeedbackItemProps {
  item: Item;
}

export const FeedbackItem: React.FC<FeedbackItemProps> = ({ item }) => {
  const { handleDelete, editFeedback } = useContext(
    FeedbackContext
  ) as FeedbackContextType;

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <button onClick={() => editFeedback(item)} className="edit">
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
};
