let cadastro = document.getElementById("cadastro");
let login = document.getElementById("login");

let facaOCadastro = document.getElementById("container-link-cadastro");
let facaOLogin = document.getElementById("container-link-login");

facaOCadastro.addEventListener("click", function facaCadastro() {
  login.style.display = "none";
  cadastro.style.display = "flex";
});

facaOLogin.addEventListener("click", function facaLogin() {
  cadastro.style.display = "none";
  login.style.display = "flex";
})

let senha = $('.senha');
let olho = $(".olho");



olho.click(function () {
  if (senha.attr("type") === "text") {
    senha.attr("type", "password");
  } else {
    senha.attr("type", "text");
  }
});

