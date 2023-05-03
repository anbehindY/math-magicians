import { useState } from 'react';
import calculate from '../logic/calculate';
import '../styles/calculator.css';

function Calculator() {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const clickHandler = (e) => {
    const buttonValue = e.target.textContent;
    setState(calculate(state, buttonValue));
  };

  return (
    <div className="wrapper">
      <div className="greeting">
        <p>Let&apos;s throw in some numbers</p>
      </div>
      <div className="container">
        <div className="firstRow">
          <div className="display">{state.next || state.total || '0'}</div>
        </div>
        <div className="row">
          <button type="button" onClick={clickHandler} className="btn">AC</button>
          <button type="button" onClick={clickHandler} className="btn">+/-</button>
          <button type="button" onClick={clickHandler} className="btn">%</button>
          <button type="button" onClick={clickHandler} className="btn orange">&divide;</button>
        </div>
        <div className="row">
          <button type="button" onClick={clickHandler} className="btn">7</button>
          <button type="button" onClick={clickHandler} className="btn">8</button>
          <button type="button" onClick={clickHandler} className="btn">9</button>
          <button type="button" onClick={clickHandler} className="btn orange">x</button>
        </div>
        <div className="row">
          <button type="button" onClick={clickHandler} className="btn">4</button>
          <button type="button" onClick={clickHandler} className="btn">5</button>
          <button type="button" onClick={clickHandler} className="btn">6</button>
          <button type="button" onClick={clickHandler} className="btn orange">-</button>
        </div>
        <div className="row">
          <button type="button" onClick={clickHandler} className="btn">1</button>
          <button type="button" onClick={clickHandler} className="btn">2</button>
          <button type="button" onClick={clickHandler} className="btn">3</button>
          <button type="button" onClick={clickHandler} className="btn orange">+</button>
        </div>
        <div className="lastRow">
          <button type="button" onClick={clickHandler} className="btn zero">0</button>
          <button type="button" onClick={clickHandler} className="btn">.</button>
          <button type="button" onClick={clickHandler} className="btn orange">=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
