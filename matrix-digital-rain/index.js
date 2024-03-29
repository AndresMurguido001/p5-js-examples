let streams = [];
let symbolSize = 30;

function setup() {
	document.body.setAttribute("style", "margin: 0; padding: 0;");
	createCanvas(
		window.innerWidth,
		window.innerHeight
	)
	background(0);
	let x = 0;
	for (let i = 0; i < width / symbolSize; i++) {
		let stream = new Stream();
		stream.generateSymbols(
			x, random(-1000, 0)
		);
		streams.push(stream);
		x += symbolSize;
	}
	textSize(symbolSize);
}

function draw(){
	background(0, 190);
	streams.forEach(stream => stream.render())
}

function Symbol(x, y, speed, first) {
	this.x = x;
	this.y = y;
	this.value;
	this.speed = speed;
	this.switchInterval = round(random(2, 20));
	this.first = first;

	this.setToRandomSymbol = function() {
		if(frameCount % this.switchInterval == 0) {
			this.value = String.fromCharCode(
				0x30A0 + round(random(0, 96))
			)
		}
	}

	this.rain = function() {
		this.y = (this.y >= height + 10) ? 0 : this.y += this.speed;
	}
}

function Stream() {
	this.symbols = [];
	this.totalSymbols = round(random(5, 20));
	this.speed = random(5, 20);

	this.generateSymbols = function(x, y) {
		let first = round( random(0, 4) ) == 1;
		for (let i = 0; i < this.totalSymbols; i++) {
			symbol = new Symbol(x, y, this.speed, first);
			symbol.setToRandomSymbol();
			this.symbols.push(symbol);
			y -= symbolSize;
			first = false;
		}
	}

	this.render = function(){
		this.symbols.forEach(symbol => {
			if (symbol.first){
				fill(180, 255, 180);
			} else {
			fill(0, 255, 70);
			}
			text(symbol.value, symbol.x, symbol.y);
			symbol.rain();
			symbol.setToRandomSymbol();
			
		})
	}
}	













