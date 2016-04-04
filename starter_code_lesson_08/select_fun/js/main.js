/**
*
* Part 1:
*
*/

// 1. Go to style.css and add a class called fun. Style that class with your choice of background-color and text color.

// 2. Using jQuery, add the fun class to the elements with the class .box
$('.box').addClass('fun'); 

// 3. When #box2 is clicked on
$('#box2').on('click', function() {
	$('.box').removeClass('crazy');
	$('h1').addClass('crazy');	
	$('#box3').slideToggle(3000);

	// a) Remove the crazy class from all the items with a class of .box
	// b) Add the crazy class to the h1
	// c) Slide toggle #box3

});

// 4. When any .box is clicked, change the text in the header's h1 tag to read "jQuery Ninja"
$('.box').on('click', function () {
	$('h1').html('jQuery Ninja');


});



// 5. Have the following code execute when the #box1 is clicked. Write a JavaScript comment with a description of what happened. 
$('#box1').on('click', function () {
	$(".moto").attr("src", "images/moto.jpg")
//when I clicked on it a picture of a mo-ped came up
});

// 



/**
*
* Part 2:
*
*/

// 6. Hide the item with the id #dropdownMenu
$('#dropdownMenu').hide(3000);

// 7. When the element with the id #dropdownButton is clicked,
	// a) slide toggle #dropdownMenu
$('#dropdownMenu').on('click', function () {
	$('#dropdownMenu').slideToggle(3000);

});


/**
*
* Part 3:
*
*/

// 8. Hide the item with the id #answer2
$('#answer2').hide(3000);

// 9. Show the item with the id #answer1
$('#answer1').show(3000);

// 10. When #question2 is clicked:
	// a) Slide down #answer2
	// b) Slide up #answer1
	// c) Remove the active class from all list items
	// d) Add the active class to #question2
$('#question2').on('click', function() {
	$('#answer2').slideDown(3000);
	$('#answer1').slideUp(3000);
	$('li').removeClass('active class');
	$('#question2').addClass('active class');
});
	


// 11. When #question1 is clicked:
	// a) Slide down #answer1
	// b) Slide up #answer2
	// c) Remove the active class from all list items
	// d) Add the active class to #question1
$('#question1').on('click', function() {
$('#question1').slideDown(3000);
$('#answer2').slideUp(3000);
$('li').removeClass('active class');
$('#question1').addClass('active class');

});





