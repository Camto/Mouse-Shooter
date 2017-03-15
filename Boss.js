class Boss {
	
	constructor(body, animation, life) {
		
		this.dead = false;
		this.life = life;
		this.start_life = life;
		this.y = -(screen.height/2);
		this.optimal_y = 0;
		this.body = [];
		this.circles = [];
		this.animation = animation;
		this.anim_cycle = 0;
		
		for(var count = 0; count < body.length; count++) {
			
			this.body.push(new Limb(body[count][0], body[count][1], body[count][2], body[count][3]));
			
		}
		
		for(count = 0; count < this.body.length; count++) {
			
			this.circles.push(new Circle(this.body[count].x, this.body[count].y + this.y, this.body[count].size));
			
		}
		
	}
	
	update() {
		
		if((this.optimal_y - this.y) / 16 > 0) {
			
			this.y += Math.ceil((this.optimal_y - this.y) / 16);
			
		} else {
			
			this.y += Math.floor((this.optimal_y - this.y) / 16);
			
		}
		
		var animated = true;
		
		for(var count = 0; count < this.body.length; count++) {
			
			if(this.body[count].x != this.body[count].optimal_x) {
				
				animated = false;
				
			}
			
		}
		
		if(animated) {
			
			this.anim_cycle++;
			if(this.anim_cycle > this.animation.length) {
				
				this.anim_cycle = 1;
				
			}
			
			for(count = 0; count < this.body.length; count++) {
				
				this.body[count].animate(this.animation[this.anim_cycle - 1][count]);
				
			}
			
		}
		
		this.circles = [];
		
		for(count = 0; count < this.body.length; count++) {
			
			this.body[count].update();
			this.circles.push(new Circle(this.body[count].x, this.body[count].y + this.y, this.body[count].size));
			
		}
		
		for(var count1 = 0; count1 < your_bullets.length; count1++) {
			
			for(var count2 = 0; count2 < this.circles.length; count2++) {
				
				if(this.circles[count2].touch(your_bullets[count1].circle)) {
					
					this.life--;
					if(!this.life) {
						
						this.dead = true;
						fight_boss = false;
						
					}
					
					your_bullets[count1].gone = true;
					
				}
			
			}
			
		}
		
	}
	
	draw() {
		
		for(var count = 0; count < this.body.length; count++) {
			
			screen.circle(this.body[count].x, this.body[count].y + this.y, this.body[count].size, Trans_Bone_White(map_x_to_y((this.life / this.start_life), 0, 1, 0.375, 1)));
			
		}
		
	}
	
}