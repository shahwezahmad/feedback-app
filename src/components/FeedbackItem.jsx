import Card from "../shared/Card";
import { FaTimes, FaEdit } from "react-icons/fa";

const FeedbackItem = ({ item, deleteFeedback, updateFeedback, editItem }) => {
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => deleteFeedback(item.id)}>
        <FaTimes />
      </button>
      <button className="edit" onClick={() => editItem(item)}>
        <FaEdit />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
};

export default FeedbackItem;
