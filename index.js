const user = document.querySelector('#usuario');
const pass = document.querySelector('#contraseña');
const inp = document.querySelectorAll('#formulario input');
const login = document.querySelector('#login');
const cerrarModal = document.querySelector('#cerrarModal');
const mostrarModal = document.querySelector('#mostrarModal');
const exp = /^[a-zA-Z0-9]{4,16}$/
const expN = /^[0-9]*(\.?)[ 0-9]+$/
const expMin = /^\d{4}$/


//Cambiar color login
check.addEventListener('change', (e)=>{
    e.preventDefault();
    if(e.target.checked === true){
        login.classList.add('rec')
        remember.classList.add('rec1')
    }else{
        login.classList.remove('rec')
        remember.classList.remove('rec1')
    }
})

let ok = 0

//Validar Campos
const validarForm = (e) =>{
    switch (e.target.name) {
        case "usuario":
            if (exp.test(e.target.value)) {
                document.getElementById("incorrectoUser").innerHTML =``
                ok++;
                login.disabled = false;
                login.classList.remove('inhabilitado')
            }else{
                document.getElementById("incorrectoUser").innerHTML =`
                <p>Usuario incorrecto </p>
                `
                login.disabled = true;
                login.classList.add('inhabilitado')
            }
            break;

        case "contraseña":
            if (expN.test(e.target.value) && expMin.test(e.target.value)) {
                document.getElementById("incorrectoPass").innerHTML =``
                ok++;
                login.disabled = false;
                login.classList.remove('inhabilitado')

            }else{
                document.getElementById("incorrectoPass").innerHTML =`
                <p>Constraseña incorrecta </p>
                `
                login.disabled = true;
                login.classList.add('inhabilitado')
            }
            break;
    }
}

//Valida si escribe
inp.forEach((input) => {
    input.addEventListener('keyup', validarForm);
    input.addEventListener('blur', validarForm);
});

// Modal
function loginOpen(){
    mostrarModal.classList.add('modalShow')
}
function loginClose(){
    mostrarModal.classList.remove('modalShow')
}

// login.addEventListener('click', (e)=>{
//     if(ok != 0){
//         console.log('envio')
//         loginOpen();
//     }
// })

document.querySelector('form').addEventListener('submit', (e)=>{
    e.preventDefault();
    if(ok != 0){
        console.log('envio')
        loginOpen();
    }
})

cerrarModal.addEventListener('click',loginClose)
