Assignment:

Create a README.md file and for each algorithm include the following:

* Explain to a five year old how the algorithm works (3-4 sentences max)
*Psuedo code for each sorting implementation
*In your own words, describe the performance of the alogirthm for the following cases:
    * Best case scenario
    * Worst case scenario

# Algorithms

## Bubble Sort

>Passes through a list and compares values one at a time. If the value of the first item is greater than the second item, then the first items swaps places with the second item. Then the function passes through the list from the beginning and does the same thing. The function will stop running when it passes through the list and does not swap any items.

- Big-O Notation: O(n^2^)
- Best Case Scenario: List is sorted.
- Worst Case Scenaro: List includes a large collection of data requiring many passes.

Psuedo Code
```
function bubbleSort(n: list of items)
    do while swapped = false
        For i from 1 to length(n)
	        If n[i-1] is greater than n[i]
	        Then
	        swap (n[i],n[i-1])
	        swapped = true
	        end if
        end for
    until not swapped
    return n
end function
```

## Insertion Sort

>Passes through a list and compares two item values at a time starting with the second item on the list. If the value of the second item is greater than the first item, then the function will work back to the beginning of the list and compare the second item value to another item with a greater value. Once it finds an item with a value greater than the second item it swaps the second item with the item to the right of the compared item. Then the function passes through the list starting from the second list item and does the same thing. The function will stop running when it passes through the list and does not swap any items.

- Big-O Notation: O(n<sup>2</sup>)
- Best Case Scenario: List is sorted.
- Worst Case Scenaro: List is sorted in reverse order.

Psuedo Code
```
function insertoinSort(n: list of items)
	for i from 1 to length(n)
	key = n[i]
	j = i-1

		while j is greater than or equal to 0 and n[j] is greater than key
		n[j+1] equals n[j]
		j = j-1
		end while
	n[j+1] equals key
	end for
	return n
end function
	
```

## Merge Sort

>Takes the first half of the list and sorts it, then takes the second half of the list and sorts it.

- Big-O Notation: O(n<sup>2</sup>)
- Best Case Scenario: List is sorted.
- Worst Case Scenaro: List is sorted in reverse order.

Psuedo Code
```
function insertoinSort(n: list of items)
	for i from 1 to length(n)
	key = n[i]
	j = i-1

		while j is greater than or equal to 0 and n[j] is greater than key
		n[j+1] equals n[j]
		j = j-1
		end while
	n[j+1] equals key
	end for
	return n
end function
	
```

