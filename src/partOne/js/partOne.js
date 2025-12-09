//I parte, cambiar color y texto a darkblue

function changeColor(){
    const backgroundMock = document.getElementById('background');
    backgroundMock.style.backgroundColor= "darkblue";
};

function changeText(){
    const textMock= document.getElementById("text");
    textMock.innerHTML= "darkblue";
}; 

function changeStyles(){
    changeColor();
    changeText();
};

export {changeColor, changeText, changeStyles};

