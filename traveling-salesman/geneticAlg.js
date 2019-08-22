function calcFitness(){
	let currentRecord = Infinity;
	for (let i = 0; i < population.length; i++) {
		let dist = calcDist(cities, population[i]);
		fitness[i] = dist;//smaller distance = higher fitness;
		if (dist < recordDist) {
			recordDist = dist;
			bestEver = population[i];
		}
		if (dist < currentRecord) {
			currentRecord = dist;
			currentBest = population[i];
		}
		fitness[i] = 1 / (dist+1);
	}
}

function normalizeFitness(){
	let sum = 0;
	for (let i = 0; i < fitness.length; i++) {
		sum += fitness[i];
	}

	for (let i = 0; i < fitness.length; i++) {
		fitness[i] = fitness[i] / sum;
	}

}

function nextGeneration() {
	let newPopulation = [];

	for (let i = 0; i < population.length; i++) {
		let orderA = pickOne(population, fitness);
		let orderB = pickOne(population, fitness);
		let order = crossOver(orderA, orderB);
		mutate(order, 0.01);
		newPopulation[i] = order;
	}
	population = newPopulation

}

function pickOne(list, prob) {
	let index = 0;
	let r = random(1);

	while (r > 0) {
		r = r - prob[index];
		index++;
	};
	index--;
	return list[index].slice();
}

function mutate(order, mutationRate){
	for (let i = 0; i < totalPoints; i++){  
		if (random(1) < mutationRate){  
			let indexA = floor(random(order.length));
			let indexB = (indexA + 1) % totalPoints;
			swap(order, indexA, indexB);
		}
	}
}

function crossOver(orderA, orderB) {
	let start = floor(random(orderA.length));
	let end = floor(random(start + 1, orderA.length));
	let newOrder = orderA.slice(start, end);

	let left = totalPoints - newOrder.length;

	for (let i = 0; i < orderB.length; i++) {
		let city = orderB[i];
		if (!newOrder.includes(city)){
			newOrder.push(city);
		}

	}
	return newOrder;
}









