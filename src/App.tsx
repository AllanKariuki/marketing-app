import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import HairSalon3D from './pages/HairSalon'
import BeautySalon from './pages/BeautySalon'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HairSalon3D />} />
        <Route path='/beauty-salon' element={<BeautySalon />} />
      </Routes>
    </Router>
  )
}

export default App
