const queryDB = require('../QueryCaller');
const root = {
  getUsers: (args, req) =>
    queryDB(req, 'select * from userbasic').then(data => data),
  getUserInfo: (args, req) =>
    queryDB(req, 'select * from userbasic where id = ?', [args.id]).then(
      data => data[0]
    ),
  createUser: (args, req) =>
    queryDB(req, 'insert into userbasic SET ?', args).then(data => data)
};
module.exports = root;
