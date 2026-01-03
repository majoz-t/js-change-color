//II parte, refactorizar para hacer toggle, nos basaremos en lo que hicimos en el archivo partOne.js

/*function changeColor(){
    const backgroundMock = document.getElementById('background');
    const actualColor= backgroundMock.style.backgroundColor;
    if (actualColor === 'red' || actualColor === 'rgb(255,0,0)' || actualColor === ""){
        backgroundMock.style.backgroundColor= 'darkblue';    
}   else {
        backgroundMock.style.backgroundColor= 'red';
}};

function changeText(){
    const textMock= document.getElementById("text");
    const actualText= textMock.innerHTML;
   if (actualText === 'red' ){
     textMock.innerHTML= 'darkblue';
}  else{
     textMock.innerHTML= 'red';
}};*/

function changeColor(){
    const backgroundMock = document.getElementById('background');
    const actualColor= backgroundMock.style.backgroundColor;
    backgroundMock.style.backgroundColor = (actualColor === 'red' || actualColor === 'rgb(255,0,0)' || actualColor === "") ? 'darkblue' : 'red';
};
function changeText(){
    const textMock= document.getElementById("text");
    const actualText= textMock.innerHTML;
    textMock.innerHTML = (textMock.innerHTML === 'red') ? 'darkblue':'red';
};
function changeStyles(){
   changeColor();
   changeText();
};

export {changeColor, changeText, changeStyles}