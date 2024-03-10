import './App.css';
import Nav from './Nav';
import Home from './components/Home';
import Footer from './Footer';
import NotFound from './NotFound';
import SignedInHome from './components/signedInHome';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';

function App() {

  return (
    
    <Router>
        <Routes>
          <Route path='/' element={<> <Nav/> <Home/> <Footer/> </>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
          <Route path="/SignIn" element={<Register/>}></Route>
          <Route path='/signedIn/Home' element={<SignedInHome/>}></Route>
        </Routes>
      </Router>
  );
}

export default App;
