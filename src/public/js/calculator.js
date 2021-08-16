 // Objeto que recibe
document.getElementById('loan-form').addEventListener('submit', calculateResults);

// Calcula resultado
function calculateResults(e){

// console.log("calculating");

// Declara las Variables

const amount = document.getElementById('amount');
const interest = document.getElementById('interest');
const years = document.getElementById('years');
const monthlyPayment = document.getElementById('monthly-payment');
const totalPayment = document.getElementById('total-payment');
const totalInterest = document.getElementById('total-interest');

// Convierte a decimal y los guarda a variables
const principal = parseFloat(amount.value);
const calculatedInterest = parseFloat(interest.value) /100 / 12;
const calculatedPayment =  parseFloat(years.value) * 12;

// Calcula los pagos mensuales
const x = Math.pow(1 + calculatedInterest, calculatedPayment);
const monthly = (principal * x * calculatedInterest)/(x-1);



if(isFinite(monthly)){
	monthlyPayment.value = monthly.toFixed(2);
	totalPayment.value = (monthly * calculatedPayment).toFixed(2);
	totalInterest.value = ((monthly * calculatedPayment) - principal).toFixed(2);

} else{
	showError("Please check your numbers")
}