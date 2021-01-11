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
          //artistSearch();
          break;

        case "View Departments, Roles, Employees":
          viewTable();
          break;

        case "Update Employee Roles":
          //rangeSearch();
          break;

        case "Update Employee Managers":
          //songSearch();
          break;

        case "View Employees by Manager":
          //songAndAlbumSearch();
          break;

        case "Delete departments, roles, and employees":
          //songAndAlbumSearch();
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
runCLI();
