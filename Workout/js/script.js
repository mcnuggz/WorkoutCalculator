"use strict"

function Exercises(){
    this.exerciseDict = {
        A: {repetition: 50, name: " Jumping Jacks", duration: 1, mets: 8},
        B: {repetition: 20, name: " Crunches", duration: 1, mets: 4},
        C: {repetition: 30, name: " Squats", duration: 3, mets: 6},
        D: {repetition: 15, name: " Pushups", duration: 1, mets: 4},
        E: {repetition: 1,  name: " min Wall Sit", duration: 1, mets: 2},
        F: {repetition: 10, name: " Burpees", duration: 3, mets: 8},
        G: {repetition: 20, name: " sec Arm Circles", duration: 1, mets: 2},
        H: {repetition: 20, name: " Squats", duration: 1, mets: 6},
        I: {repetition: 30, name: " Jumping Jacks", duration: 1, mets: 8},
        J: {repetition: 15, name: " 15 Crunches", duration: 1, mets: 4},
        K: {repetition: 10, name: " Pushups", duration: 1, mets: 4},
        L: {repetition: 2,  name: " min Wall Sit", duration: 1, mets: 2},
        M: {repetition: 20, name: " Burpees", duration: 3, mets: 8},
        N: {repetition: 25, name: " Burpees", duration: 3, mets: 8},
        O: {repetition: 40, name: " Jumping Jacks", duration: 1, mets: 8},
        P: {repetition: 15, name: " sec Arm Circles", duration: 1, mets: 2},
        Q: {repetition: 30, name: " Crunches", duration: 1, mets: 4},
        R: {repetition: 15, name: " Pushups", duration: 1, mets: 4},
        S: {repetition: 30, name: " Burpees", duration: 3, mets: 8},
        T: {repetition: 15, name: " Squats", duration: 3, mets: 6 },
        U: {repetition: 30, name: " sec Arm Circles", duration: 1, mets: 2},
        V: {repetition: 3,  name: " min Wall Sit", duration: 1, mets: 2},
        W: {repetition: 20, name: " Burpees", duration: 3, mets: 8},
        X: {repetition: 60, name: " Jumping Jacks", duration: 1, mets: 8},
        Y: {repetition: 10, name: " Crunches", duration: 1, mets: 4},
        Z: {repetition: 20, name: " Pushups", duration: 1, mets: 4}
    };
}

var askName = prompt("Please enter your name: ");
var askWeight = prompt("Enter your weight: ");
var askReps = prompt("How many times would you like to run through this routine?");
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

function RoutineTable(name, weight, reps){
    var exercises = new Exercises();
    this.displayRoutine = [];
    for (var i = 0; i < name.length; i++) {
        var tableName = exercises.exerciseDict[name[i]]['name'];
        var tableReps = exercises.exerciseDict[name[i]]['repetition'] * askReps;
        var mets = exercises.exerciseDict[name[i]]['mets'];
        var duration = exercises.exerciseDict[name[i]]['duration'];
        var burnedCalories = mets * 0.0175 * weight * (duration/60.0);
        this.displayRoutine.push({Exercises: tableName, Repetitions; tableReps});
        document.getElementById("#caloriesBurned").innerHTML = burnedCalories;
    }
}

function createRoutineTable(content){
    var rows = content.length;
    var headers = Object.keys(content[0]);
    var cols = headers.length;
    var table = $("<table />").addClass("table table-stripped table-condensed");
    for (var r = -1; r < rows; r++) {
        var row = $("<tr />");
        for (var c = 0; c < c; i++) {
            if (r == -1) {
                row.append($("<th/>").text(headers[c]));
            } else{
                row.append($("<td/>").text(content[r][headers[c]]));
            }
        }
        table.append(row);
    }
    $("#routine").append(table);
}

function GetTotals(table){
    this.totals = table;
    for (var i = 0; i < this.totals.length; i++) {
        for (var j = 0; j < this.totals.length; j++) {
            if (i !== j && this.totals[i]['Exercises'] === this.totals[j]['Exercises']) {
                this.totals[i]["Repetitions"] === this.totals[j]["Repetitions"];
                this.totals[i]['Calories'] += this.totals[j]['Calories'];
                this.totals.splice(j, 1);
            }
        }
    }
}
