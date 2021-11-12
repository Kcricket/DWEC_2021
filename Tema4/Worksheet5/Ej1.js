//(?=.*\d)          // should contain at least one digit
// (?=.*[a-z])       // should contain at least one lower case
// (?=.*[A-Z])       // should contain at least one upper case
// [a-zA-Z0-9]{8,}   // should contain at least 8 from the mentioned characters

function validarMayuscula(){
    let re = /(?=.*[A-Z])/;
    input1 = document.querySelector('#ej1')
    msg = document.querySelector('#emailHelp')
    re.test(input1.value) == true? msg.innerHTML = 'Por ahora está todo correcto': msg.innerHTML = 'Algo hiciste mal!'
  

}

function validarX(){
    let re = /(?=.*[!@#$%^&])/;
    allmsg = document.querySelectorAll('.form-text')
    re.test(allimputs[1].value) == true? allmsg[1].innerHTML = 'Por ahora está todo correcto': allmsg[1].innerHTML = 'Algo hiciste mal!'
    

}
function validarCorreo(){
    let re = /\S+@\S+\.\S+/;
    allmsg = document.querySelectorAll('.form-text')
    re.test(allimputs[2].value) == true? allmsg[2].innerHTML = 'Por ahora está todo correcto': allmsg[2].innerHTML = 'Algo hiciste mal!'
    

}
function validarCredito(){
    let re = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;
    allmsg = document.querySelectorAll('.form-text')
    re.test(allimputs[3].value) == true? allmsg[3].innerHTML = 'Por ahora está todo correcto': allmsg[3].innerHTML = 'Algo hiciste mal!'
    

}
function validarLongitud(){
    let re = /[a-zA-Z0-9]{8,}/;
    allmsg = document.querySelectorAll('.form-text')
    re.test(allimputs[4].value) == true? allmsg[4].innerHTML = 'Por ahora está todo correcto': allmsg[4].innerHTML = 'Algo hiciste mal!'
    

}
function validarNumero(){
    let re = /(?=.*[0-9])/;
    allmsg = document.querySelectorAll('.form-text')
    re.test(allimputs[5].value) == true? allmsg[5].innerHTML = 'Por ahora está todo correcto': allmsg[5].innerHTML = 'Algo hiciste mal!'
    

}
window.onload = () => {
    allimputs = document.querySelectorAll('.form-control')
    //console.log(allimputs[0].value)
    allimputs[0].addEventListener('keyup', validarMayuscula)
    allimputs[1].addEventListener('keyup', validarX)
    allimputs[2].addEventListener('keyup', validarCorreo)
    allimputs[3].addEventListener('keyup', validarCredito)
    allimputs[4].addEventListener('keyup', validarLongitud)
    allimputs[5].addEventListener('keyup', validarNumero)


    //allimputs[2].addEventListener('keyup', validarCorreo)


    //allmsg = document.querySelectorAll('.form-text')
    //console.log(allmsg[1].innerHTML)
    


}