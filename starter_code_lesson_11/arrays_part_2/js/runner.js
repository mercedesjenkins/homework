// Runner for the exercises
function check(num, answer) {
  if(answer) {
	$("body").append("<p>Question " + num + ": Correct!</p>");
  } else {
	$("body").append("<p style=\"color:red;\">Question " + num + ": Try Again.</p>");
  }
  $("body").append("<p>- - - - - - - - - - - - - - - - - - - - - -</p>")
}

function is_empty(obj) {
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  if (obj.length && obj.length > 0)    return false;
  for (var key in obj) {
	if (hasOwnProperty.call(obj, key))    return false;
  }
  return true;
}


check(1, images && images.length == 3 && (images[0] == 'image1.jpeg' || images[0] == 'images/image1.jpeg') && (images[1] == 'image2.jpeg' || images[1] == 'images/image2.jpeg') && (images[2] == 'image3.jpeg' || images[2] == 'images/image3.jpeg'));
check(2, firstImage && (firstImage == 'image1.jpeg' || firstImage == 'images/image1.jpeg'));
check(3, numberImages && numberImages == 3);
check(4, numberImages && (lastImage == 'image3.jpeg' || lastImage == 'images/image3.jpeg'));
check(5,$("img").eq(0).attr("src")=="images/image1.jpeg" && $("img").eq(1).attr("src")=="images/image3.jpeg");
$("body").append("<h3>Checking Complete!</h3>");