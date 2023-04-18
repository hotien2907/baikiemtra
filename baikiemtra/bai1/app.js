let arrays = [3, 5, 88, 45, 99, 34, 67];
let a = 0;

for (let i = 0; i < arrays.length - 1; i++) {
  for (let j = i + 1; j < arrays.length; j++) {
    if (arrays[i] < arrays[j]) {
      a = arrays[i];
      arrays[i] = arrays[j];
      arrays[j] = a;
    }
  }
}

console.log("Giá trị lớn nhất trong mảng là: " + arrays[0]);
