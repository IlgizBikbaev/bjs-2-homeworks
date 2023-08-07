"use strict"

function solveEquation(a, b, c) {
  let d = Math.pow(b, 2) - 4 * a * c;
  let arr = [];

  if (d === 0) {
    let x = -b / (2 * a);
    arr.push(x);
  }

  if (d > 0) {
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(x1, x2);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthlyRate = percent / 100 / 12;
  let sumCredit = amount - contribution;
  let monthlyPayment = sumCredit * (monthlyRate + (monthlyRate / ((Math.pow(1 + monthlyRate, countMonths)) - 1)));
  let totalPayment = (monthlyPayment * countMonths).toFixed(2);
  let overpaymentАmount = totalPayment - amount;
  let result = +(contribution + sumCredit + overpaymentАmount);
  return result;
}