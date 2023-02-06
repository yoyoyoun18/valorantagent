import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Searchrank from './components/Searchrank';
import jsonfile from './champion.json';
import Champion from './components/Champion';
import Footer from './components/Footer';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Jett from './pages/Jett';
import Breach from './pages/Breach';
import Brimstone from './pages/Brimstone';
import Omen from './pages/Omen';
import Phoenix from './pages/Phoenix';
import Raze from './pages/Raze';
import Sage from './pages/Sage';


function App() {

  let navigate = useNavigate();

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={ 
          <div className='main-bg'>
            <Champion />
          </div>
         } />
        <Route path="/champion1" element={          
            <Jett />          
          } />
        <Route path="/champion3" element={          
            <Breach />          
          } />
        <Route path="/champion5" element={          
            <Brimstone />          
          } />
        <Route path="/champion4" element={          
            <Omen />         
          } />
        <Route path="/champion6" element={          
            <Phoenix />      
          } />
        <Route path="/champion2" element={          
            <Raze />          
          } />
        <Route path="/champion7" element={          
            <Sage />          
          } />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
