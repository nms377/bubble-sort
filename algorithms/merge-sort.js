function mergeSort(num){

	var halfArr = Math.floor(num.length / 2);

	var left = num.slice(0, halfArr);
	var right = num.slice(halfArr);

	if(num.length < 2){
		return num;
	}

	// left = mergeSort(left);
	// right = mergeSort(right);

	return merge(mergeSort(left), mergeSort(right));

}

function merge(left, right){

	results = [];

	while(left.length > 0 && right.length > 0 ){
		if(left[0] <= right[0]){
			results.push(left.shift());
		}else{
			results.push(right.shift());
		}
	}
		return results.concat(left.slice()).concat(right.slice());

		 // //if only our left array has an element left, push that
   //  while ( left.length > 0 ) {
   //    results.push( left.shift() );
   //  }

    //if only our right array has an element left, push that
    // while ( right.length > 0 ) {
    //   results.push( right.shift() );
    // }

    //return the sorted array
    // return results;
}

console.log(mergeSort([10,7,4,3]));

// module.exports = mergeSort;