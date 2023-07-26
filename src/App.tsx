import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components';
import { Home } from './pages';
import './App.css';
import React, { useState } from 'react';
import { constants } from './constants';

function App() {
  const [isHeaderLoaded, setIsHeaderLoaded] = useState(false);

  const handleHeaderLoaded = () => {
    setIsHeaderLoaded(true);
  };

  // const mediaQueryStyles: React.CSSProperties = {
  //   '@media screen and (min-width: 768px)': {
  //     body: {
  //       margin: '0 5rem',
  //     },
  //   },
  // };
  document.documentElement.style.setProperty('--large-gutter-margin', constants['large-gutter-margins']);
  // document.documentElement.style.setProperty('--gutter-margin', );

  return (
    <>
      <Router>
        <div className="App">
          <Header onHeaderLoad={handleHeaderLoaded} />
          <div className="content">
            {isHeaderLoaded && (
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            )}
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
