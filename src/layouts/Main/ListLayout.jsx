import ListItem from "../../components/ListItem/ListItem";
import "../../style/Home.css";
function ListLayout({ list, deleteAction }) {
  console.log(list);
  return (
    <div className="list__actions">
      <div className="list__title">LIST OF MOVEMENTS</div>
      <div className="list__map">
        {list.map((data, index) => (
          <ListItem
            key={index}
            item={data}
            deleteAction={deleteAction}
          ></ListItem>
        ))}
      </div>
    </div>
  );
}

export default ListLayout;
