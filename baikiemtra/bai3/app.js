let month = +prompt("Nhập vào tháng");
let year = +prompt("Nhập vào năm");

function LeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;
}

let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

if (LeapYear(year)) {
  daysInMonth[1] = 29;
}

if (month < 1 || month > 12 || year <= 0) {
  alert("Tháng hoặc năm không hợp lệ");
} else {
  alert(`Số ngày của tháng ${month} năm ${year} là: ${daysInMonth[month - 1]}`);
}
