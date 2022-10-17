let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#senha')
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

function entrar(){
  let name = document.querySelector("usuario")
  let userLabel = document.querySelector('#userLabel')
  
  let senha = document.querySelector("senha")
  let senhaLabel = document.querySelector("#senhaLabel")
  
  let msgError = document.querySelector('#msgError')
  let listaUser = []
  
  let userValid = {
    nome: '',
    user: '',
    senha: ''
  }


  function validar(){

    var name = document.getElementById("usuario");
    var senha = document.getElementById("senha");


        if(name.value == "" || name.value.length < 3) {
        alert( "Preencha campo Usuario corretamente!");
        name.focus();
        return false;
        }

        if(senha.value=="" || senha.value.length < 1) {
        alert("Preencha campo Senha corretamente!");
        senha.focus();
        return false;
        }
        
        alert("Mensagem enviada!");
        return true;

}
}