let gnum, rnum, rattempt;

let won=0;
let lost=0;
let attempt=0;

let form=document.querySelector("form");
let num=document.querySelector("#num");
let p1=document.querySelector(".p1");
let p2=document.querySelector(".p2");
let p3=document.querySelector(".p3");
let btn=document.querySelector("button");

form.addEventListener("submit",(e)=>{
e.preventDefault();
attempt++;
if(attempt>4){
  num.disabled=true;
  btn.disabled=true;
}
rattempt= 5-attempt;
gnum=num.value;
rnum=Math.floor(Math.random()*5)+1;
if(rnum==gnum){
  won++;
  p1.innerHTML="You have won!";
  p2.innerHTML="Remaining attempts: "+rattempt;
}else{
  lost++;
  p1.innerHTML="You have lost! The random number was "+rnum;
  p2.innerHTML="Remaining attempts: "+rattempt;
}
p3.innerHTML="Won: "+won+", Lost: "+lost;
num.value='';
});