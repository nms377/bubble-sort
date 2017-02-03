let arr = [5,2,9,1,3,6,10,8,7,4];

console.log('outside', arr);

(function bubbleSort (array){

var n = array;

console.log(n);
swapped = false;
	do{
		for( i=1; i<n.length; i++ ){
			if( n[i-1] > n[i] ){
				tmp = n[i];
				n[i] = n[i-1];
				n[i-1] = tmp;
				swapped = true;
				console.log(n);
			}
		}
	}
	while(swapped);
	return n;
})();

module.export =bubbleSort;