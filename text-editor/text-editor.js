
let icons = document.querySelectorAll(`.icon`);
let textArea = document.querySelector(`textarea`);
let fontSizeAndColor = document.querySelectorAll(`.font-color`);

for(let icon of icons){
    icon.addEventListener(`click`,function(e){
        textArea.classList.toggle(e.target.getAttribute(`data-style`));
        e.target.classList.toggle(`text-blue-600`);
  })}

for(let item of fontSizeAndColor){
    item.addEventListener(`change`,function(e){
        if(e.target.value.length <= 2){
            textArea.style.fontSize = `${e.target.value}px`;
            return;
        }
    textArea.style.color = e.target.value;
  })}


