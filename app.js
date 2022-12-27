const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let employees = [];

app.get('/employees', (req, res) => {
    res.send(employees);
  });

  app.get('/employees/:id', (req, res) => {
    const id = req.params.id;
    const employeeIndex = employees.findIndex(employee => employee.id === id);
    if (employeeIndex === -1) {
      res.status(404).send('{"error":"employee not found"}');
    } else {
      
      res.send(employees[employeeIndex]);
    }
  });

  app.post('/employees', (req, res) => {
    const employee = req.body;
      
    console.log(`employee data is ${JSON.stringify(employee)}`);
    employees.push(employee);
    res.send(`Employee with ID ${employee.id} added successfully`);
  });

  app.post('/parrot', (req, res) => {
    const employee = req.body;
      
    console.log(`Called Parrot with data  ${JSON.stringify(employee)}`);
    res.send(req.body);
  });
  

  
app.post('/employees', (req, res) => {
  const employee = req.body;
    
  console.log(`employee data is ${JSON.stringify(employee)}`);
  employees.push(employee);
  res.send(`Employee with ID ${employee.id} added successfully`);
});

app.delete('/employees/:id', (req, res) => {
  const id = req.params.id;
  const employeeIndex = employees.findIndex(employee => employee.id === id);
  if (employeeIndex === -1) {
    res.status(404).send('Employee not found');
  } else {
    employees.splice(employeeIndex, 1);
    res.send(`Employee with ID ${id} deleted successfully`);
  }
});

app.put('/employees/:id', (req, res) => {
  const id = req.params.id;
  const employeeIndex = employees.findIndex(employee => employee.id === id);
  if (employeeIndex === -1) {
    res.status(404).send('Employee not found');
  } else {
    const updatedEmployee = req.body;
    employees[employeeIndex] = updatedEmployee;
    res.send(`Employee with ID ${id} updated successfully`);
  }
});

app.listen(3000, () => {
    console.log('Employee API listening on port 3000');
    console.log('/employees add, delete, list');
});
