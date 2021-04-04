if (pm.iterationData.get("tempFahrenheit") != undefined) {
    var tempFahrenheitData = JSON.parse(pm.iterationData.get("tempFahrenheit"));
    pm.collectionVariables.set("tempFahrenheit", tempFahrenheitData);

    if (tempFahrenheitData >= -459.67) {
        if (pm.iterationData.get("tempCelsius") != undefined)
            pm.collectionVariables.set("tempCelsius", pm.iterationData.get("tempCelsius"));

        if (pm.iterationData.get("tempKelvin") != undefined)
            pm.collectionVariables.set("tempKelvin", pm.iterationData.get("tempKelvin"));
    }
    else {
        pm.collectionVariables.set("tempCelsius", -999999999);
        pm.collectionVariables.set("tempKelvin", -999999999);
    }
}