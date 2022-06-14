import customers from "../data/customers.json";
import { Table } from "react-bootstrap";
export const Customers = () => {
  return (
    <>
      <h2>Customers</h2>
      <p>This is the list of customers</p>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => {
            return (
              <tr key={index}>
                <td>{customer.customerID}</td>
                <td>{customer.contactName.split(" ")[0]}</td>
                <td>{customer.contactName.split(" ")[1]}</td>
                <td>{customer.companyName}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};
