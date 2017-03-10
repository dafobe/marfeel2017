export default class Gallery {
  constructor (name) {
    this.name = name;
    this.items
  }

  set name (name){
  	console.log('set name');
  	this.name = name;
  	return this;
  }

  get name(){
  	return this.name;
  }

  print () {
    console.log(`Printing ${this.name}`);
  }
}