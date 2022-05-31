import React, { useState, useContext, useEffect } from "react";
import FeedbackContext from "../context/FeedbackContext";

import Card from "./Card";
import { v4 as uuidv4 } from "uuid";
import Button from "./Button";
import RatingSelect from "./RatingSelect";
import { FeedbackContextType, Item } from "../models/models";

const FeedbackForm: React.FC = () => {
  const { addFeedback, feedbackEdit, updateFeedback } = useContext(
    FeedbackContext
  ) as FeedbackContextType;
  useEffect(() => {
    if (feedbackEdit.edit) {
      setBtnDisabled(false);
      setText((feedbackEdit.item as Item).text);
      setRating((feedbackEdit.item as Item).rating);
    }
  }, [feedbackEdit]);
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [message, setMessage] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const handleTextChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (text === "") {
      setBtnDisabled(true);
      setMessage("");
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("Text must be a least 10 characters");
      setBtnDisabled(true);
    } else {
      setMessage("");
      setBtnDisabled(false);
    }
    let enteredValue = (e.target as HTMLInputElement).value;
    setText(enteredValue);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        id: uuidv4(),
        text,
        rating,
      };
      if (feedbackEdit.edit) {
        updateFeedback((feedbackEdit.item as Item).id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }
      setText("");
    }
  };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            value={text}
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
