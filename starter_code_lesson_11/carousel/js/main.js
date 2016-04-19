


//create an array of image paths 
var images = ["images/image_1.jpg","images/image_2.jpg","images/image_3.jpg","images/image_4.jpg","images/image_5.jpg","images/image_6.jpg"]

//set a variable for our currentPosition
var currentPosition = 0;

//images[0]
//images[currentPosition] = images[0]
//when the user clicks on the next button 
$('#next').on('click', function (){
	$('#prev').prop("disabled", false);
	//add one to the currentPosition 
	currentPosition = currentPosition + 1;
	//if currentPosition is the last index
	if (currentPosition === images.length - 1) {

		//disable the next button 
		$('#next').prop("disabled",true);
	}
//change the src of #image-to-vote-on to current image
$('#image-to-vote-on').attr("src", images[currentPosition] )
console.log("currentPosition", images[currentPosition])

});



//when the user clicks on the previous button 
$('#prev').on('click', function (){

//take one away from the currentPostion
currentPosition = currentPosition - 1;
//if currentPosition is the last index
if (currentPosition === 0) {

	//disable the previous button
	$('#prev').prop("disabled", true);
}

$('#image-to-vote-on').attr("src",images[currentPosition])

});



//when the user clicks on the downvote button
var votes = [0,0,0,0,0,0];


$('#downvote').on('click', function (){

//-1 vote 
votes = votes -1;
if (votes === 0) {


}
//if user clicks downvote button -1 likes 
//each image has its own votes 



});



//when the user clicks on the upvote button
$('#upvote').on('click', function (){

//+1 vote 
//if user clicks upvote button +1 likes 
//each image has its own votes 

});




