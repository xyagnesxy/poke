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


function draw(div, pokemon){
    
    let pok1 = document.createElement('div')
    let id = document.createAttributeNode('id')
    pok1.setAttribute(id)
    console.log(pok1)


    
}

btnAtk.addEventListener('click',()=>{
    lutar('bulbasaur', 'charmander', 'attack')
})





//console.log(lutar('bulbasaur', 'charmander', 'attack'))

draw('pokemon', 'bulbasaur')