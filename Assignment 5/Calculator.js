import React, { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("0");

  function add() { setResult(Number(num1) + Number(num2)); }
  function subtract() { setResult(Number(num1) - Number(num2)); }
  function multiply() { setResult(Number(num1) * Number(num2)); }
  function divide() { 
    if (Number(num2) === 0) {
      setResult("Cannot divide by zero");
    } else {
      setResult(Number(num1) / Number(num2)); 
    }
  }

  return (
    <div style={styles.pageBackground}>
      <div style={styles.calculatorCard}>
        <h2 style={styles.heading}>React Calculator</h2>
        
        <input 
          type="number" 
          placeholder="First Number" 
          value={num1}
          style={styles.inputBox}
          onChange={(e) => setNum1(e.target.value)} 
        />
        
        <input 
          type="number" 
          placeholder="Second Number" 
          value={num2}
          style={styles.inputBox}
          onChange={(e) => setNum2(e.target.value)} 
        />
        
        <div style={styles.buttonRow}>
          <button style={styles.actionButton} onClick={add}>+</button>
          <button style={styles.actionButton} onClick={subtract}>-</button>
          <button style={styles.actionButton} onClick={multiply}>×</button>
          <button style={styles.actionButton} onClick={divide}>÷</button>
        </div>
        
        <div style={styles.resultContainer}>
          <h3 style={styles.resultText}>Output: {result}</h3>
        </div>
      </div>
    </div>
  );
};

const styles = {
  pageBackground: {
    display: "flex",              
    justifyContent: "center",     
    alignItems: "center",         
    height: "100vh",              
    backgroundColor: "#eef2f3",   
    fontFamily: "Arial, sans-serif"
  },
  calculatorCard: {
    backgroundColor: "white",
    padding: "30px 40px",
    borderRadius: "15px",         
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)", 
    textAlign: "center",
    width: "320px"
  },
  heading: {
    color: "#333",
    marginBottom: "20px",
    marginTop: "0"
  },
  inputBox: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
    boxSizing: "border-box" 
  },
  buttonRow: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
    marginBottom: "20px"
  },
  actionButton: {
    backgroundColor: "#4CAF50",   
    color: "white",
    border: "none",
    padding: "15px 20px",
    fontSize: "20px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    width: "22%"                  
  },
  resultContainer: {
    backgroundColor: "#f9f9f9",
    padding: "15px",
    borderRadius: "8px",
    border: "1px dashed #aaa"
  },
  resultText: {
    margin: "0",
    color: "#e91e63",             
    fontSize: "22px"
  }
};

export default Calculator;