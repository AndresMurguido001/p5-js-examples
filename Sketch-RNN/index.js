const sketchRNN = ml5.sketchRNN('rainbow', modelReady);

function setup(){
	createCanvas(400, 400);
};
function modelReady(){
	console.log("MODEL READY");
}

function draw(){
	background(220);
}
