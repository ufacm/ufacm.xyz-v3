const chai = require('chai').use(require('chai-as-promised'));
const nock = require('nock');
const faker = require('faker');

const sendContactUsFormToSlack = require('../../util/contactUsOnSlack');
const slackReply = require('../mockData/slackReply');

const expect = chai.expect;
const fakeName = faker.name.findName();
const fakeEmail = `${fakeName}@email.com`;
const fakeMessage = faker.random.words();

nock('https://hooks.slack.com:443', {"encodedQueryParams":true})
  .post('/services/T4JNYCL0L/B987APGNB/S7jvmRLnBhUuGYlirqDC1hZy', {"text":`Name: ${fakeName}\nEmail: ${fakeName}@email.com\nMessage: ${fakeMessage}`})
  .reply(slackReply.statusCode, slackReply.body, slackReply.headers);

nock('https://hooks.slack.com:443', {"encodedQueryParams":true})
  .post('/services/T4JNYCL0L/B987APGNB/S7jvmRLnBhUuGYlirqDC1hZy', {"text":`Name: ${fakeName}\nEmail: ${fakeName}@email.com\nMessage: (left blank)`})
  .reply(slackReply.statusCode, slackReply.body, slackReply.headers);

nock('https://hooks.slack.com:443', {"encodedQueryParams":true})
  .post('/services/T4JNYCL0L/B987APGNB/S7jvmRLnBhUuGYlirqDC1hZy', {"text":`Name: (left blank)\nEmail: (left blank)\nMessage: (left blank)`})
  .reply(slackReply.statusCode, slackReply.body, slackReply.headers);

describe('Contact us form', () => {
  it('should post to Slack when a form is submitted', () => {
    const formPromise = sendContactUsFormToSlack(fakeName, fakeEmail, fakeMessage)
    return expect(formPromise).to.eventually.be.fulfilled;
  });

  it('should post to Slack despite a missing field', () => {
    const formPromise = sendContactUsFormToSlack(fakeName, fakeEmail, undefined)
    return expect(formPromise).to.eventually.be.fulfilled;
  });

  it('should post to Slack despite all fields missing', () => {
    const formPromise = sendContactUsFormToSlack(undefined, undefined, undefined)
    return expect(formPromise).to.eventually.be.fulfilled;
  });

  it('should fail posting to Slack if endpoint is not set', () => {
    process.env.SLACK_CONTACT_US_WEBHOOK = undefined;
    const formPromise = sendContactUsFormToSlack(fakeName, fakeEmail, fakeMessage)
    return expect(formPromise).to.eventually.be.rejected;
  });

});
