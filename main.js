
// destructuring   

// nested Object in destructuring


let fruit={
    name:"apple",
	prize:30,
	color:{
		color1:"white",
	    color2:"orange",
		color3:"green",
	}};

const {color: {color1},color4="red"}=fruit;
console.log(color4);