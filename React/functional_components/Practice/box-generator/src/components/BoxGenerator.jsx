import { useState } from "react";



const BoxGenerator = () => {

    const [color, setColor] = useState('');
    const [boxes, setBoxes] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setBoxes([...boxes, color]);
        setColor('');
      };
      
    return (
        <div>
          <form onSubmit={handleSubmit} className="d-flex gap-2 align-items-center " >
            <label>Color</label>
            <input
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              placeholder="Enter a color"
            />
            <button type="submit">Add Box</button>
          </form>
      <div className="box-container">
        {boxes.map((boxColor, index) => (
          <div key={index} className="box" style={{ backgroundColor: boxColor }}></div>
        ))}
      </div>
        </div>
    )
}


export default BoxGenerator;