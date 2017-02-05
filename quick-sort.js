function quickSort(num){

	let pivot = num[0];
	let left = [];
	let right = [];

	if(num.length === 0){
		// console.log('num', num);
		return num;
	}

	for(var i=1; i<num.length; i++){
			if(num[i] < pivot){
				left.push(num[i]);
			}else{
				right.push(num[i]);
			}
	}

	return quickSort(left).concat(pivot, quickSort(right));
}

module.exports = quickSort;