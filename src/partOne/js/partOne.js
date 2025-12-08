//I parte, cambiar color y texto a darkblue

const backColor= document.querySelector('.color');
const mybackground = document.getElementById('conteiner');

function changeColor(){
    mybackground.style.background= '#000087';
};

function changeText(){
    backColor.textContent= 'darkblue';
}; 

function changeStyles(){
    changeColor();
    changeText();
};

export {changeColor, changeText, changeStyles};

