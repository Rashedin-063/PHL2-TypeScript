/**
 * ### Task 9: Optional Chaining

**Objective**: Use optional chaining with nested objects.

**Instructions**:

- Write a function `getEmployeeCity(employee)` that safely retrieves the city of an employee from a nested object using optional chaining.

 */

interface Employee {
  id: number;
  name: string;
  email: string;
  permanentAddress?: {
    village?: string;
    thana?: string;
    city: string;
  } 
}

const employee: Employee = {
  id: 1234,
  name: 'Mr. X',
  email: 'x@gmail.com',
  permanentAddress: {
city: 'Gaibandha'
  }
}; 

const getEmployeeCity = (employee: Employee): string => {
  return `The city of this employ is ${employee.permanentAddress?.city}`
}

console.log(getEmployeeCity(employee))
