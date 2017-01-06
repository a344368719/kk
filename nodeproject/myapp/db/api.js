var UserSQL = {
	insert: 'INSERT INTO user(username,pwd) VALUES(?,?)',
	queryAll: 'SELECT * FROM people',
	getUserById: 'SELECT * FROM User WHERE uid = ? ',
	
};
module.exports = UserSQL;