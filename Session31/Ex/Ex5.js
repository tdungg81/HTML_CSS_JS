
const employees = [
    { id: 1, name: 'John', age: 18, address: 'New York' },
    { id: 2, name: 'Mike', age: 22, address: 'Canada' },
    { id: 3, name: 'Linda', age: 19, address: 'California' },
    { id: 4, name: 'Peter', age: 25, address: 'London' },
    { id: 5, name: 'Tony', age: 17, address: 'New York' }
];

    const tableBody = document.querySelector("#employeeTable tbody");

employees.forEach(employee => {
    const row = document.createElement("tr");

    const sttCell = document.createElement("td");
    sttCell.textContent = employee.id;
    row.appendChild(sttCell);

    const nameCell = document.createElement("td");
    nameCell.textContent = employee.name;
    row.appendChild(nameCell);

    const ageCell = document.createElement("td");
    ageCell.textContent = employee.age;
    row.appendChild(ageCell);

    const addressCell = document.createElement("td");
    addressCell.textContent = employee.address;
    row.appendChild(addressCell);

    tableBody.appendChild(row);
});