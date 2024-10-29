import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import QuizList from './components/QuizList'
import QuizPage from './components/QuizPage'

function App() {
    return (
    <Router>
      <Routes>
        <Route path='/' element={<QuizList/>}/>
        <Route path="/quiz/:id" element={<QuizPage />} />
      </Routes>
    </Router>
  )
}

export default App
