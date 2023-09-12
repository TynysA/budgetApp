import ListItem from "../../components/ListItem/ListItem";
import "../../style/Home.css";
function ListLayout({ list, handeleUploadItem }) {
  return (
    <div className="list__movements">
      <div className="list__title">LIST OF MOVEMENTS</div>
      <div className="list__map">
        {list.map((data, index) => (
          <ListItem
            key={index}
            item={data}
            handeleUploadItem={handeleUploadItem}
          ></ListItem>
        ))}
      </div>
    </div>
  );
}

export default ListLayout;
