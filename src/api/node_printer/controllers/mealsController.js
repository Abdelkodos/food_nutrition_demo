


const app = express()

const getMeals = () => {
    app.get('/getMeals', (req, res) => {
    res.send(meals)
    })
}