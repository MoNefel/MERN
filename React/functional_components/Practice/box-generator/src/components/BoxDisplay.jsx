
const BoxDisplay = ({ boxes, removeBox }) => {

  return (
    <div className="box-container">
      {boxes.map((box, index) => (
        <div key={index} className="box" style={{ backgroundColor: box.color, width: `${box.width}px`, height: `${box.height}px` }}>
          <button onClick={() => removeBox(index)}>X</button>
        </div>
      ))}
    </div>
  );
};

export default BoxDisplay;