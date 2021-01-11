const orm = require("./config/orm.js");
const cTable = require("console.table");

orm.selectTable("role", (result) => console.table(result));
