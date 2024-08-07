function getArrayParams(...arr) {
	let min;
	let max;
	min = Infinity;
	max = -Infinity;
	if (arr.length > 0) {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] > max) {
				max = arr[i]
			};
			if (arr[i] < min) {
				min = arr[i]
			};
		};
	} else(arr = 0);
	let avg = Number((arr.reduce((acc, val) => acc + val) / arr.length).toFixed(2));
	return {
		min: min,
		max: max,
		avg: avg
	};
}


function summElementsWorker(...arr) {
	let sum = 0;
	if (arr.length > 0) {
		sum = arr.reduce((acc, val) => acc + val);
	} else(sum = 0);
	return sum;
}

function differenceMaxMinWorker(...arr) {
	let min = Infinity;
	let max = -Infinity;
	if (arr.length > 0) {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] > max) {
				max = arr[i]
			}
			if (arr[i] < min) {
				min = arr[i]
			}
		}
		let sum = max - min;
		return sum;
	} else(sum = 0);
	return sum;
}

function differenceEvenOddWorker(...arr) {
	let EvenElement = 0;
	let OddElement = 0;
	if (arr.length > 0) {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] % 2 === 0) {
				EvenElement = EvenElement + arr[i]
			} else {
				OddElement = OddElement + arr[i]
			};
		};
		let sum = EvenElement - OddElement;
		return sum;
	} else(sum = 0);
	return sum;
}

function averageEvenElementsWorker(...arr) {
	let EvenElement = [];
	let OddElement = [];
	if (arr.length > 0) {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] % 2 === 0) {
				EvenElement.push(arr[i])
			} else {
				OddElement.push(arr[i])
			};
		};
		let avgEvenElement = Number((EvenElement.reduce((acc, val) => acc + val) / EvenElement.length).toFixed(2));
		return avgEvenElement;
	} else(avgEvenElement = 0);
	return avgEvenElement;
}

function makeWork (arrOfArr, func) {
   let maxWorkerResult = -Infinity;
   for (let i = 0; i < arrOfArr.length; i++) {
    if (arrOfArr[i] > maxWorkerResult) {
      maxWorkerResult = arr[i]
    }
    }



}
