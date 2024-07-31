window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values = { amount: 1000, years: 10, rate: 5};
  const amountUI = document.getElementById("loan-amount");
  amountUI.value = values.amount;
  const yearsUI = document.getElementById("loan-years");
  yearsUI.value = values.years;
  const rateUI = document.getElementById("loan-rate");
  rateUI.value = values.rate;
  //not sure what this is for
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentUIValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentUIValues));
}

let monthlyPayment = 0;

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const principle = values.amount;
  const periodicInterestRate = ( values.rate / 100 ) / 12;
  const totalPayments = values.years * 12;
  const topEquation = principle * periodicInterestRate;
  const n = totalPayments * -1;
  monthlyPayment = (topEquation / 
    ( 1 - (Math.pow (( 1 + periodicInterestRate) , n )))).toFixed(2);
  return monthlyPayment;
  // const monthlyPayment = ( (principle * periodicInterestRate) / (1 - (Math.pow( (1 + periodicInterestRate), (totalPayments * -1) ))));
  console.log(principle, periodicInterestRate, totalPayments);
  console.log(topEquation, n, monthlyPayment);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPaymentUI = document.getElementById("monthly-payment");
  monthlyPaymentUI.innerText = '$' + monthlyPayment;
}
