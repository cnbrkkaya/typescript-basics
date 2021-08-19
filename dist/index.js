"use strict";
//Basic Types
let id = 5;
let company = "CK";
let isValid = true;
let x = "Hello";
let ids = [1, 2, 3, 4, 5];
let arr = [1, 2, "ck", false];
//Tuple
let person = [1, "ck", true];
//Tuple Array
let employee;
employee = [
    [1, "CK"],
    [2, "AA"],
];
//Union
let pid;
pid = "5";
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: "CK",
};
//Type Assertion
let cid = 1;
//1
let customerId = cid;
//2
let customerID = cid;
//Functions
function addNum(x, y) {
    return x + y;
}
//Void
function log(message) {
    console.log(message);
}
const newUser = {
    id: 1,
    name: "CK",
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is registered`;
    }
}
const ck = new Person(11, "CK");
console.log(ck.register());
//Subclass
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const newEmp = new Employee(111, "CKE", "Dev");
console.log(newEmp.register());
//Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4, 5]);
let strArray = getArray(["sdfsdf", "sdfsdf", "sdfsdf"]);
strArray.push("dfgdf");
const a = 4;
