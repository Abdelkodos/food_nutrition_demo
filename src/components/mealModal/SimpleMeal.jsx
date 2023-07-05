import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';


const SliderModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [ meals, setMeals ] = useState()
  
  async function getMeals() {
    try {
        const response = await fetch('http://localhost:3001/getMeals')
                            .then((res) => res.json())
        setMeals(response)
    } catch (err){
        console.log(err)
    }
    
  }
  
  getMeals()

  const closeModal = () => setModalIsOpen(false);

  const handlePrev = () => {
    if (activeIndex === 0) {
      setActiveIndex(meals.length - 1);
    } else {
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex === meals.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };

  const handleSelect = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
        <button onClick={getMeals} >fetch all</button>
      <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Slider Modal"
      >
        <div className="slider-modal">
          <button onClick={handlePrev}>&lt;</button>
          <div className="slider-content">
            <h2>{meals[activeIndex].name}</h2>
            <p>{meals[activeIndex].calories}</p>
          </div>
          <button onClick={handleNext}>&gt;</button>
        </div>
        <div className="slider-nav">
          {meals.map((item, index) => (
            <button
              key={item.id}
              className={activeIndex === index ? 'active' : ''}
              onClick={() => handleSelect(index)}
            >
              {item.name}
            </button>
          ))}
        </div>
      </Modal>
    </>
  );
};

export default SliderModal;
