var canvas=document.getElementById("canvas");
var WIDTH=400;let HEIGHT=400;
canvas.width=WIDTH;canvas.height=HEIGHT;
var ctx=canvas.getContext("2d");
ctx.imageSmoothingEnabled = false;
var imgs=[];
var imgEles=[];
function text(t,x=0,y=0,color="rgb(0,0,0)",size=16){
    ctx.fillStyle=color;
    ctx.font=size+'px px Arial, meiryo, sans-serif';
    ctx.fillText(t,x,y+size);
}
function img(f,x=0,y=0,w=14,h=18){
    var flag=false;
    for(var i=0;i<imgs.length;i++){
        if(f==imgs[i]){
            flag=true;
            break;
        }
    }
    if(flag){
        ctx.drawImage(imgEles[i], x, y, w, h);
    }
    else{
        imgs[i]=f;
        imgEles[i]=new Image();
        imgEles[i].src=f;
        imgEles[i].onload = function(){
            ctx.drawImage(imgEles[i], x, y, w, h);
        };
    }
}
function rect(x=0,y=0,w=WIDTH,h=HEIGHT,color="rgb(255,255,255)",fill=true,weight=1){
    if(fill){
        ctx.fillStyle=color;
        ctx.fillRect(x,y,w,h);
    }
    else{
        ctx.strokeStyle=color;
        ctx.lineWidth=weight;
        ctx.strokeRect(x,y,w,h);
    }
}
function circle(x,y,r,color="rgb(0,0,0)",fill=true,weight=1){
    ctx.beginPath();
    ctx.arc(x,y,r,0,360*Math.PI/180);
    if(fill){
        ctx.fillStyle=color;
        ctx.fill();
    }
    else{
        ctx.strokeStyle=color;
        ctx.lineWidth=weight;
        ctx.stroke();
    }
}
function line(x1,y1,x2,y2,color="rgb(0,0,0)",weight=1){
    ctx.beginPath();
    ctx.moveTo(x2,y2);
    ctx.lineTo(x1,y1);
    ctx.strokeStyle=color;
    ctx.lineWidth=weight;
    ctx.stroke();
}
async function wait(ms){
    await new Promise(resolve => setTimeout(resolve, ms));
}
function onClick(id,func){
    let el=document.getElementById(id);
    el.addEventListener('click',func);
}
function onKeyDown(func){
    document.addEventListener('keydown',func);
}
function onKeyUp(func){
    document.addEventListener('keyup',func);
}
function clickX(e){
    var rect=e.target.getBoundingClientRect();
    var viewX=e.clientX-rect.left;
    var scaleWidth=canvas.clientWidth/canvas.width;
    return Math.floor(viewX/scaleWidth);
}
function clickY(e){
    var rect=e.target.getBoundingClientRect();
    var viewY=e.clientY-rect.top;
    var scaleHeight=canvas.clientHeight/canvas.height;
    return Math.floor(viewY/scaleHeight);
}
function input(id){
    var ele=document.getElementById(id);
    return ele.value;
}