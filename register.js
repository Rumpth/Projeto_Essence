const inputs = document.getElementsByClassName('form__input');

function onSubmit() {
    const countInputs = inputs.length;
    console.log('oiii')
    let inputData = [];

    for (x = 0; countInputs > x; x++) {
        inputData.push(inputs[x].value);
    }

    localStorage.setItem('register', JSON.stringify(inputData));
    alert('Cadastro realizado com sucesso!')
    window.location.href='../index.html'
}