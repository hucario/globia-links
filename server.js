/*
 *	eventually, a discord embed bot
 *	By H
 *
 */

/* Config */

var verbose = false || process.argv.includes('--verbose');

/* Requires */
const express = require('express');


/* Set up express & socketio */
const app = express();
const isRoot = (process.getuid && (process.getuid() === 0));
var port;
if (isRoot) {
	port = 80;
} else {
	port = process.env.PORT || 8000;
}
const server = app.listen(port, () => {
	console.log("Listening on port "+port);
});
app.set('view engine', 'ejs');
app.use(express.static("public"));

/* Variables */

/* Functions */


/* Startup */

