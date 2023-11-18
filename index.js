/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const input = document.getElementById("input");
const convBtn = document.getElementById("conv-btn");
const results = document.getElementById("results");

convBtn.addEventListener("click", function () {
	console.log(input.value);
	let content = `
    <div class="converted">
        <h2>Length (Meter/Feet)</h2>
        <p>
            ${input.value} meters = ${(input.value * 3.281).toFixed(
		3,
	)} feet | ${input.value} feet = ${(input.value / 3.281).toFixed(3)} meters
        </p>
    </div>

    <div class="converted">
        <h2>Volume (Liters/Gallons)</h2> 
        <p>
            ${input.value} liters = ${(input.value * 0.264).toFixed(3)} | ${
		input.value
	} gallon = ${(input.value / 0.264).toFixed(3)} liters
        </p>
    </div>
    
    <div class="converted">
        <h2>Mass (Kilograms/Pounds)</h2> 
        <p>
            ${input.value} kilos = ${(input.value * 2.204).toFixed(
		3,
	)} pounds | ${input.value} pounds = ${(input.value / 2.204).toFixed(
		3,
	)} kilos
        </p>
    </div>

`;

	results.innerHTML = content;
	input.value = 0;
});
