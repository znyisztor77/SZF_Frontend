let pokemons =document.getElementById("pokemons")

let pokePic=document.getElementById("pokePic")

let pokeName=document.getElementById("name")

let pokeType = document.getElementById("PokeType")

const URL ="https://pokeapi.co/api/v2/pokemon?limit=100"

/*function addOption(text, value){

    let pokeOption = document.createElement("option")
    pokeOption.innerText=text
    pokeOption.value= value
    pokemons.appendChild(pokeOption)


}

addOption("Pikacsu", "1")
addOption("Béla", "2")
addOption("Józsi", "3*/

//fetch(URL).then(res => {console.log(res.json())}) consolog lekérés
//fetch(URL).then(res => res.json()).then(data => {console.log(data.results)})


function addOption(text, value){

    let pokeOption = document.createElement("option")
    pokeOption.innerText=text
    pokeOption.value= value
    pokemons.appendChild(pokeOption)
}
fetch(URL)
    .then(res => res.json())
    .then(data => {
        data.results.forEach(poke => {
        addOption(poke.name, poke.url);
        })
        updatePoke(pokemons)
    });
 

 let updatePoke= (select) => {
    //console.log(select.value)
    fetch(select.value)
    .then(res => res.json())
    .then(data=> {
        //console.log(data.sprites.front_default)
        PokePic.src =(data.sprites.front_default)
        pokeName.innerText=data.name

        data.types.forEach(e =>{
            pokeType.innerText += "|" + e.type.name + " "

        })

            pokeType.innerText += " |"
    })
 }   


