//import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup'
import Signin from './components/Signin'
import Navbar from './components/Navbar'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Auction from './components/Auction';
import Bidders from './components/Bidders';
import Comment from './pages/Comment';
import Home from './pages/Home';
import NavHome from './pages/NavHome';
import Points from './pages/Points';
import Footer from './pages/Footer';
import BidData from './components/BidData';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
      <Route path="/" element={[<NavHome />, <Home />, <Points />, <Comment />, <Footer />]} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/home" element={<Navbar />} />
      <Route path="/auction" element={[<Navbar />,<Auction />]} />
      <Route path="/bidders" element={[<Navbar />,<Bidders />]} />
      <Route path="/bidderdata" element={<BidData />} />
    
                                    
      </Routes>
      </Router> 

    </div>
  );
}

export default App;
