import React, { useState } from 'react';
import './App.css';

function App() {
  const [amount, setAmount] = useState('');
  const [percentage, setPercentage] = useState('');
  const [tip, setTip] = useState('');
  const [send, setSend] = useState(false);

  const calculate = (e) => {
    e.preventDefault();
    // prepare the data
    const data = {
      amount,
      tip: percentage
    }

    fetch('http://localhost:9000/api/v1/calculatetip', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(res => { return res.json() })
      .then(data => setTip(data.toBePayed))
    setSend(true);
  }


  return (
    <div className="app">
      <form className="form" action="">

        <div className="form__header">TIP CALCULATOR</div>

        <div className="form__input">
          <div>AMOUNT</div>
          <input
            placeholder="Enter Amount"
            type="number"
            onChange={e => setAmount(e.target.value)}
            value={amount} />
        </div>

        <div className="form__input">
          <div>PERCENTAGE</div>
          <input
            placeholder="Enter Percentage"
            type="number"
            onChange={e => setPercentage(e.target.value)}
            value={percentage} />
        </div>

        <button class="btn" disabled={!amount && !tip} onClick={calculate}>Send</button>
        <br />
        {send ? <h2 className="total">The total after adding tip is ${tip}</h2> : <h1></h1>}
      </form>
    </div >
  );
}

export default App;