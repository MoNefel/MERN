import { Route, Routes, useParams } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Number from "./components/Number";
import String from "./components/String";
import ColorAndNumber from "./components/ColorAndNumber";

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        {/* <Route path="/:value" element={<DynamicRouter />} /> */}
        <Route path="/string/:string" element={<String />} />
        <Route path="/number/:number" element={<Number />} />
        <Route path="/:string/:color1/:color2" element={<ColorAndNumber />} />
      </Routes>
    </>
  );
}

// function DynamicRouter() {
//   const { value } = useParams(); // Get the dynamic segment value

//   // Check if the value is a number using isNaN
//   if (!isNaN(Number(value))) {
//     return <Number />; // Render Number if the value is a number
//   } else {
//     return <String />; // Render String otherwise
//   }
// }

export default App;
