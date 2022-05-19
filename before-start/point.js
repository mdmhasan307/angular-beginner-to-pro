"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log(' (X, Y)= (' + this.x + ', ' + this.y + ')');
    };
    Point.prototype.getDistance = function () {
        //...
    };
    Point.prototype.getX = function () {
        return this.x;
    };
    Point.prototype.setX = function (value) {
        if (value < 0) {
            throw new Error('Value can not be less than 0');
        }
        this.x = value;
    };
    return Point;
}());
exports.Point = Point;
