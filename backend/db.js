const mongoose = require("mongoose");
const connectionURL = 'mongodb+srv://subhan:subhanhashim@mentastic.ciftk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

module.exports = () => {
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
	try {
		mongoose.connect(connectionURL, connectionParams);
		console.log("Connected to database successfully");
	} catch (error) {
		console.log(error);
		console.log("Could not connect database!");
	}
};
