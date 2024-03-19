import './App.css';
import { Navbar, Nav, Container } from 'react-bootstrap'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; import AllNews from './components/AllNews'
import TopNews from './components/TopNews'
import TrendingNews from './components/TrendingNews'
import EnterntainmentNews from './components/Enterntainment'
import ScienceNews from './components/ScienceNews';
import SportNews from './components/SportNews';


function App() {
  return (
    <BrowserRouter>
      <>
        <div className="App">
          <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
            <Container>
              <Navbar.Brand href="#home">




                <img src="https://t3.ftcdn.net/jpg/00/88/43/58/240_F_88435847_HhglbcoGP5qOX3Dfud
P3hN5z95eTrHqz.jpg"
                  width="30" height="30"
                  className="d-inline-block align-top img-mobile" alt="React Bootstrap logo"
                />
              </Navbar.Brand>
              <Navbar.Brand href="#home" className='font-size-mobile'>Meet News</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to='/'>AllNews</Nav.Link>
                  <Nav.Link as={Link} to='/TopNews'>TopNews</Nav.Link>
                  <Nav.Link as={Link} to='/TrendingNews'>TrendingNews</Nav.Link>
                  <Nav.Link as={Link} to='/EnterntainmentNews'>EnterntainmentNews</Nav.Link>
                  <Nav.Link as={Link} to='/ScienceNews'>ScienceNews</Nav.Link>
                  <Nav.Link as={Link} to='/SportNews'>SportNews</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <div>
          <Routes>
            <Route path='/TopNews' element={<TopNews />} />
            <Route path='/TrendingNews' element={<TrendingNews />} />
            <Route path='/EnterntainmentNews' element={<EnterntainmentNews />} />


            <Route path='/ScienceNews' element={<ScienceNews />} />
            <Route path='/SportNews' element={<SportNews />} />
            <Route path='/' element={<AllNews />} />
          </Routes>
        </div>
      </>
    </BrowserRouter>
  );
}
export default App;
