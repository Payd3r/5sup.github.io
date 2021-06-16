// funzione che a seguito della scelta effettuata dall'utente, carica nella variabile contents
// il contenuto del file di testo
function readSingleFile(e) {
    var contents = "";
    var file = e.target.files[0];
    if (!file) {
        return;
    }
    var reader = new FileReader();
    reader.onload = function (e) {
        var contents = e.target.result;
        elaboraContents(contents);
    };
    reader.readAsText(file);
}

// funzione che riceve una stringa e che visualizza nel tag 'file-content'
// il numero di linee e tutto il contenuto della stringa
function elaboraContents(contents) {
    var element = document.getElementById('file-content');
    var lines = contents.split("\n");
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
    }
    addTable(lines);
}

// associazione all'evento "onChange" dell'elemento 'file-input' della funzione readSingleFile()
document.getElementById('file-input').addEventListener('change', readSingleFile, false);

function addTable(lines) {
    var myTableDiv = document.getElementById("myDynamicTable");

    var table = document.createElement('TABLE');
    table.border = '1';

    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
    for (var i = 0; i < lines.length; i++) {
        var tr = document.createElement('TR');
        tableBody.appendChild(tr);
        let elemento = lines[i].split(';');
        for (var j = 0; j < 4; j++) {
            var td = document.createElement('TD');
            td.width = '75';
            td.appendChild(document.createTextNode(elemento[j]));
            tr.appendChild(td);
        }
    }
    myTableDiv.appendChild(table);
}

var paragrafo = document.createElement("p");
paragrafo.innerHTML = "ciao";
document.body.appendChild(paragrafo);