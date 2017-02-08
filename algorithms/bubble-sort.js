function bubbleSort (n){

	do{
		swapped = false;
		for( i=1; i < n.length; i++ ){
			if( n[i-1] > n[i] ){
				tmp = n[i];
				n[i] = n[i-1];
				n[i-1] = tmp;
				swapped = true;
			}
		}
	}
	while(swapped);
	return n;
}

module.exports = bubbleSort;