
let totalPoints = 5;
let cities = [];
let popSize = 10;
let population = []; //population of many orders;
let fitness = [];

let recordDist = Infinity;
let bestEver;
let currentBest;


function setup() {
	createCanvas(400, 600);
	let order = [];
	for (let i = 0; i < totalPoints; i++) {
		let v = createVector(random(width), random(height / 2));
		cities[i] = v;
		order[i] = i;
	}


	for (let i = 0; i < popSize; i++) {
		population[i] = shuffle(order);
	}


	//console.log(population);
// 	let d = calcDist(cities, order);
// 	recordDist = d;
// 	bestEver = order.slice();
// 
// 	totalPermutations = factorial(totalPoints);
// 	console.log(totalPermutations);
}

function draw() {
	background(0);
// Genetic algorithm;
	calcFitness();
	normalizeFitness();
	nextGeneration();


 	stroke(255, 0, 255);
 	strokeWeight(2);
 	noFill();
 	beginShape();
 	
	for (let i = 0; i < bestEver.length; i++) {
		let n = bestEver[i];
		vertex(cities[n].x, cities[n].y);
		ellipse(cities[n].x, cities[n].y, 8,8);
	}
 	endShape()



 	translate(0, height / 2);
 	stroke(255);
 	strokeWeight(1);
 	noFill();
 	beginShape();
 	for (let i = 0; i < currentBest.length; i++) {
 		let n = currentBest[i];
 		vertex(cities[n].x, cities[n].y);
 		ellipse(cities[n].x, cities[n].y, 8, 8);
 	}
 	endShape()
 	
// 	let d = calcDist(cities, order);
// 	if (d < recordDist) {
// 		recordDist = d;
// 		bestEver = order.slice()
// 	}
// 
// 	
// 
// 	nextOrder();
// 
}

function swap(arr, i, j) {
	let temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}

function calcDist(points, order) {
	let sum = 0;
	for (let i = 0; i < order.length - 1; i++) {
		let cityAIdx = order[i];
		let cityA = points[cityAIdx];

		let cityBIdx = order[i + 1];
		let cityB = points[cityBIdx];
		
		let d = dist(cityA.x, cityA.y, cityB.x, cityB.y);
		sum+=d
	}
	return sum;
};





function nextOrder() {
	// Step 1 of lexographic alg;
	let largestI = -1;
	for (let i = 0; i < order.length; i++) {
		if(order[i] < order[i+1]) {
			largestI = i
		};
	}

	if(largestI == -1) {
		count+=1;
		noLoop();
		console.log('finished');
	};
	//Step 2;
	let largestJ = -1;
	for (let j = 0; j < order.length; j++) {
		if (order[largestI] < order[j]) {
			largestJ = j;
		}
	}
// Step 3: swap;
	swap(order, largestI, largestJ);
	// Step 4: reverse from largestI + 1 to the end of array;
	let endArr = order.splice(largestI+1);
	endArr.reverse();
	order = order.concat(endArr);
	calculatePercentage();
}

function factorial(n) {
	if (n == 1) {
		return 1;
	} else {
		return n * factorial(n - 1);
	}
}
