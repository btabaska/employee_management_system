//Import SQL Connection
const connection = require("./connection.js");

const orm = {
  selectTable(tableInput, cb) {
    const queryString = "SELECT * FROM (??)";
    connection.query(queryString, [tableInput], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
};

module.exports = orm;
