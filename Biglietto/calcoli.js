function calcola() {
    var km = document.getElementById("idKm").value;
    var temp = document.getElementById("posti");
    var persone = temp.options[temp.selectedIndex].text;
    if (km == "" || !document.getElementById("Prima").checked && !document.getElementById("Seconda").checked) {
        alert("Campi obbligatori");
    }
    var costo;
    if (document.getElementById("Prima").checked)
        costo = km * 0.43 * persone;
    else if (document.getElementById("Seconda").checked)
        costo = km * 0.20 * persone;
    document.getElementById("ris").innerHTML = "Costo:" + costo.toFixed(2) + " €";
    document.getElementById("idKm").value = " ";
    document.getElementById("posti").selectedIndex=0;
    document.getElementById("Prima").checked=false;
    document.getElementById("Seconda").checked=false;
}