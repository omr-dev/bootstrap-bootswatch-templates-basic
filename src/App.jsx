/* eslint-disable react/react-in-jsx-scope */
//TODO:constinue from consider: what don't you have with this solution that you have with React Router? https://edwardtanguay.netlify.app/howtos?id=544
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Customers } from "./components/Customers";
import { Employees } from "./components/Employees";
function App() {
  const [displayMode, setDisplayMode] = useState("Employees");
  return (
    <div className="App">
      <div className="container">
        <h1>Company Site</h1>
        <Button
          className="me-2"
          onClick={() => {
            setDisplayMode("Employees");
          }}
        >
          Employees
        </Button>
        <Button
          className="btn-success me-1"
          onClick={() => {
            setDisplayMode("Customers");
          }}
        >
          Customers
        </Button>
        <Card className="mt-4">
          <Card.Body>
            {displayMode === "Employees" && <Employees />}
            {displayMode === "Customers" && <Customers />}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default App;
