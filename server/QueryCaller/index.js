const queryDB = (req, sql, args) =>
  new Promise((resolve, reject) => {
    req.mysqlDb.query(sql, args, (err, rows) => {
      if (err) return reject(err);
      rows.changedRows || rows.affectedRows || rows.insertId
        ? resolve(true)
        : resolve(rows);
    });
  });

module.exports = queryDB;
