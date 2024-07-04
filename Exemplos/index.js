//Função que imprime o nome "Antônio"
function hello() {
    let nome = "Antônio"
    console.log(nome)
}

hello()

//Função que imprime números de 0 até 'numero' -1
function repete(numero) {
    for (let i = 0; i < numero; i++) {
        console.log(i)        
    }
}

repete(10)

//Função que imprime a palavra "repete" 'numero' vezes
function repeteDeNovo(numero) {
    let i = 0
    while (i < numero) {
        console.log("repete")
        i++
    }
}

repeteDeNovo(5)

//Array de objetos, cada objeto representando um aluno com nome e idade
let listaDeAlunos = [
{
    nome: "Fernanda",
    idade: 25
},
{
    nome: "Jorge",
    idade: 19
},
{
    nome: "Tereza",
    idade: 23
}
]

//Função que imprime os nomes dos alunos em letras maiúsculas
function printAlunos(listaDeAlunos) {
    const listaComRA = listaDeAlunos.map((aluno) => {
        return console.log(aluno.nome.toUpperCase())
    })
    console.log(listaDeAlunos)
}

printAlunos(listaDeAlunos)

//Array de números representando idades
let idades = [13, 18, 98, 20, 31, 42, 46, 27, 22, 31]

//Função que filtra e imprime as idades maiores que 40
function filtrandoIdades(listaDeIdades) {
    const velhos = listaDeIdades.filter((valor) => valor > 40)
    return console.log(velhos)
}

//Encontra o número 13 no array 'idades' e imprime no console
const trezeAnos = idades.find((item) => item === 13)
console.log(trezeAnos)

filtrandoIdades(idades)