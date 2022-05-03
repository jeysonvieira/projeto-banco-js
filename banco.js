var input = require("readline-sync")



// FUNÇÕES DO PROJETO //

const validacao = (nome) => {
    for(let cont = 0; cont < cadastrados.length; cont++){
        var contador = cont
        if(cadastrados[cont].nome == nome){

            return true
            
        }

    }

}


const id = (nome_id) => {
    var contador = 0
    while(contador < cadastrados.length){
        if(cadastrados[contador].nome == nome_id){
            return contador
        }
    contador += 1
    }
}


const cartao_senha = (cartao, senha) =>{
    if(cartao == cadastrados[id_usuario].cartao && senha == cadastrados[id_usuario].senha){
        return true
    }

    else{
        return false
    }
}

function tabela(){
    return `
[1] - DEPÓSITAR
[2] - SACAR
[3] - SALDO
[4] - DADOS DA CONTA
[5] - SAIR`
}


function depositar(valor){
    novo_saldo = cadastrados[id_usuario].saldo + valor;
    return novo_saldo
}

function sacar(valor){
    novo_saldo = cadastrados[id_usuario].saldo - valor;
    return novo_saldo
}

function saldo(){
    saldo_inicial = cadastrados[id_usuario].saldo
    return saldo_inicial
}

function dados(){
    return `Nome: ${cadastrados[id_usuario].nome}
Cpf: ${cadastrados[id_usuario].cpf}
Cartao: ${cadastrados[id_usuario].cartao}
Saldo: ${cadastrados[id_usuario].saldo}`
}




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


    // VALIDAÇÃO DO NOME DIGITADO PELO CLIENTE //


    let conferir = validacao(nome_usuario);


    if(conferir){
        console.log(`Seja Bem vindo(a) Sr(a): ${nome_usuario.toLocaleLowerCase()}.`);

        var usuario_validado = nome_usuario;

        var id_usuario = id(usuario_validado)

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

                usuario_validado = nome_usuario;

                id_usuario = id(usuario_validado)

                break
            }
    }
}
    
    
    // VALIDAÇÃO DO RESTO DAS INFORMAÇÕES //



console.log(`
Agora precisamos do resto do seus dados para acessar sua conta no banco.
`);

do{
    if(!dados){
        console.log(`
Número do cartão ou senha inválida. Digite novamente.
`)
    }

    let cartao_usuario = input.question(`Digite seu número do cartão: `); //

    let senha_usuario = input.question(`Digite sua senha: `); //


    var dados = cartao_senha(cartao_usuario, senha_usuario);

}   while(!dados)

if(dados){
    console.log(tabela())

    let menu = Number(input.question(`
O que deseja fazer?: `))

    switch(menu){  
        case 1:

            console.log(`Seu saldo é de: ${saldo()}`)

            var deposito = Number(input.question(`Qual valor deseja depósitar?: `))

            var deposito_usuario = depositar(deposito)

            console.log(`Saldo atual: ${deposito_usuario}`)

            break;
        
        case 2:

            console.log(`Seu saldo é de: ${saldo()}`)

            var saque = Number(input.question(`Qual valor deseja sacar?: `))

            var saque_usuario = sacar(saque)

            console.log(`Saldo atual: ${saque_usuario}`)

            break;

        case 3:
            console.log(`Seu saldo é : ${saldo()}`)
            break;


        case 4:
            console.log(dados())
            break;


        case 5:
            break;


        default:
            console.log('Opção não encontrada.')
            

    }
} 


else{
        console.log(`Seus dados estão incorretos`)

}

}

else if(resp == 'N'){
    console.log(`Vamos criar um cadastro para você.`)

    var nome_novo_cliente = input.question(`Digite seu Nome: `).toUpperCase().trim();

    do{
        if(tamanho_cpf < 11 || tamanho_cpf > 11){
            console.log(`
Você não digitou a quantidade de números de um Cpf!!
            `)
        }

        var cpf_novo_cliente = input.question(`Digite seu Cpf: `).trim()

        var tamanho_cpf = cpf_novo_cliente.length

    }while(tamanho_cpf < 11 || tamanho_cpf > 11);

    do{

        if(tamanho_senha < 6 || tamanho_senha > 6){
            console.log(`
Sua senha não possui 6 digitos, Crie outra!!!
            `)
        }

        var senha_novo_cliente = input.question(`Digite um sanha, de 6 dígitos: `)

        var tamanho_senha = senha_novo_cliente.length

    } while(tamanho_senha < 6 || tamanho_senha > 6);


    var saldo_novo_cliente = Number(input.question(`Qual o valor inicial você seja depósitar na conta?: `).trim())

    var cartao_novo_cliente = Math.floor(Math.random() * 999999999)

    cartao_novo_cliente = String(cartao_novo_cliente)

    cadastrados[3] = {id: 4, nome: nome_novo_cliente, cartao: cartao_novo_cliente, cpf: cpf_novo_cliente, senha: senha_novo_cliente, saldo: saldo_novo_cliente}

    console.log(`
SEU CADASTRO EM NOSSO BANCO FOI CONCLUÍDO COM SUCESSO!! AGORA VOCÊ PODE TEM OPÇÕES COMO CLIENTE!
`)

    console.log(tabela())

    let menu = Number(input.question(`
O que deseja fazer?: `))

    id_usuario = 3

    switch(menu){  
        case 1:

            console.log(`Seu saldo é de: ${saldo()}`)

            var deposito = Number(input.question(`Qual valor deseja depósitar?: `))

            var deposito_usuario = depositar(deposito)

            console.log(`Saldo atual: ${deposito_usuario}`)

            break;
        
        case 2:

            console.log(`Seu saldo é de: ${saldo()}`)

            var saque = Number(input.question(`Qual valor deseja sacar?: `))

            var saque_usuario = sacar(saque)

            console.log(`Saldo atual: ${saque_usuario}`)

            break;

        case 3:
            console.log(`Seu saldo é : ${saldo()}`)
            break;


        case 4:
            console.log(dados())
            break;


        case 5:
            break;


        default:
            console.log('Opção não encontrada.')
            

    }
        
    }
