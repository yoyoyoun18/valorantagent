import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Searchrank from './components/Searchrank';
import jsonfile from './champion.json';

function App() {
  localStorage.setItem('data', jsonfile);

  return (
    <div className="App">
      <Header />
      <div className='main-bg'>
        <Search />
        <Searchrank />
      </div>
    </div>
  );
}

export default App;
