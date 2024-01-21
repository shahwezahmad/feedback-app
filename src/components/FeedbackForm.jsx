import React, { useEffect, useState } from "react";
import Card from "../shared/Card";
import Button from "../shared/Button";
import SelectRating from "./SelectRating";
import { useContext } from "react";
import feebackContext from "../context/FeedbackContext";

const FeedbackForm = () => {
  const { AddFeedback, editFeedback, updateFeedback } =
    useContext(feebackContext);

  useEffect(() => {
    if (editFeedback.edit === true) {
      setSelected(editFeedback.item.rating);
      setText(editFeedback.item.text);
      console.log(editFeedback.item.text);
      console.log(editFeedback.item.rating);
      // console.log(text + "  " + selected);
      setIsDisable(false);
    }
  }, [editFeedback.edit]);
  const [selected, setSelected] = useState(10);
  const [isDisable, setIsDisable] = useState(true);
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
    if (text.length >= 10) {
      setIsDisable(false);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(editFeedback.edit);
    let item = {
      rating: selected,
      text,
    };
    if (editFeedback.edit) {
      console.log(editFeedback.edit);
      console.log(item);
      updateFeedback(editFeedback.item.id, item);
    } else if (editFeedback.edit === false) {
      AddFeedback(item);
    }
    setText("");
    setIsDisable(true);
    setSelected(10);
  };

  return (
    <Card>
      <form onSubmit={onSubmit}>
        <h2>How would you rate your service with us?</h2>
        <SelectRating selected={selected} setSelected={setSelected} />
        <div className="input-group">
          <input type="text" value={text} onChange={handleChange} />
          <Button type="submit" isDisable={isDisable}>
            send
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default FeedbackForm;
