"use strict";
exports.__esModule = true;
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(name, group, scoreHK1, scoreHK2) {
        this.name = name;
        this.group = group;
        this.scoreHK1 = scoreHK1;
        this.scoreHK2 = scoreHK2;
    }
    Student.prototype.calcScore = function () {
        return (this.scoreHK1 + this.scoreHK2) / 2;
    };
    Student.prototype.getName = function () {
        return this.name;
    };
    Student.prototype.getGroup = function () {
        return this.group;
    };
    return Student;
}());
exports.Student = Student;
