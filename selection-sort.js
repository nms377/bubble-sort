function selectionSort(num){
	
	let max = num.length;
	// console.log(max);

	for(var i=0; i<max; i++){
		let key = num[i];
		console.log('key', key);
		let keyj = i;

		for(var j= i+1; j < max; j++){
			if(num[j] < key){
				key = num[j];
				console.log('key',key);
				keyj = j;
				console.log('keyj', keyj);		
			}
		}

		num[keyj] = num[i];
		console.log('num[keyj]', num[keyj]);
		num[i] = key;
		console.log('num[i]', num[i]);

	// return num;
	}

	return num;

}

// console.log(selectionSort([10, 5, 2, 1, 1, 0]));

module.exports = selectionSort;