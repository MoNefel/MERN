import { useState } from 'react';

const BoxForm = ({ addBox }) => {
  const [color, setColor] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox(color, width, height);
    setColor('');
    setWidth('');
    setHeight('');
  };

  return (
    <>
        <h1>Box Generator Master</h1>
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="Enter a color"
        />
        <input
            type="text"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            placeholder="Enter width"
        />
        <input
            type="text"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Enter height"
        />
        <button type="submit">Add Box</button>
        </form>
    </>
  );
};

export default BoxForm;