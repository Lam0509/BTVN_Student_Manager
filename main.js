"use strict";
exports.__esModule = true;
var StuManagement_1 = require("./StuManagement");
var Student_1 = require("./Student");
var student1 = new Student_1.Student('lam', 'co922h1', 9, 8);
var student2 = new Student_1.Student('yen', 'co822h1', 9, 8);
var student3 = new Student_1.Student('trung', 'co922h1', 9, 2);
var student4 = new Student_1.Student('khanh', 'co822h1', 9, 3);
var student5 = new Student_1.Student('t.anh', 'co922h1', 9, 4);
var student6 = new Student_1.Student('hieu', 'co822h1', 9, 5);
var student7 = new Student_1.Student('long', 'co922h1', 9, 6);
var student8 = new Student_1.Student('long', 'co722h1', 9, 7);
StuManagement_1.StuManagement.add(student1);
StuManagement_1.StuManagement.add(student2);
StuManagement_1.StuManagement.add(student3);
StuManagement_1.StuManagement.add(student4);
StuManagement_1.StuManagement.add(student5);
StuManagement_1.StuManagement.add(student6);
StuManagement_1.StuManagement.add(student7);
StuManagement_1.StuManagement.add(student8);
console.log(StuManagement_1.StuManagement.showRank());
console.log(StuManagement_1.StuManagement.searchByGroup('co822h1'));
console.log(StuManagement_1.StuManagement.searchByName('long'));