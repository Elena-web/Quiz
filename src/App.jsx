import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import QuizList from './components/quizList'
import QuizPage from './components/quizPage'

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
