const btnAtk = document.getElementById('atk')
const btnDef = document.getElementById('def')
const btnSpe = document.getElementById('spe')
import lista from './lista.js'
const pokemons = lista['pokemons']
var player1, player2

function lutar(atributo){
    
    document.getElementById('pokemon').style.animation="ataque 1s normal"
    setTimeout(()=>{
        document.getElementById('pokemon').style.animation=''
    },1000)
  try{
    if(player1[atributo]>player2[atributo]){
        console.log("pok1 ganha")
        alert(`O pokemon ${player1}`)
       
    }else if(player1[atributo]==player2[atributo]){
        alert("Deu empate")
    }
    
    else{
        console.log("pok2 ganha")
        alert(`O pokemon ${player2}`)
  
    }
  }
  catch{
    console.log('erro na função lutar')
  }
}

function draw(lugar, pokemon){
    //lugar: pokemon ou pokemon2 será o id da div
    //pokemon: nome do pokemon a ser desenhado
    //cria uma div com id=lugar e backgorund-image=~pokemon

    if(document.getElementById(lugar)){//verifica se já tem uma div lá
        document.querySelector('.tela-luta').removeChild(document.getElementById(lugar))
    }
    if(lugar=='pokemon'){
        player1 = pokemons[pokemon]
    }else{
        player2 = pokemons[pokemon]
    }


    let pok1 = document.createElement('div')
    pok1.id = lugar
    let url = pokemons[pokemon]['img']
    
    pok1.style.backgroundImage = "url(../images/bulbasaur.png)"
    document.querySelector('.tela-luta').appendChild(pok1)
    
    
    
}


btnAtk.addEventListener('click',()=>{
    
    lutar(player1, player2, 'atk')
})
btnDef.addEventListener('click', ()=>{
    lutar(player1, player2, 'def')
})
btnSpe.addEventListener('click', ()=>{
    lutar(player1, player2, 'spe')
})


draw('pokemon', 'bulbasaur')
draw('pokemon2', 'bulbasaur')