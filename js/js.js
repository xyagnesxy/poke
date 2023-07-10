btnAtk = document.getElementById('atk')
btnDef = document.getElementById('def')

async function pokemons(){
    const url = "../pokemons.json"
    const request = new Request(url)
    const resposta =  await fetch(request)
    
    const lista =  await resposta.json()
    console.log(lista)
    return await lista//retorna uma promisse e não a lista
}


async function lutar(pok1, pok2, atributo){
    const url = "../pokemons.json"
    const request = new Request(url)
    const resposta =  await fetch(request)
    
    const lista =  await resposta.json()
  
    if(lista[pok1][atributo]>lista[pok2][atributo]){
        console.log("pok1 ganha")
        return 1
       
    }else{
        console.log("pok2 ganha")
        return 2
  
    }

}


function draw(lugar, pokemon){
    //lugar: pokemon ou pokemon2 será o id da div
    //pokemon: nome do pokemon a ser desenhado
    //cria uma div com id=lugar e backgorund-image=~pokemon

    if(document.getElementById(lugar)){//verifica se já tem uma div lá
        document.querySelector('.tela-luta').removeChild(document.getElementById(lugar))
    }


    var pok1 = document.createElement('div')
    pok1.id = lugar
    let url = "'../images/"+pokemon+".png'"
    
    pok1.style.backgroundImage = "url("+url+")"
    document.querySelector('.tela-luta').appendChild(pok1)
    
    
}

//btnAtk.addEventListener('click',()=>{
 //   lutar('bulbasaur', 'charmander', 'attack')
//})





//console.log(lutar('bulbasaur', 'charmander', 'attack'))

draw('pokemon', 'bulbasaur')