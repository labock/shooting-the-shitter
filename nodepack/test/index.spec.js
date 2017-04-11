var assert = require('assert');
var app = require('./../index');
var expectedMsg = require('./../lib/message');


describe('Messaging', function() {
	it('should return the correct messaging for the situation', function() {
		assert.equal(app.message, expectedMsg);
	});
});