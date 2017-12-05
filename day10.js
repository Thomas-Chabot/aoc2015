function findRun (string, index) {
	var s   = string [index];
	var run = 0;
	
	while (run < string.length){
		if (string[index + run] !== s)
			break;
		run++;
	}

	return [run, s];
}

function getNext (str) {
	var index = 0;
	var result = "";
	
	while (index < str.length) {
		var [run, value] = findRun (str, index);
		
		result += `${run}${value}`
		
		index += run;
	}
	
	return result;
}

var str = "3113322113";
for (var i = 0; i < 50; i++)
	str = getNext (str);

console.log (str.length);
