import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import DisplayQuote from './components/displayQuote';
import Navigation from './components/Navigation';
import Home from './Home';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="quote" element={<DisplayQuote />} />
        </Route>
        <Route path="*" element={<div>Error! Page not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
