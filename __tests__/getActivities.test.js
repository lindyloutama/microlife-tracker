const fs = require('fs');
const path = require('path');
const httpMocks = require('node-mocks-http');
const events = require('events');

const getActivities = require('../controllers/getActivities');

describe('createActivity', () => {
    it('adds an activity to the profile', done => {
      expect.assertions(2);
      const user = {
        profile: {
          activities: [{
            activityId: 'short-walk',
            quantity: 1,
          }, {
            activityId: 'red-meat',
            quantity: 2,
          }],
        },
      };
      fs.writeFile(filePath, JSON.stringify(user), () => {

    })
    const request = httpMocks.createRequest({
        method: 'GET',
        url: '/profile/activities',
      });
      const response = httpMocks.createResponse({
        eventEmitter: events.EventEmitter,
      });

      getActivities(request, response);

      response.on('end', () => {
        expect(response.statusCode).toEqual(200);
    });
    
    expect(response._getData()).toEqual(user.profile.activities);
    done();

    afterEach(() => {
        const filePath = path.join(__dirname, '../controllers', 'user.json');
        fs.writeFileSync(filePath, '{"profile":{"activities":[]}}');
      });
            