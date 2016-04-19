//when click on f to c button
$('#fahrenheit_to_celsius').on('click', function () {

//grabbing what user input and displaying as f
	var fahrenheit = $('#temperature').val();

// if that variable is empty show error
	if (fahrenheit === '') {

		addErrorStyles();

	} else {
//otherwise clear error and display a number 
		clearErrorStyles();

		fahrenheit = parseFloat(fahrenheit);
//use formula store data in variable celsius
		var celsius = (fahrenheit - 32) / 1.8;
//run function to change background color based on result 
		changeBackgroundColor(fahrenheit);

		// show results + put a degree sign after the #
		$("#result").html(fahrenheit + "&deg;F = " + celsius + "&deg;C");

		//clear the value 
		$('#temperature').val('');
	}



});

//when click on c to f button
$('#celsius_to_fahrenheit').on('click', function () {
//grabbing what user input and displaying as c
	var celsius = $('#temperature').val();
// if that variable is empty show error
	if (celsius === '') {

		addErrorStyles();

	} else {
//otherwise clear error and display a number 
		clearErrorStyles();

		celsius = parseFloat(celsius);
//use formula store data in variable fahrenheit 
		var fahrenheit = 1.8 * celsius + 32;
//run function to change background color based on result 
		changeBackgroundColor(fahrenheit);
// show results + put a degree sign after the #
		$("#result").html(celsius + "&deg;C = " + fahrenheit + "&deg;F");
//clear the value 
		$('#temperature').val('');
	}
	
});

//fucntion to add error message 
function addErrorStyles () {
//
	$('#result').hide();
//hides user input 
	$('#temperature').addClass('error');
//if user puts anything else instead of # in here
	$('.error-message').fadeIn(300);
//error message fades in 
	$('body').removeClass('cold cool warm hot');
//remove all the classes	
}
//clear all input 
function clearErrorStyles () {
//once use types correct input hide error message
	$('.error-message').hide();
//remove the class error
	$('#temperature').removeClass('error');
//show correct result 
	$('#result').fadeIn(300);

}

//creating a function to change the background color based on temp.
function changeBackgroundColor (temp) {

	// if temperature is less than or equal to 32 
	if (temp <= 32) {
	//body will get the class cold
		$('body').attr('class', 'cold');
	//or if temp is less than or equal to 50
	} else if (temp <= 50) {
	//body will get the class cool
		$('body').attr('class', 'cool');
	// if temperature is less than or equal to 70
	} else if (temp <= 70) {
	//body will get the class warm
		$('body').attr('class', 'warm');

	} else {
	//otherwise body will get class hot 
		$('body').attr('class', 'hot');

	}
}
