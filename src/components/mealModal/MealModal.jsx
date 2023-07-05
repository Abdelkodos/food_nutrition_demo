import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import style from './style_meal/imgCenter.module.css'
import data from '../../api/data/meals.json'
import { ArrowRightSquare, ArrowLeftSquare } from "react-bootstrap-icons"

export default function MealModal() {

    const [ currItem, setCurrItem ] = useState(data[0])

    const [ printedItems, setPrintedItems ] = useState([])
    
    
    // const [ meals, setMeals ] = useState()
    // const getMeals = async () => {
    //     const response = await fetch('http://localhost:3000/getMeals').then((res) => res.json())
    //     setMeals(response)
    //     setCurrItem(meals[1])
    // }
    
    
    async function getURL(id) {
        const meal = await fetch('http://localhost:3000/oneMeal/' + new URLSearchParams({ id }) ).then((res) => res.json())
        return meal
    }

    // getMeals()

    return (
        <div>
                <div className='d-flex justify-content-center p-10'>
                    {/* <Cards img={currItem.img} name={currItem.name} id={currItem.id} calories={currItem.calories} carbs={currItem.carbs} fat={currItem.fat} protein={currItem.protein} /> */}
                    {/* <OtherCards imgURL={currItem.img} name={currItem.name} id={currItem.id} calories={currItem.calories} carbs={currItem.carbs} fat={currItem.fat} protein={currItem.protein} />
                    {/* Other Cards section */}
                    <div>
                        <div className={style._centerOfImg}>
                            <img className="h-200" src={currItem.img} />
                        </div>
                        <div className='d-flex justify-content-between'>
                            <div className='d-flex flex-row'><h2>{ currItem.name }</h2></div>
                            {/*
                                !printedItems.includes(currItem) ? <div className='d-flex flex-row-reverse' ><Button variant='warning' onClick={() => {
                                    getURL(currItem.id)
                                    setPrintedItems((prevItems) => [ ...prevItems, currItem ])
                                    
                                }} >Print</Button></div> : ''
                            */}

                            <div className='d-flex flex-row-reverse' ><Button variant='warning' onClick={() => {
                                    getURL(currItem.id)
                                    setPrintedItems((prevItems) => [ ...prevItems, currItem ])
                                    
                                }} >Print</Button></div>
                        </div>
                        <div>
                            <h4>
                                Calories: { currItem.calories}
                            </h4>
                        </div>
                        <div>
                            <h4>
                                Carbs: { currItem.carbs }
                            </h4>
                        </div>
                        <div>
                            <h4>
                                Protein: { currItem.protein }
                            </h4>
                        </div>
                        <div>
                            <h4>
                                Fat: { currItem.fat }
                            </h4>
                        </div>

                    </div>
                    {/* End of other cards section */}
                </div>
            <ButtonToolbar aria-label="Toolbar with button groups" className='justify-content-center'>
                <ButtonGroup className="me-2 d-flex justify-content-between" aria-label="First group">
                    <Button className='d-flex flex-row' onClick={() => {
                            if ( currItem.id > data[0].id )
                                setCurrItem(data[currItem.id - 2])
                    }                    
                    }>
                        <ArrowLeftSquare />
                    </Button>
                    <Button className='d-flex flex-row-reverse' variant='success' onClick={
                        () => {
                            if ( currItem.id < data.length ){
                                if ( !printedItems.includes(data[currItem.id])) {
                                    setPrintedItems((prevItems) => [ ...prevItems, data[currItem.id] ])
                                    console.table(printedItems)
                                    getURL(data[currItem.id].id)
                                }
                                setCurrItem(data[currItem.id])
                            }
                                
                        }
                        // getURL(currItem.id)
                    }>
                        <ArrowRightSquare />
                    </Button>
                </ButtonGroup>
            </ButtonToolbar>
        </div>
    )
}
