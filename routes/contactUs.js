const express = require('express');
const _ = require('lodash');

const router = express.Router();

const sendContactUsFormToSlack = require('../util/contactUsOnSlack');

if(!process.env.SLACK_CONTACT_US_WEBHOOK) {
  console.warn("WARNING: SLACK_CONTACT_US_WEBHOOK is not set! The contact us form will not work!");
}

router.post('/', function(req, res, next) {
  const name = _.get(req, 'body.name', '(left blank)');
  const email = _.get(req, 'body.email', '(left blank)');
  const message = _.get(req, 'body.message', '(left blank)');
  
  const formPromise = sendContactUsFormToSlack(name, email, message);

  formPromise.then(() => {
    res.status(204).end();
  });
});

module.exports = router;
