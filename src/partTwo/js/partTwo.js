//II parte, refactorizar para hacer toggle, nos basaremos en lo que hicimos en el archivo partOne.js
const backColor= document.querySelector('.color');
const mybackground = document.getElementById('conteiner');

function changeColor(){
    const actualColor= window.getComputedStyle(mybackground).backgroundColor;;
    const dred='rgb(255,0,0)';
    const dBlue='rgb(0, 0, 135)';
    if (actualColor === dred){
        mybackground.style.backgroundColor= dBlue;    
}   else {
        mybackground.style.backgroundColor= dred;
}};
function changeText(){
    const actualText= backColor.textContent;
   if (actualText === 'red'){
     backColor.textContent= 'darkblue';
}  else{
     backColor.textContent= 'red';
}};

function changeStyles(){
   changeColor();
   changeText();
};

export {changeColor, changeText, changeStyles}