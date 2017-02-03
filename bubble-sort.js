let myArray = [5,2,9,1,3,6,10,8,7,4];

console.log('outside', myArray);

function bubbleSort (){

var n = myArray;

// console.log(n);
swapped = false;
	for( i=1; i<n.length; i++ ){
		if( n[i-1] > n[i] ){
			tmp = n[i];
			n[i] = n[i-1];
			n[i-1] = tmp;
			swapped = true;
			console.log(n);
		}
		else{
			swapped = false;
		}
	}

	return n;

}

bubbleSort();

console.log('inside', myArray);
