const Room = function (name, area) {
    this.name = name;
    this.area = area;
    this.paintStatus = false;
}

Room.prototype.paintedRoom = function () {
    this.paintStatus = true;
}
module.exports = Room;