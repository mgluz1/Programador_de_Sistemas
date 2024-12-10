// 11. Calcule a média de um array de números.
function calculaMedia(array) {
    if (array.length === 0) return 0; // Verifica se o array está vazio
  
    let sum = 0;
    array.forEach((number) => {
      sum += number;
    });
  
    return sum / array.length;
  }
  
  const list1 = [1, 2, 4, 5, 7, 8, 10, 11];
  const list2 = [10, 70, 30, 50];
  const list3 = [29, 567, 38, 53, 503, 92, 67, 909, 203, 382, 28];
  const list4 = [];
  
  console.log(calculaMedia(list1));
  console.log(calculaMedia(list2));
  console.log(calculaMedia(list3));
  console.log(calculaMedia(list4));