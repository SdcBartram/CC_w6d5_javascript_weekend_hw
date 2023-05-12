const PaintCan = function (colour, litres) {
    this.colour = colour;
    this.litres = litres;
}

PaintCan.prototype.isPaintCanEmpty = function () {
    return this.litres === 0
}

PaintCan.prototype.emptyPaintCan = function () {
    this.litres = 0
}
module.exports = PaintCan;