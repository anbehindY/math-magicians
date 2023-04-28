import Calculator from './components/Calculator';
import DisplayQuote from './components/displayQuote';
import './index.css';

function App() {
  return (
    <div className="App">
      <h1 className="header">Math Magicians</h1>
      <DisplayQuote />
      <Calculator />
    </div>
  );
}

export default App;
