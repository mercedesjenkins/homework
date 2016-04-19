
// -------------------------------------------------------------------------------
// Part 1 - Compare two numbers! (use the cheat sheet for reference)
// -------------------------------------------------------------------------------

// SYNTAX IS ON YOUR CHEAT SHEETS!!!!

// 1. Declare a variable called "groceries" and assign it an array of strings:
// "milk", "eggs", "salmon", "asparagus"
var groceries = ["milk", "eggs", "salmon", "asparagus"]; 

// 2. Add a fifth item to the array: "apples"
groceries[4] = "apples";

// 3. Replace the second item in the array. The new value should be "brussel sprouts"
groceries[1] ="brussel sprouts";

// 4. Add a sixth item to the array: "oranges"

groceries[5] = "oranges";



// This code will print out each item to the page so 
// you can check your work in the browser as you code.
groceries.forEach(function(element, index){
    $('ul').append('<li>' + element + '</li>');
});