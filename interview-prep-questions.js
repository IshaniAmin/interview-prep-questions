// Level 1:

// eventually you want to be able to do each of these questions on paper in 3 minutes or less

// Write a function named greatThanThree that takes in two numbers and returns true if they are both greater than 3 and false if not.

function greatThanThree(one, two) {
	if (one > 3 && two > 3) return true;
	else return false;
}

// Write a function named aOrB that takes in a letter and if it is a or b then return true otherwise return false.

function aOrB (letter) {
	if (letter == "a" || letter == "b") return true;
	else return false;
}

// Write a function named greatThanTwo that returns true if the number is 2 and false otherwise

function greatThanTwo(num) {
	if (num == 2) return true;
	else return false;
}


// Level 2:

// eventually you want to be able to do each of these questions on paper in 5 minutes or less

// Write a function named printEvenBetween that takes in two numbers and will return an array of all the even numbers between the given two numbers.

function printEvenBetween(one, two) {
	var array = [];
	for (var i=one+1; i < two; i++) {
		if (i%2 == 0) array.push(i);
	}
	return array;
}

// Write a function named printBetween that takes in two arguments. Assume they are integers. This function will return an array of the numbers between those two arguments.

function printBetween(one, two) {
	var array = [];
	for (var i=one+1; i < two; i++) {
		array.push(i);
	}
	return array;
}


// Level 3:

// eventually you want to be able to do this question on paper in 10 minutes or less

// Write a function named fib that takes an argument n. Assume that n is a number. And the function returns an array of n numbers of the fibonacci sequence.

//took code from when it was went over during class because not sure how to do it

function fib(n){
    if (n==0) return [];
    if (n==1) return [0];
    if (n==2) return [0,1];

    var fibList = [0, 1];
    for (var i=2; i<n; i++){
        var last = fibList[fibList.length-1];
        var secondToLast = fibList[fibList.length-2];
        fibList.push(last + secondToLast);
    }
    return fibList;
}


