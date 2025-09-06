let gameSeq=[];
let userSeq=[];

let btns=["pink","green","orange","blue"];
let started=false;
let level=0;

let h2=document.querySelector("h2");
document.addEventListener("keypress" , function (){
    if(started==false){
        console.log('started');
        started=true;       //game will start for only one time     
        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");  
    },100);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");  
    },100);
}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;

    let randInd=Math.floor(Math.random()*3);
    let randCol=btns[randInd];
    gameSeq.push(randCol);
    let randBtn=document.querySelector(`.${randCol}`);
    gameFlash(randBtn);
}

function check(indch){
    console.log("level:",level);
    if(userSeq[indch]===gameSeq[indch]){
        if(userSeq.length== gameSeq.length){
            setTimeout(levelUp,100);
        }
    }else{
        h2.innerHTML=`Game Over! your score was <b>${level} <b><br>Press any key to start again!!`;
        let redbg=document.querySelector("body");
        redbg.style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="black";
        },150);
        reset();
    }

}
function reset(){
    started=false;
        gameSeq=[];
        userSeq=[];
        level=0;
}
function btnPress(){
    let btn=this;
    userFlash(btn);
    userCol=btn.getAttribute("id");
    userSeq.push(userCol);
    check(userSeq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
    for(btn of allBtns){
        btn.addEventListener("click",btnPress);
    }