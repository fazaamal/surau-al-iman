import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header, Footer} from './components';
import { Donate, Events, Home, EventDetails, Announcements, ContactUs } from './pages';
import './App.css';
import { useState } from 'react';

function App() {
  const [isHeaderLoaded, setIsHeaderLoaded] = useState(false);

  const handleHeaderLoaded = () => {
    setIsHeaderLoaded(true);
  };

  // setProperties(constants, document);

  return (
    <>
      <Router>
        <div className="App">
          <div>
            <Header onHeaderLoad={handleHeaderLoaded} />
            <div className="content">
              {isHeaderLoaded && (
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/donate" element={<Donate />} />
                  <Route path='/events' element={ <Events />}> </Route>
                  <Route path='/contact-us' element={ <ContactUs />}> </Route>
                  <Route path='/events/:id' element={ <EventDetails />}/>
                  <Route path='/announcements' element={ <Announcements/>}></Route>
                </Routes>
              )}

            </div>
          </div>
          <Footer/>
        </div>
      </Router>
    </>
  );
}

export default App;
