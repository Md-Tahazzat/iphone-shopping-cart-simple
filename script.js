const phoneMinusBtn = document.getElementById("phone-minus-btn");
const phonePlusBtn = document.getElementById("phone-plus-btn");
const caseMinusBtn = document.getElementById("case-minus-btn");
const casePlusBtn = document.getElementById("case-plus-btn");
const phoneTotalPrice = document.getElementById("phone-total-price");
const caseTotalPrice = document.getElementById("case-total-price");
const subTotal = document.getElementById("subtotal");
const tax = document.getElementById("tax");
const finalTotal = document.getElementById("total");

function updateInput(inputId, willIncrease, totalPriceId) {
  const input = document.getElementById(inputId);
  const inputValue = parseInt(input.value);

  //update input values
  if (willIncrease) {
    input.value++;
  } else {
    if (inputValue !== 0) {
      input.value--;
    }
  }

  return input.value;
}

function updatePrice(elementId, quantity, price) {
  const element = document.getElementById(elementId);
  const total = parseFloat(price) * parseInt(quantity);
  element.innerText = total;
  updateSubtotalPrice();
}

function updateSubtotalPrice() {
  const totalPrice =
    parseFloat(phoneTotalPrice.innerText) +
    parseFloat(caseTotalPrice.innerText);
  subTotal.innerText = totalPrice;
  const taxPriceString = totalPrice * (10 / 100);
  const taxPrice = parseFloat(taxPriceString.toFixed(2));
  tax.innerText = taxPrice;
  finalTotal.innerText = totalPrice - taxPrice;
}

// buttons even handlers
phonePlusBtn.addEventListener("click", function () {
  const quantity = updateInput("phone-input", true);
  updatePrice("phone-total-price", quantity, 1219);
});

phoneMinusBtn.addEventListener("click", function () {
  const quantity = updateInput("phone-input", false);
  updatePrice("phone-total-price", quantity, 1219);
});

casePlusBtn.addEventListener("click", function () {
  const quantity = updateInput("case-input", true);
  updatePrice("case-total-price", quantity, 59);
});

caseMinusBtn.addEventListener("click", function () {
  const quantity = updateInput("case-input", false);
  updatePrice("case-total-price", quantity, 59);
});
