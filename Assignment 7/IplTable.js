import React, { useState, useEffect } from "react";
import "./App.css"; 

function IplTable() {

  const [teams, setTeams] = useState([]);


  useEffect(() => {
    
    fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data")
      .then((response) => response.json()) 
      .then((data) => {
        
        const sortedData = data.sort((a, b) => a.NRR - b.NRR);
        
        
        setTeams(sortedData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="page-background">
      
      {}
      <div className="calculator-card" style={{ width: "800px" }}>
        <h2 className="heading">IPL Season 2022 Points Table</h2>

        <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
          
          {}
          <thead>
            <tr style={{ backgroundColor: "#4CAF50", color: "white" }}>
              <th style={tableHeaderStyle}>No</th>
              <th style={tableHeaderStyle}>Team</th>
              <th style={tableHeaderStyle}>Matches</th>
              <th style={tableHeaderStyle}>Won</th>
              <th style={tableHeaderStyle}>Lost</th>
              <th style={tableHeaderStyle}>Tied</th>
              <th style={tableHeaderStyle}>NRR</th>
              <th style={tableHeaderStyle}>Points</th>
            </tr>
          </thead>

          {}
          <tbody>
            {teams.map((team) => (
              <tr key={team.id} style={{ borderBottom: "1px solid #ddd" }}>
                <td style={tableCellStyle}>{team.No}</td>
                <td style={tableCellStyle}>{team.Team}</td>
                <td style={tableCellStyle}>{team.Matches}</td>
                <td style={tableCellStyle}>{team.Won}</td>
                <td style={tableCellStyle}>{team.Lost}</td>
                <td style={tableCellStyle}>{team.Tied}</td>
                {}
                <td style={{ ...tableCellStyle, fontWeight: "bold", color: "#e91e63" }}>
                  {team.NRR}
                </td>
                <td style={{ ...tableCellStyle, fontWeight: "bold" }}>{team.Points}</td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}

const tableHeaderStyle = {
  padding: "12px",
  textAlign: "center",
  border: "1px solid #ddd"
};

const tableCellStyle = {
  padding: "10px",
  textAlign: "center",
  color: "#333",
  border: "1px solid #ddd"
};

export default IplTable;