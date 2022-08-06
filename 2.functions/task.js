// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;

  min = Infinity;
  max = -Infinity;
  sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if(arr[i] > max) {
      max = arr[i];
    }

    if (arr[i] < min) {
      min = arr[i];
    } 
  }

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  avg = +(sum / arr.length).toFixed(2);

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum;

  // Ваш код

  return sum;
}

function makeWork(arrOfArr, func) {
  let max;

  sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    
  }

  return sum;
}

//console.log(worker([1, 2, 3])); 


function makeWork(arrOfArr, worker) {
  let max = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
  let sumResult;
  sumResult=worker(arrOfArr[i]);
      
      if (sumResult > max) {
        max = sumResult;
    }
  }

  
  return max;
}

// Задание 3
function worker2(arr) {
  let minResalt, maxResalt, sum, resalt;
  minResalt = Infinity;
  maxResalt = -Infinity;
  sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if(arr[i] > maxResalt) {
      maxResalt = arr[i];
    }

    if (arr[i] < minResalt) {
      minResalt = arr[i];
    } 
  }

  resalt = +(maxResalt-minResalt).toFixed(2);
  
  return resalt;
}

