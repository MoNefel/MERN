import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Menu";
//import focaccia from './assets/focaccia.jpg';
import funghi from "./assets/funghi.jpg";
//import margherita from './assets/margherita.jpg';
import prosciutto from "./assets/prosciutto.jpg";
import salamino from "./assets/salamino.jpg";
import spinaci from "./assets/spinaci.jpg";
import { useState } from "react";
import AddPizza from "./components/AddPizza";

const images = import.meta.glob("/src/assets/*.jpg", { eager: true });

function App() {
  const [pizzaData, setPizzaData] = useState([
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "focaccia.jpg", //from public folder
      soldOut: false
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "margherita.jpg", // with import.meta.glob
      soldOut: true
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: spinaci, //with simple import => import spinaci from './assets/spinaci.jpg';
      soldOut: false
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: funghi,
      soldOut: false
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: salamino,
      soldOut: true
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: prosciutto,
      soldOut: false
    }
  ]);

  //other way to add pizza we build a function here in app.jsx and pass it with props to AddPizza Component
  // const addPizza = (newPizza) => {
  //   setPizzaData([...pizzaData, newPizza]);
  // };

  return (
    <div className="container">
      <Header />
      <Menu pizzaData={pizzaData} />
      <AddPizza setPizzaData={setPizzaData} pizzaData={pizzaData} />
      <Footer />
    </div>
  );
}

export default App;
