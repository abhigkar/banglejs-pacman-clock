(() => {
	Bangle.setLCDMode();
    g.clear();
    // place your const, vars, functions or classes here
	var imgCherry = {
      width : 15, height : 15, bpp : 16,
      transparent : 1,
      buffer : E.toArrayBuffer(atob("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3KrcqgAAAAAAAAAAAAAAAAAAAAAAAAAAAADcqtyq3KrcqgAAAAAAAAAAAAAAAAAAAAAAANyq3KoAANyqAAAAAAAAAAAAAAAAAAAAAAAAAADcqgAAAAAAANyqAAAAAAAAAAAAAAAA+AD4APgA3KoAAAAAAADcqgAAAAAAAAAAAAAAAPgA+AD4ANyq+AD4AAAA3KoAAAAAAAAAAAAAAAAAAPgA+AD4APgA+AAAAPgA3Kr4APgAAAAAAAAAAAAAAPgA3v/4APgAAAD4APgA3Kr4APgA+AAAAAAAAAAAAPgA+ADe//gAAAD4APgA+AD4APgA+AAAAAAAAAAAAAAA+AD4APgAAAD4AN7/+AD4APgA+AAAAAAAAAAAAAAAAAAAAAAAAAD4APgA3v/4APgA+AAAAAAAAAAAAAAAAAAAAAAAAAAAAPgA+AD4APgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"))
    };
	var imgStrawberry =  {
  width : 15, height : 15, bpp : 16,
  transparent : 1,
  buffer : E.toArrayBuffer(atob("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/3wAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/hn+Gf4b/33+Gf4Z/pgAAAAAAAAAAAAAAAAAA+AD4AH+mf4Z/hn+Gf4b4APgAAAAAAAAAAAAAAPgA+AD4APgA+AB/hvgA+AD4AP/f+AAAAAAAAAAAAPgA/9/4APgA+AD4APgA/9/4APgA+AAAAAAAAAAAAPgA+AD4AP/f+AD/3/gA+AD4APgA+AAAAAAAAAAAAPgA+AD4APgA+AD4APgA+AD/3/gA+AAAAAAAAAAAAAAA+AD/3/gA+AD/3/gA+AD4APgAAAAAAAAAAAAAAAAA+AD4APgA+AD4APgA+AD4APgAAAAAAAAAAAAAAAAAAAD4APgA/9/4APgA/98AAAAAAAAAAAAAAAAAAAAAAAAAAPgA+AD4APgA+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"))
};
	var imgMonsterRed ={
  width : 16, height : 16, bpp : 16,
  transparent : 1,
  buffer : E.toArrayBuffer(atob("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4APgA+AD4AAAAAAAAAAAAAAAAAAAAAAAAAAAA+AD4APgA+AD4APgA+AD4AAAAAAAAAAAAAAAAAAAA+AD4APgA+AD4APgA+AD4APgA+AAAAAAAAAAAAAAA+AD4APgA+AD4APgA+AD4APgA+AD4APgAAAAAAAAAAAD4APgA/9//3/gA+AD4APgA/9//3/gA+AAAAAAAAAAAAPgA/9//3//f/9/4APgA/9//3//f/9/4AAAAAAAAAPgA+AD/3//f/9//3/gA+AD/3//f/9//3/gA+AAAAAAA+AD4AP/fAZ8Bn//f+AD4AP/fAZ8Bn//f+AD4AAAAAAD4APgA+AABnwGf+AD4APgA+AABnwGf+AD4APgAAAAAAPgA+AD4APgA+AD4APgA+AD4APgA+AD4APgA+AAAAAAA+AD4APgA+AD4APgA+AD4APgA+AD4APgA+AD4AAAAAAD4APgA+AD4APgA+AD4APgA+AD4APgA+AD4APgAAAAAAPgA+AD4APgAAAD4APgA+AD4AAAA+AD4APgA+AAAAAAAAAD4APgAAAAAAAAA+AD4AAAAAAAAAPgA+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="))
};
var imgMonsterBlue = {
  width : 15, height : 16, bpp : 16,
  transparent : 1,
  buffer : E.toArrayBuffer(atob("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADf/N/83/zf/AAAAAAAAAAAAAAAAAAAAAAAAN/83/zf/N/83/zf/N/83/wAAAAAAAAAAAAAAADf/N/83/zf/N/83/zf/N/83/zf/AAAAAAAAAAA3/zf/N/83/zf/N/83/zf/N/83/zf/N/8AAAAAAAA3/zf//9//3zf/N/83/zf//9//3zf/N/8AAAAAAAA3///f/9//3//fN/83///f/9//3//fN/8AAAAAN/83///f/9//3//fN/83///f/9//3//fN/83/wAAN/83///fAZ8Bn//fN/83///fAZ8Bn//fN/83/wAAN/83/zf/AZ8Bnzf/N/83/zf/AZ8Bnzf/N/83/wAAN/83/zf/N/83/zf/N/83/zf/N/83/zf/N/83/wAAN/83/zf/N/83/zf/N/83/zf/N/83/zf/N/83/wAAN/83/zf/N/83/zf/N/83/zf/N/83/zf/N/83/wAAN/83/zf/N/8AADf/N/83/zf/AAA3/zf/N/83/wAAAAA3/zf/AAAAAAAAN/83/wAAAAAAADf/N/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"))
};
	let secondDate = new Date();
	let minuteDate = new Date();

    let intervalRefSec = null;
    let intervalRefMin= null; 
	const Width  = g.getWidth(),  CenterX = Math.floor(Width)/2;
	const Height = g.getHeight(), CenterY = Math.floor(Height)/2;
	const Radius = Math.min(CenterX,CenterY), RadiusSquared = Radius*Radius;

	const p = Math.PI/2;
	const PRad = Math.PI/180;

	var lastPacManAngle = 0;
	
	function rotatePoint(x, y, d) {
        rad = -1 * d * PRad;
        var sin = Math.sin(rad);
        var cos = Math.cos(rad);
        xn = ((CenterX + x * cos - y * sin) + 0.5) | 0;
        yn = ((CenterY + x * sin - y * cos) + 0.5) | 0;
        pnt = [xn, yn];
        return pnt;
    }
	function drawThickCircle(rad,thickness){
		g.setColor(0,0,1);
		g.fillCircle(CenterX,CenterY,rad);
		g.setColor(0,0,0);
		g.fillCircle(CenterX,CenterY,rad-thickness);
	}

	function drawDottedCircle(radius,color){
		for (i = 0; i < 60; i++) {
		  g.setColor(color);
		  point = rotatePoint(0, radius, i * 6);
		  g.fillCircle(point[0], point[1], 1);
	  }
	}

	function drawFace(){
		secondDate = minuteDate = new Date();
		drawThickCircle(Radius,2);
		drawThickCircle(Radius-20,3);
		drawThickCircle(Radius-26,3);
		//
		g.setColor(0,0,0);
		g.fillRect(CenterX-15,CenterY-110,CenterX+15,CenterY-80);
		g.fillRect(CenterX-15,CenterY+110,CenterX+15,CenterY+80);
		//
		g.fillRect(CenterX-110,CenterY-15,CenterX-80,CenterY+15);
		g.fillRect(CenterX+110,CenterY-15,CenterX+80,CenterY+15);

		g.setColor(1,1,1);

		drawFruitRing();
		drawDottedCircle(55,0xF800);
		drawDottedCircle(48,'#54c0ed');


		drawThickCircle(Radius-100,2); 
        drawThickCircle(Radius-104,2);
		drawPacManTrack();
        drawMnters();
		onMinute();
	}
	function drawFruitRing(){
		for (i = 0; i < 60; i++) {
          point = rotatePoint(0, 75, i * 6);
		  if(i % 5 == 0 && i % 15 != 0){
			if(i > 15 && i < 45)
			  g.drawImage(imgCherry, point[0]-7,point[1]-5,{scale:1.2});
			else
			  g.drawImage(imgStrawberry, point[0]-7,point[1]-5,{scale:1.2});
		  }
		}
	}

  function drawMnters(){
     g.drawImage(imgMonsterRed, 130,140);
     g.drawImage(imgMonsterRed, 100,140);
     g.drawImage(imgMonsterBlue, 100,85);
     g.drawImage(imgMonsterBlue, 130,85);
  }
 function onMinute() {
        print('M> '+ intervalRefMin);
        drawDottedCircle(55,0xF800);
		drawDottedCircle(48,'#54c0ed');
		drawFruitRing();
        drawMnters();
        drawThickCircle(Radius-100,2); 
        drawThickCircle(Radius-104,2);
		g.setColor(0,0,0);
        hAng = minuteDate.getHours() % 12 * 30 + minuteDate.getMinutes() / 2 | 0;
        hand(hAng, -10, 50);
		hand(360*minuteDate.getMinutes()/60, -10, 80);
		minuteDate = new Date();
		g.setColor('#54c0ed');//H
        hAng = minuteDate.getHours() % 12 * 30 + minuteDate.getMinutes() / 2 | 0;
        hand(hAng, -10, 50);
        g.setColor(0xF800);//M
		hand(360*minuteDate.getMinutes()/60, -10, 80);
		if(minuteDate.getHours() >= 0 && minuteDate.getMinutes() === 0) {
		  Bangle.buzz();
		}
   }
	function drawPacManTrack(dt){
	  secondDate = dt || new Date();
	  let currentSecond = secondDate.getSeconds();
	  for (i = 0; i < 60; i++) {
        if(dt){
          g.setColor(1,1,1);
        }
        else{
          if(currentSecond < i){
		    g.setColor(1,1,1);
          }
          else{
            g.setColor(0,0,0);
          }
        }
     	  point = rotatePoint(0, 108, i * 6);
		  if(i % 15 == 0){
			 g.fillCircle(point[0], point[1], 6);
		  }
		  else{
			g.fillRect(point[0]-2, point[1]-2,point[0]-1, point[1]-1);
		  }
	  }
	}
    function hand(angle, r1,r2) {
    const a = angle*PRad;
    const r3 = 3;
    g.fillPoly([
      120+Math.sin(a)*r1,
      120-Math.cos(a)*r1,
      120+Math.sin(a+p)*r3,
      120-Math.cos(a+p)*r3,
      120+Math.sin(a)*r2,
      120-Math.cos(a)*r2,
      120+Math.sin(a-p)*r3,
      120-Math.cos(a-p)*r3]);
  }
	function drawPacMan(ang, clear, mouthAngle) {
		ang = ang*PRad;
		g.setColor(clear?0:0xFD20); // black/orange
		var r = 108;
		var x = CenterX + Math.sin(ang)*r;
		var y = CenterY - Math.cos(ang)*r;
		g.fillCircle(x,y,7);
		if (clear) return;
		g.setColor(0); // black
		var a = mouthAngle*PRad;
		/*g.fillPoly([x,y,
					x+Math.cos(ang-a)*12, y+Math.sin(ang-a)*12,
					x+Math.cos(ang+a)*12, y+Math.sin(ang+a)*12
					]);
                    */
          g.fillPoly([x,y,
            x+Math.cos(ang-a)*8, 
            y+Math.sin(ang-a)*8,
            x+Math.cos(ang+a)*8, 
            y+Math.sin(ang+a)*8]);

	}
	function clearTimers() {
		if(intervalRefSec) {clearInterval(intervalRefSec);}
	}
	function startEating(){
      intervalRefMin = setInterval(onMinute,60*1000);
		intervalRefSec = setInterval(function cb(){
		  d = new Date();
		  let s = d.getSeconds() + (d.getMilliseconds()/1000);
		  if(s> 1 && s < 1.5){
			drawPacManTrack(d);
		  }
		  let ang = s*6;
		  drawPacMan(lastPacManAngle, true); // remove old
		  drawPacMan(ang, false, 10+10*Math.sin(s*10)); // add new
		  lastPacManAngle = ang;
          let ab = Math.floor(ang);
          //print(ab);
          ab=ab-1;
          //print(intervalRefMin);
          if(ab === 90 || ab === 180 || ab === 270 || ab === 0){
            print('XXX');
            if(ab == 0 && intervalRefMin == null)
              print ('INIT intervalRefMin ' + intervalRefMin);
              
          }
		},100);
	}
    // special function to handle display switch on
    Bangle.on('lcdPower', (on) => {
        if (on) {
        	drawWidgets();
            // call your app function here
			drawFace();
			startEating();
		}
		else{
			clearTimers();
		}
	});

    g.clear();
    // call your app function here 
	drawFace();
	startEating();
          

})();














