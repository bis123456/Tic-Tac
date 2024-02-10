let box = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let msgContainer=document.querySelector(".msg-container");
let newbtn=document.querySelector("#new-btn");
let turn0 = true;//playerX playerO
let arr = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]];
    let flag=0;
box.forEach((b) => {
    b.addEventListener("click", () => {
        console.log("Box was clicked");
        if(flag!=1){
        if (turn0 === true) {
            turn0 = false;
            b.innerText = "O";
        }
        else {
            turn0 = true;
            b.innerText = "X";
        }
        b.disabled = true;
        
        checkwinner();}
    });
});
const checkwinner = () => {
    for (let pattern of arr) {
let x=box[pattern[0]].innerText;
let y=box[pattern[1]].innerText;
let z=box[pattern[2]].innerText;
if(x!=""&&y!=""&&z!=""){
    if(x===y&&y===z){
        console.log("winner"+x);
        flag=1;
        document.querySelector("#msg").innerText=`Congratulations ${x}`;
        msgContainer.classList.remove("hide");
    }
}
    }
}
reset.addEventListener("click",()=>{
    turn0=true;
    flag=0;
addempty();
})
newbtn.addEventListener("click",()=>{
    truen0=true;
    flag=0;
    addempty();
})
let addempty=()=>{
    for(let i of box){
        i.disabled=false;
    }
    for(let i of box){
        i.innerText="";
    }
}