

// const draw = $('canvas')[0].getContext('2d');
// draw.fillRect(100,100, 100, 100)



//*****Character Select Function including name selector. Once name
//is selected, animate begin sequence and start game

$('button').on('click', (e) => {
	if($(e.currentTarget).text() === 'Light Switch'){
		eugene.rest()
	} else if($(e.currentTarget).text() === 'Soylent'){
		eugene.eat()
	} else if($(e.currentTarget).text() === 'Read Books'){
		eugene.read()
	}


})

$('#name').on('click', (e) => {

})







class Human {
	constructor(name, clothes, motto){
		this.name = name;
		this.clothes = clothes;
		this.age = 0;
		this.hunger = 0;
		this.boredom = 0;
		this.sleepiness = 0;
		this.motto = motto;
		this.time = 0;

	}

	increaseStats(){

		const timer = setInterval(() => {
			this.time++
				if(this.time % 5 === 0){
				this.hunger ++;
				this.boredom ++;
				this.sleepiness ++;
			}  if(this.time % 7 === 0){
				this.age++
			}  if(this.age === 10){
				this.evolve()
				console.log(this.motto)
			} 
			if(this.hunger === 10 || this.boredom === 10 || this.sleepiness === 10){
				console.log('shit')
				alert('Game Over')
				clearInterval(timer);
			}
		$('#sleep').text(`Sleepiness: ${this.sleepiness}`);
		$('#hungry').text(`Hunger: ${this.hunger}`);
		$('#boring').text(`Boredom: ${this.boredom}`);
		$('#name').text(`${this.name}`);
		}, 400)
		
		// timer with modulus so it goes to infinity and stops at evolution. 
		// it then has to reset till the next evolution. We might needto use
		//an interval reset or clearInterval 

	}


	evolve() {

		if(this.hunger < 1){
			$('#philosopher').attr('src', 'https://media.tenor.com/images/fb26af8a910a1b75afe12b49ddee9875/tenor.gif')
			$('body').css('background-image', 'url(\'https://media1.popsugar-assets.com/files/thumbor/LGrCTpGbDAJikZOU9K3BuCnHmb4/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2015/04/24/742/n/1922398/150fb890_y0VW29.gif\'')
		} else if(this.sleepiness < 1){
			$('#philosopher').attr('src', 'http://static.tumblr.com/b2bfb7a9e3a5aa156411a0ecae55c581/szecorr/9oEobznib/tumblr_static_dvj6baij96o0ck408so88ko08.gif')
			$('body').css('background-image', 'url(\'http://data.whicdn.com/images/179415016/original.gif\'')
			// clearInterval(timer);
		} else if(this.boredom < 1) {
			$('#philosopher').attr('src', 'https://i.imgur.com/qxyHYmi.jpg')
			$('body').css('background-image', 'url(\'https://media.tenor.com/images/c74c09280ae9da80529f0d2276d3d873/tenor.gif\'')
			// clearInterval(timer);
		}
		//based on age, Person evolves by checking if statememnt
		//round is over and the Interval starts again
	}


	rest () {
		this.sleepiness--
		//Animiation to follow

	}


	eat() {
		this.hunger--
		//Animation to follow

		//if Hobbes http://static.tumblr.com/b2bfb7a9e3a5aa156411a0ecae55c581/szecorr/9oEobznib/tumblr_static_dvj6baij96o0ck408so88ko08.gif
		//if caveman https://i.imgur.com/qxyHYmi.jpg
		//if Russeou https://media.tenor.com/images/fb26af8a910a1b75afe12b49ddee9875/tenor.gif

	}


	read() {
		this.boredom--
		//Animation to follow

	}


	regressDeath() {

		alert('game over')
		//activated by increaseStats. If any of them are at 10, 
		//stop game. Animate Funeral
		//continue screen to restat game

	}
	statReset() {
		this.hunger = 0;
		this.sleepiness = 0;
		this.boredom = 0;
	}



}



const eugene = new Human('Eugene', 'loincloth', 'YOLO')
eugene.increaseStats()