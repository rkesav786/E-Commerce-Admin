import React, { useState } from "react";

const Repeater = ({ children }) => {
  const [repeaters, setRepeaters] = useState([{}]); // Start with one repeater

  const addRepeater = () => {
    setRepeaters([...repeaters, {}]); // Add new repeater block
  };

  const removeRepeater = (index) => {
    setRepeaters(repeaters.filter((_, i) => i !== index)); // Remove repeater block
  };

  return (
    <div>
      {repeaters.map((_, index) => (
        <div key={index} className="border p-3 mb-4">
          <h5>Item {index + 1}</h5> {/* Show item number */}
          {children}
          <button
            type="button"
            className="btn btn-danger mt-2"
            onClick={() => removeRepeater(index)}
          >
            Remove
          </button>
        </div>
      ))}
      <button
        type="button"
        className="btn btn-primary mt-3"
        onClick={addRepeater}
      >
        Add More
      </button>
    </div>
  );
};

export default Repeater;
