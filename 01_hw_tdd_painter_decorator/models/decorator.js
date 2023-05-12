const Decorator = function (name) {
    this.name = name;
    this.paintStock = [];
}

Decorator.prototype.addPaint = function (paintCan) {
    this.paintStock.push(paintCan);
}

Decorator.prototype.calculateTotalLitres = function () {
    let totalLitres = 0;

    for (const paintCan of this.paintStock) {
        totalLitres += paintCan.litres;
    }
    return totalLitres
}

Decorator.prototype.enoughPaint = function (room) {
    return this.calculateTotalLitres() >= room.area; 
}

Decorator.prototype.paintRoom = function (room) {
    if (this.enoughPaint(room)) {
        room.paintStatus = true;
        return true;
    }
}


module.exports = Decorator;