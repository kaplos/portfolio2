import React from 'react';

const Switch = ({ isOn, handleToggle }) => {
  return (
    <div className="flex  items-center">
      <span className="mr-2">{'annimations:'}</span>
      <div
        className={`w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer ${isOn ? 'bg-green-400' : 'bg-gray-300'}`}
        onClick={handleToggle}
      >
        <div
          className={`bg-white w-4 h-4 rounded-full shadow-md transform ${isOn ? 'translate-x-6' : ''}`}
        ></div>
      </div>
    </div>
  );
};

export default Switch;