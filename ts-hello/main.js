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
    return Point;
}());
var point = new Point(-4, 7);
//point.x = 1;
//point.y = 3;
point.draw();
