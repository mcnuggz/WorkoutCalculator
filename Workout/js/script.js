"use strict"
var askName = prompt("Please enter your name: ");
var askWeight = prompt("Enter your weight: ");

var obj = letterFrequency(askName);

var table = document.createElement("table");
Object.keys(obj).forEach(function(key){
    var tr = document.createElement("tr");

    var tdKey = document.createElement("td");
    var textKey = document.createTextNode(key);
    tdKey.appendChild(textKey);

    var tdValue = document.createElement("td");
    var textValue = document.createTextNode(obj[key]);
    tdValue.appendChild(textValue);
    tr.appendChild(tdKey);
    tr.appendChild(tdValue);
    table.appendChild(tr);
});
document.getElementById("letterTable").appendChild(table);

function letterFrequency(text){
 var count = {};
 text.split('').filter(function(s) {
   return s.match(/[a-z]/i);
 }).forEach(function(s) {
   s = s.toUpperCase();
   count[s] = count[s] ? count[s]+1 : 1;
 });
 return count;
}

var exercise ={
  "j": [8.0, 50],
  "c": [4.0, 20],
  "s": [6.0, 90],
  "p": [4.0, 15],
  "b": [8.0, 30],
  "a": [3.0, 20],
  "w": [2.0, 120]
}
var exerciseDict = {
  "A": [exercise["j"], 50, "Jumping Jacks"],
  "B": [exercise["c"], 20, "Crunches"],
  "C": [exercise["s"], 30, "Squats"],
  "D": [exercise["p"], 15, "Pushups"],
  "E": [exercise["w"], 1, "min Wall Sit"],
  "F": [exercise["b"], 10, "Burpees"],
  "G": [exercise["a"], 20, "sec Arm Circles"],
  "H": [exercise["s"], 20, "Squats"],
  "I": [exercise["j"], 30, "Jumping Jacks"],
  "J": [exercise["c"], 15, "15 Crunches"],
  "K": [exercise["p"], 10, "Pushups"],
  "L": [exercise["w"], 2, "min Wall Sit"],
  "M": [exercise["b"], 20, "Burpees"],
  "N": [exercise["b"], 25, "Burpees"],
  "O": [exercise["j"], 40, "Jumping Jacks"],
  "P": [exercise["a"], 15, "sec Arm Circles"],
  "Q": [exercise["c"], 30, "Crunches"],
  "R": [exercise["p"], 15, "Pushups"],
  "S": [exercise["b"], 30, "Burpees"],
  "T": [exercise["s"], 15, "Squats"],
  "U": [exercise["a"], 30, "sec Arm Circles"],
  "V": [exercise["w"], 3, "min Wall Sit"],
  "W": [exercise["b"], 20, "Burpees"],
  "X": [exercise["j"], 60, "Jumping Jacks"],
  "Y": [exercise["c"], 10, "Crunches"],
  "Z": [exercise["p"], 20, "Pushups"]
};

function calculateMets(value){
    var time = value[1] / value[0][1];
    var mets = value[0][0] * time;
    return mets;
}
function calculateBurnedCalories(weight, letter){
    var letterObject = letter;
    var mets = calculateMets(letterObject);
    var burnedCalories = (mets * 3.5 * weight / 200) * (letterObject[1]/60)
    return burnedCalories;
}

function displayRoutine(){
    var getCount = letterFrequency(askName);
    getCount.
    document.getElementById("routine");
}
