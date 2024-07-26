// Include the mongojs module in your project
const mongojs = require("mongojs");

const db = mongojs(`mongodb://178.23.190.90:27017/userdb`,	["mycollection"]
);

// Reports an error if the db cannot
// be initialised properly
db.on("error", function (err) {
	console.log("database error", err);
});

// Prints "database connected" in the console
// if the database connection is established
// successfully
db.on("connect", function () {
	console.log("database connected");
});

// Insert entries in mongodb database
db.mycollection.insert({ name: "Shruti" });
db.mycollection.insert({ name: "Swati" });
db.mycollection.insert({ name: "Ayushi" });
db.mycollection.insert({ name: "Sanskriti" });

// Query the database for a specific entry
db.mycollection.find({ a: 1 }, function (error, found) {
	if (error) {
		console.log(error);
	} else {
		console.log(found);
	}
});

// Query the database for all entries
db.mycollection.find({}, function (error, found) {
	if (error) {
		console.log(error);
	} else {
		console.log(found);
	}
});
