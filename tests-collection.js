var tempFahrenheit = JSON.parse(pm.collectionVariables.get("tempFahrenheit"));
if (tempFahrenheit >= -459.67) {

    pm.test("Retorno OK", function() {
        pm.response.to.be.ok;
        pm.response.to.json;
        pm.response.to.be.withBody;
    });

    var result = pm.response.json();

    pm.test("Checar Valor Fahrenheit", function() {
        pm.expect(result.fahrenheit).to.eql(
            JSON.parse(pm.collectionVariables.get("tempFahrenheit"))
        );
    });

    pm.test("Checar Valor Celsius", function() {
        pm.expect(result.celsius).to.eql(
            JSON.parse(pm.collectionVariables.get("tempCelsius"))
        );
    });

    pm.test("Checar Valor Kelvin", function() {
        pm.expect(result.kelvin).to.eql(
            JSON.parse(pm.collectionVariables.get("tempKelvin"))
        );
    });

}
else {

    pm.test("Retorno Inválido", function() {
        pm.response.to.be.badRequest;
    });

}