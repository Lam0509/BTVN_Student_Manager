import {StuManagement} from "./StuManagement";
import {Student} from "./Student";

let student1 = new Student('lam','co922h1',9,8);
let student2 = new Student('yen','co822h1',9,8);
let student3 = new Student('trung','co922h1',9,2);
let student4 = new Student('khanh','co822h1',9,3);
let student5 = new Student('t.anh','co922h1',9,4);
let student6 = new Student('hieu','co822h1',9,5);
let student7 = new Student('long','co922h1',9,6);
let student8 = new Student('long','co722h1',9,7);

StuManagement.add(student1);
StuManagement.add(student2);
StuManagement.add(student3);
StuManagement.add(student4);
StuManagement.add(student5);
StuManagement.add(student6);
StuManagement.add(student7);
StuManagement.add(student8);

console.log(StuManagement.showRank());
console.log(StuManagement.searchByGroup('co822h1'));
console.log(StuManagement.searchByName('long'));
