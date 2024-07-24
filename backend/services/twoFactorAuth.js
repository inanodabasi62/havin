const twilio = require('twilio');
const { accountSid, authToken, fromPhone } = require('../config/twilio');

const client = twilio(accountSid, authToken);

const sendVerificationCode = async (phoneNumber, code) => {
    try {
        await client.messages.create({
            body: `Your verification code is ${code}`,
            from: fromPhone,
            to: phoneNumber
        });
    } catch (error) {
        console.error('Error sending verification code:', error);
    }
};

module.exports = { sendVerificationCode };
