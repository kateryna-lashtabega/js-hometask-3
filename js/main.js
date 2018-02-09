function map(fn, array) {
	var arrayCopy = [];
		
	for (var i=0; i < array.length; i++) {
		
		arrayCopy.push(fn(array[i])); 
		 
	}	
	
	return arrayCopy;
} 

function square(x) { 
	return x * x; 
}
var plainNumbers = [2, 3, 5, 7, 11, 13, 17, 19];

map(square, plainNumbers);

console.log(plainNumbers); 
console.log(map(square, plainNumbers));