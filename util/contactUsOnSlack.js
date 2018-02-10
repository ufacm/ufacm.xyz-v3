const rp = require('request-promise');

const postContactUsFormToSlack = (name, email, message) => {

  name = name || '(left blank)'
  email = email || '(left blank)'
  message = message || '(left blank)'

  const postData = {
    method: 'POST',
    uri: process.env.SLACK_CONTACT_US_WEBHOOK,
    body: {
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    },
    json: true
  };

  return new Promise((resolve, reject) => {
    rp.post(postData)
      .then(() => {
        resolve();
      })
      .catch((err) => {
        reject(new Error(`unable to post to Slack:\n${err}`));
      });
  });
}

module.exports = postContactUsFormToSlack;
