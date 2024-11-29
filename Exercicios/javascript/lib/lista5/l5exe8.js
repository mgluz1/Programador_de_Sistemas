function separarData(data, separador) {
    return  data.split(separador);
}

const data1 = "15/08/2024"
const data2 = "01/01/2020"
const data3 = "31/12/1999"

console.log(separarData(data1,"/"));
console.log(separarData(data2,"/"));
console.log(separarData(data3,"/"));