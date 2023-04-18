let input = prompt("Nhập vào chuỗi cần chuẩn hóa");
let arr = input.split(" ");
let result = [];

for (let i = 0; i < arr.length; i++) {
  let word = arr[i].trim();
  word = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  result.push(word);
}

let output = result.join(" ");
console.log("Chuỗi các ký tự in hoa chữ cái đầu:", output);
