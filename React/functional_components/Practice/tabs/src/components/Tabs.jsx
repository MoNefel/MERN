import React, { useState } from 'react';

function Tabs({ items }) {
  // State to keep track of the currently active tab index
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <div className="tab-headers">
        {items.map((item, index) => (
          <button
            key={index}
            className={index === activeIndex ? 'active' : ''}
            onClick={() => setActiveIndex(index)}
          >
            {/* Display the label of each tab */}
            {item.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {/* Display the content of the currently active tab */}
        {items[activeIndex].content}
      </div>
    </div>
  );
}

export default Tabs;