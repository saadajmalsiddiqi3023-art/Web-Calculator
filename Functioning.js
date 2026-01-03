const display = document.getElementById("display");

// Numbers and point
document.querySelectorAll("#numbers button, #point").forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    // For point, special logic
    if (value === ".") {
      const parts = display.value.split(/[\+\-\*\/]/);
      const lastNumber = parts[parts.length - 1];
      if (lastNumber.includes(".")) return; // avoid multiple dots
      if (display.value === "" || /[\+\-\*\/]$/.test(display.value)) {
        display.value += "0.";
      } else {
        display.value += ".";
      }
    } else {
      display.value += value;
    }
  });
});

// Operators
document.querySelectorAll("#operations button").forEach(btn => {
  btn.addEventListener("click", () => {
    const lastChar = display.value.slice(-1);
    const op = btn.textContent;

    if (!lastChar || /[\+\-\*\/\.]/.test(lastChar)) return; // avoid multiple operators
    display.value += op;
  });
});

// DEL
document.getElementById("del").addEventListener("click", () => {
  display.value = "";
});

// CROSS (backspace)
document.getElementById("cross").addEventListener("click", () => {
  display.value = display.value.slice(0, -1);
});

// Equal
document.getElementById("equal").addEventListener("click", () => {
  if (display.value === "") return;
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "ERROR!";
  }
});
