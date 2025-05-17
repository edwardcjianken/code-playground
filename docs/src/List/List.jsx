import Styles from "./List.module.css";
import PropTypes from "prop-types";

function List({ items = [], category = "Products" }) {
  const itemList = items;
  console.log("itemList: ", itemList); //For debugging

  const listItem = itemList.map((item) => (
    <tr key={item.id}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.calories}</td>
      <td>{item.price.toFixed(2)}</td>
    </tr>
  ));

  console.log("listItem: ", listItem); //For debugging

  return (
    <>
      <h2>{category} Available</h2>
      <table className={Styles.itemTable}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Fruit</th>
            <th>Calories</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{listItem}</tbody>
      </table>
    </>
  );
}

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number,
      price: PropTypes.number,
    })
  ),
  category: PropTypes.string,
};

export default List;
