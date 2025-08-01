const numeroSenha = document.querySelector('.parametro-senha_texto');
let  tamanhoSenha = 12
numeroSenha.textContent = tamanhoSenha;

const botoes = document. querySelectorAll ('.parametro-senha_botao')

botoes [0].onclik = diminuiTamanho;
botoes [0].onclik = aumentaTamanho;

function 