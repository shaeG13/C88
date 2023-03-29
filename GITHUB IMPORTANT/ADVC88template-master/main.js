
var canvas  = new fabric.canvas('myCanvas')

ball_y=0;
ball_x=0;
hole_y=400;
hole_x=400;


block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h1.png", function (Img) {
		hole_obj = Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
		top: hole_y,
	new_image();
}

function new_image()
{
	if((ball_x==hole_x)&&(ball_y==hole_y)){ canvas.remove(ball_obj);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	document.getElementById("hd3").innerHTML="You have Hit the Goal!!!";
document.getElementById("myCanvas").style.borderColor="red";
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		function down()
if(ball_y <=450)
ball_y ball_y + block_image_height;
console.log("block image height = " + block_image_height);
console.log("When Down arrow key is pressed, X = " + ball_x + canvas.remove(ball_obj);
new_image();
Y = "+ball_y);
}
}
	}

	function down()
	{
		 // Write a code to move ball downward.
	}

	function left()
	{
		if(ball_x >5)
		{
			// Write a code to move ball left side.
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			// Write a code to move ball right side.
		}
	}
	
}

