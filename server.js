const orm = require("./config/orm.js");
const cTable = require("console.table");
const inquirer = require("inquirer");

const runCLI = () => {
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message:
        "Welcome to the Employee Management System. Please Select an Option",
      choices: [
        "Add Departments, Roles, Employees",
        "View Departments, Roles, Employees",
        "Update Employee Roles",
        "Update Employee Managers",
        "View Employees by Manager",
        "Delete departments, roles, and employees",
        "View the total utilized budget by Department",
      ],
    })
    .then((answer) => {
      switch (answer.action) {
        case "Add Departments, Roles, Employees":
          addRow();
          break;

        case "View Departments, Roles, Employees":
          viewTable();
          break;

        case "Update Employee Roles":
          updateEmployeeRole();
          break;

        case "Update Employee Managers":
          updateEmployeeManager();
          break;

        case "View Employees by Manager":
          viewEmployeesByManager();
          break;

        case "Delete departments, roles, and employees":
          deleteObject();
          break;

        case "View the total utilized budget by Department":
          //songAndAlbumSearch();
          break;

        default:
          console.log(`Invalid action: ${answer.action}`);
          break;
      }
    });
};
const deleteObject = () => {
  inquirer
    .prompt({
      name: "table",
      type: "rawlist",
      message: "Please select what group would like to delete from",
      choices: ["department", "role", "employee"],
    })
    .then((answer) => {
      switch (answer.table) {
        case "department":
          inquirer
            .prompt({
              name: "name",
              message: "What is the name of the department to delete?",
            })
            .then((answer) => {
              orm.deleteRow(
                "department",
                `name = "${answer.name}"`,
                (result) => {
                  if (result.warningCount === 0) {
                    console.log("Deleted");
                  }
                }
              );
              runCLI();
            });

          break;
        case "role":
          inquirer
            .prompt([
              {
                name: "title",
                message: "What is the title of the role to delete?",
              },
              {
                name: "department_id",
                message: "What is the department ID of the role to delete?",
              },
            ])
            .then((answer) => {
              orm.deleteRow(
                "role",
                `title = "${answer.title}" AND department_id = "${answer.department_id}"`,
                (result) => {
                  if (result.warningCount === 0) {
                    console.log("Deleted");
                  }
                }
              );
              runCLI();
            });
          break;
        case "employee":
          inquirer
            .prompt([
              {
                name: "first_name",
                message: "What is the first name of the new employee?",
              },
              {
                name: "last_name",
                message: "What is the last name of the new employee?",
              },
            ])
            .then((answer) => {
              orm.deleteRow(
                "employee",
                `first_name = "${answer.first_name}" AND last_name = "${answer.last_name}"`,
                (result) => {
                  if (result.warningCount === 0) {
                    console.log("Deleted");
                  }
                }
              );
              runCLI();
            });
          break;
      }
    });
};
const viewTable = () => {
  inquirer
    .prompt({
      name: "table",
      type: "rawlist",
      message: "Please select what you would like to view",
      choices: ["department", "role", "employee"],
    })
    .then((answer) => {
      orm.selectTable(answer.table, (result) => console.table(result));
      runCLI();
    });
};

const viewEmployeesByManager = () => {
  inquirer
    .prompt({
      name: "manager_id",
      message: "What is the manager ID of the manager you would like to view?",
    })
    .then((answer) => {
      orm.selectTableByValue("employee", answer.manager_id, (result) =>
        console.table(result)
      );
      runCLI();
    });
};

const updateEmployeeRole = () => {
  inquirer
    .prompt([
      { name: "first_name", message: "What is the employees first name?" },
      { name: "last_name", message: "What is the employees last name?" },
      { name: "role_id", message: "What is the employees new role id?" },
    ])
    .then((answer) => {
      orm.updateRow(
        "employee",
        `role_id = ${answer.role_id}`,
        `first_name = "${answer.first_name}" AND last_name = "${answer.last_name}"`,
        (result) => {
          if (result.warningCount === 0) {
            console.log("Added");
          }
        }
      );
      runCLI();
    });
};

const updateEmployeeManager = () => {
  inquirer
    .prompt([
      { name: "first_name", message: "What is the employees first name?" },
      { name: "last_name", message: "What is the employees last name?" },
      { name: "manager_id", message: "What is the employees new manager id?" },
    ])
    .then((answer) => {
      orm.updateRow(
        "employee",
        `manager_id = ${answer.manager_id}`,
        `first_name = "${answer.first_name}" AND last_name = "${answer.last_name}"`,
        (result) => {
          if (result.warningCount === 0) {
            console.log("Added");
          }
        }
      );
      runCLI();
    });
};

const addRow = () => {
  inquirer
    .prompt({
      name: "table",
      type: "rawlist",
      message: "Please select what group would like to add to",
      choices: ["department", "role", "employee"],
    })
    .then((answer) => {
      switch (answer.table) {
        case "department":
          inquirer
            .prompt({
              name: "name",
              message: "What is the name of the new department?",
            })
            .then((answer) => {
              orm.insertData(
                "department",
                "name",
                "?",
                answer.name,
                (result) => {
                  if (result.warningCount === 0) {
                    console.log("Added");
                  }
                }
              );
              runCLI();
            });

          break;
        case "role":
          inquirer
            .prompt([
              {
                name: "title",
                message: "What is the title of the new role?",
              },
              {
                name: "salary",
                message: "What is the salary of the new role?",
              },
              {
                name: "department_id",
                message:
                  "What is the department id that this new role belongs to?",
              },
            ])
            .then((answer) => {
              orm.insertData(
                "role",
                "title, salary, department_id",
                "?,?,?",
                [answer.title, answer.salary, answer.department_id],
                (result) => {
                  if (result.warningCount === 0) {
                    console.log("Added");
                  }
                }
              );
              runCLI();
            });
          break;
        case "employee":
          inquirer
            .prompt([
              {
                name: "first_name",
                message: "What is the first name of the new employee?",
              },
              {
                name: "last_name",
                message: "What is the last name of the new employee?",
              },
              {
                name: "role_id",
                message: "What is the role id of the new employee?",
              },
              {
                name: "manager_id",
                message: "What is the manager ID of the new employee?",
              },
            ])
            .then((answer) => {
              orm.insertData(
                "employee",
                "first_name, last_name, role_id, manager_id",
                "?,?,?,?",
                [
                  answer.first_name,
                  answer.last_name,
                  answer.role_id,
                  answer.manager_id,
                ],
                (result) => {
                  if (result.warningCount === 0) {
                    console.log("Added");
                  }
                }
              );
              runCLI();
            });
          break;
      }
    });
};

runCLI();
