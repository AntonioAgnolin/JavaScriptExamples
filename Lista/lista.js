//Lista de frutas
let listaDeFrutas = [
    {
        nome: "Pêssego",
        valor: 5,
        estoque: 20
    },
    {
        nome: "Pera",
        valor: 3,
        estoque: 15
    },
    {
        nome: "Maracujá",
        valor: 5,
        estoque: 15
    },
    {
        nome: "Morango",
        valor: 2,
        estoque: 20
    },
    {
        nome: "Amora",
        valor: 2,
        estoque: 0
    },
    {
        nome: "Framboesa",
        valor: 2,
        estoque: 0
    }
]

/*Função map percorre cada elemento do array frutas e aplica uma multiplicação do valor da 
fruta pelo seu estoque, depois o reduce soma todos os cálculos realizados pela função map */
function valorTotalFrutas(frutas) {
    return frutas.map(fruta => fruta.valor * fruta.estoque).reduce((total, valor) => total + valor, 0)
}

//Função que filtra pelas frutas que têm um estoque maior que zero
function filtrarFrutasComEstoque(frutas) {
    return frutas.filter(fruta => fruta.estoque > 0)
}

//Função que filtra pelas frutas que têm um estoque igual a zero
function filtrarFrutasSemEstoque(frutas) {
    return frutas.filter(fruta => fruta.estoque === 0)
}

//Teste das funções
console.log("Valor total das frutas: ", valorTotalFrutas(listaDeFrutas))
console.log("Frutas com estoque: ", filtrarFrutasComEstoque(listaDeFrutas))
console.log("Frutas sem estoque: ", filtrarFrutasSemEstoque(listaDeFrutas))