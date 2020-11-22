const btnLogin = document.getElementById('btnLogin');

const inputs = document.getElementsByClassName('form__input');
const email = document.getElementById('email');
const password = document.getElementById('password');

function login() {
    console.log(document.getElementById('email').value)
    let data = JSON.parse(localStorage.getItem('register'));

    let localstorageEmail = data[1];
    let localstoragePassword = data[2];

     if (document.getElementById('email').value == localstorageEmail && document.getElementById('password').value == localstoragePassword) {
        alert('Login realizado com sucesso!')
        window.location.href='../index.html'
    }
}