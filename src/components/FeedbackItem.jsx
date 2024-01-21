import Card from "../shared/Card";
import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import feebackContext from "../context/FeedbackContext";

const FeedbackItem = ({ item }) => {
  const { deleteFeedback, selectedFeedback } = useContext(feebackContext);
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => deleteFeedback(item.id)}>
        <FaTimes />
      </button>
      <button className="edit" onClick={() => selectedFeedback(item)}>
        <FaEdit />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
};

export default FeedbackItem;
