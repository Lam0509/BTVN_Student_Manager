"use strict";
exports.__esModule = true;
exports.StuManagement = void 0;
var StuManagement = /** @class */ (function () {
    function StuManagement() {
    }
    StuManagement.add = function (student) {
        this.students.push(student);
    };
    StuManagement.showList = function () {
        return this.students;
    };
    StuManagement.total = function () {
        return this.students.length;
    };
    StuManagement.showRank = function () {
        var i, key, j;
        for (i = 1; i < this.students.length; i++) {
            key = this.students[i];
            j = i - 1;
            while (j >= 0 && this.students[j].calcScore() > key.calcScore()) {
                this.students[j + 1] = this.students[j];
                j--;
            }
            this.students[j + 1] = key;
        }
        return this.showList();
    };
    StuManagement.searchByName = function (name) {
        return this.students.filter(function (item) {
            return item.getName() === name;
        });
    };
    StuManagement.searchByGroup = function (group) {
        return this.students.filter(function (item) {
            return item.getGroup() === group;
        });
    };
    StuManagement.students = [];
    return StuManagement;
}());
exports.StuManagement = StuManagement;
