import { useDispatch } from "react-redux";
import axiosInstance from "../../api";
import "./style.css";

function ListItem({ item, deleteAction }) {
  const dispatch = useDispatch();
  const handeleDelete = async (event) => {
    event.preventDefault();
    let parent = event.target.parentNode.parentNode;
    parent.classList.add("none");
    const type = item.type;
    const id = item._id;
    const res = await axiosInstance.delete(`/${type}/${id}`);
    let amount = item.amount;
    amount = Number(amount);
    if (type === "income") {
      amount = -amount;
    }
    dispatch({ type: "AddBalance", payload: amount });
  };
  return (
    <div className={`list__item ${item.type}`}>
      <div className="list__left">
        <div className="list__category">{item.category[0]}</div>
        <div className="list__date">06-Jul-2021</div>
      </div>
      <div className="list__right">
        <div className="list__amount">{item.amount}$</div>
        <button
          className="list__delete"
          name={item.type}
          id={item._id}
          onClick={handeleDelete}
        >
          Del
        </button>
      </div>
    </div>
  );
}

export default ListItem;
