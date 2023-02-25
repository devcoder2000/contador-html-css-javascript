const contador = document.querySelector('.contador');
const buttons = document.querySelector('.buttons');

buttons.addEventListener('click', e => {
    if(e.target.classList.contains('agregar')){
        contador.innerHTML++;
        setColor();
    }
    if(e.target.classList.contains('quitar')){
        contador.innerHTML--;
        setColor();
    }
    if(e.target.classList.contains('resetear')){
        contador.textContent = "0"
        setColor();
    }
});

function setColor(){
    if(contador.innerHTML>0){
        contador.style.color = "black";
    }else if (contador.innerHTML < 0){
        contador.style.color = "red";
    }else {
        contador.style.color = "black";
    }
}