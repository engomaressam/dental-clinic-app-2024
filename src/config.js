require('dotenv').config();

const config = {
	port: process.env.PORT || 3000,
	mongoUri:
		process.env.MONGODB_URI ||
		'mongodb+srv://username:<db_password>@cluster.mongodb.net/dental_clinic?retryWrites=true&w=majority',
};

module.exports = config;
