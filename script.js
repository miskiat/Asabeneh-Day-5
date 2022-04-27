//Exercise: Level 1

//1.Declare an empty array;
const arr = Array();
console.log(arr);
//2.Declare an array with more than 5 number of elements
const countries = [
  "Canada",
  "Bolivia",
  "Ireland",
  "Finland",
  "Japan",
  "Germany",
  "Japan",
];
console.log(countries);
//3.Find the length of your array
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
console.log(webTechs.length);
//4.Get the first item, the middle item and the last item of the array
const Techs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
let firstTechs = Techs[0];
console.log(firstTechs);
let middleTechs = Techs[4];
console.log(middleTechs);
let lastTechs = Techs[6];
console.log(lastTechs);
//5.Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than
const mixedDataTypes = [
  "string",
  "null",
  "undefined",
  "symbol",
  "numbers",
  "booleans",
];
console.log(mixedDataTypes);
//6.Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
//7.Print the array using console.log()
console.log(itCompanies);
//8.Print the number of companies in the array
console.log("Numbers of itCompanies:", itCompanies.length);
//9.Print the first company, middle and last company
let firstitCompanies = itCompanies[0];
console.log(firstitCompanies);
let middleitCompanies = itCompanies[3];
console.log(middleitCompanies);
let lastitCompanies = itCompanies[6];
console.log(lastitCompanies);
//10.Print out each company
console.log(itCompanies.toString());
//11.Change each company name to uppercase one by one and print them out
console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());
//12.Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
let sen =
  "Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.";
console.log(sen.concat(""));
//13.Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
const companies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
let index = companies.indexOf("Facebook");
if (index === 1) {
  console.log("this company exist in an array");
} else {
  console.log("this company doesnt exist in an array");
}
//14.Filter out companies which have more than one 'o' without the filter method
let company = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

//15.Sort the array using sort() method
const companyy = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
companyy.sort();
console.log(companyy);
//16.Reverse the array using reverse() method
companyy.reverse();
console.log(companyy);
//17.Slice out the first 3 companies from the array
const companyyy = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
console.log(companyyy.slice(0, 3));
//18.Slice out the last 3 companies from the array
console.log(companyyy.slice(4, 7));
//19.Slice out the middle IT company or companies from the array
console.log(companyyy.slice(3, 4));
//20.Remove the first IT company from the array
companyyy.shift();
console.log(companyyy.shift());
//21.Remove the middle IT company or companies from the array
companyyy.shift();
console.log(companyyy.shift(4));
//22.Remove the last IT company from the array
console.log(companyyy.pop());
//23.Remove all IT companies
console.log(companyyy.splice());

//Exercise: Level 2
//1.Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

//const countries = [
//'Albania',
//'Bolivia',
//'Canada',
//'Denmark',
//'Ethiopia',
//'Finland',
//'Germany',
//'Hungary',
//'Ireland',
//'Japan',
//'Kenya'
//]

//const webTechs = [
//'HTML',
//'CSS',
//'JavaScript',
//'React',
//'Redux',
//'Node',
//'MongoDB'
//]
//2.First remove all the punctuations and change the string to array and count the number of words in the array
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let sun = /.,/g;
let set = text.replace(sun, " ");
console.log(set);
console.log(set.split(" "));
console.log(set.length);

//3.In the following shopping cart add, remove, edit items

//const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//add 'Meat' in the beginning of your shopping cart if it has not been already added
//add Sugar at the end of you shopping cart if it has not been already added
//remove 'Honey' if you are allergic to honey
//modify Tea to 'Green Tea'

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
shoppingCart.unshift("Meat");
console.log(shoppingCart);
shoppingCart.push("Sugar");
console.log(shoppingCart);
shoppingCart.splice(4);
console.log(shoppingCart);
shoppingCart[2] = "Green Tea";
console.log(shoppingCart);
//4.In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list
//const country = [
//"Albania",
//"Bolivia",
//"Canada",
//"Denmark",
//"Ethiopia",
//"Finland",
//"Germany",
//"Hungary",
//"Ireland",
//"Japan",
//"Kenya",//let indexx = country.indexOf["Ethiopia"];
//if (indexx === -1) {
//console.log("ETHIOPIA");
//}
//5.In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
//6.Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

//Exercise: Level 3
//The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
//Sort the array and find the min and max age
//Find the median age(one middle item or two middle items divided by two)
//Find the average age(all items divided by number of items)
//Find the range of the ages(max minus min)
//Compare the value of (min - average) and (max - average), use abs() method 1.
//Slice the first ten countries from the c

ages.sort();
console.log(ages);
console.log(Math.max(...ages));
console.log(Math.min(...ages));

const half = Math.floor(ages.length / 2);

if (ages.length % 2 == 0) {
  console.log((ages[half] + ages[half - 1]) / 2);
} else {
  console.log(ages[half]);
}
//2.Find the middle country(ies) in the countries array
const country = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
const halff = Math.floor(country.length / 2);
console.log(country[halff]);

//3.Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
const halfff = Math.floor(country.length / 2);
if (country.length % 2 == 0) {
  console.log((country[halfff] + country[halfff - 1]) / 2);
} else console.log(country[halfff]);
