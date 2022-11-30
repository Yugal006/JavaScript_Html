console.log("In aute minim non. Cupidatat sint laboris ut esse veniam consequat ut nulla dolor cillum.");
function Square(a, b=1){

	let c = a**b;
	return c;
}

let solution = Square(5,3);
console.log(solution);

function data(a, b, c, d="Programmer"){

	let e = {
			name: a,
			age: b,
			work:c,
			skill: d,
	}
	return e;
}

let x = 'yugal';
let y = 16;
let z = 'Student';

let bio = data(x, y, z);
console.log(bio);
