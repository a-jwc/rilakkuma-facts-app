const db = require('../services/db');
const config = require('../config');

function getMultiple(page = 1) {
  const offset = (page - 1) * config.listPerPage;
  const data = db.query(`SELECT * FROM facts LIMIT ?,?`, [offset, config.listPerPage]);
  const meta = {page};

  return {
    data,
    meta
  }
}

function getSingle(page = 1) {
  const data = db.query(`SELECT * FROM facts ORDER BY RANDOM() LIMIT ?,?`, [1, 1]);
  const meta = {page};

  return {
    data,
    meta
  }
}

module.exports = {
  getMultiple,
  getSingle
}