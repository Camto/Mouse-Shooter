function init() {
	
	screen = new Canvas(400, 400);
	screen.rect(0, 0, screen.width, screen.height, Charcoal);
	
	you = new Mouse();
	your_bullets = [];
	enemies = [];
	bullets = [];
	shot_timer = 0;
	
	popup_timer = 0;
	
	tutorial_tip_timer = 75;
	tutorial_tip = new Tutorial_Box("Blank", 0);
	tutorial_tips = [
		
		"Hover your mouse here.",
		"Good!",
		"Click to fire.",
		"Excelent!",
		"Kill the enemies.",
		"Well done!",
		"Now...",
		"Win!!!"
		
	];
	tutorial_tip_num = 0;
	next_tip();
	
	wave = 0;
	level = 1;
	showing_level = false;
	fight_boss = false;
	timer = Infinity;
	boss = 0;
	
	// [[new Nincompoop(3/2, 1/2)], [Infinity]] // E.O.L.
	
	waves = [[
		
		[[new Basic(1/4, 1/4, 100), new Basic(3/4, 1/4, 250)], [300]], // wave 1
		
		[[new Basic(3/8, 1/8, 175), new Basic(1/8, 3/8, 25), new Basic(5/8, 1/8, 175), new Basic(7/8, 3/8, 25)], [300]], // wave 2
		
		[[new Machine_Gun(1/2, 0, 60), new Machine_Gun(3/8, 3/8, 60), new Machine_Gun(5/8, 3/8, 60)], [300]], // wave 3
		
		[[new Sider(1/8, 13/16, 60), new Sider(7/8, 13/16, 60)], [300]], // wave 4
		
		[[new Lefty(7/8, 1/8, 150), new Righty(1/8, 1/8, 150), new Machine_Gun(1/2, 1/8, 60)], [300]], // wave 5
		
		[[new R_Topster(1/8, 5/8, 30), new L_Topster(7/8, 5/8, 30), new Machine_Gun(1/8, 1/4, 30), new Machine_Gun(7/8, 1/4, 30)], [300]], // wave 6
		
		[[new Righty(3/16, 1/4, 100), new Lefty(3/8, 1/4, 100), new Righty(5/8, 1/4, 200), new Lefty(13/16, 1/4, 200)], [1200]], // wave 7
		
		[[new Righty(1/8, 1/8, 50), new Lefty(7/8, 1/8, 100), new Righty(1/8, 2/8, 150), new Lefty(7/8, 2/8, 200), new Machine_Gun(7/16, 1/8, 30), new Machine_Gun(9/16, 1/8, 30), new R_Topster(1/8, 5/8, 60), new L_Topster(7/8, 5/8, 60), new Sider(1/8, 6/8, 60), new Sider(7/8, 6/8, 60)], [Infinity]]  // wave 8
		
	], [
		
		[[new Tank(1/3, 1/3, 50), new Tank(2/3, 1/3, 100)], [450]], // Wave 1
		
		[[new Righty(1/8, 1/8, 66), new Lefty(7/8, 1/8, 133), new Spinner(1/2, 3/16, 0)], [300]], // Wave 2
		
		[[new Spinner(1/8, 1/2, 0), new Spinner(7/8, 1/2, 70)], [300]], // Wave 3
		
		[[new Tank(1/4, 1/2, 50), new Tank(1/2, 1/2, 0), new Tank(3/4, 1/2, 50)], [600]], // Wave 4
		
		[[new R_Topster(1/8, 1, 30), new L_Topster(7/8, 1, 60)], [150]], // Wave 5
		
		[[new Spinner(1/2, 1/8, 0)], [300]], // Wave 6
		
		[[new R_Spinno(1/8, 1/2, 0), new L_Spinno(7/8, 1/2, 70)], [300]], // Wave 7
		
		[[new Spinner(1/2, 0, 70), new Tank(3/8, 0, 50), new Tank(5/8, 0, 50), new B_Spinno(1/2, 1, 70), new Tank(3/8, 1, 100), new Tank(5/8, 1, 100), new R_Spinno(0, 1/2, 140), new Sider_Tank(0, 3/8, 50), new Sider_Tank(0, 5/8, 50), new L_Spinno(1, 1/2, 140), new Sider_Tank(1, 3/8, 100), new Sider_Tank(1, 5/8, 100)], [Infinity]] // Wave 8
		
	], [
		
		[[new Nincompoop(3/2, 1/2)], [Infinity]] // E.O.L.
		
	]];
	
	bosses = [
		
		new Minus(),
		
		new Chainer()
		
	];
	
	// next_wave(); // wait for tutorial
		
}

function next_wave() {
	
	wave++;
	
	if(wave == 9) {
		
		wave = 0;
		fight_boss = true;
		
	}
	//enemies = waves[level - 1][wave - 1][0]; // Bad idea
	
	if(!fight_boss) {
			
		for(var count = 0; count < waves[level - 1][wave - 1][0].length; count++) {
			
			enemies.push(waves[level - 1][wave - 1][0][count]);
			
		}
		
		timer = waves[level - 1][wave - 1][1][0];
		
	} else {
		
		boss = bosses[level - 1];
		level++;
		
	}
	
}

function next_tip() {
	
	tutorial_tip_timer = 75;
	tutorial_tip_num++;
	tutorial_tip.text = tutorial_tips[tutorial_tip_num - 1];
	tutorial_tip.id = tutorial_tip_num;
	tutorial_tip.optimal_y = screen.width * (3/4);
	
	
}

function begin() {
	
	tutorial = true;
	
	init();
	
	window.requestAnimationFrame(frame);
	
}

function frame() {
	
	if(!popup_timer) {
		
		timer--;
		
	} else {
		
		popup_timer--;
		
		if(popup_timer == 0) {
			
			popup_timer = 0;
			showing_level = false;
			
		}
		
	}
	if(you.dead && !popup_timer) {
		
		init();
		
	}
	shot_timer--;
	
	if(shot_timer < 0) {
		
		shot_timer = 0;
		
	}
	
	if((!timer || enemies.length == 0) && !tutorial && !fight_boss) {
		
		next_wave();
		
		if(wave == 1) {
			
			popup_timer = 300;
			showing_level = true;
			
		}
		
	}
	
	screen.rect(0, 0, screen.width, screen.height, Trans_Charcoal(0.25));
	
	if(tutorial) {
		
		tutorial_tip_timer--;
		
		if(tutorial_tip_timer < 0) {
			
			tutorial_tip_timer = 0;
			
		}
		
		tutorial_tip.update();
		tutorial_tip.draw();
		
		if((!tutorial_tip_timer) && (you.y > (screen.height / 2)) && (tutorial_tip.id == 1) && (tutorial_tip.y == screen.width * (3/4))) {
			
			tutorial_tip.optimal_y = -(screen.height / 4);
			
		} else if((!tutorial_tip_timer) && ((tutorial_tip.id == 2) && (tutorial_tip.y == screen.width * (3/4)))) {
			
			tutorial_tip.optimal_y = -(screen.height / 4);
			
		} else if((!tutorial_tip_timer) && ((shot_timer > 0) && (tutorial_tip.id == 3) && (tutorial_tip.y == screen.width * (3/4)))) {
			
			tutorial_tip.optimal_y = -(screen.height / 4);
			
		} else if((!tutorial_tip_timer) && ((tutorial_tip.id == 4) && (tutorial_tip.y == screen.width * (3/4)))) {
			
			tutorial_tip.optimal_y = -(screen.height / 1/4);
			
		} else if((!tutorial_tip_timer) && ((enemies.length == 0) && (tutorial_tip.id == 5) && (tutorial_tip.y == screen.width * (3/4)))) {
			
			tutorial_tip.optimal_y = -(screen.height / 4);
			
		} else if((!tutorial_tip_timer) && ((tutorial_tip.id == 6) && (tutorial_tip.y == screen.width * (3/4)))) {
			
			tutorial_tip.optimal_y = -(screen.height / 4);
			
		} else if((!tutorial_tip_timer) && ((tutorial_tip.id == 7) && (tutorial_tip.y == screen.width * (3/4)))) {
			
			tutorial_tip.optimal_y = -(screen.height / 4);
			
		} else if((!tutorial_tip_timer) && ((tutorial_tip.id == 8) && (tutorial_tip.y == screen.width * (3/4)))) {
			
			tutorial_tip.optimal_y = -(screen.height / 4) + 1;
			
		} else if((!tutorial_tip_timer) && ((tutorial_tip.id == 8) && (tutorial_tip.y == -(screen.height / 4) + 1))) {
			
			tutorial = false;
			next_wave();
			popup_timer = 300;
			showing_level = true;
			
		} else if((enemies.length == 0) && (tutorial_tip.id == 5) && (tutorial_tip.y == screen.width * (3/4))) {
			
			enemies = [new Nincompoop(1/4, 1/4), new Nincompoop(1/2, 1/4), new Nincompoop(3/4, 1/4)];
			
		}
		
		if(tutorial_tip.y == -(screen.height / 4)) {
			
			next_tip();
			
		}
		
	}
	
	if(!you.dead && !showing_level) {
		
		you.update();
		
	}
	// you.draw(); // Was only temporary!
	
	for(count = 0; count < enemies.length; count++) {
		
		if(!showing_level) {
			
			enemies[count].update();
			enemies[count].draw();
			
		}
		
		if(enemies[count].dead && !you.dead) {
			
			enemies.splice(count, 1);
			count--;
			
		}
		
	}
	
	if(fight_boss) {
		
		boss.update();
		boss.draw();
		
	}
	
	for(var count = 0; count < bullets.length; count++) {
		
		bullets[count].update();
		bullets[count].draw();
		
		if(bullets[count].gone) {
			
			bullets.splice(count, 1);
			count--;
			
		}
		
	}
	
	for(count = 0; count < your_bullets.length; count++) {
		
		your_bullets[count].update();
		your_bullets[count].draw();
		
		if(your_bullets[count].gone) {
			
			your_bullets.splice(count, 1);
			count--;
			
		}
		
	}
	
	if(you.dead) {
		
		screen.rect(0, 0, screen.width, screen.height, "rgba(176, 0, 0, "+ map_x_to_y(popup_timer, 180, 0, 0, 1) +")");
		screen.text("U R DED.", screen.width / 2, screen.height / 2, "rgba(255, 255, 255, "+ map_x_to_y(popup_timer, 180, 0, 0, 1) +")", 32, "Courier", "Bold");
		
	} else if(popup_timer) {
		
		screen.rect(0, 0, screen.width, screen.height, "rgba(32, 176, 255, "+ (popup_timer > 90 ? map_x_to_y(popup_timer, 180, 90, 0, 1) : map_x_to_y(popup_timer, 90, 0, 1, 0)) +")");
		screen.text("Level " + level, screen.width / 2, screen.height / 2, "rgba(255, 255, 255, "+ (popup_timer > 90 ? map_x_to_y(popup_timer, 180, 90, 0, 1) : map_x_to_y(popup_timer, 90, 0, 1, 0)) +")", 32, "Courier", "Bold");
		
	}
	
	window.requestAnimationFrame(frame);
	
}

begin();