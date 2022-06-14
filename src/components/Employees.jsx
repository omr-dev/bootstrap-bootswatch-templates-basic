import employees from "../data/employees.json";
import { Carousel } from "react-bootstrap";
export const Employees = () => {
  return (
    <>
      <h2>Employees</h2>
      <p>This is the list of employees</p>
      
      <Carousel style={{ width: "300px" }}>
        {employees.map((employee, index) => {
          return (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={`/images/employees/employee_${index+1}.jpg`}
                alt={`image of ${employee.firstName} ${employee.lastName}`}
              />
              <Carousel.Caption>
                <h3>
                  {employee.firstName} {employee.lastName}
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
};
