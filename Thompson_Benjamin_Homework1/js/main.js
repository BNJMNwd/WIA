/*
     Name: Benjamin Thompson
     Date: 9/11/14
     Class & Section:  WIA-Sec 01
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/


window.onload = function() {


if(Modernizr.canvas){



/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message


 */


/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

//Draw Rectangle here


    //Canvas 1


    var theCanvas = document.getElementById("Canvas1");
    var ctx = theCanvas.getContext("2d");

    ctx.save();
    ctx.strokeStyle = "black";
    ctx.fillStyle = "lightblue";
    ctx.lineWidth= 3;

    ctx.fillRect(0,0,50, 100);
    ctx.strokeRect(0,0,50,100);







/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/


//Draw Circle here


    //Canvas 2

    var theCanvas = document.getElementById("Canvas2");
    var ctx = theCanvas.getContext("2d");

    ctx.strokeStyle= "black";
    ctx.fillStyle = "red";
    ctx.lineWidth = 3;


    var degrees = 360;
    var radians = (degrees/180)*Math.PI;

    ctx.beginPath();
    ctx.arc(50, 50, 20, 0, radians);
    ctx.fill();
    ctx.stroke();



    /*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/


//Draw Star here

    //Canvas 3

    var theCanvas = document.getElementById("Canvas3");
    var ctx = theCanvas.getContext("2d");


    ctx.strokeStyle = "black";
    ctx.fillStyle = "lightgreen ";
    ctx.lineWidth= 3;


    ctx.beginPath();
    ctx.moveTo(100,100);
    ctx.lineTo(120,130);
    ctx.lineTo(150,130);
    ctx.lineTo(125,155);
    ctx.lineTo(133,190);
    ctx.lineTo(100,168);
    ctx.lineTo(67,190);
    ctx.lineTo(75,155);
    ctx.lineTo(50,130);
    ctx.lineTo(80,130);


    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    /*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

//Draw Umbrella top here


    //Canvas 4


    var theCanvas = document.getElementById("Canvas4");
    var ctx = theCanvas.getContext("2d");

    ctx.strokeStyle = "black";
    ctx.lineWidth= 1;


    ctx.bezierCurveTo(100,100, 200, 5, 300, 100);
    ctx.bezierCurveTo(300,100, 200, 92, 100, 100);


    ctx.stroke();


    /*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

//Draw text here



    //Canvas 5

    var theCanvas = document.getElementById("Canvas5");
    var ctx = theCanvas.getContext("2d");

    ctx.font = "20pt Arial";
    ctx.fillText("This is Canvas Number 5", 15, 100);

    /*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

//Draw images here


    //Canvas 6

    var theCanvas = document.getElementById("Canvas6");
    var ctx = theCanvas.getContext("2d");


    var  srcImg = document.getElementById("img1");

    //Full image
    ctx.drawImage(srcImg, 0,0);


    //Scaled down image
    ctx.drawImage(srcImg, 0, 1090, 1650, 544);

    //Draw a slice image
    ctx.drawImage(srcImg, 400, 500, 400,400  ,50,1540,  400, 400 );



/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here



    //Canvas 7

    var theCanvas = document.getElementById("Canvas7");
    var ctx = theCanvas.getContext("2d");

    var  srcImg2 = document.getElementById("img2");

    ctx.font = "20pt Papyrus";
    ctx.fillText("Step into another world with Canvas ", 100, 60);


    ctx.strokeStyle= "#49311C";
    ctx.fillStyle = "tan";
    ctx.lineWidth = 10;


    ctx.fillRect(25,130, 599,213);
    ctx.strokeRect(26,130, 599,213);

    ctx.stroke()

    ctx.drawImage(srcImg2, 26,130);



}else {
    //Polyfill would go here

}


};