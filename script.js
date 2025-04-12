function convertTemperature() {
    let inputTemp = document.getElementById("temperatureInput").value;
    let unit = document.getElementById("unitSelect").value;
    let result = document.getElementById("result");

    if (isNaN(inputTemp) || inputTemp === "") {
        result.textContent = "Please enter a valid number!";
        return;
    }

    inputTemp = parseFloat(inputTemp);
    let convertedTemp = "";

    if (unit === "celsius") {
        convertedTemp = `${inputTemp}°C = ${(inputTemp * 9/5 + 32).toFixed(2)}°F = ${(inputTemp + 273.15).toFixed(2)}K`;
    } else if (unit === "fahrenheit") {
        convertedTemp = `${inputTemp}°F = ${((inputTemp - 32) * 5/9).toFixed(2)}°C = ${(((inputTemp - 32) * 5/9) + 273.15).toFixed(2)}K`;
    } else if (unit === "kelvin") {
        convertedTemp = `${inputTemp}K = ${(inputTemp - 273.15).toFixed(2)}°C = ${((inputTemp - 273.15) * 9/5 + 32).toFixed(2)}°F`;
    }

    result.textContent = convertedTemp;
}