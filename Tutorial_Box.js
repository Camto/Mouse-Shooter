class Tutorial_Box {
	
	constructor(text, id) {
		
		this.y = -(screen.height / 4);
		this.optimal_y = screen.height * (3/4);
		this.text = text;
		this.id = id;
		
	}
	
	update() {
		
		if((this.optimal_y - this.y) / 16 > 0) {
			
			this.y += Math.ceil((this.optimal_y - this.y) / 16);
			
		} else {
			
			this.y += Math.floor((this.optimal_y - this.y) / 16);
			
		}
		
		
	}
	
	draw() {
		
		screen.rect(20, -(screen.height / 4) + 20 + this.y, screen.width - 40, (screen.height / 2) - 40, Trans_Bone_White(0.75));
		
		screen.text(this.text, screen.width / 2, this.y, Charcoal, 26, "Courier", "bold");
		
	}
	
}