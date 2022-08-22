let card1;
let card2;

let cartasCertas = 0;


let qtdCards = prompt("Com quantas cartas você quer jogar? Escolha um número par entre 4 e 14")

while(qtdCards % 2 !== 0 || qtdCards > 14 || qtdCards < 4){

    qtdCards = prompt("Escolha inválida! Com quantas cartas você quer jogar? Escolha um número par entre 4 e 14")

}

let cartas = ['bobrossparrot', 'explodyparrot', 'fiestaparrot', 'metalparrot', 'revertitparrot', 'triplesparrot', 'unicornparrot']

cartas.sort(comparador); 

function comparador() { 
	return Math.random() - 0.5; 
}

let cartasDaRodada = cartas.slice(0,qtdCards/2) 
 
cartasDaRodada = cartasDaRodada.concat(cartasDaRodada)

cartasDaRodada.sort(comparador)

const cards = document.querySelector('.cards')

for(let i = 0; i < qtdCards; i++){
    cards.innerHTML += `<div class="card ${cartasDaRodada[i]}" onclick="viraCard(this)"> <img src="./imagens/front.png"/></div>`
}


console.log(cards)

function viraCard(card){

    card.classList.add('vira-card')

    if(card.classList.contains('vira-card')) card.innerHTML = `<img src="./imagens/${card.classList[1]}.gif"/>`


    if(card1 != null){
        if(card2 == null){
            card2 = card
            comparaCards(card1, card2)
            card1 = null
            card2 = null
        }      
    }else{
        card1 = card
    }

}

function comparaCards(card_um, card_dois){

    if(card_um.classList[1] !== card_dois.classList[1]){
        desviraCard(card_um, card_dois)
    }else {
        cartasCertas += 2
    }
   
    console.log(cartasCertas)
}

function desviraCard(card_um, card_dois){

    card_um.classList.remove('vira-card')
    card_um.innerHTML = `<img src="./imagens/front.png"/>`

    card_dois.classList.remove('vira-card')
    card_um.innerHTML = `<img src="./imagens/front.png"/>`

}

