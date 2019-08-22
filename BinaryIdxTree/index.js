
let tree;

function setup() {
	createCanvas(600, 400);
	background(51);
	tree = new Tree();
	tree.addValue(5);
	for (let i = 0; i < 10; i++) {
		tree.addValue(floor(random(0, 100)));
	};
	console.log(tree);
	tree.traverse();
}

