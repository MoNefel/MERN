import { useState } from "react";

const AddPizza = ({ setPizzaData, pizzaData }) => {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [price, setPrice] = useState("");
  const [photoName, setPhotoName] = useState("");
  const [soldOut, setSoldOut] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPizza = {
      name,
      ingredients,
      price,
      photoName,
      soldOut: false
    };
    setPizzaData([...pizzaData, newPizza]);
    setName("");
    setIngredients("");
    setPrice("");
    setPhotoName("");
    setSoldOut(false);
  };

  //if we pass the addPizza function instead of the getter and setter:
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     const newPizza = {
  //       name,
  //       ingredients,
  //       price,
  //       photoName,
  //       soldOut
  //     };
  //     addPizza(newPizza);
  //     setName("");
  //     setIngredients("");
  //     setPrice("");
  //     setPhotoName("");
  //     setSoldOut(false);
  //   };

  return (
    <div>
      <h1>Add a new Pizza</h1>
      <form className="add-pizza-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="pizza Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Photo Name"
          value={photoName}
          onChange={(e) => setPhotoName(e.target.value)}
          required
        />
        <label>
          Sold Out:
          <input
            type="checkbox"
            checked={soldOut}
            onChange={(e) => setSoldOut(e.target.checked)}
          />
        </label>
        <button type="submit" className="btn">
          Add Pizza
        </button>
      </form>
    </div>
  );
};

export default AddPizza;
