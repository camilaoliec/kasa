import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import APropos from './pages/APropos'
import FicheLogement from './pages/FicheLogements/FicheLogement'
import Error from './components/Error'
import Footer from './components/Footer/Footer'
import Header from './components/Header'

function App() {
  return (
    <Router>
      <div className="container-App">
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/property/:id" element={<FicheLogement />} />
          <Route path="/APropos" element={<APropos />} />
          <Route path="*" element={<Error />} />
        </Routes>
      <Footer />
      </div>
    </Router>
  )
}

export default App
