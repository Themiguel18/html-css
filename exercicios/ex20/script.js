const email=document.querySelector('#email')
const password=document.querySelector('#palavraPasse')
const olho=document.querySelector('#olho')
const submit=document.querySelector('#submit')


olho.addEventListener('click', (evt)=>{
    const isSenha=password.type==='password'
    password.type=isSenha ? 'text' : 'password'
    olho.className= isSenha ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'
})


