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
  let EvenElement = 0;
  let OddElement = 0;
	for (let i = 0; i < arr.length; i++) {
			if (arr[i] % 2 === 0) {
				EvenElement = EvenElement + arr[i]
			} else {
				OddElement = OddElement + arr[i]
			};
		};
  
  return EvenElement - OddElement;
}

function averageEvenElementsWorker(...arr) {
	let EvenElement = [];
  if (arr.length === 0) {
    return 0
  } else     
  for (let i = 0; i < arr.length; i++) {
			if (arr[i] % 2 === 0) {
				EvenElement.push(arr[i])
			};
		};
  return Number((EvenElement.reduce((acc, val) => acc + val , 0 ) / EvenElement.length).toFixed(2));
};


function makeWork (arrOfArr, func) {
let maxWorkerResult = 0;   
for (let i = 0; i < arrOfArr.length; i++) {
 for (let u = 0; u < arrOfArr[i].length; u++) {
   if (arrOfArr[i][u] > maxWorkerResult) {
       maxWorkerResult = arrOfArr[i][u]
    }
  };
};
return maxWorkerResult;
};
