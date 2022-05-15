function bai1(workDays, salaryPer) {
  return console.log(workDays * salaryPer);
}

function bai2(floatNum1, floatNum2, floatNum3, floatNum4, floatNum5) {
  return console.log(
    (floatNum1 + floatNum2 + floatNum3 + floatNum4 + floatNum5) / 5
  );
}

function bai3(moneyInput) {
  return console.log(moneyInput * 23500);
}

function bai4(width, height) {
  return console.log(width * height, (width + height) * 2);
}

function bai5(aNumber) {
  return console.log(Math.floor(aNumber / 10) + (aNumber % 10));
}

bai1(45, 110);
bai2(1.2, 1.4, 1.6, 1.8, 2.2);
bai3(1250);
bai4(3, 5);
bai5(67);
