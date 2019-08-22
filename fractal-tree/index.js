let angle;
let n = 5;
let increment = true;
function setup(){
	createCanvas(800, 600);
	angle = PI / n;
}

function draw(){
	background(0)
	stroke(255);
	noFill();
	translate(width / 2, height);
	branch(100);
};

function branch(len){
	if (increment){
		n++;
		if (n===12) increment = false;
	} else if (!increment){
		n--;
		if(n===1) increment = true;
	}
	angle = PI / n;
	line(0, 0, 0, -len);
	translate(0, -len);
	if (len > 2) {
		push();
		rotate(angle);
		branch(len * 0.80);
		pop();
		push();
		rotate(-angle);
		branch(len * 0.75);
		pop();
	}
	

}


