async function api(){
    const url = "../pokemons.json"
    const request = new Request(url)
    const resposta =  await fetch(request)
    const lista = await resposta.json()
}
api()

