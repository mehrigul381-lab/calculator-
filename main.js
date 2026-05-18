let previous = "";
let current = "";
let operator = "";
const display = document.getElementById("display");
const clickSound = document.getElementById("clickSound");
const explosionSound = document.getElementById("explosionSound");
function addNum(n){
    current += n;
    display.value = current;
    playClick();
}
function setOp(op){
    if(current==="") return;
    operator = op;
    previous = current;
    current="";
    playClick();
}
function calculate(){
    if(previous==="" || current==="") return;
    let a = Number(previous);
    let b = Number(current);
    let r = 0;
    if(operator==="+") r = a+b;
    if(operator==="-") r = a-b;
    if(operator==="*") r = a*b;
    if(operator==="/") r = a/b;
    display.value = r;
    current = String(r);
    previous="";
    operator="";
    playExplosion();
}
function clearAll(){
    previous="";
    current="";
    operator="";
    display.value="";
    playClick();
}
function playClick(){ clickSound.currentTime=0; clickSound.play(); }
function playExplosion(){ explosionSound.currentTime=0; explosionSound.play(); }