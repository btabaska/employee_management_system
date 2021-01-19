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
  selectTableByValue(tableInput, value, cb) {
    const queryString = `SELECT * FROM ${tableInput} WHERE manager_id = ${value}`;
    connection.query(queryString, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  insertData(table, col, qm, vals, cb) {
    let queryString = `INSERT INTO ${table}`;

    queryString += " (";
    queryString += col;
    queryString += ") ";
    queryString += "VALUES (";
    queryString += qm;
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, (err, result) => {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  updateRow(table, newVal, condition, cb) {
    let queryString = `UPDATE ${table}`;

    queryString += " SET ";
    queryString += newVal;
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  deleteRow(table, condition, cb) {
    let queryString = "DELETE FROM ??";
    queryString += " WHERE ";
    queryString += condition;
    console.log(queryString);
    connection.query(queryString, [table], (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
};

module.exports = orm;
