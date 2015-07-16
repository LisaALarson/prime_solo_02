// ! ! !
// Three Bugs\\
//Bug #1 - remove "-1" at the end of the switch where it says "return basePercent"
//Bug #2 - in the for loop an "[i]" needs to be added after "array" in  "calculateSTI(array)" in order to loop through all the people.
//Bug #3 - Math.round needs to be added at "newArray[3]" so that the bonus is rounded to the nearest dollar amount.
console.log("working");


function person(name, employeeNumber, baseSalary, reviewScore){
  this.name = name;
  this.employeeNumber = employeeNumber;
  this.baseSalary = baseSalary;
  this.reviewScore = reviewScore;
}

var atticus = new person("Atticus", "2405", "47000", 3);
var jem = new person("Jem", "62347", "63500", 4);
var boo = new person("Boo", "11435", "54000", 3);
var scout = new person("Scout", "6243", "74750", 5);

console.log(atticus);



//var arrayAtticus = ["Atticus", "2405", "47000", 3];
//var arrayJem = ["Jem", "62347", "63500", 4];
//var arrayBoo = ["Boo", "11435", "54000", 3];
//var arrayScout = ["Scout", "6243", "74750", 5];

var array = [atticus, jem, boo, scout];

//Create variables used to write to the DOM
var newEl, newText, position;
//Capture the position of insertion into the DOM
position = document.getElementById('content');

//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'
for(var i = 0; i < array.length; i++){
	array[i] = calculateSTI(array[i]);
 	newEl = document.createElement('li');
	newText = document.createTextNode(array[i].join(", "));
	newEl.appendChild(newText);
	position.appendChild(newEl);
}

function calculateSTI(person){
  var newArray = [];

  newArray[0] = person.name;

  var employeeNumber = person.employeeNumber;
  var baseSalary = person.baseSalary;
  var reviewScore = person.reviewScore;

  var bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);
  if(bonus > 0.13){
    bonus = 0.13;
  }

  newArray[1] = bonus;
  newArray[2] = Math.round(baseSalary * (1.0 + bonus));
  newArray[3] = Math.round(baseSalary * bonus);
  console.log(newArray[0] + " " + newArray[1] + " " + newArray[2] + " " + newArray[3]);
  return newArray;
}

function getBaseSTI(reviewScore){
  var basePercent;
  switch(reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
  }
  return basePercent;
}

function getYearAdjustment(employeeNumber){
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
}

function getIncomeAdjustment(salary){
  var incomeAdjustment = 0;
  salary = parseInt(salary);
  if(salary > 65000){
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;
}