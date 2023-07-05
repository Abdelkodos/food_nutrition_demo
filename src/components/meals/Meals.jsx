import React, { useState, useEffect } from 'react'
// import { Cards } from './Cards.jsx'
// import Button from 'react-bootstrap/Button'
// import Form from 'react-bootstrap/Form'
// import InputGroup from 'react-bootstrap/InputGroup'
// import { Search } from 'react-bootstrap-icons'
import MealModal from '../mealModal/MealModal.jsx'
// import MealModal from '../mealModal/MealModal.jsx';



export function Meals() {

  const [ meals, setMeals ] = useState()
  

  return (
    <div>
      

      <div className="d-flex justify-content-center">
        {/*
          meals &&
          meals.map((meal) => { return (
            <div key={meal.id}><Cards img={meal.img} name={meal.name} id={meal.id} calories={meal.calories} carbs={meal.carbs} fat={meal.fat} protein={meal.protein} /></div>
          ) })
          */}
      </div>
      {/* <div className='d-flex justify-content-center'><MealModal /></div> */}
          <MealModal />
      
    </div>
    
  )
}

