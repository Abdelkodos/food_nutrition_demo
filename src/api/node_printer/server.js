//import ptp from "pdf-to-printer";
//import fs from "fs";
//import path from "path";
const meals = require('./meals.json')
const express = require('express')
const cors = require('cors')
const fs = require('fs')
const fsProm = require('fs').promises
const PDFDocument = require('pdfkit')
const open = require("open")
const ThermalPrinter = require("node-thermal-printer").printer
const PrinterTypes = require("node-thermal-printer").types
const doc = new PDFDocument()
const directory = './labels/'
const label_output = 'output.pdf'


let printer = new ThermalPrinter({
    type: PrinterTypes.EPSON,
    interface: 'tcp://xxx.xxx.xxx.xxx'
  });

function printMeal () {
        printer.alignCenter()
        printer.println(`Food nutrition
                            ${current_meal.name}
                            ${current_meal.carbs}g carbs
                            ${current_meal.calories} calories
                            ${current_meal.protein}g protein
                            ${current_meal.fat}g fat
                        Happy meal ;)

                        `)
        printer.cut()

        try {
            let execute = printer.execute()
            console.error("Print done!")
        } catch (error) {
                console.log("Print failed:", error)
        }
}



const app = express()
const port = 3000

app.use(express.static('labels'))

app.use(cors({
    origin: "*",
}))

app.get('/getMeals', (req, res) => {
    res.send(meals)
})

app.get('/getMeals/:id', (req, res) => {
    const id = req.params.id
    let current_meal
   // const currentMeal = meals

   const meal = meals.map(meal => {
            if (meal.id == id) {
                res.json(meal)
                current_meal = meal
            }
   })
   console.log(current_meal)
})

app.get('/oneMeal/id=:id', (req, res) => {
    const id = req.params.id
    let current_meal
    const meal = meals.map(meal => {
            if (meal.id == id) {
                res.send(meal)
                current_meal = meal
                open(`./labels/meal_${meal.id}.pdf`)                
                
                    
            }
    })  
                

} )

app.listen(port, () => {
    console.log(`PDF Printing Service listening on port ${port}`)
});