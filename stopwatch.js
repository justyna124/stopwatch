
var stopWatch=document.getElementById('stopwatch');
var startButton=document.getElementById('start');
var stopButton=document.getElementById('stop');
var saveButton=document.getElementById('save');
var result=document.getElementById('results');
var clearButton=document.getElementById('clear');
var firstTime;
var nextTime;
var interval;


function start(){
    firstTime= Date.now();
    console.log(firstTime);
    clearInterval(interval);
    interval= setInterval(refreshView,100);

}

startButton.addEventListener('click',start);
function refreshView(){
    nextTime=Date.now();
    var diff=nextTime-firstTime;
    var ms=diff%1000;
    var s=Math.floor((diff/1000)%60);
    var m=Math.floor(diff/(60000));
    if(s<10){
        s='0'+s;
    }if(m<10){
        m='0'+ m;
    }

stopWatch.innerText=m+':'+s+":"+ms

}
stopButton.addEventListener('click',stop);
function stop(){
    refreshView();
    clearInterval(interval);

}
saveButton.addEventListener('click',save);
function save() {
    var para = document.createElement("p");
    var node = document.createTextNode(stopWatch.innerText);
    para.appendChild(node);
    result.appendChild(para);
}
clearButton.addEventListener('click',clear);
function clear() {
    result.innerHTML='';
    stopWatch.innerText='00:00:00';
}


