// 10. Calcule a soma dos números pares de um array.
function somaPares(array) {
    let sum = 0;
    array.forEach((number) => {
      if (number % 2 === 0) {
        sum += number;
      }
    });
    return sum;
  }
  
  const list1 = [1, 2, 3, 4, 5];
  const list2 = [2, 4, 6, 8];
  const list3 = [1, 3, 5, 7];
  
  console.log(somaPares(list1)); 
  console.log(somaPares(list2)); 
  console.log(somaPares(list3)); 