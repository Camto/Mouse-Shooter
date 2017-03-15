class Limb {
	
	constructor(x, y, size, cannons) {
		
		this.x = x * screen.width;
		this.optimal_x = x * screen.width;
		this.y = y * screen.height;
		this.optimal_y = y * screen.height;
		this.size = size;
		this.cannons = [];
		
		for(var count = 0; count < cannons.length; count++) {
			
			this.cannons.push(new Cannon(this.x + (Math.cos(cannons[count][0] * Math.PI) * 20), this.y + (Math.sin(cannons[count][0] * Math.PI) * 20), cannons[count][0] * Math.PI, cannons[count][1], cannons[count][2]));
			
		}
		
	}
	
	update() {
		
		var x_dist = 0;
		var y_dist = 0;
		
		if((this.optimal_x - this.x) / 16 > 0) {
			
			x_dist = Math.ceil((this.optimal_x - this.x) / 16);
			
		} else {
			
			x_dist = Math.floor((this.optimal_x - this.x) / 16);
			
		}
		
		if((this.optimal_y - this.y) / 16 > 0) {
			
			y_dist = Math.ceil((this.optimal_y - this.y) / 16);
			
		} else {
			
			y_dist = Math.floor((this.optimal_y - this.y) / 16);
			
		}
		
		this.x += x_dist;
		this.y += y_dist;
		
		for(var count = 0; count < this.cannons.length; count++) {
			
			this.cannons[count].x += x_dist;
			this.cannons[count].y += y_dist;
			
			this.cannons[count].update();
			
		}
		
	}
	
	animate(animation) {
		
		this.optimal_x = animation[0] * screen.width;
		this.optimal_y = animation[1] * screen.height;
		
	}
	
}