function validarNombreYApellidos(e, msg){
    //let msg =e.target.nextSibling;
    let reOneName = /^[A-Z]\S+$/;
    let reTwoNames= /(\w.+\s)+[A-Z]/;
    if(reOneName.test(e.target.value) == true){
        msg.innerHTML = 'Por ahora está todo correcto, tienes 1 nombre'
    }else if(reTwoNames.test(e.srcElement.value) == true){
        msg.innerHTML = 'Por ahora está todo correcto, tienes 2 nombres'
    }else
        msg.innerHTML = 'Algo hiciste mal!'
}

function validarDni(e, msg){
    let reDni= /^[0-9]{8,8}[A-Z]$/;
    reDni.test(e.target.value) == true? msg.innerHTML = 'Valido':msg.innerHTML = 'No valido'
}
function validarTelefono(e, msg){
    let reTlf = /^[0-9]{9}$/
    reTlf.test(e.target.value) == true? msg.innerHTML = 'Valido':msg.innerHTML = 'No valido'
}
function validarUserName(e, msg){
    var reUser = /^(?=[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{8,20}$)(?=.*[!@#\$%\^\&*\)\(+=._-])(?=.*[0-9])/;
    reUser.test(e.target.value) == true? msg.innerHTML = 'Valido':msg.innerHTML = 'No valido'
}
function validarEmail(e, msg){
    let reE = /\S+@\S+\.\S+/;
    reE.test(e.target.value) == true? msg.innerHTML = 'Valido':msg.innerHTML = 'No valido'
}
window.onload = () => {
    var msgs = document.querySelectorAll('.form-text')
    var allimputs = document.querySelectorAll('.form-control')
    allimputs[0].addEventListener('keyup', function(e){
        validarNombreYApellidos(e, msgs[0])
    })
    allimputs[1].addEventListener('keyup', function(e) {validarNombreYApellidos(e, msgs[1])})
    //allimputs[1].addEventListener('keyup', validarNombreYApellidos(allimputs[1], msgs[1]))
    allimputs[2].addEventListener('keyup', function(e) {validarDni(e, msgs[2])})
    allimputs[3].addEventListener('keyup', function(e) {validarTelefono(e, msgs[3])})
    allimputs[4].addEventListener('keyup', function(e) {validarEmail(e, msgs[4])})
    allimputs[5].addEventListener('keyup', function(e) {validarUserName(e, msgs[5])})


}