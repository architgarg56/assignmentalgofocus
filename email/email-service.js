var nodemailer = require('nodemailer');
var EmailService = function() {
};

var transporter = nodemailer.createTransport({
	 service: 'gmail',
	 auth: {
	        user: 'architgarg56@gmail.com',
	        pass: '8171982867'
	    }
});

EmailService.prototype.sendEmail = function(emailVO,callback) {
		var  mailOptions = {
			  from:emailVO.senderEmail, // sender address
			  to: emailVO.toEmail, 
			  subject: 'Regarding customer registration', 
			  html: '<p>Hello User, you have successfully registered with us. </p>'
		};
		transporter.sendMail(mailOptions, function (err, result) {
					callback(err,result);
		});
};

exports.EmailService=EmailService;