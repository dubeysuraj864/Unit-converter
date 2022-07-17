const inputEl = document.getElementById("input-el");
const btnEl = document.getElementById("btn-el");
const meters = document.getElementById("meters");
const liters = document.getElementById("liters");
const kilos = document.getElementById("kilos");

const meter1 = 3.281; //feet
const liter1 = 0.264; //gallon
const kilogram1 = 2.204; //pound

btnEl.addEventListener("click", function () {
    meters.innerHTML = `${inputEl.value} meters = ${(inputEl.value * 3.281).toFixed(2)} feet | ${inputEl.value} feet = ${(inputEl.value / 3.281).toFixed(2)} meters`

    liters.innerHTML = `${inputEl.value} volume = ${(inputEl.value *  0.264).toFixed(2)} gallons | ${inputEl.value} gallons = ${(inputEl.value / 0.264).toFixed(2)} meters`

    kilos.innerHTML = `${inputEl.value} kilos = ${(inputEl.value *  2.204).toFixed(2)} pounds | ${inputEl.value} pounds = ${(inputEl.value / 2.204).toFixed(2)} kilos`
});


