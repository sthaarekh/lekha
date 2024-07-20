import './App.css';
import Analytics from './components/Analytics';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LekhaState from './context//LekhaState'
import LBState from './context/LBState';

function App() {
  return (
    <div className="App">
      <LekhaState>
        <LBState>
          <Router>
            <Navbar/>
            <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/analytics" element={<Analytics/>}></Route>
            </Routes>
          </Router>
        </LBState>
      </LekhaState>

    </div>
  );
}

export default App;
