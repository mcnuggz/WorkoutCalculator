"use strict"

$(function(){
    $("#printRoutine").click(function(){
        getWorkout($("#name").val(), $("#weight").val(), $("#reps").val())
    });
});

var getWorkout = function(name, weight, reps){
        var exTable = new RoutineTable(name, weight, reps);
        createRoutineTable(exTable.displayRoutine);
        var gatherTotals = new GetTotals(exTable.displayRoutine);
        createRoutineTable(gatherTotals.totally);
        var calculateCalories = new CalculateCalories(calculateCalories.totalCals);
        createRoutineTable(calculateCalories.totalCals);
}

function RoutineTable(name, weight, reps){
    var exercises = new Exercises();
    name = name.replace(/\s+/g, '');
    var upperName = name.toUpperCase();
    this.displayRoutine = [];
    for (var i = 0; i < name.length; i++) {
        var tableName = exercises.exerciseDict[upperName[i]]['name'];
        var tableReps = exercises.exerciseDict[upperName[i]]['repetitions'] * reps;
        var mets = exercises.exerciseDict[upperName[i]]['mets'];
        var duration = exercises.exerciseDict[upperName[i]]['duration'];
        var burnedCalories = (mets * 3.5 * weight * (duration/60.0).toFixed(2));
        this.displayRoutine.push({Exercises: tableName, Reps: tableReps, Calories: burnedCalories});
    }
}

function createRoutineTable(content){
    var rows = content.length;
    var headers = Object.keys(content[0]);
    var cols = headers.length;
    var table = $("<table />");
    for (var r = -1; r < rows; r++) {
        var row = $("<tr />")
        for (var c = 0; c < cols; c++) {
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
    var total = new Totals();
    this.data = total.totals;
    this.totally = [];
    for (var i = 0; i < table.length; i++) {
        for (var j = 0; j < this.data.length; j++) {
            if (this.data[j].Exercise === table[i].Exercise) {
                this.data[j].Repetitions += table[i].Repetitions;
                this.data[j].Calories += table[i].Calories.toFixed(2);
            }
        }
    }
    for(let total of this.data){
        if(total.Repetitions !== 0){
            this.totals.push(total);
        }
    }
}

function CalculateCalories(totals){
    this.totalCals = [{"Total Burned Calories": 0}]
    for (let total of totals) {
        this.totalCals[0]["Total Burned Calories"] += total.Cals.toFixed(2);
    }
}

function Totals(){
    this.totals = [
        {Exercise: 'Jumping Jacks', Repetitions: 0, Calories: 0},
        {Exercise: 'Crunches', Repetitions: 0, Calories: 0},
        {Exercise: 'Squats', Repetitions: 0, Calories: 0},
        {Exercise: 'Pushups', Repetitions: 0, Calories: 0},
        {Exercise: 'Wall Sit', Repetitions: 0, Calories: 0},
        {Exercise: 'Burpees', Repetitions: 0, Calories: 0},
        {Exercise: 'Arm Circles', Repetitions: 0, Calories: 0}
    ];
}

function Exercises(){
    this.exerciseDict = {
        A: {name: "Jumping Jacks", repetitions: 50, duration: 1, mets: 8},
        B: {name: "Crunches", repetitions: 20, duration: 1, mets: 4},
        C: {name: "Squats", repetitions: 30, duration: 3, mets: 6},
        D: {name: "Pushups", repetitions: 15, duration: 1, mets: 4},
        E: {name: "Wall Sit", repetitions: 60, duration: 1, mets: 2},
        F: {name: "Burpees", repetitions: 10, duration: 3, mets: 8},
        G: {name: "Arm Circles", repetitions: 20, duration: 1, mets: 2},
        H: {name: "Squats", repetitions: 20, duration: 3, mets: 6},
        I: {name: "Jumping Jacks", repetitions: 30, duration: 1, mets: 8},
        J: {name: "Crunches", repetitions: 15, duration: 1, mets: 4},
        K: {name: "Pushups", repetitions: 10, duration: 1, mets: 4},
        L: {name: "Wall Sit", repetitions: 120, duration: 1, mets: 2},
        M: {name: "Burpees", repetitions: 20, duration: 3, mets: 8},
        N: {name: "Burpees", repetitions: 25, duration: 3, mets: 8},
        O: {name: "Jumping Jacks", repetitions: 25, duration: 1, mets: 8},
        P: {name: "Arm Circles", repetitions:15, duration: 1, mets: 2},
        Q: {name: "Crunches", repetitions: 30, duration: 1, mets: 4},
        R: {name: "Pushups", repetitions: 15, duration: 1, mets: 4},
        S: {name: "Burpees", repetitions: 30, duration: 3, mets: 8},
        T: {name: "Squats", repetitions:  15, duration: 3, mets: 6},
        U: {name: "Arm Circles", repetitions: 30, duration: 1, mets: 2},
        V: {name: "Wall Sit", repetitions: 3, duration: 1, mets: 2},
        W: {name: "Burpees", repetitions: 20, duration: 3, mets: 8},
        X: {name: "Jumping Jacks", repetitions: 60, duration: 1, mets: 8},
        Y: {name: "Crunches", repetitions: 10, duration: 1, mets: 4},
        Z: {name: "Pushups", repetitions: 20, duration: 1, mets: 4},
     };
}
