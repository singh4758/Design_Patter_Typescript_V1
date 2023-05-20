/*
Que:- What is single responsibility ?
Ans:- A class or method should be responsible for single part of functionality.
*/

// Violet principle

// 1. You have error handling code in your class

export function filterEmployee(httpClient, filters) {
  try {
    filters = removeDuplicateFilters(filter);
    httpClient.get("/api/employees").then((employees) => {              // Function Responsibility
      let result = applyFilters(employees);
      return result;
    }).catch((error) => {
      console.error("Something went wrong while fetching employees");
      let messageBox = new MessgaBox();                                 // What the function does instead ?
      messageBox.show("Something went wrong while fetching employees");  // Here function have extra logic rather tha actual logic
    })
  } catch (error) {
    console.error("Application critical error");
    let messageBox = new MessgaBox();                                  // What the function does instead ?
    messageBox.show("Something went wrong while fetching employees");  // Here function have extra logic rather tha actual logic
  }
}

// 2. You have Presentation logic

export function filterEmployee(httpClient, filters) {
  try {
    filters = removeDuplicateFilters(filter);
    httpClient.get("/api/employees").then((employees) => {
      let result = applyFilters(employees);
      let list = document.getElementById('employees-list');
      result.forEach((employee) => {
        let employeeItem = document.createElement("li");
        employeeItem.innerHTML = `<strong>${employee.lastName}</strong> ${employee.firstName}`;   // we not fetch only also add the data in html
        list.appendChild(employeeItem);                                                           // What the function does instead ?
      })                                                                                          // Function do extra work logic rather than actual(filter) task assign logic
    }).catch((error) => {
      console.error("Something went wrong while fetching employees");
      let messageBox = new MessgaBox();
      messageBox.show("Something went wrong while fetching employees");
    })
  } catch (error) {
    console.error("Application critical error");
    let messageBox = new MessgaBox();
    messageBox.show("Something went wrong while fetching employees");
  }
}

// 3. File/Database Read/Write

export function filterEmployee(httpClient, filters) {
  try {
    filters = removeDuplicateFilters(filter);
    httpClient.get("/api/employees").then((employees) => {
      let result = applyFilters(employees);
      let list = document.getElementById('employees-list');
      result.forEach((employee) => {
        let employeeItem = document.createElement("li");
        employeeItem.innerHTML = `<strong>${employee.lastName}</strong> ${employee.firstName}`;
        list.appendChild(employeeItem);
      })
      result.forEach((employee) => {
        httpClient.post('/api/employee/record', employee); // here after displaying user we call post api to send data.
      })                                                   // This part should also not belong to filter function
    }).catch((error) => {
      console.error("Something went wrong while fetching employees");
      let messageBox = new MessgaBox();
      messageBox.show("Something went wrong while fetching employees");
    })
  } catch (error) {
    console.error("Application critical error");
    let messageBox = new MessgaBox();
    messageBox.show("Something went wrong while fetching employees");
  }
}

// Improvement

var httpClient = new HttpClient();
filterEmployee(httpClient, []).then((employees) => {
  displayEmployees(employees);
  recordEmployee(employees);
}) 

export function filterEmployee(httpClient, filters) {
  try {
    filters = removeDuplicateFilters(filters);
    httpClient.get("/api/employees").then((employees) => {
      let result = applyFilters(employees);
      return result;
    }).catch((error) => {
      handleError(err, "Something went wrong while fetching employees")
    })
  } catch (error) {
    handleError(err, "Application critical error")
  }
}

function recordEmployee(result) {
  result.forEach((employee) => {
    httpClient.post('/api/employee/record', employee);
  });
}

function displayEmployees(result) {
  let list = document.getElementById('employees-list');
  result.forEach((employee) => {
    let employeeItem = document.createElement("li");
    employeeItem.innerHTML = `<strong>${employee.lastName}</strong> ${employee.firstName}`;
    list.appendChild(employeeItem);
  });
}

function handleError(err, msg) {
  console.error(msg);
  let messageBox = new MessgaBox();
  messageBox.show(msg);
}
