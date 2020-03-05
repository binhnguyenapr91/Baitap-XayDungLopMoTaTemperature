const PLUS_KELVIN = 273.15;

const BASE_CELSIUS = 32;

const ONE_POINT_EIGHT = 1.8;

function Temperature(temperature) {
    this.celsius = temperature;

    this.convertCelsiusToFahrenheit = function () {
        return this.celsius * ONE_POINT_EIGHT + BASE_CELSIUS;
    };
    this.convertCelsiusToKelvin = function () {
        return this.celsius + PLUS_KELVIN;
    };
}
let inputTemperature = prompt("Enter your temperature in Celsius:");
let temperatureAPP = new Temperature(inputTemperature);
alert(`Fahrenheit: ${temperatureAPP.convertCelsiusToFahrenheit()}| Kelvin: ${temperatureAPP.convertCelsiusToKelvin()}`);