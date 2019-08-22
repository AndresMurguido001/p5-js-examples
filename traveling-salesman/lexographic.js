// https://www.quora.com/How-would-you-explain-an-algorithm-that-generates-permutations-using-lexicographic-ordering <- lexographic alg
let vals = [0, 1, 2, 3, 4, 5, 6, 7];


function setup(){
 createCanvas(400, 300);
}


function draw(){

	// Step 1 of lexographic alg;
	let largestI = -1;
	for (let i = 0; i < vals.length; i++) {
		if(vals[i] < vals[i+1]) {
			largestI = i
		};
	}

	if(largestI == -1) {
		noLoop();
		console.log('finished');
	};
	//Step 2;
	let largestJ = -1;
	for (let j = 0; j < vals.length; j++) {
		if (vals[largestI] < vals[j]) {
			largestJ = j;
		}
	}
// Step 3;
	let temp = vals[largestI];
	vals[largestI] = vals[largestJ];
	vals[largestJ] = temp;

	// Step 4: reverse from largestI + 1 to the end of array;
	let endArr = vals.splice(largestI+1);
	endArr.reverse();
	vals = vals.concat(endArr);

	background(0);
	textSize(64);
	let s = '';
	for (let i = 0; i < vals.length; i++) {
		s+=vals[i];
	};
	fill(255);
	text(s, 20, height/2);
}






function nextOrder() {
	// Step 1 of lexographic alg;
	let largestI = -1;
	for (let i = 0; i < vals.length; i++) {
		if(vals[i] < vals[i+1]) {
			largestI = i
		};
	}

	if(largestI == -1) {
		noLoop();
		console.log('finished');
	};
	//Step 2;
	let largestJ = -1;
	for (let j = 0; j < vals.length; j++) {
		if (vals[largestI] < vals[j]) {
			largestJ = j;
		}
	}
// Step 3;
	let temp = vals[largestI];
	vals[largestI] = vals[largestJ];
	vals[largestJ] = temp;

	// Step 4: reverse from largestI + 1 to the end of array;
	let endArr = vals.splice(largestI+1);
	endArr.reverse();
	vals = vals.concat(endArr);
}






