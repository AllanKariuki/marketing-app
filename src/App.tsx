import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import HairSalon3D from './pages/HairSalon'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HairSalon3D />} />
      </Routes>
    </Router>
  )
}

export default App
