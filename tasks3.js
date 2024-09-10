// Task 1: Concatenate Two Strings Without Using Methods
// Description: Manually append the characters of one string to another,
//  character by character, without using any built-in string methods.
      string1 =`Hello`;
      string2 = `World`;
      console.log(`"${string1+string2}"`);
    // Task 2: Create and Display an Object Manually
    // Description: Create an object to store details of a student (name, age, grade).
    //  Display the student’s details by manually accessing object properties (no methods/functions).
    var student = {
    Name:"johan",
    Age: 20,
    Grade:"A"
    }; console.log(`
    Name: ${student.Name}
    Age:${student.Age}
    Grade: ${student.Grade}`);
// Task 3: Count Occurrences of a Specific Character in a String Without Using Methods
// Description: Manually count the number of occurrences of a specific character in a given string.
  var name =`ammma`
  var char=`m`
  count=0
  for(i=0;i<=name.length-1;i++){
    if(char==name[i]){
        count=count+1
    }
  }
console.log( `${count}  \(the character ${char} is appear ${count} times in
\"${name}\")`);
