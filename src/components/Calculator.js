function Calculator() {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="firstRow">
          <div className="display">0</div>
        </div>
        <div className="row">
          <button type="button" className="btn">AC</button>
          <button type="button" className="btn">+/-</button>
          <button type="button" className="btn">%</button>
          <button type="button" className="btn orange">&divide;</button>
        </div>
        <div className="row">
          <button type="button" key={7} className="btn">7</button>
          <button type="button" key={8} className="btn">8</button>
          <button type="button" key={9} className="btn">9</button>
          <button type="button" className="btn orange">x</button>
        </div>
        <div className="row">
          <button type="button" key={4} className="btn">4</button>
          <button type="button" key={5} className="btn">5</button>
          <button type="button" key={6} className="btn">6</button>
          <button type="button" className="btn orange">-</button>
        </div>
        <div className="row">
          <button type="button" key={1} className="btn">1</button>
          <button type="button" key={2} className="btn">2</button>
          <button type="button" key={3} className="btn">3</button>
          <button type="button" className="btn orange">+</button>
        </div>
        <div className="lastRow">
          <button type="button" key={0} className="btn zero">0</button>
          <button type="button" className="btn">.</button>
          <button type="button" className="btn orange">=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
