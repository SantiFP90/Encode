const user = document.querySelector('#usuario');
const pass = document.querySelector('#contraseña');
const inp = document.querySelectorAll('#formulario input');
const login = document.querySelector('#login');
const exp = /^[a-zA-Z0-9]{4,16}$/
const expN = /^[0-9]*(\.?)[ 0-9]+$/


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

//Validar Campos
const validarForm = (e) =>{
    switch (e.target.name) {
        case "usuario":
            if (exp.test(e.target.value)) {
                document.getElementById("incorrectoUser").innerHTML =``
                habilitarLogin()

            }else{
                document.getElementById("incorrectoUser").innerHTML =`
                <p>Usuario incorrecto </p>
                `
            }
            break;

        case "contraseña":
            if (expN.test(e.target.value)) {
                document.getElementById("incorrectoPass").innerHTML =``
                habilitarLogin()

            }else{
                document.getElementById("incorrectoPass").innerHTML =`
                <p>Constraseña incorrecta </p>
                `
            }
            break;
    }
}

inp.addEventListener('keyup', habilitarLogin)

//Valida si escribe
inp.forEach((input) => {
    input.addEventListener('keyup', validarForm);
    input.addEventListener('blur', validarForm);
});



//Activar boton login

let e1= 0;
let e2=0;

function habilitarLogin() {
    if(user.value === ''){
        e1++;
    }
    if(pass.value === ''){
        e2++;
    }
    if(e1 === 0 && e2 === 0){
        login.value.disabled = false;
        console.log('aca1')
    }else{
        login.value.disabled = true;
        console.log('aca2')
    }
}














// hacer la busqueda de num y letra con dos expresiones regulares
// disabled habi/deshabi
// que evento usar para las validaciones
// color login


