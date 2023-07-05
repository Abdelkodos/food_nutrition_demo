import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import data from '../../api/data/meals.json'
import Cards from '../meals/Cards'

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px'
}

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
         {data.map((meal)=> (
            <div key={meal.id}>
              <Cards img={meal.img} name={meal.name} id={meal.id} calories={meal.calories} carbs={meal.carbs} fat={meal.fat} protein={meal.protein} />
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default Slideshow