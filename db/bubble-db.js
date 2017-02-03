// const PG_PASS = process.env.PG_PASS;
// const pgp = require('pg-promise')();

// const bubbleDB = pgp({
// 	host: 'localhost',
// 	port: 5000,
// 	database: 'algorithms',
// 	user: 'nicolesandry',
// 	password: PG_PASS
// });

// module.exports = (function(){

// 	function _getArray(req, res){
// 		bubbleDB.any('SELECT * FROM bubble_sort')
// 			.then( result => {
// 				res.render('bubble/index', {"bubbleList": result});
// 			})
// 			.catch( err => {
// 				res.send('Oops...');
// 			});
// 	}

// });