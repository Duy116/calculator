import React from 'react';
import './App.scss';

function App() {
  const [ input, setInput ] = React.useState("0");

  const handleClick = (value: string) => {
    if (input.toString() === "Error" || input.toString() === "Infinity" || input.toString() === "NaN") {
      if (value === "*" || value === "/") {
        setInput("0" + value);
      }
      else {
        setInput(value);
      }
    }
    else if (input.toString() === "0") {
      if (value === "*" || value === "/") {
        setInput(input + value);
      }
      else {
        setInput(value);
      }
    }
    else {
      setInput(input + value);
    }
  }

  const handleClear = () => {
    setInput("0");
  }

  const handleEqual = () => {
    try {
      setInput(eval(input));
    }
    catch {
      setInput("Error");
    }
  }

  return (
    <div className='background'>
      <div className='result'>
        <p>{input}</p>
        <button onClick={handleClear}>C</button>
      </div>
      <table className='table'>
        <tr>
          <td>
            <button className='button-number' onClick={(e) => handleClick(e.currentTarget.innerText)}>7</button>
          </td>
          <td>
            <button className='button-number' onClick={(e) => handleClick(e.currentTarget.innerText)}>8</button>
          </td>
          <td>
            <button className='button-number' onClick={(e) => handleClick(e.currentTarget.innerText)}>9</button>
          </td>
          <td>
            <button className='button-operator' onClick={(e) => handleClick(e.currentTarget.innerText)}>+</button>
          </td>
        </tr>
        <tr>
          <td>
            <button className='button-number' onClick={(e) => handleClick(e.currentTarget.innerText)}>4</button>
          </td>
          <td>
            <button className='button-number' onClick={(e) => handleClick(e.currentTarget.innerText)}>5</button>
          </td>
          <td>
            <button className='button-number' onClick={(e) => handleClick(e.currentTarget.innerText)}>6</button>
          </td>
          <td>
            <button className='button-operator' onClick={(e) => handleClick(e.currentTarget.innerText)}>-</button>
          </td>
        </tr>
        <tr>
          <td>
            <button className='button-number' onClick={(e) => handleClick(e.currentTarget.innerText)}>1</button>
          </td>
          <td>
            <button className='button-number' onClick={(e) => handleClick(e.currentTarget.innerText)}>2</button>
          </td>
          <td>
            <button className='button-number' onClick={(e) => handleClick(e.currentTarget.innerText)}>3</button>
          </td>
          <td>
            <button className='button-operator' onClick={(e) => handleClick(e.currentTarget.innerText)}>*</button>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <button className='button-number' onClick={(e) => handleClick(e.currentTarget.innerText)}>0</button>
          </td>
          <td>
            <button className='button-equal' onClick={handleEqual}>=</button>
          </td>
          <td>
            <button className='button-operator' onClick={(e) => handleClick(e.currentTarget.innerText)}>/</button>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default App;
