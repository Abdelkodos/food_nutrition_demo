import { Route, Routes } from "react-router-dom"
import Login from "./components/login/Login"
import { Meals } from "./components/meals/Meals"

function App() {

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Meals />} />
    </Routes>
  )
}

export default App
