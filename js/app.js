// console.log("its working!");

// function statement, defeniation
function adder(num1, num2) {
  return num1 + num2;
}

// function expression
const adder2 = function (num1, num2) {
  return num1 + num2;
};

// ES5+ Arrow Functions
const adder3 = (num1, num2) => {
  return num1 + num2;
};

// function expression , function defination ?

const name = "Majid";
const family = "Amini";
const lastNameExperssion = "My name is " + name + " and my family " + family;
// const lastNameExperssion = `My name is ${name} and my family is ${family} `;
// console.log(lastNameExperssion);

// functions, function expression , function defination, strings
// objects

const majidObj = { name: "majid", family: "amini" };

// console.log(majidObj.hasOwnProperty("family"));
// list of the keys
const keys = Object.keys(majidObj);
// console.log(keys.length);
const values = Object.values(majidObj);
// console.log(values);

const entries = Object.entries(majidObj);
// console.log(entries);

const majidIncome = [100, 110, 200, 500, 1000, 2500, 5000, 500000];

for (let el of majidIncome) {
  console.log("array", el);
}

for (let item in majidObj) {
  console.log("obj", item);
}
