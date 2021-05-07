function scarica() {
    var doc = new jsPDF();

    doc.setFont("Verdana");

    doc.text(95, 20, 'Prima pagina');
    var img = 'data:image/jpeg;base64,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';
    doc.addImage(img, 'JPEG', 175, 0, 30, 30);
    var nome = document.getElementById("nome").value;
    doc.text(20, 30, 'nome: ' + nome);
    var cognome = document.getElementById("cognome").value;
    doc.text(20, 40, 'cognome: ' + cognome);
    var numero = document.getElementById("numero").value;
    doc.text(20, 50, 'numero di telefono: ' + numero);
    var mail = document.getElementById("mail").value;
    doc.text(20, 60, 'mail: ' + mail);
    var messaggio = document.getElementById("messaggio").value;
    doc.text(20, 70, 'messaggio: ' + messaggio);

    doc.addPage();
    doc.text(95, 20, 'Seconda pagina');
    doc.text(20, 280, 'Fine doc...');

    doc.save('**');
}