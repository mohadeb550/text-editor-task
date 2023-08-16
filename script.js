


function makeBlue (){
    document.body.style.backgroundColor = `steelblue`;
}


const limeBtn = document.getElementById(`make-lime`);

limeBtn.onclick = makeLime;


function makeLime (){
    document.body.style.background = `lime`;
}


const yellowBtn = document.getElementById(`make-yellow`);


yellowBtn.onclick = function makeYellow (){
    document.body.style.background = `yellow`;
}



let orangeBtn = document.getElementById(`make-orange`);


orangeBtn.addEventListener(`click`, makeOrange)


function makeOrange(){

    document.body.style.background = `orange`;
}




document.getElementById(`make-pink`).addEventListener(`click`,function (){
    document.body.style.background = `pink`;
})



function changeName (){
    const h2 = document.getElementById(`name`);
    h2.innerText = `Loser FF`;
}



document.getElementById(`update-btn`).addEventListener(`click`,function(){

    let display = document.querySelector(`.display`);
    let input = document.querySelector(`.text-input`);

    display.innerText = input.value;
    input.value = ``;
})