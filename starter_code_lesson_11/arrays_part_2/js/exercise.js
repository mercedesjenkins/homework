/**
* Javascript Exercise: Data Types

* SYNTAX IS ON YOUR CHEAT SHEETS!!!

* Print the variables to the console for each question.
	(i.e) console.log("Question 1: " + images)

*/

/**
* Question 1

* Create an array of image sources and store it to the variable images.
* Use "image1.jpeg", "image2.jpeg", and "image3.jpeg" as the array values.

* Print the images array to the console.
	(i.e) console.log("Question 1: " + images);

-----------------------------------------------------------------------------*/
var images = ["image1.jpeg", "image2.jpeg", "image3.jpeg"];




/**
* Question 2

* Using the images array from Question 1 store the 
  first element of the array in a variable named firstImage.

* Print the firstImage variable to the console.

-----------------------------------------------------------------------------*/
var firstImage = images[0];
console.log(firstImage);



/**
* Question 3

* Get the length of images (number of elements in the array)
  and store it in a variable named numberImages

* Print the numberImages variable to the console.

-----------------------------------------------------------------------------*/
var numberImages = images.length;
console.log(numberImages);



/**
* Question 4

* Store the last element in the images array in a variable named lastImage.
	Hint: You'll need to use the length property.

* Print the lastImage variable to the console.

-----------------------------------------------------------------------------*/
var lastImage = images[numberImages - 1];


/**
* Question 5

* Using the variables from questions 2 and 4 and jquery's attr() method,
  write code that would change the src of the first image on the page to the image stored in the variable firstImage 
  and the last image on the page to the src stored in lastImage.

* Use the error message in the console to troubleshoot why the images still don't show up
-----------------------------------------------------------------------------*/
$('#firstImage').attr('src', 'images/' + firstImage);
$('#lastImage').attr('src', 'images/' + firstImage);







