// 8. Concatene dois arrays.
const list1 =  [1, 2, 3]; 
const list1a = [4, 5, 6];
const list1ab = list1.concat(list1a);

const list2 =  ["a", "b"]; 
const list2a = ["c", "d"];
const list2ab = list2.concat(list2a);

const list3 =  []; 
const list3a = [1, 2, 3];
const list3ab = list3.concat(list3a);

const list4 =  [1, 2, 3]; 
const list4a = [];
const list4ab = list4.concat(list4a);

const list5 =  []; 
const list5a = [];
const list5ab = list5.concat(list5a);

console.log(list1ab);
console.log(list2ab);
console.log(list3ab);
console.log(list4ab);
console.log(list5ab);
