$(document).ready(function(){
    $('form').validate({
    rules: {
        nomeCompleto: {
            required: true
        },
        email: {
            required: true
        },
        telefone: {
            required: true
        },
        cpf: {
            required: true
        },
        cep: {
            required: true
        },
        endereço: {
            required: true
        }
    },
    messages: {
        nomeCompleto: 'Por favor, insira seu nome',
        email: 'Por favor, insira seu e-mail',
        telefone: 'Por favor, insira seu telefone',
        cpf:'Por favor, insira seu cpf',
        cep:'Por favor, insira seu cep',
        endereço:'Por favor, insira seu endereço'
    },
    submitHandler: function(form) {
        alert('Você concluiu o cadastro corretamente')
        form.reset();
        
    },
    invalidHandler: function(evento, validador) {
        let camposIncorretos = validador.numberOfInvalids();
        if (camposIncorretos) {
            alert(`Existem ${camposIncorretos} campos incorretos, por favor preencha todos para cadastra-lo`)
        }
    }
})
})
