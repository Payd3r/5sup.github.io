function calcola() {
    var altezza = document.getElementById("altezza").value;
    var eta = document.getElementById("eta").value;
    var peso = document.getElementById("peso").value;
    var ris1, ris2, ris3, ris4 = 0;
    var temp = 0;
    if (altezza == "" || eta == "" || peso == "" || !document.getElementById("maschio").checked && !document.getElementById("femmina").checked)
        alert("campi obbligatori!");
    else {
        if (document.getElementById("maschio").checked) {
            ris1 = altezza - 100 - ((altezza - 150) / 4);
            ris2 = altezza - 100;
            ris3 = ((altezza - 150) * 0.75) + 50;
            for (var i = 0; ris4 <= 22; i++, temp++) {
                ris4 = (temp / (altezza * altezza / 10000));
            }
        }
        else if (document.getElementById("femmina").checked) {
            ris1 = altezza - 100 - ((altezza - 150) / 2);
            ris2 = altezza - 104;
            ris3 = ((altezza - 150) * 0.6) + 50;
            for (var i = 0; ris4 <= 20.5; i++, temp++) {
                ris4 = (temp / (altezza * altezza / 10000));
            }
        }
        if (peso > ris1)
            document.getElementById("ris1").innerHTML = "Peso Ideale:" + ris1 + " kg  - devi perdere: " + (peso - ris1) + " kg";
        else
            document.getElementById("ris1").innerHTML = "Peso Ideale:" + ris1 + " kg  - devi aumentare: " + (ris1 - peso) + " kg";
        if (peso > ris2)
            document.getElementById("ris2").innerHTML = "Peso Ideale:" + ris2 + " kg  - devi perdere: " + (peso - ris2) + " kg";
        else
            document.getElementById("ris2").innerHTML = "Peso Ideale:" + ris2 + " kg  - devi aumentare: " + (ris2 - peso) + " kg";
        if (peso > ris3)
            document.getElementById("ris3").innerHTML = "Peso Ideale:" + ris3 + " kg  - devi perdere: " + (peso - ris3) + " kg";
        else
            document.getElementById("ris3").innerHTML = "Peso Ideale:" + ris3 + " kg  - devi aumentare: " + (ris3 - peso) + " kg";
        if (peso > temp)
            document.getElementById("ris4").innerHTML = "Peso Ideale:" + temp + " kg  - devi perdere: " + (peso - temp) + " kg";
        else
            document.getElementById("ris4").innerHTML = "Peso Ideale:" + temp + " kg  - devi aumentare: " + (temp - peso) + " kg";
    }
}

function reset() {
    document.getElementById("altezza").innerHTML = " ";
    document.getElementById("peso").innerHTML = " ";
    document.getElementById("maschio").checked = false;
    document.getElementById("femmina").checked = false;
    document.getElementById("ris1").innerHTML = " ";
    document.getElementById("ris2").innerHTML = " ";
    document.getElementById("ris3").innerHTML = " ";
    document.getElementById("ris4").innerHTML = " ";
}