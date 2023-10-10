import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header, Footer, ScrollToTop} from './components';
import { Donate, Events, Home, EventDetails, Announcements, ContactUs, AboutUs } from './pages';
import './App.css';
import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={{
        globalStyles() {
          return {
            p: {
              fontFamily: 'PT Sans, sans-serif',
              fontWeight: 400,
            }
          }
        },
        breakpoints: {
          xs: '100px',
          sm: '600px',
          md: '900px'
        },
        fontFamily: 'Nunito, sans-serif',
      }} withCSSVariables withGlobalStyles={true} withNormalizeCSS= {false}>
        <Router>
          <ScrollToTop/>
          <div className="App">
            <div>
              <Header />
              <div className="content">

                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/donate" element={<Donate />} />
                    <Route path='/events' element={ <Events />}> </Route>
                    <Route path='/contact-us' element={ <ContactUs />}> </Route>
                    <Route path='/events/:id' element={ <EventDetails />}/>
                    <Route path='/announcements' element={ <Announcements/>}></Route>
                    <Route path='/about-us' element={ <AboutUs/>}></Route>
                  </Routes>

              </div>
            </div>
            <Footer/>
          </div>
        </Router>
      </MantineProvider>
    </QueryClientProvider>
    </>
  );
}

export default App;
