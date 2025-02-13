import { useState } from 'react';


const BoxForm = ({ addBox }) => {

  // State to hold the color input value
  const [color, setColor] = useState('');
  // State to hold the width input value
  const [width, setWidth] = useState('');
  // State to hold the height input value
  const [height, setHeight] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the addBox function passed as a prop with the current input values
    addBox(color, width, height);
    // Reset the input fields
    setColor('');
    setWidth('');
    setHeight('');
  };

  return (
    <>
      <h1>Box Generator Master</h1>
      <form onSubmit={handleSubmit}>
        {/* Input field for color */}
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="Enter a color"
        />
        {/* Input field for width */}
        <input
          type="text"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
          placeholder="Enter width"
        />
        {/* Input field for height */}
        <input
          type="text"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Enter height"
        />
        {/* Submit button to add a new box */}
        <button type="submit">Add Box</button>
      </form>
    </>
  );
};

export default BoxForm;