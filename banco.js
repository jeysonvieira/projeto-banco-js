var input = require("readline-sync")



// FUNÇÕES DO PROJETO //

const validacao = (nome) => {
    for(let cont = 0; cont < cadastrados.length; cont++){
        if(cadastrados[cont].nome == nome){
            return true;
        }

    }

}


//const validacao_resto = (dados) => {

// }




// INTERAÇÕES INICIAIS COM O CLIENTE //


console.log(`BEM VINDO AO BANCO JEYCARD!!
`)


var cliente = input.question("Você já é cliente do banco?[S/N]: ").toLocaleUpperCase()[0]

var resp = ' '

switch(cliente){
    case 'S':
        resp = cliente;
        break;

    case 'N':
        resp = cliente;
        break;

    default:
        var r = ' '
        console.log(`Aceitamos apenas [S] ou [N] como resposta, digite novamente: 
        `)
        while(r != 'S' && r != 'N'){
            r = input.question("Você já é cliente do banco?[S/N]: ").toUpperCase()[0];
        }
        resp = r

}



// BANCO DE DADOS DO BANCO //


const cadastrados = [
    {id: 1, nome: 'JEYSON SARAIVA VIEIRA', cartao: '086409511', cpf: '55385554960', senha: '307119', saldo: 3200},

    {id: 2, nome: 'ISADORA SOUSA DE CARVALHO', cartao: '019331863', cpf: '49538001541', senha: '182315', saldo: 1800},

    {id: 3, nome: 'EDUARDO RIBEIRO MOURA', cartao: '071151587', cpf: '38117715120', senha: '540820', saldo: 2400}
]



// CASO O USUÁRIO JÁ SEJA CLIENTE DO BANCO //




if(resp === 'S'){
    let nome_usuario = input.question("Digite seu nome completo: ").toUpperCase().trim();

    let conferir = validacao(nome_usuario);


    // VALIDAÇÃO DO NOME DIGITADO PELO CLIENTE //


    if(conferir){
        console.log(`Seja Bem vindo Sr(a): ${nome_usuario.toLocaleLowerCase()}.`);

        var usuario_validado = nome_usuario.toLowerCase();

    }
    else{
        while(!conferir){
            console.log(`
Nome não encontrado no sistema, Digite corretamente.
            `)
            nome_usuario = input.question("Digite novamente seu nome completo: ").toUpperCase().trim();

            let conferir = validacao(nome_usuario);

            if(conferir){
                console.log(`Seja Bem vindo Sr(a): ${nome_usuario.toLocaleLowerCase()}.`)

                var usuario_validado = nome_usuario.toLowerCase();

                break
            }
    }
    
    
    // VALIDAÇÃO DO RESTO DAS INFORMAÇÕES //

    
}
}






