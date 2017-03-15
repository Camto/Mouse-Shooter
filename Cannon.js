class Cannon {
	
	constructor(x, y, angle, rate_of_fire, timer) {
		
		this.x = x;
		this.y = y;
		this.angle = angle;
		this.rate_of_fire = rate_of_fire;
		this.timer = timer;
		
	}
	
	update() {
		
		this.timer--;
		
		if(this.timer < 0){
			
			bullets.push(new Bullet(this.x, this.y, this.angle));
			this.timer = this.rate_of_fire;
			
		}
		
	}
	
}