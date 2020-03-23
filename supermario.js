g.clear();
var date = new Date();
 var minute = (date.getMinutes()<10?'0':'') + date.getMinutes();
    var hour =  (date.getHours()<10?'0':'') + date.getHours();

var brick = require("heatshrink").decompress(atob("isVxH+zue0oAIld5Bgt50vJzmWAA8kBgIHElQU/ChmlpwUE5IULuedgEkAAVyCh0rAAdzHxvPEYIAClZoOzgADU/5rBTQgACuUkvWdzqvHvSbBuQKDp0A0gTFHwXPvQsBuQADp0rChPJzuk0l6p4ABldVBIJeGNAmc5PPAAN6qvPFAx9GzueAAN5Cg5HBkhwBkgAFp2e59PBAkAgCPBRIIFBAAdO0nPlYJFgFyA="));

var grass = require("heatshrink").decompress(atob("k0VxH+AG+EAAcqEj0xEolgEbkwmFgEogmMCgIkNrQiFEpoUCJJokIEoNaChYlUsE8O4ImBsApFEqYaBAAIlDTwrqDEp4PBEQU2iU8CwU8AgYABWwQUEEhZEDiRLDKQZ6FeYYUCShocBSIQAPCgQiHmCsBDyAAJEgtaELQlIEj4lEVQwleEb4lDdYQlhScAlFJURxCJkYlDwoADBYQHEAAhfCChg="));

var cloud = require("heatshrink").decompress(atob("lkhxH+AH8sldWq0rlYqlq3Q64ABwMsFUUHqwpCAAVXKkMyq2sFYusQr8svYoFFYkrmSHclhUG6+zFgQACLbcywIqGxFd1oHDcLbYDKQQECsldRAgrYFIOl1mIr1kFgnXwQGEmQrXKgddxAqFLwqwBrrVTlj3BbASoBFQwAF1lWlZZQhEyeYOBa4gqMFobePlh9CADDfOmQqaWgYqKlZ9EADNdWZUHagRYcg75BhApFq2BFbjtB1lVEIK1EliAe6+IruIWo7XdFgk5LQIACFYVWFcHXsgrDK4crbDyxDFYQqDFgSwfKgdWlczFYYsBmWBHAbzFfxQrLwIrGAAMHWgWCdoeCsmJEYmzxNeBweIGBOslgrGcAeJnM6xOJskWi06AAgGBUgOPr1eLhVWFY8sQIWIEARNBKAIGCA4I1BF4iGKFZH+q55E1r1Fe4ezxFkQJSDClYrIldW1gAB6DJIEZOlBYPQwJ1BVxKGElgvBNw8rSQQAD6HWJwMrwIYBDYIqMLghACKoQqBmUyqxnBBQVQlgJBmYmQLY4kCAYIKDmQ4CBQImVHKYPOA="));

  var mario = require("heatshrink").decompress(atob("nlIxH+ACOe3QAT3YpSHf47/Hf43CAAWXHaoaDABF7HaQ2UACWYHf47/Hf4AGywAL4IAIBo+eAA97HaWcABfH5AAGzoNDBAYxSHf47/HfAfDzogDG4g2HHZoAI0pySFKo7/Hf47mFpvHAAOjCAWd448JAAQ7bFJIADCKNeHf472WZ2dABbuJBoYeM0juCwI7OLiKJMABF5G5I7/Hfd5AA+jHb2dEYV6HZoAI0o7QABo2WHf47/Hel5AAWdzgABzu7AAQHCABOdNzYAEFRG6AAQ7/Hf47/Hbt6AAY7WywABzgfEAA5yXHaOWQqF5Hf47/HfF5GZo7LABoiQzo76zleHf4730nHABWdCQeWFAXBAAe7Gw4NEH5GdFg2kHYPIABZyH3YMDHZINDHZIsHHf47/AA2dAAQyD3bvMBogIDDwbuBHawADEogAUIYIoMHf47/G47mLACIeDH5I7OGzJAKHf47/Hbe7ABA7U0n+ABokMCpF7Cxl7GZw7/Hf47/HeV6AAecAA2dDyF7DQ+cvInCH5wbID4hbRD7Y7/Hd9dAArqIHdV5CZg7nAAg77rw77zo76A="));
 var date = new Date();
    var minute = (date.getMinutes()<10?'0':'') + date.getMinutes();
    var hour =  (date.getHours()<10?'0':'') + date.getHours();
    g.setColor('#33ccff');
    g.fillRect(0,0,240,240);

    for(var i=0; i<240;i=i+21){
        g.drawImage(brick,i,200);
        g.drawImage(brick,i,220);
    }

    g.drawImage(cloud,10,45);
    g.drawImage(cloud,185,80);
    g.drawImage(grass,210,180);
    g.drawImage(mario,90,130);

    g.setColor('#ff9933');
    g.fillRect(60,40,120,100);
    g.fillRect(130,40,190,100);


    g.setColor(0,0,0);
    g.fillRect(121,40,125,100);
    g.fillRect(55,101,190,105);
    g.fillRect(190,40,195,105);

    g.fillRect(65,45,70,50);
    g.fillRect(65,90,70,95);
    g.fillRect(110,45,115,50);
    g.fillRect(110,90,115,95);



    g.fillRect(135,45,140,50);
    g.fillRect(135,90,140,95);
    g.fillRect(180,45,185,50);
    g.fillRect(180,90,185,95);

    g.setColor('#cc3300');
    g.fillRect(55,40,60,100);
    g.fillRect(126,40,130,100);
    g.fillRect(60,35,120,40);
    g.fillRect(130,35,190,40);

    
    g.setColor('#b32d00');
    g.setFont("6x8", 4);
    g.drawString(hour,68,55);
    g.drawString(minute,139,55);



    //bush
    g.setColor('#2eb82e');
    g.fillCircle(45,170,10);
    g.fillPoly([0,200,35,165,55,165,90,200]);
    g.setColor(0,0,0);
    g.fillRect(50,170,53,175);
    g.fillRect(47,180,50,175);


    g.fillRect(20,190,23,195);
    g.fillRect(17,195,20,200);

    g.fillRect(65,190,68,195);
