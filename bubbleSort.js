function bubbleSort(arr) {
    const n = arr.length;
  
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap elements if needed
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  
    return arr;
  }
  
  // Example usage:
  const unsortedArray = [2, 7, 4, 5, 1, 3, 0, 6];
  const sortedArray = bubbleSort(unsortedArray);
  console.log(sortedArray);