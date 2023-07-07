async function pokemons(){
    const url = "../pokemons.json"
    const request = new Request(url)
    const resposta =  await fetch(request)
    
    const lista =  await resposta.json()
    //console.log(lista)
    return await lista//retorna uma promisse e não a lista
}




