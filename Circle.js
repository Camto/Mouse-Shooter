class Circle {
	
	constructor(x, y, radius) {
		
		this.x = x;
		this.y = y;
		this.radius = radius;
		
	}
	
	touch(circle) {
		
		var distance = Math.sqrt(((this.x - circle.x)**2) + ((this.y - circle.y)**2));
		
		if(distance < (this.radius + circle.radius)) {
			
			return true;
			
		} else {
			
			return false;
			
		}
		
	}
	
}