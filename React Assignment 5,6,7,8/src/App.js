import React, { useState } from "react";
import Calculator from "./Calculator";       
import TodoApp from "./TodoApp";
import IplTable from "./IplTable";
import MovieBooking from "./MovieBooking";

function App() {
  
  const [activeTab, setActiveTab] = useState("calculator");

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      
      {}
      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <h2>React Assignments</h2>
        <button 
          onClick={() => setActiveTab("calculator")}
          style={{ padding: "10px", marginRight: "10px", cursor: "pointer" }}
        >
          Assignment 1: Calculator
        </button>
        
        <button 
          onClick={() => setActiveTab("todoapp")}
          style={{ padding: "10px", marginRight : "10px", cursor: "pointer" }}
        >
          Assignment 2: TodoApp
        </button>

        <button 
          onClick={() => setActiveTab("ipltable")}
          style={{ padding: "10px", marginRight : "10px", cursor: "pointer" }}
        >
          Assignment 3: IplTable
        </button>

        <button 
          onClick={() => setActiveTab("moviebooking")}
          style={{ padding: "10px", marginRight : "10px", cursor: "pointer" }}
        >
          Assignment 4: MovieBooking
        </button>
      </div>

      <hr />

      {}
      <div style={{ marginTop: "20px" }}>
        {activeTab === "calculator" && <Calculator />}
        {activeTab === "todoapp" && <TodoApp/>}
        {activeTab === "ipltable" && <IplTable/>}
        {activeTab === "moviebooking" && <MovieBooking/>}
        {}
      </div>

    </div>
  );
}

export default App;