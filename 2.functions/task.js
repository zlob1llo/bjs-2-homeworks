function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	for (let i = 0; i < arr.length; i++) {
			if (arr[i] > max) {
				max = arr[i]
			};
			if (arr[i] < min) {
				min = arr[i]
			};
		};
	let avg = Number((arr.reduce((acc, val) => acc + val) / arr.length).toFixed(2));
	return {
		min: min,
		max: max,
		avg: avg
	};
}


function summElementsWorker(...arr) {
	return arr.reduce((acc, val) => acc + val, 0);	 
}

function differenceMaxMinWorker(...arr) {
	return arr.length !== 0 ? Math.max(...arr) - Math.min(...arr) : 0;
}

function differenceEvenOddWorker(...arr) {
  let evenElement = 0;
  let oddElement = 0;
	for (let i = 0; i < arr.length; i++) {
			if (arr[i] % 2 === 0) {
				evenElement = evenElement + arr[i]
			} else {
				OddElement = oddElement + arr[i]
			};
		};
  
  return evenElement - oddElement;
}

function averageEvenElementsWorker(...arr) {
	let evenElement = [];
  if (arr.length === 0) {
    return 0
  } else     
  for (let i = 0; i < arr.length; i++) {
			if (arr[i] % 2 === 0) {
				evenElement.push(arr[i])
			};
		};
  return Number((evenElement.reduce((acc, val) => acc + val , 0 ) / evenElement.length).toFixed(2));
};


function makeWork (arrOfArr, func) {
let maxWorkerResult = func(...arr);   
for (let i = 0; i < arrOfArr.length; i++) {
 for (let u = 0; u < arrOfArr[i].length; u++) {
   if (arrOfArr[i][u] > maxWorkerResult) {
       maxWorkerResult = arrOfArr[i][u]
    }
  };
};
return maxWorkerResult;
};
