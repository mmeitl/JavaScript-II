const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
	// firstItem passes the first item of the given array to the callback function.
	cb(arr[0]);
}
firstItem(items, (fitem) => {
	console.log(fitem);
});

function getLength(arr, cb) {
	// getLength passes the length of the array into the callback.
	cb(arr.length);
}
getLength(items, (titems) => {
	console.log(titems);
});

function last(arr, cb) {
	// last passes the last item of the array into the callback.
	cb(arr[arr.length - 1]);
}
last(items, (litem) => {
	console.log(litem);
});

function sumNums(x, y, cb) {
	// sumNums adds two numbers (x, y) and passes the result to the callback.
	cb(x + y);
}
sumNums(5, 6, (add) => {
	console.log(add);
});

function multiplyNums(x, y, cb) {
	// multiplyNums multiplies two numbers and passes the result to the callback.
	cb(x * y);
}
multiplyNums(8, 7, (product) => {
	console.log(product);
});

function contains(item, list, cb) {
	// contains checks if an item is present inside of the given array/list.
	// Pass true to the callback if it is, otherwise pass false
	let count = 0;
	list.forEach(litem => {
		if (item == litem) {
			count++;
		}
	});
	if (count > 0) {
		cb(true);
	} else {
		cb(false);
	}
}
contains('Banana', items, (listed) => {
	console.log(listed);
});
/* STRETCH PROBLEM */
function removeDuplicates(array, cb) {
	// removeDuplicates removes all duplicate values from the given array.
	// Pass the duplicate free array to the callback function.
	// Do not mutate the original array.
}