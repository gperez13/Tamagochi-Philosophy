

class Human {
	constructor(name, clothes, motto){
		this.name = name;
		this.clothes = clothes;
		this.age = 0;
		this.hunger = 0;
		this.boredom = 0;
		this.sleepiness = 0;
		this.motto = motto;

	}
}



class Vonnegut extends Human{
	constructor(name, clothes, motto,){
		super(name, clothes, motto)

	}
};


class Russeau extends Vonnegut{
	constructor(name, clothes, motto,){
		super(name, clothes, motto)

	}
};


class Hobbes extends Vonnegut{
	constructor(name, clothes, motto,){
		super(name, clothes, motto)

	}
}


const eugene = new Human('Eugene', 'loincloth', 'YOLO')