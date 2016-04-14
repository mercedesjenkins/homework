//when the user clicks the #fahrenheit_to_celsius button
//Get the value from #temperature and store in variable fahrenheit
//Convert that value to a number

//convert to celsius and store in varibale celsius
//display in #result 

console.log('does this thing work?')


//if text box is empty - purple alert//




$('#fahrenheit_to_celsius').on('click', function () {
	var fahrenheit= $('#temperature').val();
	if(fahrenheit == ""){
		console.log('whaaat')
		$('.error-message').show();
		$('.error-message').html('you done fucked up');
	}
	else {
		fahrenheit = parseFloat(fahrenheit);
		var celsius = (fahrenheit - 32) / 1.8;
		$('#temperature').val(celsius + String.fromCharCode(176)+ "C");
	}
	console.log('fahrenheit', fahrenheit)
	
});

$('#celsius_to_fahrenheit').on('click', function () {
	var celsius= $('#temperature').val();
	celsius = parseFloat(celsius);

	var fahrenheit = (celsius * 9/5) + 32;
$('#temperature').val(fahrenheit + String.fromCharCode(176)+ "F");

});
