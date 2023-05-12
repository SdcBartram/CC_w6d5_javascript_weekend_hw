const assert = require('assert');
const Decorator = require('../models/decorator.js');
const PaintCan = require('../models/paint_can.js');
const Room = require('../models/room.js');

describe ('Decorator', function() {
    let bob;
    let paintCanBlue;
    let kitchen;

    beforeEach(function () {
        bob = new Decorator("Bob");

        paintCanBlue = new PaintCan("Blue", 10);
        paintCanRed = new PaintCan("Red", 0);
        paintCanGreen = new PaintCan("Green", 15);

        kitchen = new Room("Kitchen", 10);
    });

    it ('should start with an empty paint stock', function () {
        const actual = bob.paintStock
        assert.deepStrictEqual(actual, []);      
    });

    it ('should be able to add a can of paint to paint stock', function () {
        bob.addPaint(paintCanBlue);
        const actual = bob.paintStock;
        assert.deepStrictEqual(actual, [paintCanBlue])
    });

    it ('should be able to calculate total litres of paint it has in stock', function () {
        bob.addPaint(paintCanBlue);
        bob.addPaint(paintCanGreen);
        const actual = bob.calculateTotalLitres()
        assert.strictEqual(actual, 25)
    });

    it ('should be able to calculate whether it has enough paint to paint a room - return true', function () {
        bob.addPaint(paintCanBlue)
        const actual = bob.enoughPaint(kitchen)
        assert.strictEqual(actual, true)
    });

    it ('should be able to calculate whether it has enough paint to paint a room - return false', function () {
        bob.addPaint(paintCanRed)
        const actual = bob.enoughPaint(kitchen)
        assert.strictEqual(actual, false)
    });
    
    it ('should be able to paint room if there is enough paint in stock - true', function () {
        bob.addPaint(paintCanGreen)
        bob.paintRoom(kitchen)
        const actual = kitchen.paintStatus;
        assert.strictEqual(actual, true)
    })

    it ('should be able to paint room if there is enough paint in stock - false', function () {
        bob.addPaint(paintCanRed)
        bob.paintRoom(kitchen)
        const actual = kitchen.paintStatus;
        assert.strictEqual(actual, false)
    })
    
});