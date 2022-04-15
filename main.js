import "./style.css";

let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let btn4 = document.querySelector("#btn4");
let banks = document.querySelector("#banks");
//Кнопка на МоноБанк
//расчет % ставки
btn1.addEventListener("click", function () {
  let input = document.createElement("input");
  let button = document.createElement("button");
  button.innerHTML = "пiдтвердити";
  input.placeholder = "введiть сумму кредиту";
  banks.appendChild(input);
  banks.appendChild(button);
  button.addEventListener("click", function () {
    let result = Number(input.value);
    if (result >= 1000 && result <= 100000) {
      let frstPay = (result / 100) * 10;
      let yearPay = (result - frstPay) * 0.03;
      alert(
        "перший внесок" +
          " " +
          frstPay +
          " " +
          "\n" +
          "рiчний процент" +
          " " +
          yearPay
      );
    } else {
      alert("error");
    }
  });
});
// кнопка на ПриватБанк
btn2.addEventListener("click", function () {
  let input = document.createElement("input");
  let button = document.createElement("button");
  button.innerHTML = "пiдтвердити";
  input.placeholder = "введiть сумму кредиту";
  banks.appendChild(input);
  banks.appendChild(button);
  button.addEventListener("click", function () {
    let result = Number(input.value);
    if (result >= 1000 && result <= 100000) {
      let frstPay = (result / 100) * 8;
      let yearPay = (result - frstPay) * 0.04;
      alert(
        "перший внесок" +
          " " +
          frstPay +
          " " +
          "\n" +
          "рiчний процент" +
          " " +
          yearPay
      );
    } else {
      alert("error");
    }
  });
});
//Кнопка на ОщадБанк
btn3.addEventListener("click", function () {
  let input = document.createElement("input");
  let button = document.createElement("button");
  button.innerHTML = "пiдтвердити";
  input.placeholder = "введiть сумму кредиту";
  banks.appendChild(input);
  banks.appendChild(button);
  button.addEventListener("click", function () {
    let result = Number(input.value);
    if (result >= 1000 && result <= 100000) {
      let frstPay = (result / 100) * 7;
      let yearPay = (result - frstPay) * 0.05;
      alert(
        "перший внесок" +
          " " +
          frstPay +
          " " +
          "\n" +
          "рiчний процент" +
          " " +
          yearPay
      );
    } else {
      alert("error");
    }
  });
});
//Кнопка на АльфаБанк
btn4.addEventListener("click", function () {
  let input = document.createElement("input");
  let button = document.createElement("button");
  button.innerHTML = "пiдтвердити";
  input.placeholder = "введiть сумму кредиту";
  banks.appendChild(input);
  banks.appendChild(button);
  button.addEventListener("click", function () {
    let result = Number(input.value);
    if (result >= 1000 && result <= 100000) {
      let frstPay = (result / 100) * 9;
      let yearPay = (result - frstPay) * 0.03;
      alert(
        "перший внесок" +
          " " +
          frstPay +
          " " +
          "\n" +
          "рiчний процент" +
          " " +
          yearPay
      );
    } else {
      alert("error");
    }
  });
});
