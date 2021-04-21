function inizializza() {
    var sesso = ["maschio", "femmina"];
    var a = document.getElementById("sesso");
    for (var i = 0; i < sesso.length; i++) {
        a.add(new Option(sesso[i]));
    }

    var color = ["azzurri", "verdi", "marroni", "blu"];
    a = document.getElementById("occhi");
    for (var i1 = 0; i1 < color.length; i1++) {
        a.add(new Option(color[i1]));
    }

    var provincia = ["como", "lecco", "lodi", "pavia", "mb"];
    a = document.getElementById("pr");
    for (var i2 = 0; i2 < provincia.length; i2++) {
        a.add(new Option(provincia[i2]));
    }
}