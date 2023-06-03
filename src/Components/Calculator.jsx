import React, { useState } from 'react'
import "../custom.css";
import * as math from 'mathjs';

export default function Calculator() {
    const [result, setResult] = useState('');
    const [currentCalculation, setCurrentCalculation] = useState('');
    const [calculationHistory, setCalculationHistory] = useState([]);
    const [showModal, setShowModal] = useState(false);

    // All Btn Click Event
    const handleClick = (e) => {
        setResult(result.concat(e.target.name));
    };

    // Equal Btn Calculate
    const calculate = () => {
        try {
            setResult(math.evaluate(result).toString());
            setCalculationHistory([...calculationHistory, `${currentCalculation} = ${result}`]);
            setCurrentCalculation("");
        } catch (error) {
            setResult('Error');
        }
    };

    // All Input Clear
    const clear = () => {
        setResult('');
    };

    // Input LastIndex Clear
    const lastIndexClear = () => {
        setResult(result.slice(0, -1));
    }

    // OnChange Event
    const handleChange = (event) => {
        setResult(event.target.value);
    }

    // Previous Check Btn
    const handlePrevCheck = () => {
        setCurrentCalculation(currentCalculation);
        setShowModal(true);
    }

    // Modal Close Btn
    const handleClose = () => {
        setShowModal(false);
    };
    return (
        <div>
            <div className="calculator">
                <button className='prev' type="button" onClick={handlePrevCheck} data-bs-toggle="modal" data-bs-target="#exampleModal">⟲</button>
                {/* Modal  */}
                {showModal && (
                    <div className="modal">
                        <div className="modal-content">
                            <span className="close" onClick={handleClose}>
                                &times;
                            </span>
                                {calculationHistory.map((calculation, index) => {
                                    return (
                                        <div key={index}>{calculation}</div>
                                    )
                                })}
                        </div>
                    </div>
                )}
                <input type="text" value={result} onChange={handleChange} />
                <div className="keypad">
                    <button className="highlight" id="clear" onClick={clear}>AC</button>
                    <button className="highlight" id="lastIndexClear" onClick={lastIndexClear}>CE</button>
                    <button className='highlight' name="/" onClick={handleClick}>÷</button>
                    <button className='highlight' name="*" onClick={handleClick}>×</button>
                    <button className="highlight" name="7" onClick={handleClick}>7</button>
                    <button className="highlight" name="8" onClick={handleClick}>8</button>
                    <button className="highlight" name="9" onClick={handleClick}>9</button>
                    <button className='highlight' name="-" onClick={handleClick}>-</button>
                    <button className="highlight" name="4" onClick={handleClick}>4</button>
                    <button className="highlight" name="5" onClick={handleClick}>5</button>
                    <button className="highlight" name="6" onClick={handleClick}>6</button>
                    <button className='highlight' name="+" onClick={handleClick}>+</button>
                    <button className="highlight" name="1" onClick={handleClick}>1</button>
                    <button className="highlight" name="2" onClick={handleClick}>2</button>
                    <button className="highlight" name="3" onClick={handleClick}>3</button>
                    <button className="highlight equal-btn" name="=" onClick={calculate}>=</button>
                    <button className="highlight zero-btn" name="0" onClick={handleClick}>0</button>
                    <button className="highlight" name="." onClick={handleClick}>.</button>
                </div>
            </div>
        </div>
    )
}
