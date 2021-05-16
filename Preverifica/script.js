function controllo() {
    var azienda = "";
    var giorno = 0;
    var mese = "";
    var anno = 0;
    var nProdotti = 0;
    var prezzo = 0;
    var sconto = 0;
    azienda = document.getElementById("azienda").value;
    giorno = document.getElementById("giorno").value;
    mese = document.getElementById("mese").value;
    anno = document.getElementById("anno").value;
    nProdotti = document.getElementById("nProdotti").value;
    prezzo = document.getElementById("prezzo").value;
    sconto = 0;
    if (document.getElementById("i10").value)
        sconto = 10;
    else if (document.getElementById("i20").value)
        sconto = 20;
    else if (document.getElementById("i30").value)
        sconto = 30;
    if (campiVuoti() || ciSonoNum(azienda) || giorno > 31 || anno < 2000 || anno > 2021 || nProdotti < 1 || nProdotti > 99 || prezzo < 1 || prezzo > 999)
        alert("errore nell'inserimento");
    else
        creaCodice();
}
function clear() {
    document.getElementById("azienda").value = "";
    document.getElementById("giorno").value = "";
    document.getElementById("mese").selectedIndex = 0;
    document.getElementById("anno").value = "";
    document.getElementById("nProdotti").value = "";
    document.getElementById("prezzo").value = "";
    document.getElementById("i10").checked = false;
    document.getElementById("i20").checked = false;
    document.getElementById("i30").checked = false;
}
function ciSonoNum(s) {
    for (let i = 0; i < s.length; i++) {
        if (!isNaN(s.charAt(i)))
            return true;
    }
    return false;
}
function campiVuoti() {
    if (azienda == "" || giorno == "" || mese == "" || mese == "" || anno == "" || nProdotti == "" || prezzo == "")
        return true;
    return false;
}
function creaCodice() {
    var costo = (Math.round(nProdotti * prezzo * (1 - sconto / 100))).toString();
    if (costo.length - 2 <= 5) {
        for (let i = 0; i < 5 - (costo.length - 2); i++) {
            costo = "0" + costo;
        }
    }
    document.getElementById("ris").value = azienda.substr(0, 4) + anno.substr(anno.length, 2) + mese.substr(0, 3) + giorno.substr(0, 2) + costo.substr(0, 5);
}
function compila() {
    document.getElementById("azienda").value = "Payder";
    document.getElementById("giorno").value = "10";
    document.getElementById("mese").selectedIndex = 1;
    document.getElementById("anno").value = "2010";
    document.getElementById("nProdotti").value = "7";
    document.getElementById("prezzo").value = "36";
    document.getElementById("i10").checked = false;
    document.getElementById("i20").checked = true;
    document.getElementById("i30").checked = false;
}