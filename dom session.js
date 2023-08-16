// let flower = document.getElementsByTagName(`h2`);

// let flower = document.querySelector(`h2`)

// let flower = document.getElementsByClassName(`flower`)[0]



// let flowers = document.querySelectorAll(`.flower`)[1]

// console.log(flowers)


// let section = document.querySelector(`section`);


// console.log(section.innerText)

// let flowers = document.getElementsByClassName(`flower`);

// for (let flower of flowers){
//     flower.style.color = `green`;
// }


// for(let item of section.children[1].children){
//     item.style.color = `green`
// }


// let section = document.querySelector(`section`);

// let li = section.querySelectorAll(`li`);

// console.log(li)


// console.log(li.closest())
// console.log(ul.previousElementSibling)
// console.log(ul.nextElementSibling)

// let ol = document.createElement(`ol`);
// ol.innerText = `I am Order List `;

// ul.appendChild(ol)
// section.insertBefore(ol, p)



// let p = document.querySelector(`p`);
// p.classList.add(`food`);
// p.classList.add(`hot`);


// let section = document.querySelector(`section`);

// // h1.remove();
// let ul  = document.querySelector(`ul`)

// section.removeChild(ul)






// let input = document.querySelector(`input`);


// let display = document.querySelector(`h2`);



// let number = 0;
// input.addEventListener(`keyup`,function(event){
//     if(event.key === `Enter`){
//         number = number+ 1;
//         event.target.value = number;
//     }
//     else if(event.key === `Delete`){
//         if(number !== 0){
//             number = number- 1;
//             event.target.value = number;
//         }
            
//     }
// })











document.getElementById("grandparent").addEventListener("click", function(e){
      
    document.getElementById(`grandparent`).style.background =`yellow`;
    });
 

  document.getElementById("parent").addEventListener("click",function(e){

    document.getElementById(`parent`).style.background =`green`;
    e.stopPropagation();
      
    });
 

  document.getElementById("child").addEventListener("click",function(e){

    document.getElementById(`child`).style.background =`blue`;
      e.stopPropagation();
    }
 );