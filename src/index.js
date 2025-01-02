const input = document.getElementById("operationInput");

document
  .getElementById("buttonContainer")
  .addEventListener("click", (event) => {
    const button = event.target;
    const operand = button.dataset.value;

    if (!operand) return; // Ignore clicks outside buttons

    switch (operand) {
      case "AC":
        allClear();
        break;
      case "=":
        solve();
        break;
      default:
        updateOperation(operand);
        break;
    }
  });

function updateOperation(operand) {
  const lastChar = input.value.slice(-1);

  // Prevent invalid starts
  if (input.value === "" && ["%", "/", "*", "+"].includes(operand)) {
    input.value = operand === "-" ? "-" : "0" + operand;
    return;
  }

  // Prevent repeated operators
  if (
    ["%", "/", "*", "-", "+"].includes(lastChar) &&
    ["%", "/", "*", "-", "+"].includes(operand)
  ) {
    alert("You can't repeat operators.");
    return;
  }

  input.value += operand;
}

function allClear() {
  input.value = "";
}

function solve() {
  try {
    input.value = eval(input.value); // Evaluate the input string
  } catch {
    alert("Invalid operation.");
    allClear();
  }
}
