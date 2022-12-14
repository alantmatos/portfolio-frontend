import Navbar from './Navbar';
import About from './About';
import Home from './Home';
import Contact from './Contact'
import NotFound from './NotFound';
import Footer from './Footer';
import { Route, Routes } from 'react-router-dom';
import Portfolio from './Portfolio';



function App() {
  return (
    <>
      <nav><Navbar></Navbar></nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <nav><Footer></Footer></nav>
    </>
  );
}

export default App;