import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import APropos from './pages/APropos'
import FicheLogement from './pages/FicheLogements/FicheLogement'
import Error from './components/Error'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/property/:id" element={<FicheLogement />} />
          <Route path="/APropos" element={<APropos />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
