//efeito de esconder formulário de cadastro

$(document).ready(function(){//O jquery é uma biblioteca que visa minimizar o código do javaScript. Esse é um comando padrão para iniciar o jquery. Veja que existe uma função dentro do 'ready'.
    $("botao-cadastrar").click(function(){//Este código do jquery minimiza o seguinte código do javaScript: document.getElementById("botao-cadastrar").click()
        $("#form-cadastrar").slideToggle("slow"); //Neste código do jquery, o 'Toggle' funcionará da seguinte forma: se o formulário estiver escondido (hide), ele irá ser mostrado (show); e se estiver sendo mostrado, o formuário vai ficar encondido.
        $("#section-login").slideToggle("slow");
        $("#botao-cadastrar").hide(); //Neste código do jquery, o 'hide' funcionará da seguinte forma: o formulário deverá ser escondido (hide).
    });
});