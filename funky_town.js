var fibonacci = function(n) {
    if (n < 2){
	return 1
    }
    else{
	return n * fibonacci(n - 1)
    }
};

var gcd = function(a, b){
    if (a > b) {
	var x = a
    }
    else {
	x = b
    }
    while (x > 0){
	if (a % x == 0 && b % x == 0 ){
	    return x
	}
	else{
	    x--
	}
    }
};

var myList = ["hello", "hi", "bye"]

var randomStudent = function(){
    var randomitem = myList[Math.floor(Math.random()*myList.length)]
    return randomitem
};
