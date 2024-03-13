import React, { useState } from 'react';
import './index.css';
 
const MenuSlider = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
 
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % items.length;
    setCurrentIndex(nextIndex);
  };
 
  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    setCurrentIndex(prevIndex);
  };
 
  return (
    <div className="menu-slider">
      <button onClick={handlePrev}>&lt;</button>
      <div className="slider-content">
        <img src={items[currentIndex].image} alt={items[currentIndex].name} />
        <h3>{items[currentIndex].name}</h3>
        <p>{items[currentIndex].description}</p>
      </div>
      <button onClick={handleNext}>&gt;</button>
    </div>
  );
};
 
export default MenuSlider;