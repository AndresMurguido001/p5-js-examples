function Tree() {
	this.root = null;
}

Tree.prototype.addValue = function(val){
	let n = new Node(val);
	n.tree = this;
	if (this.root == null) {
		this.root = n;
		this.root.x = width / 2;
		this.root.y = 20;
	} else {
		this.root.addNode(n);
	}
}

Tree.prototype.search = function(n) {
	let found = this.root.search(n);
	return found;
}

Tree.prototype.traverse = function(){
	this.root.visit(this.root);
}



