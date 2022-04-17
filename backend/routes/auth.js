const router = require("express").Router();
const { User } = require("../models/user");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const sgmail = require('@sendgrid/mail');
const TWILIO_KEY = "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";
sgmail.setApiKey(TWILIO_KEY);








router.post("/", async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ email: req.body.email });
		if (!user)
			return res.status(401).send({ message: "Invalid Email or Password" });

		const validPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);
		if (!validPassword)
			return res.status(401).send({ message: "Invalid Email or Password" });

		const token = user.generateAuthToken();
		res.status(200).send({ data: token, message: "logged in successfully" });
		const message = {
			to: req.body.email,
			from: 'mentastichackdavis@gmail.com',
			subject: 'Signed in using Twilio Email API',
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

const validate = (data) => {
	const schema = Joi.object({
		email: Joi.string().email().required().label("Email"),
		password: Joi.string().required().label("Password"),
	});
	return schema.validate(data);
};

module.exports = router;
