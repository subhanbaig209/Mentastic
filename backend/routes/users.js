const router = require("express").Router();
const { User, validate } = require("../models/user");
const bcrypt = require("bcrypt");

const sgmail = require('@sendgrid/mail');
const TWILIO_KEY = "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";
sgmail.setApiKey(TWILIO_KEY);








router.post("/", async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ email: req.body.email });
		if (user)
			return res
				.status(409)
				.send({ message: "User with given email already Exist!" });

		const salt = await bcrypt.genSalt(Number(10));
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		await new User({ ...req.body, password: hashPassword }).save();
		res.status(201).send({ message: "User created successfully" });
		const message = {
			to: req.body.email,
			from: 'mentastichackdavis@gmail.com',
			subject: 'Registered email using Twilio Email API',
			text: 'Make sure to check out our features, which range from a chatbot to a viewing your insights!',
		
		};
		sgmail.send(message)
			.then(() => {
				console.log('Message sent');
			})
			.catch((error) => {
				console.log(error.response.body);
			});
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

module.exports = router;