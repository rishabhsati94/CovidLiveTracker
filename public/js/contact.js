const username = document.getElementById('username');
const email = document.getElementById('email');
const address = document.getElementById('address');
const phone = document.getElementById('phone');

let validUserName = false;
let validEmail = false;
let validAddress = false;
let validPhone = false;

username.addEventListener('blur', () => {
    let reg = /^([a-zA-Z\s]){2,15}$/;
    let str = username.value;
    let uNameMessage = `User Name must be 3-15`;
    let id = document.getElementById('unamemsg');
    validUserName = valiDate(reg, str, id, username, uNameMessage);
});




email.addEventListener('blur', () => {
    let reg = /^([_\-\.0-9a-zA-Z]+)@([a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    let uNameMessage = `Provide valid Email Address`;
    let id = document.getElementById('emailmsg');
    validEmail = valiDate(reg, str, id, email, uNameMessage);
});


address.addEventListener('blur', () => {
    let reg = /([#,\-\.0-9a-zA-Z\s])/;
    let str = address.value;
    let uNameMessage = `Enter a Valid Address`;
    let id = document.getElementById('adrs');
    validAddress = valiDate(reg, str, id, address, uNameMessage);
});

phone.addEventListener('blur', () => {
    let reg = /([\+\-0-9]){0,14}/;
    let str = address.value;
    let uNameMessage = `Input Wrong Number`;
    let id = document.getElementById('phon');
    validPhone = valiDate(reg, str, id, phone, uNameMessage);;
});

function valiDate(reg, str, id, type, mes) {
    if (reg.exec(str)) {
        id.style.display = 'none';
        type.classList.remove('is-invalid');
        type.classList.add('is-valid');
        return true;
    }
    else {
        type.classList.remove('is-valid');
        type.classList.add('is-invalid');
        id.style.display = 'block';
        id.innerHTML = mes;
        return false;
    }
}

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    console.log('clicked')
    if (validUserName && validEmail && validAddress && validPhone) {
        let type = `success`;
        let displayMessage = `Your Form is submit`;
        alertmsg(type, displayMessage);
    }
    else{
        let type = `danger`;
        let displayMessage = `Your Form is not submit`;
        alertmsg(type, displayMessage);
        return false;
    }
});

function alertmsg(type, displayMessage){
let message = document.getElementById('message');
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>Message:</strong> ${displayMessage}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`;
  setTimeout(function(){
        message.innerHTML = ''
  },5000);
}


module.exports = {alertmsg};