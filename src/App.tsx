import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header, Footer} from './components';
import { Donate, Events, Home, EventDetails } from './pages';
import './App.css';
import React, { useState } from 'react';
import { constants } from './constants';
import { setProperties } from './utils';

function App() {
  const [isHeaderLoaded, setIsHeaderLoaded] = useState(false);

  const handleHeaderLoaded = () => {
    setIsHeaderLoaded(true);
  };

  setProperties(constants, document);

  return (
    <>
      <Router>
        <div className="App">
          <Header onHeaderLoad={handleHeaderLoaded} />
          <div className="content">
            {isHeaderLoaded && (
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/donate" element={<Donate />} />
                <Route path='/events' element={ <Events />}> </Route>
                <Route path='/events/:id' element={ <EventDetails />}/>
              </Routes>
            )}
          </div>
          <Footer/>
        </div>
      </Router>
    </>
  );
}

export default App;
