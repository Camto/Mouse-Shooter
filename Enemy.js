class Enemy {
	
	constructor(x, y, cannons, life) {
		
		this.dead = false;
		this.life = life;
		this.start_life = life;
		this.x = x * (screen.width);
		this.y = -(screen.height/4);
		this.optimal_y = y * (screen.height);
		this.cannons = [];
		this.circle = new Circle(this.x, this.y, 20);
		
		for(var count = 0; count < cannons.length; count++) {
			
			this.cannons.push(new Cannon(this.x + (Math.cos(cannons[count][0] * Math.PI) * 20), this.optimal_y + (Math.sin(cannons[count][0] * Math.PI) * 20), cannons[count][0] * Math.PI, cannons[count][1], cannons[count][2]));
			
		}
		
	}
	
	update() {
		
		if((this.optimal_y - this.y) / 16 > 0) {
			
			this.y += Math.ceil((this.optimal_y - this.y) / 16);
			
		} else {
			
			this.y += Math.floor((this.optimal_y - this.y) / 16);
			
		}
		
		this.circle = new Circle(this.x, this.y, 20);
		
		for(var count = 0; count < this.cannons.length; count++){
			
			this.cannons[count].update();
			
		}
		
		for(count = 0; count < your_bullets.length; count++) {
			
			if(this.circle.touch(your_bullets[count].circle)) {
				
				this.life--;
				if(!this.life) {
					
					this.dead = true;
					
				}
				
				your_bullets[count].gone = true;
				
			}
			
		}
		
	}
	
	draw() {
		
		screen.circle(this.x, this.y, 20, Charcoal);
		screen.circle(this.x, this.y, 20, Trans_Bone_White(map_x_to_y((this.life / this.start_life), 0, 1, 0.375, 1)));
		
	}
	
}