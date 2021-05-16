function disegna() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var Ox = c.width / 2;
    var Oy = c.height / 2;

    ctx.beginPath();

    ctx.moveTo(20, Oy);
    ctx.lineTo(c.width - 20, Oy);
	ctx.stroke();
    ctx.moveTo(c.width - 20, Oy - 4);	
    ctx.lineTo(c.width - 20, Oy + 4);
    ctx.lineTo(c.width - 12, Oy);
    ctx.lineTo(c.width - 20, Oy - 4);
	ctx.stroke();
    ctx.moveTo(Ox, 20);	
    ctx.lineTo(Ox, c.height - 20);
    ctx.moveTo(Ox - 4, 20);
	ctx.stroke();
    ctx.lineTo(Ox + 4, 20);
    ctx.lineTo(Ox, 12);
    ctx.lineTo(Ox - 4, 20);
    ctx.stroke();
    ctx.fill();
    ctx.fillStyle = "rgb(0,0,0)";

    ctx.fillText('x', c.width - 20, Oy + 10);
    ctx.fillText('y', Ox + 5, 20);
    ctx.fillText('O', Ox + 2, Oy + 10);

    ctx.translate(Ox, Oy);
    ctx.closePath();
}