const assert = require('assert');
const PaintCan = require('../models/paint_can.js');

describe ('PaintCan', function() {
    let paintCanBlue;
    let paintCanRed;
    let paintCanGreen;

    beforeEach(function () {
        paintCanBlue = new PaintCan("Blue", 10);
        paintCanRed = new PaintCan("Red", 0);
        paintCanGreen = new PaintCan("Green", 15) 
    });

    it ('should have a number of litres of paint', function () {
        const actual = paintCanBlue.litres;
        assert.strictEqual(actual, 10);      
    });

    it ('should be able to check if it is empty - return true if empty', function () {
        const actual = paintCanRed.isPaintCanEmpty()
        assert.strictEqual(actual, true)
    })

    it ('should be able to check if it is empty - return false if not empty', function () {
        const actual = paintCanBlue.isPaintCanEmpty()
        assert.strictEqual(actual, false)
    })

    it ('should be able to empty itself of paint', function () {
        paintCanGreen.emptyPaintCan()
        const actual = paintCanGreen.isPaintCanEmpty()
        assert.strictEqual(actual, true)
    })
});