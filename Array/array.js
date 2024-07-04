//Array de objetos, cada objeto representa um produto com propriedades específicas
const produtos = [
    { nome: "Gabinete", qtde: 1, preco: 250.15 },
    { nome: "Fonte de Alimentação", qtde: 1, preco: 500.50 },
    { nome: "Placa-mãe", qtde: 1, preco: 799.50 },
    { nome: "Processador", qtde: 1, preco: 1200.50 },
    { nome: "Memória RAM", qtde: 2, preco: 399.99 },
    { nome: "Armazenamento", qtde: 2, preco: 249.99 },
    { nome: "Placa de Vídeo", qtde: 1, preco: 2499.99 }
];

//Seleciona um número especificado de itens aleatórios de um array de produtos
function getValoresRandomDoArray(produtos, quantidadeRandom) {
    if (quantidadeRandom > produtos.length) return "Quantidade de itens aleatórios é maior que a quantidade de itens no array"
    let produtosRandom = [] 

    while (produtosRandom.length < quantidadeRandom) {
        let numeroRandom = Math.floor(Math.random() * produtos.length)
        if (!produtosRandom.includes(produtos[numeroRandom])) {
            produtosRandom.push(produtos[numeroRandom])
        }
    }

    return produtosRandom
}

console.log(getValoresRandomDoArray(produtos, 5))