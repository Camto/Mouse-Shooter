class Basic extends Enemy {
	
	constructor(x, y, timer) {
		
		super(x, y, [[0, 300, timer], [0.25, 300, timer], [0.5, 300, timer], [0.75, 300, timer], [1, 300, timer], [1.25, 300, timer], [1.5, 300, timer], [1.75, 300, timer]], 5);
		
	}
	
}

class Nincompoop extends Enemy {
	
	constructor(x, y) {
		
		super(x, y, [], 5);
		
	}
	
}

class Machine_Gun extends Enemy {
	
	constructor(x, y, timer) {
		
		super(x, y, [[0.5, 60, timer]], 5);
		
	}
	
}

class Lefty extends Enemy {
	
	constructor(x, y, timer) {
		
		super(x, y, [[1, 200, timer], [0.75, 200, timer], [0.5, 200, timer]], 5);
		
	}
	
}

class Righty extends Enemy {
	
	constructor(x, y, timer) {
		
		super(x, y, [[0, 200, timer], [0.25, 200, timer], [0.5, 200, timer]], 5);
		
	}
	
}

class L_Topster extends Enemy {
	
	constructor(x, y, timer) {
		
		super(x, y, [[1, 60, timer], [1.25, 60, timer], [1.5, 60, timer]], 5);
		
	}
	
}

class R_Topster extends Enemy {
	
	constructor(x, y, timer) {
		
		super(x, y, [[0, 60, timer], [1.75, 60, timer], [1.5, 60, timer]], 5);
		
	}
	
}

class Sider extends Enemy {
	
	constructor(x, y, timer) {
		
		super(x, y, [[1, 60, timer], [0, 60, timer]], 5);
		
	}
	
}