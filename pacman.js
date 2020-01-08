Bangle.setLCDMode();
g.clear();
let secondDate = new Date();
var imgCherry = {
  width : 20, height : 20, bpp : 8,
  transparent : 254,
  buffer : E.toArrayBuffer(atob("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkenoqAAAAAAAAAAAAAAAAAAAqenqBgSoAAAAAAAAAAAAAAAArelYrgCsrAAAAAAAAAAAAAAAAK3orKySAAAAAAAAAAAAAJE9zc3N6KwAkVisAAAAAAAAAAABJl7uXl5dIKlYrAAAAAAAAAAAAAHO7u5eRl2xznnNPJAAAAAAAAAAAc22Xu5dJbZeXl5dzJAAAAAAAAABzl2yXc0iXu7W7u5ckAAAAAAAAAEiXc5dzSJdsl7u7lyQAAAAAAAAAAEhzc0hIl05tu7uXJAAAAAAAAAAAAAAAACSXl227l3MkAAAAAAAAAAAAAAAAACRzc3JzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=="))
};
var imgStrawberry = {
  width : 20, height : 18, bpp : 8,
  transparent : 254,
  buffer : E.toArrayBuffer(atob("KwAAAAAAAAAAACQAAAAAAAAAACsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADEAAAAAAAAAAAAAAAAAAAAABgYNOA0GBgAAAAAAAAAAAAAAAE9cODg4ODdcKwAAAAAAAAAAAABJl3NbNzdbW3OXSAAAAAAAAAAASJeXl5dzeXOXu7uXSQAAAAAAAABtc2yXl7uXl7uXbJdPAAAAAAAAAE+Xl5dsl2yXbJeXl08AAAAAAAAAbbu7l22XbZdsl7u7TwAAAAAAAAAkl5dtu5dtl5dsl5ckAAAAAAAAAABJl2yXl2yXu2yXSAAAAAAAAAAAAEiXu5eXl5eXl5ckAAAAAAAAAAAAAEiXl2yXl2xzSAAAAAAAAAAAAAAAAEiXl5eXc0gAAAAAAAAAAAAAAAAAACRIc0gkAAAAAAAAACsAAAAAAAAAACQrJAAAAAAAAAAr"))
};

var imgMonsterRed = {
  width : 22, height : 24, bpp : 16,
  transparent : 2,
  buffer : E.toArrayBuffer(atob("AAAAAAAACAAIAAgAIABIYWjjeSR5JIEkaMJAQSAACAAIAAgACAAAAAAAAAAAAAgAAAAIABgAUIKRJLll0WXZJeEl4SXRJbmGgUVAYRgACAAAAAAgAAAAAAgAAAAIABgAaKK5Rtkm2OTo5Pik+GT4pPDl4OXJRqmGWIIgAAAAACAAIAAAAAAAABAAYKK5Zujm8MXg5NkE4OToxeDl6MXwpPDE4QW5ZWCCIAAIAAAAAAAAIAgAQIGZpNEl6ITopOjk2QPZI9kE2OTgxOjE+IT4pODlsUZQQRgAAAAAAAAAKACJJMGFySbZiNGH0QTg5ODk0QTJRslGySXY5fDE6MTJZoDDKAAIAAAAEABAIalGwYfkEfX49hfTz8En0OfKTOT07ZbcUbmm2QTg49kksURAAAgAAAAYAGBisYfTz/+9//////9buu2x6/Ya//////9d3A/JJeDk4OXJJlBBCAAAABgAaKOyCe333122Wuef///c9MvQ97/G3N9+/9/+GMGn2MXo5tkHYGIIAAAAEABgwrIq7ltsVBptlXn//+235RauGSMwVHXn3/78ymrQ5ODk2UVggggAAAAQAGDCsgntmlvTCs9lWP//5TbU1Y02CtAz1Nef/x3CSNED4SPZZGCBEAAAABgAcKKxptxyxdp0tsde/57DjrtO3jpsNJ2Z/9/1VcFm4OTg5NFlYIIQAAAAGAB4o8Flugb09P68/vvkcLmlsYbkMvZ6/zz9+MqK0OToxODF0UhggxAAAAAQAHCi0UbZBcFm0orSSdEl2OTZBMlF2srjLcoJySXhBOjk4OTZJ2BiCAAAIBAAcKLRZuDl4MXgxeDF4MToxOjE6MXYxNjF4MboxejE6OPhBNFGYGIIAAAgEABwotFm2QTg5PDF6KTo5ODj4OToxfDF8KXwpfCk8MPo4+EE0UZggggAACAQAGii0Ubo5OjE6MTo5OjD6MPwxOjF6MTg5OEE6OPww/Ck6OTZRmCCCAAAIBAAYKLRRvCk6MToxOEE4QPo4/DE8KXoxNkE0SPZA/Cj+ITwxdFFYIIIAAAgCABgosln4OXo5ejF4OTZA+Dj6MX4hfiF6OTY4+Dj+MT4peDF0WZggggAACAIAGCiyWfZBuDm6MboxfDE6MToxejm4OboxejE6OTg5dkm0SbRZmCCCAAAIBAAYMPBqLEmkGK5RtkF8MTo5clFkMOg5NFG4OThJLkEkIKxZtGGYGIIAAAgGABg5JnIUGIwAGCCsYbRRdFFiMM4AEAAiQTBp7FlYEE4AGCCoaZQowgACAAQAECjQKMQAAgAGABYoqHGiQM4ABAAEAA4IHFEWKIgABAAGABQ4jjDCAAIAAAgCAAIAABAAAAIARgAMEEoAAgAACEAIQgAEAAQAAgAAAEAIAgACCAAAAAA"))
};
const Center = { "x": 120, "y": 120 };

const Width  = g.getWidth(),  CenterX = Math.floor(Width)/2;
const Height = g.getHeight(), CenterY = Math.floor(Height)/2;
const Radius = Math.min(CenterX,CenterY), RadiusSquared = Radius*Radius;

function rotatePoint(x, y, d) {
        rad = -1 * d / 180 * Math.PI;
        var sin = Math.sin(rad);
        var cos = Math.cos(rad);
        xn = ((Center.x + x * cos - y * sin) + 0.5) | 0;
        yn = ((Center.y + x * sin - y * cos) + 0.5) | 0;
        p = [xn, yn];
        return p;
    }

function drawFace(){
  g.setColor(0,0,1);
  g.fillCircle(CenterX,CenterY,Radius);
  g.setColor(0,0,0);
  g.fillCircle(CenterX,CenterY,Radius-2);
  //
  g.setColor(0,0,1);
  g.fillCircle(CenterX,CenterY,Radius-20);
  g.setColor(0,0,0);
  g.fillCircle(CenterX,CenterY,Radius-23);
  //
  g.setColor(0,0,1);
  g.fillCircle(CenterX,CenterY,Radius-26);
  g.setColor(0,0,0);
  g.fillCircle(CenterX,CenterY,Radius-29);
  //
  g.setColor(0,0,0);
  g.fillRect(CenterX-15,CenterY-110,CenterX+15,CenterY-80);
  g.fillRect(CenterX-15,CenterY+110,CenterX+15,CenterY+80);
  //
  g.fillRect(CenterX-110,CenterY-15,CenterX-80,CenterY+15);
  g.fillRect(CenterX+110,CenterY-15,CenterX+80,CenterY+15);
  
  g.setColor(1,1,1);
  //g.fillCircle(CenterX-2,CenterY-108,6);
  //g.fillCircle(CenterX-2,CenterY+108,6);
  //g.fillCircle(CenterX-108,CenterY-2,6);
  //g.fillCircle(CenterX+108,CenterY-2,6);
  
  
  //g.setColor(0xFD20); // orange

  
  for (i = 0; i < 60; i++) {
      if(i % 5 == 0 && i % 15 != 0){
        point = rotatePoint(0, 78, i * 6);
        if(i > 15 && i < 45)
          g.drawImage(imgCherry, point[0]-10,point[1]-10);
        else
          g.drawImage(imgStrawberry, point[0]-10,point[1]-10);
      }

  }
  for (i = 0; i < 60; i++) {
	  g.setColor(1,0,0);
      point = rotatePoint(0, 58, i * 6);
      g.fillCircle(point[0], point[1], 1);
  }
  
  for (i = 0; i < 60; i++) {
      g.setColor('#54c0ed');
      point = rotatePoint(0, 48, i * 6);
      g.fillCircle(point[0], point[1], 1);
  }
  g.setColor(0,0,1);
  g.fillCircle(CenterX,CenterY,Radius-100);
  g.setColor(0,0,0);
  g.fillCircle(CenterX,CenterY,Radius-102);
  g.setColor(0,0,1);
  g.fillCircle(CenterX,CenterY,Radius-104);
  g.setColor(0,0,0);
  g.fillCircle(CenterX,CenterY,Radius-106);
  drawSeconds();
}

function drawSeconds(){
  secondDate = new Date();
  let currentSecond = secondDate.getSeconds();
  for (i = 0; i < 60; i++) {
    if(currentSecond < i){
      g.setColor(1,1,1);
    }
    else{
      g.setColor(0,0,0);
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


function seconds(angle, r) {
    const a = angle*(Math.PI/180);
    const x = 120+Math.sin(a)*r;
    const y = 120-Math.cos(a)*r;
    g.setColor('#54c0ed');
    g.fillRect(x-2,y-2,x+2,y+2);
  }


drawFace();

function drawPacMan(ang, clear, mouthAngle) {
  
  ang = ang*Math.PI/180;
  g.setColor(clear?0:0xFD20); // black/orange
  var r = 108;
  var x = CenterX + Math.sin(ang)*r;
  var y = CenterY - Math.cos(ang)*r;
  g.fillCircle(x,y,7);
  if (clear) return;
  g.setColor(0); // black
  var a = mouthAngle*Math.PI/180;
  g.fillPoly([
    x,y,
    x+Math.cos(ang-a)*12, y+Math.sin(ang-a)*12,
    x+Math.cos(ang+a)*12, y+Math.sin(ang+a)*12
    ]);
}
var lastPacManAngle = 0;
setInterval(function cb(){
  let pcol = g.getPixel();
  d = new Date();
  let s = d.getSeconds() + (d.getMilliseconds()/1000);
  //print(d.getSeconds());
  if(d.getSeconds() === 0){
    drawSeconds();
  }
  seconds(360*d.getSeconds()/60, 90);    
  let ang = s*6;
  drawPacMan(lastPacManAngle, true); // remove old
  drawPacMan(ang, false, 10+10*Math.sin(s*10)); // add new
  lastPacManAngle = ang;
},100);
