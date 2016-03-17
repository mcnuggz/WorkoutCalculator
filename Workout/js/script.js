"use strict"

$(function(){
    $("#printRoutine").click(function(){
        getWorkout($("#name").val(), $("#weight").val(), $("repetitions").val())
    });
});

var getWorkout = function(name, weight, reps){
        var exercises = new Exercises();
        var exTable = new RoutineTable(name, weight, reps);
        createRoutineTable(RoutineTable.displayRoutine);
        var gatherTotals = new GetTotals(RoutineTable.displayRoutine);
        createRoutineTable(gatherTotals.totals);
}

function RoutineTable(name, weight, reps){
    var exercises = new Exercises();
    var upperName = name.toUpperCase();
    this.displayRoutine = [];
    for (var i = 0; i < name.length; i++) {
        var tableName = exercises.exerciseDict[upperName[i]]['name'];
        var tableReps = exercises.exerciseDict[upperName[i]]['repetition'] * reps;
        var mets = exercises.exerciseDict[upperName[i]]['mets'];
        var duration = exercises.exerciseDict[upperName[i]]['duration'];
        var burnedCalories = mets * 0.0175 * weight * (duration/60.0);
        this.displayRoutine.push({Exercises: tableName, Repetitions: tableReps, Calories: burnedCalories});
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
function Exercises(){
    this.exerciseDict = {
        A: {name: "Jumping Jacks", repititions: 50, duration: 1, mets: 8},
        B: {name: "Crunches", repititions: 20, duration: 1, mets: 4},
        C: {name: "Squats", repititions: 30, duration: 3, mets: 6},
        D: {name: "Pushups", repititions: 15, duration: 1, mets: 4},
        E: {name: "Wall Sit", repititions: 60, duration: 1, mets: 2},
        F: {name: "Burpees", repititions: 10, duration: 3, mets: 8},
        G: {name: "Arm Circles", repititions: 20, duration: 1, mets: 2},
        H: {name: "Squats", repititions: 20, duration: 3, mets: 6},
        I: {name: "Jumping Jacks", repititions: 30, duration: 1, mets: 8},
        J: {name: "Crunches", repititions: 15, duration: 1, mets: 4},
        K: {name: "Pushups", repititions: 10, duration: 1, mets: 4},
        L: {name: "Wall Sit", repititions: 120, duration: 1, mets: 2},
        M: {name: "Burpees", repititions: 20, duration: 3, mets: 8},
        N: {name: "Burpees", repititions: 25, duration: 3, mets: 8},
        O: {name: "Jumping Jacks", repititions: 25, duration: 1, mets: 8},
        P: {name: "Arm Circles", repititions:15, duration: 1, mets: 2},
        Q: {name: "Crunches", repititions: 30, duration: 1, mets: 4},
        R: {name: "Pushups", repititions: 15, duration: 1, mets: 4},
        S: {name: "Burpees", repititions: 30, duration: 3, mets: 8},
        T: {name: "Squats", repititions:  15, duration: 3, mets: 6},
        U: {name: "Arm Circles", repititions: 30, duration: 1, mets: 2},
        V: {name: "Wall Sit", repititions: 3, duration: 1, mets: 2},
        W: {name: "Burpees", repititions: 20, duration: 3, mets: 8},
        X: {name: "Jumping Jacks", repititions: 60, duration: 1, mets: 8},
        Y: {name: "Crunches", repititions: 10, duration: 1, mets: 4},
        Z: {name: "Pushups", repititions: 20, duration: 1, mets: 4},
     };
}
