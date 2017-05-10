class Minus extends Boss {
	
	constructor() {
		
		super([
			
			[1/2, 1/4, 80, [[0.875, 120, 60], [0.75, 120, 60], [0.625, 120, 60], [0.5, 120, 60], [0.375, 120, 60], [0.25, 120, 60], [0.125, 120, 60]]],
			
			[1/4, 1/4, 40, [[0.5, 60, 30], [0.25, 60, 30], [1.5, 60, 30]]],
			
			[3/4, 1/4, 40, [[0.5, 60, 60], [0.75, 60, 60], [1.5, 60, 60]]]
			
		], [
			
			[[1/4, 1/4], [0, 1/4], [1/2, 1/4]],
			
			[[3/4, 1/4], [1/2, 1/4], [1, 1/4]]
			
		], 150);
		
	}
	
}

class Chainer extends Boss {
	
	constructor() {
		
		super([
			
			[1/2, 1/4, 40, [[1, 30, 30], [0.75, 30, 30], [0.5, 30, 30], [0.25, 30, 30], [0, 30, 30]]],
			
			[11/32, 3/32, 20, [[0.75, 30, 30], [0.5, 30, 30], [0.25, 30, 30]]],
			
			[21/32, 3/32, 20, [[0.75, 30, 30], [0.5, 30, 30], [0.25, 30, 30]]],
			
			[21/32, 13/32, 20, [[0.75, 30, 30], [0.5, 30, 30], [0.25, 30, 30]]],
			
			[11/32, 13/32, 20, [[0.75, 30, 30], [0.5, 30, 30], [0.25, 30, 30]]],
			
			[11/32, 1/4, 20, [[0.5, 0, 0]]],
			
			[21/32, 1/4, 20, [[0.5, 0, 0]]]
			
		], [
			
			[[1/2, 1/4], [11/32, 3/32], [21/32, 3/32], [21/32, 13/32], [11/32, 13/32], [11/32, 1/4], [21/32, 1/4]],
			
			[[1/2, 1/4], [21/32, 3/32], [21/32, 13/32], [11/32, 13/32], [11/32, 3/32], [11/32, 1/4], [21/32, 1/4]],
			
			[[1/2, 1/4], [21/32, 13/32], [11/32, 13/32], [11/32, 3/32], [21/32, 3/32], [11/32, 1/4], [21/32, 1/4]],
			
			[[1/2, 1/4], [11/32, 13/32], [11/32, 3/32], [21/32, 3/32], [21/32, 13/32], [11/32, 1/4], [21/32, 1/4]]
			
		], 100);
		
	}
	
}