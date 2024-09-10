// ----task-4---
// Description: Create an object representing a car (make, model, year, color) 
// and manually retrieve and display the properties.
var student={
    "name":"Bhavani",
    "course":"full stack",
    "birth":"2004",
    "color":"block"
    };
    for(var index in student){
        console.log(`${index} : ${student[index]}`);
    }
    // Task 5: Manually Reverse a String
    // Description: Write a program to reverse a string character by character without
    //  using any built-in string methods or functions.
     var string="BHAVANI";
    space=``;
    for(var i=string.length-1;i>=0;i--){
        space+=string[i];
    }
    console.log(space);