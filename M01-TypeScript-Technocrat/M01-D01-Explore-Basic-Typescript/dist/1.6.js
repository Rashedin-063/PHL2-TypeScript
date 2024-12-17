"use strict";
// learning function
// normal function
// arrow function
function addTwo(num1, num2) {
    return num1 + num2;
}
addTwo(2, 3);
function sayHello(name) {
    console.log("Hello ".concat(name));
}
sayHello('Ru');
var addArrow = function (num1, num2) {
    if (num1 === void 0) { num1 = 10; }
    if (num2 === void 0) { num2 = 10; }
    return num1 + num2;
};
// object --> function --> method
var poorUser = {
    name: "Rashedin",
    balance: 0,
    addBalance: function (balance) {
        return "My new balance is : ".concat(this.balance + balance);
    }
};
var arr = [1, 3, 5];
var newArray = arr.map(function (num) { return num * num; });
