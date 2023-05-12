const assert = require('assert');
const Room = require('../models/room.js');

describe ('Room', function() {
    let kitchen;

    beforeEach(function () {
        kitchen = new Room("Kitchen", 10);
    });

    it ('should have an area in square meters', function () {
        const actual = kitchen.area;
        assert.strictEqual(actual, 10);      
    })

    it ('should start not painted', function () {
        const actual = kitchen.paintStatus;
        assert.strictEqual(actual, false)
    })

    it ('should be able to be painted', function () {
        kitchen.paintedRoom()
        const actual = kitchen.paintStatus;
        assert.strictEqual(actual, true)
    })
});