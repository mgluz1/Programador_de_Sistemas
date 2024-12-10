// 9. Calcule a soma dos números de um array.
function soma(array) {
    let sum = 0;
    array.forEach((number) => {
      sum += number;
    });
    return sum;
  }
  
  const list1 = [1, 2, 3, 4, 5];
  const list2 = [2, 4, 6, 8];
  const list3 = [1, 3, 5, 7];
  const list4 = [0];
  const list5 = [];
  
  console.log(soma(list1));
  console.log(soma(list2));
  console.log(soma(list3)); 
  console.log(soma(list4)); 
  console.log(soma(list5));