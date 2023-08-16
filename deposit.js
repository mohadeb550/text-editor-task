
// get value & set value function ----

function getValueByElement (id){
  let element = document.getElementById(id);
  let value = parseFloat(element.value);
  return value;
}

function getTextByElement (id){
  let element = document.getElementById(id);
  let value = parseFloat(element.innerText);
  return value;
}

function setText(elementId, text){
  let element = document.getElementById(elementId);
  element.innerText = text;
}



// button event listener function ----
// deposit button handler-----

document.getElementById(`btn-deposit`).addEventListener(`click`,function(){


   const depositFieldValue = getValueByElement(`deposit-field`);
  const totalDepoAmount = getTextByElement(`deposit-total`);
  const balance = getTextByElement(`balance-total`);
  
    const currentDepositTotal = depositFieldValue  + totalDepoAmount;
    setText(`deposit-total`,currentDepositTotal);

    
  let newBalance = depositFieldValue + balance;
  setText(`balance-total`, newBalance);

})


// withdraw button handler ----


document.getElementById(`btn-withdraw`).addEventListener(`click`,function(){

const withdrawFieldValue = getValueByElement(`withdraw-field`);
const withdrawDisplayValue = getTextByElement(`withdraw-total`);
const balance = getTextByElement(`balance-total`);

setText(`withdraw-total`, withdrawDisplayValue + withdrawFieldValue);
setText(`balance-total`, balance - withdrawFieldValue);

})










 // if(depositFieldValue === ``){
    //   alert(`koy taka joma diba seta lekho`);
    //   return;
    // }


  // if(isNaN(totalDepoAmount)){
    //   alert(`abcd lekhle kaj hobo na`);
    //   depositField.value = ``; 
    //   return;
    // }



  //   // get balance currect total
  //   const balanceTotalElement = document.getElementById(``);
  //   const currectBalanceTotal = parseFloat(balanceTotalElement.innerText) + parseFloat(newDepositAmount);
  //   balanceTotalElement.innerText =  currectBalanceTotal;

  //   depositField.value = ``;















// document.getElementById(`btn-withdraw`).addEventListener(`click`,function(){


//   const withdrawField = document.getElementById(`withdraw-field`);
  
//   if(withdrawField.value === ``){
//     alert(`koy taka niba seta lekho`);
//     return;
//   }
//   const newWithDrawAmount = parseFloat(withdrawField.value);
//   if(isNaN(newWithDrawAmount)){
//     alert(`abcd lekhle kaj hobo na`);
//     withdrawField.value = ``; 
//     return;
//   }

//   const withdrawTotalElement = document.getElementById(`withdraw-total`);
//   const previousWithdrawTotal = parseFloat(withdrawTotalElement.innerText);

//   const balanceTotalElement = document.getElementById(`balance-total`);
//   const prevBalanceTotal = parseFloat(balanceTotalElement.innerText);

//   if(prevBalanceTotal < newWithDrawAmount){
//     alert(`Eto taka nai`);
//     withdrawField.value = ``; 
//     return;
//   }

//   const currentWithdrawTotal = previousWithdrawTotal + newWithDrawAmount;
//   withdrawTotalElement.innerText = currentWithdrawTotal;

//   const currectBalanceTotal = prevBalanceTotal - parseFloat(newWithDrawAmount);
  
//   balanceTotalElement.innerText = currectBalanceTotal;

//   withdrawField.value = ``; 




// let a = `c`;

// let result = parseFloat(a);

// console.log(result)