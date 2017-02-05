function insertionSort(num){

	for(var i=1; i<num.length; i++){
		var key = num[i];
		var j = i-1;

			while(j>=0 && num[j] > key){
				num[j+1] = num[j];
				j = j-1;
			}
		num[j+1] = key;
	}

	return num;
}

module.exports = insertionSort;