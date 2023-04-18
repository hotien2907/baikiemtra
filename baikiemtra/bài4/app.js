//cách 1 không sử dụng hàm sort

let arrays = [23, 35, 56, 12, 27, 67];
let newArrays = [];
for (let i = 0; i < arrays.length; i++) {
  for (let j = i + 1; j < arrays.length; j++) {
    if (arrays[i] < arrays[j]) {
      let a = arrays[i];
      arrays[i] = arrays[j];
      arrays[j] = a;
    }
  }
  newArrays.push(arrays[i]);
}
console.log(newArrays);

//cách 2 sử dụng hàm sort
let arr = [23, 35, 56, 12, 27, 67];

arr.sort(function (a, b) {
  return b - a;
});

console.log(arr);
