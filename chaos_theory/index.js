
let points 
let ax, ay, bx, by, cx,cy;
let currentPoint;
let numberOfPoints = 5;
const radius = 300;
const percent = 0.5;
let previous;
let matches = 0;
let next;
function setup(){
	createCanvas(800, 800);
	points = [];
	for (let i = 0; i < numberOfPoints; i++) {
		let angle = i * TWO_PI / numberOfPoints;
		let v = createVector(radius * cos(angle), radius * sin(angle));
		v.x += width / 2;
		v.y += height / 2;
		points.push(v);
	}
	reset();
	console.log("CANNOT GET STAR PATTERN FROM WIKIPEDIA. TRY IT")
}
function reset(){
	currentPoint = createVector(random(width), random(height));
	stroke(255);
	strokeWeight(8);
	background(51);
	for(let i = 0; i < numberOfPoints; i++) {
		point(points[i].x, points[i].y);
	}
} 
function draw(){
	
	if (frameCount % 100 == 0) {
		//reset()
		noLoop();
	}
	for(let i = 0; i < 1000; i++){
		strokeWeight(1);
		stroke(255, 0, 255, 200);
		next = random(points);
		if (next !== previous) {
			currentPoint.x = lerp(next.x, currentPoint.x, percent);
			currentPoint.y = lerp(next.y, currentPoint.y, percent);
			point(currentPoint.x, currentPoint.y);
			matches = 0;
		}
		if (previous === next) {
			matches++;
		}

		if(matches > 3) {
			matches = 0;
		}
		
		previous = next;
	}
}
function areNeighbors(currentPoint, point) {
	if ( (currentPoint.x === point.x+1 || currentPoint.x === point.x - 1 ) ||
		(currentPoint.y === point.y + 1 || currentPoint.y === point.y - 1)) {
			return true;
	}
	return false;
}
