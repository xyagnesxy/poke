function mostrarpkm(pokemonfoto, fundo){
    document.getElementById('pkm').src ="./images/" + pokemonfoto;
    document.querySelector('.personagem').style.backgroundImage= `url("./images/${fundo}")`
}

function login(){
    let treinador = document.getElementById('treinadorNome').value
    if(treinador=='' || localStorage.pokemon==null){
        console.log('sem pokemons ou treinador')
    }
    else{
        localStorage.treinador = treinador
        window.location.assign('./html/batalha.html')
    }
}

function selecionar(x, pokemon){
   
    if(document.querySelector('.selecionado')){
        document.querySelector('.selecionado').classList.remove('selecionado')
    }
    x.classList.add('selecionado')
    localStorage.pokemon=pokemon
}