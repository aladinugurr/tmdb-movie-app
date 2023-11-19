import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Pages from './Pages/Pages';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
	  	  <Navbar />
          <Pages />
        </BrowserRouter>
    </div>
  );
}

export default App;
