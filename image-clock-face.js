g.clear();
var img = {
  width : 60, height : 60, bpp : 16,
  transparent : 1,
  buffer : require("heatshrink").decompress(atob("gEBAP4B/AP4B/AP4B/AP4B/AP4B/AP4B/AP4B/AP4B/AP4B/AP4B/AP4B/AP4B/AP4B/AP4B/AP4B/AP4B/AP4BpvfP++eIf4BygExw3GjBF/Od4AEkFz1xJ/ANUgOowAClNlJv7puABJP/OcrrKO/7prnPnAIMQwR3/Ot4ABhFBtdtmOmOhIPBK/5zhAAspstrpshkgLFfINKpJb/OsoADoUIrXrjHDgFAmOGrXLtdOLv51nAAMIoMposx09KtT3BAIN755f/Os4ADO4Na9lzx1z19jPINuMP5znhFidYJ1BtZ1BxxzBAINjlpl/AJ8IoIBBkMEOp8Y8dKtRtBOYR1EAIZn/AJ0gMYMQ0VKpNClB1LkMkrXLOYNz151JO/4BOAAsgmOGtdNlNFBgr9BBoNjhh1COZR3/daJrJrXrPIcQwVChCDBdIJ1PO/51TeYs549KpMQ0QDBdIWvtZ1QO/4BIACU589S1bpCOoJzQO/51bjHDqWKOoTpSO/4BIkB1RkMkrXsOrZ3/dakglNFsctvfQOrZ3/MocY8cQ0R1Q+FrOrh3+kBnDmOmpVpkMkOpNrpp1CObh3+AA0Y4Z3BrXrN4ILDdYR1kO/4AFhFBpVJqWqjHCjHksctOsp36ABzpBoUpeoJ1nO/AAQiGCrXLwkQOs532OqOiqWrdYNzxx3/OtsIsNKtN7551Cpp3/O9cIoNChFz14BBOtZ3yAAMgAIQAJkE5851EOdR3yM4UpssxwzjBOw8hgljlt7551vO9znElNFtdtpVpiGCBYcQ0Va5dzOoOOO/7tgAAcgjHDqWqrXrkMkhFhpVJuevuZ1yO9gAKOIMhglB9FKtQ/BuePOuZ3qkB3LAAcpop1C1511O9QAOiFiqWKOoNzxx3/dtsIoNKpJ17O9AAOmOGOYJ3BOvJ3lymyM4J1LjHksctvfPOvZ3j/4AC40Yb4M548IsJ1DhFBpVqufPdoLv/O8YAB+++eoMY4Z3DlOGOINa5cx09jhjzBRoJ33A"))
};
var img2 = {
  width : 60, height : 60, bpp : 16,
  transparent : 1,
  buffer : require("heatshrink").decompress(atob("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"))
};
var img3 = {
  width : 60, height : 60, bpp : 16,
  transparent : 1,
  buffer : require("heatshrink").decompress(atob("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"))
};
var img4 = {
  width : 60, height : 60, bpp : 16,
  transparent : 1,
  buffer : require("heatshrink").decompress(atob("gEBAP4B/AP4B/AP4B/AP4B/AP4B/AP4B/AP4B/AP4B/AP4B/AP4B/AP4B/AP4B/AP4B/AP4B/AP4B/AP4B1/4ACIf533++eIv4Bx62aOoO9+8pssAAAJL/ANkx02EmFS1UAkB3CAAZP/ANIAPJ/533Pf4BmkMlgEgPP4BzsctnPoiGCOhsY4dChBX/AL+9697+FSxUhgh3LmOGCIMIoL1/ALvOvPOvWtup7BoUpjGjOo9a9bxBQQxf/ALFzxx5B8891uWA4NS1ZxBNAL5BscMmOmfhRh/AK1rtve7fe/mUyVrtx5BtdNnPoPYMpssAkB3KPP4BW3vX78c0sUPoNjptrxx5Ct1SxUhkh1MPf4BW88c1t1NoNjloDBAIZ5DrXsmOmeJx5/AKW+jFz19jhh1FPIoPBtdOnPnhFhPP4BdwkxscstdNtbnCAJB5Dt1CpMQ0Z0LnPHAIJr/AJZzBsZ1BOZL1H173BqWrkMkOpHnrXrlNlgEgNv4BJsctOqJ5FvfPDYMpop1FscsmOGOoQADOP7vHOqh5Ex1zPIdmiGCpVpOpB5/O8QBCPIVrptClEhghzIPP53leoZ5Bx0x00IoJ5/O955C19zx1ChEIsR5/O97zDPYNClB5/O+LzEPIMphFhOxcQ0R3/PNDzBPJEhglSxQDBO/55ohEIoJ1Ekla5dKpKFCO/55onPngEgjHjscMdoL4GO/55l54DBPIM5473BOox54O9rzEx0psp1KPOx3vPIdjhkhgh5/O+J5C555BjHDO/551rXsiGCPPZ32xwBBoUpO5h5uO+p5C14DBmOGOpUgjHjO/55opshkh0FhFhpVJqWqO/55psctjHDOoMpotzx1ClEQwTzBO/53mxx5Bc4Mxw1jlkx0zxBfIp3/PM4DBnPoeYYAIO/55osctO5h5mO/9rx1z19S5cIsJ3/eOd8iFClEAkB5tOv51Bd4Na9lS1chgh5FjHjqWqznTO/51g14BBoUpiGijMEnPohGCO4da9fe7f//53h"))
};







  
const p = Math.PI/2;
const PRad = Math.PI/180;

let intervalRefMin = null;
let intervalRefSec = null;

let minuteDate = new Date();
let secondDate = new Date();


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

function drawAll() {
  g.clear();
  secondDate = minuteDate = new Date();
  // draw hands first
  
  // draw seconds
g.drawImage(img,0,0);
g.drawImage(img2,60,0);
g.drawImage(img3,120,0);
g.drawImage(img4,180,0);


g.setRotation(1);
g.drawImage(img,0,0);
g.drawImage(img2,60,0);
g.drawImage(img3,120,0);


g.setRotation(2);
g.drawImage(img,0,0);
g.drawImage(img2,60,0);
g.drawImage(img3,120,0);

g.setRotation(3);
g.drawImage(img,0,0);
g.drawImage(img2,60,0);
g.drawImage(img3,120,0);

g.setRotation(0);
  

g.drawCircle(80,130,20);
g.fillCircle(80,130,1);
g.drawCircle(160,130,20);
g.fillCircle(160,130,1);
g.drawCircle(120,160,20);
g.fillCircle(120,160,1);
  

g.fillCircle(120,120,5);
g.setColor(0x7be0);
g.drawString("BangleJs",100,60,true);
onSecond();
onMinute();
}

function onSecond() {
  
}

function onMinute() {
  g.setColor(0,0,0);
  hand(360*(minuteDate.getHours() + (minuteDate.getMinutes()/60))/12, -10, 50);
  hand(360*minuteDate.getMinutes()/60, -10, 82);
  minuteDate = new Date();
  g.setColor(1,1,1);
  hand(360*(minuteDate.getHours() + (minuteDate.getMinutes()/60))/12, -10, 50);
  hand(360*minuteDate.getMinutes()/60, -10, 82);
  if(minuteDate.getHours() >= 0 && minuteDate.getMinutes() === 0) {
    Bangle.buzz();
  }
}

function clearTimers() {
  if(intervalRefMin) {clearInterval(intervalRefMin);}
  if(intervalRefSec) {clearInterval(intervalRefSec);}
}

function startTimers() {
  minuteDate = new Date();
  secondDate = new Date();
  intervalRefSec = setInterval(onSecond,1000);
  intervalRefMin = setInterval(onMinute,60*1000);
  drawAll();
}

Bangle.on('lcdPower',function(on) {
  if (on) {
    g.clear();
    Bangle.drawWidgets();
    startTimers();
  }else {
    clearTimers();
  }
});

g.clear();
Bangle.loadWidgets();
Bangle.drawWidgets();
drawAll();
startTimers();



