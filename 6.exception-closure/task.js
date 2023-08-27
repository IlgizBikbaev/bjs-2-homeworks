class Triangle {
    constructor(a, b, c) {
     this.a = a;
     this.b = b;
     this.c = c;
     if (a > b + c || b > a + c || c > a + b) {
     throw new Error("Треугольник с такими сторонами не существует");
    }
}
  get perimeter() {
    let perimeter = this.a + this.b + this.c;
    return perimeter;
}

  get area () {
    let p = this.perimeter/ 2;
    let area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    return +(area.toFixed(3));
 }
};

function getTriangle(a, b, c) {
    try {
      const triangle = new Triangle(a, b, c);
    return triangle;  
  } catch(error) {
    return {
    get perimeter(){ return "Ошибка! Треугольник не существует"},
    get area() {return "Ошибка! Треугольник не существует" }
  }
}
}



function parseCount(n) {
  let res = Number.parseFloat(n);
  if (isNaN(res)) {
    throw new Error("Невалидное значение");
  }
  return res;
}

function validateCount(n) {
  try {
    return parseCount(n);
} catch(error) {
  return error;
}
}