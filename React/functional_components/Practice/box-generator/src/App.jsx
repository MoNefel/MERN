import { useState } from 'react';
import './App.css';
import BoxForm from './components/BoxForm';
import BoxDisplay from './components/BoxDisplay';

function App() {
  const [boxes, setBoxes] = useState([]);

  const addBox = (color, width, height) => {
    setBoxes([...boxes, { color, width, height }]);
  };

  const removeBox = (index) => {
    setBoxes(boxes.filter((_, i) => i !== index));
  };

  return (
    <>
      <BoxForm addBox={addBox} />
      <BoxDisplay boxes={boxes} removeBox={removeBox} />
    </>
  );
}

export default App;
