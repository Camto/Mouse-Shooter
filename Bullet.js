class Bullet {
	
	constructor(x, y, angle){
		
		this.gone = false;
		this.x = x;
		this.y = y;
		this.angle = angle;
		this.circle = new Circle(this.x, this.y, 5);
		
	}
	
	update() {
		
		this.x += Math.cos(this.angle) * 4;
		this.y += Math.sin(this.angle) * 4;
		
		if(this.x > screen.width) {
			
			this.gone = true;
			
		} else if(this.x < 0) {
			
			this.gone = true;
			
		} else if(this.y > screen.height) {
			
			this.gone = true;
			
		} else if(this.y < 0) {
			
			this.gone = true;
			
		}
		
		this.circle = new Circle(this.x, this.y, 5);
		
	}
	
	draw() {
		
		screen.circle(this.x, this.y, 5, Bone_White);
		
	}
	
}