const user = document.querySelector('#usuario');
const pass = document.querySelector('#contraseña');
const inp = document.querySelectorAll('.input');
const login = document.querySelector('#login');
const exp =  /^[a-zA-Z0-9\_\-]{3,16}$/

// inp[0].addEventListener('keyup', (e)=>{
//     e.preventDefault();
//     if(exp.test(user.value)){
//         console.log('Guardo usuario')}
//     else{
//         console.log('Usuario incorrecto')
//     }
// })

// inp[1].addEventListener('keyup', (e)=>{
//     e.preventDefault();
//     if(pass.value.length===4 && !isNaN(pass.value)){
//         console.log('Guardo Contraseña')
//     }else{
//         console.log('Error contraseña')
//     }
// })

login.addEventListener('click', (e)=>{
    e.preventDefault();
    if(exp.test(user.value)){
        console.log('Guardo usuario')}
    else{
        console.log('Usuario incorrecto')
    }
})

login.addEventListener("click", (e)=>{
    e.preventDefault();
    if(pass.value.length===4 && !isNaN(pass.value)){
        console.log('Guardo Contraseña')
    }else{
        console.log('Error contraseña')
    }
})


// hacer la busqueda de num y letra con dos expresiones regulares
// disabled habi/deshabi
// que evento usar para las validaciones
// color login


