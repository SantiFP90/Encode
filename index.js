const user = document.querySelector('#usuario');
const pass = document.querySelector('#contraseña');
const inp = document.getElementsByClassName('input');
const login = document.querySelector('#login');
const exp =  /^[a-zA-Z0-9\_\-]{4,16}$/


inp.addEventListener('keyup', (e)=>{
    let texto = e.target.value;
    console.log(texto)
    // e.preventDefault();
    // if(exp.test(user.value)){
    //     console.log('Guardo usuario')
    // }else{
    //     console.log('Usuario incorrecto')
    // }
})


// login.addEventListener("click", (e)=>{
//     e.preventDefault();
//     if(pass.value.length===4 && !isNaN(pass.value)){
//         console.log('Guardo Contraseña')
//     }else{
//         console.log('Error contraseña')
//     }
// })


