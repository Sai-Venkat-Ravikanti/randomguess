let btn=document.getElementById('btn');
let output=document.getElementById('useroutput');
let number=[Math.floor(Math.random() * 100)];
btn.addEventListener('click',function(){
let input=document.getElementById('userinput').value;
if (input==number){
output.innerHTML=`Hurry!! Your guess is right .your guessed no is ${number}`
}else if(input<number){
    output.innerHTML=`oops !!your guess is  low try again`
};
 if(input>number){
    output.innerHTML=`oops !! your guess is  high`
}else if(input==''){
output.innerHTML=`pls Enter number between 1-100`
}else if(input<1){
    output.innerHTML=`pls enter a number above 0`
}else if(input>100){
    output.innerHTML=`pls enter a number below 101`
};
})
