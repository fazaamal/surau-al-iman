import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components';
import { Home } from './pages';
import './App.css'

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home/>} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App