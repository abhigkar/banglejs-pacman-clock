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
  g.fillCircle(CenterX,CenterY,Radius-18);
  g.setColor(0,0,0);
  g.fillCircle(CenterX,CenterY,Radius-21);
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
        point = rotatePoint(0, 72, i * 6);
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
  print(currentSecond);
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
setInterval(function cb(){
  drawSeconds();
},1000);


drawFace();
