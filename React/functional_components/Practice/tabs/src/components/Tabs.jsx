import React, { useState } from 'react';

function Tabs({ items }) {

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
            {item.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {items[activeIndex].content}
      </div>
    </div>
  );
}

export default Tabs;