
function temperatureConverter(unitOfMeasurement, temperature) {
    if (unitOfMeasurement.toUpperCase() === 'C' || unitOfMeasurement.toUpperCase() === 'F') {
        let newUnitOfMeasurement = unitOfMeasurement.toUpperCase()
            if (newUnitOfMeasurement === 'C') {
                let farenheitConverter = (temperature * 9/5 + 32).toFixed(2);
                return `${temperature}ºC é equivalente à ${farenheitConverter}ºF`
            } else if (newUnitOfMeasurement === 'F') {
                let celsiusConverter = ((temperature - 32) * 5/9).toFixed(2);
                return `${temperature}ºF é equivalente à ${celsiusConverter}ºC` 
            }
    } else {
        return `${unitOfMeasurement} não é um valor válido. Por favor digite C ou F`
    }
}

console.log(temperatureConverter('f', 77))