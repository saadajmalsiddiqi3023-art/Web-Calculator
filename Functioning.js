// numbers access
function n0() {
  let n0 = btn0.value;
  document.getElementById("display").value += n0;
}
function n1() {
  let n1 = btn1.value;
  document.getElementById("display").value += n1;
}
function n2() {
  let n2 = btn2.value;
  document.getElementById("display").value += n2;
}
function n3() {
  let n3 = btn3.value;
  document.getElementById("display").value += n3;
}
function n4() {
  let n4 = btn4.value;
  document.getElementById("display").value += n4;
}
function n5() {
  let n5 = btn5.value;
  document.getElementById("display").value += n5;
}
function n6() {
  let n6 = btn6.value;
  document.getElementById("display").value += n6;
}
function n7() {
  let n7 = btn7.value;
  document.getElementById("display").value += n7;
}
function n8() {
  let n8 = btn8.value;
  document.getElementById("display").value += n8;
}
function n9() {
  let n9 = btn9.value;
  document.getElementById("display").value += n9;
}

// del
function del() {
  let del = (document.getElementById("display").value = "");
  document.getElementById("display").value = del;
}
// cross
function cross() {
  //logic for numbers
  // let back=document.getElementById("display").value;
  // document.getElementById("display").value=Math.floor(back/10);

  // loop logic for string
  let back = document.getElementById("display").value;
  let result = "";
  for (let i = 0; i < back.length - 1; i++) {
    result += back[i];
  }
  document.getElementById("display").value = result;
}

// operations
// plus
function plus() {
  let plus = document.getElementById("display").value;
  let last = plus.length;
  if (
    plus[last - 1] === "+" ||
    plus[last - 1] === "-" ||
    plus[last - 1] === "*" ||
    plus[last - 1] === "/" ||
    plus[last - 1] === "" ||
    plus[last - 1] === "." ||
    plus === ""
  ) {
  } else {
    let add = "+";
    let result = plus + add;
    document.getElementById("display").value = result;
  }
}

// minus
function minus() {
  let minus = document.getElementById("display").value;
  let last = minus.length;
  if (
    minus[last - 1] === "+" ||
    minus[last - 1] === "-" ||
    minus[last - 1] === "*" ||
    minus[last - 1] === "/" ||
    minus[last - 1] === "" ||
    minus[last - 1] === "."
  ) {
  } else {
    // let sub = document.getElementById("minus").value;
    let sub="-";
    let result = minus + sub;
    document.getElementById("display").value = result;
  }
}

// multiply
function multiply() {
  let multiply = document.getElementById("display").value;
  let last = multiply.length;
  if (
    multiply[last - 1] === "+" ||
    multiply[last - 1] === "-" ||
    multiply[last - 1] === "*" ||
    multiply[last - 1] === "/" ||
    multiply[last - 1] === "" ||
    multiply[last - 1] === "." ||
    multiply === ""
  ) {
  } else {
    // let pro = document.getElementById("multiply").value;
    let pro="*";
    let result = multiply + pro;
    document.getElementById("display").value = result;
  }
}

// divide
function divide() {
  let divide = document.getElementById("display").value;
  let last = divide.length;
  if (
    divide[last - 1] === "+" ||
    divide[last - 1] === "-" ||
    divide[last - 1] === "*" ||
    divide[last - 1] === "/" ||
    divide[last - 1] === "" ||
    divide[last - 1] === "." ||
    divide === ""
  ) {
  } else {
    // let div = document.getElementById("divide").value;
    let div="/";
    let result = divide + div;
    document.getElementById("display").value = result;
  }
}

// point
function point() {
  let display = document.getElementById("display");
  let value = display.value;

  // Last number ko split karo (+ - * / se)
  let parts = value.split(/[\+\-\*\/]/);
  let lastNumber = parts[parts.length - 1];

  // Agar last number mein already dot hai → kuch na karo
  if (lastNumber.includes(".")) return;

  // Agar display empty ho ya last char operator ho
  if (value === "" || /[\+\-\*\/]$/.test(value)) {
    display.value += "0.";
  } else {
    display.value += ".";
  }
}

// equal
function equal() {
  let disp = document.getElementById("display").value;
  if(disp==="")
    return 0;
  try {
    document.getElementById("display").value = eval(disp);
  } catch (error) {
    display.value = "ERROR!";
  }
}
