import { useState } from 'react';
import './App.css';
import BoxForm from './components/BoxForm';
import BoxDisplay from './components/BoxDisplay';

function App() {
  // State to hold the list of boxes
  const [boxes, setBoxes] = useState([]);

  // Function to add a new box to the list
  const addBox = (color, width, height) => {
    setBoxes([...boxes, { color, width, height }]);
  };

  // Function to remove a box from the list by index
  const removeBox = (index) => {
    setBoxes(boxes.filter((_, i) => i !== index));
  };

  return (
    <>
      {/* Component to handle the form for adding new boxes */}
      <BoxForm addBox={addBox} />
      {/* Component to display the list of boxes and handle their removal */}
      <BoxDisplay boxes={boxes} removeBox={removeBox} />
    </>
  );
}

export default App;
