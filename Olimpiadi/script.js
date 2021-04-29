function disegna() {
    // cerchio blu
    var myCanvas = document.getElementById("myCanvas");
    var ctx = myCanvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(75, 75, 25, 0, 2 * Math.PI, true);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "rgba(0, 0, 255, 1)";
    ctx.stroke();
    ctx.closePath();
  
    // cerchio giallo
    var myCanvas = document.getElementById("myCanvas");
    var ctx = myCanvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(105, 105, 25, 0, 2 * Math.PI, true);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "rgba(200, 165, 29, 1)";
    ctx.stroke();
    ctx.closePath();
  
    //cerchio nero
    var myCanvas = document.getElementById("myCanvas");
    var ctx = myCanvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(135, 75, 25, 0, 2 * Math.PI, true);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "rgba(0, 0, 0, 1)";
    ctx.stroke();
    ctx.closePath();
  
    //cerchio verde
    var myCanvas = document.getElementById("myCanvas");
    var ctx = myCanvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(165, 105, 25, 0, 2 * Math.PI, true);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "rgba(0, 255, 0, 1)";
    ctx.stroke();
    ctx.closePath();
  
    //cerchio rosso
    var myCanvas = document.getElementById("myCanvas");
    var ctx = myCanvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(195, 75, 25, 0, 2 * Math.PI, true);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "rgba(255, 0, 0, 1)";
    ctx.stroke();
    ctx.closePath();
  }
  