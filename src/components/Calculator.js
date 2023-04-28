import { useState } from 'react';
import calculate from '../logic/calculate';

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
          <button type="button" onClick={clickHandler} key={7} className="btn">7</button>
          <button type="button" onClick={clickHandler} key={8} className="btn">8</button>
          <button type="button" onClick={clickHandler} key={9} className="btn">9</button>
          <button type="button" onClick={clickHandler} className="btn orange">x</button>
        </div>
        <div className="row">
          <button type="button" onClick={clickHandler} key={4} className="btn">4</button>
          <button type="button" onClick={clickHandler} key={5} className="btn">5</button>
          <button type="button" onClick={clickHandler} key={6} className="btn">6</button>
          <button type="button" onClick={clickHandler} className="btn orange">-</button>
        </div>
        <div className="row">
          <button type="button" onClick={clickHandler} key={1} className="btn">1</button>
          <button type="button" onClick={clickHandler} key={2} className="btn">2</button>
          <button type="button" onClick={clickHandler} key={3} className="btn">3</button>
          <button type="button" onClick={clickHandler} className="btn orange">+</button>
        </div>
        <div className="lastRow">
          <button type="button" onClick={clickHandler} key={0} className="btn zero">0</button>
          <button type="button" onClick={clickHandler} className="btn">.</button>
          <button type="button" onClick={clickHandler} className="btn orange">=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
