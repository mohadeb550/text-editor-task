
document.getElementById(`btn-submit`).addEventListener(`click`,function(e){
    
    const emailField = document.getElementById(`user-email`);
    const email = emailField.value;
  

    const passwordField = document.getElementById(`user-password`);
    const password = passwordField.value;
    
    if(email === `sontan@baap.com` && password === `secret`){
        window.location.href = `bank-main-page.html`;
    }else{
        alert(`Incorrect Password`);
    }

})