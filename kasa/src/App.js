import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import APropos from './pages/APropos'
import Error from './components/Error'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/APropos" element={<APropos />} />
          <Route path="Layout" element={<Layout />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
