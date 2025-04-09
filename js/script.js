//efeito do botão voltar ao Topo

function topo(){
    window.scrollTo ( //como o 'scrollTo' é uma matriz, foi necessário abrir e fechar as chaves dentro do parêntesis que o acompanha.
        {
            top: 0,
            left: 0,
            behavior: "smooth" //o comportamento do elemento (do botão Voltar ao Topo) é ser mais lento.
        }
    ) //A função 'window' é para pegar a tela do navegador; o 'scrollTo' é o método que serve para a barra de rolagem do navegador.
}

//Validação de Login

function login(){ //Aplico uma função para o botão do 'login'.
    var logado = 0;
    var usuario = document.getElementById("usuario").value; //O 'getElementById' é usado para selecionar o elemento que tem o 'id' chamado de 'usuário', sendo que busco pelo valor do 'usuário'.
    var senha = document.getElementById("senha").value; //Para garantir, faço o mesmo comando para o elemento que tem o 'id' chamado 'senha.

    if(usuario == 'Nivia' && senha == '123456'){ //Uso essa condição para validar e, além disso, eu poderia definir outro valor para usuário e para a senha. 
        window.location = 'index.html'; //quando clicado, o botão vai para a página 'index.html'. 
        logado = 1; //quando logado, o elemento vai de zero (valor definido anteriormente) para um. 
    }

    if(logado == 0){ //Em caso de quando logado permanecer no valor zero em vez de um, mostrar mensagem de alerta com o dizer a seguir: 
        alert("Acesso Negado! Dados incorretos!");
    }
}
//Ativar alert no botão cadastrar

function cadastro(){
    alert("Cadastro com sucesso!");
    window.location.href = "index.html";
}