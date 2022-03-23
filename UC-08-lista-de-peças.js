var listaDePecas = ["Amortecedor", "Motor", "Filtro de Ar", "Amortecedor", "Motor", "Filtro de Ar", "Amortecedor", "Motor", "Filtro de Ar","Amortecedor", "Motor", "Filtro de Ar" ] //vetor ou array

let peso = 200
if (peso < 100) {
    console.log("A peça deve pesar no mínimo 100 gramas")
} else {
    console.log ("A peça tem o peso adequado")
}
// a caixa suporta até 10 peças.
if (listaDePecas.length <10){
    console.log("É possivel cadastrar mais peças")
}else {
    console.log("Não tem mais espaço na lista")
}

let nomePeca = "Disco de Freio"
if (nomePeca.length >3) {
    console.log ("Nome da peça está adequado para o cadastro")
} else if (nomePeca ==0)  {
    console.log("O nome da peça não pode ser vazio")
} else {
    console.log ("O nome deve ter mais de três caracteres. Digite um nome adequado")
}