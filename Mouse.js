class Mouse {
	
	constructor() {
		
		this.x = screen.width / 2;
		this.y = screen.height / 4;
		
		this.mouse_down = false;
		this.dead = false;
		
		screen.canvas.addEventListener("mousemove", function(event) {
			
			var bounds = screen.canvas.getBoundingClientRect();
			you.x = 4 + (((event.clientX - bounds.left) / (bounds.right - bounds.left)) * screen.width);
			you.y = 8 + (((event.clientY - bounds.top) / (bounds.bottom - bounds.top)) * screen.height);
			
			if(event.which == 1) {
				
				you.mouse_down = true;
				
			} else {
				
				you.mouse_down = false;
				
			}
			
		});
		
		screen.canvas.addEventListener("mousedown", function(event) {
			
			if(event.which == 1) {
				
				you.mouse_down = true;
				
			} else {
				
				you.mouse_down = false;
				
			}
			
		});

		screen.canvas.addEventListener("mouseup", function(event) {
			
			you.mouse_down = false;
			
		});
		
		this.circle = new Circle(this.x, this.y, 5);
		
	}
	
	update() {
		
		this.circle = new Circle(this.x, this.y, 5);
		
		if(this.mouse_down && !shot_timer) {
			
			shot_timer = 7.5;
			your_bullets.push(new Bullet(this.x, this.y, 1.5 * Math.PI));
			
		}
		
		for(var count = 0; count < bullets.length; count++) {
			
			if(this.circle.touch(bullets[count].circle)) {
				
				this.dead = true;
				popup_timer = 180;
				
			}
			
		}
		
		if(!fight_boss) {
			
			for(var count = 0; count < enemies.length; count++) {
				
				if(this.circle.touch(enemies[count].circle)) {
					
					this.dead = true;
					popup_timer = 180;
					
				}
				
			}
			
		} else {
			
			for(count = 0; count < boss.circles.length; count++) {
				
				if(this.circle.touch(boss.circles[count])) {
					
					this.dead = true;
					popup_timer = 180;
					
				}
				
			}
			
		}
		
	}
	
	/* draw() { // Was only temporary!
		
		screen.circle(this.x, this.y, 5);
		
	} */
	
}