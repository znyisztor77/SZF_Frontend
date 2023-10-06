let pictures = document.getElementById("pictures")
let profilePic=document.getElementById("profilePic")
//let picture =document.getElementById("picture")
const FOXURL="https://randomfox.ca/floof/"
const DOGURL="https://random.dog/woof.json"


function foxPage(){
    fetch(FOXURL)
        .then(res =>res.json())
        .then(data =>{
                console.log(data)
                profilePic.style.backgroundImage = `url("${data.image}")`
    })
    function addFoxPicture(){

        fetch(FOXURL)  
        .then(res =>res.json())
        .then(data =>{
                let a = document.createElement("a")
                a.href = data.image

                let pic =document.createElement("div")
                pic.classList.add("picture")
                pic.style.backgroundImage = `url("${data.image}")`
                a.appendChild(pic)
                pictures.appendChild(a)
        })

    }
    for(let i=0; i<9; i++){
        addFoxPicture()
    }
}

function dogPage(){
    fetch(DOGURL)
        .then(res =>res.json())
        .then(data =>{
                console.log(data)
                profilePic.style.backgroundImage = `url("${data.url}")`
    })

    function addDogPicture(){

        fetch(DOGURL)  
        .then(res =>res.json())
        .then(data =>{

                let a = document.createElement("a")
                a.href = data.url

                let pic =document.createElement("div")
                pic.classList.add("picture")

                if(data.url.includes(".mp4")){
                    //pic.innerText="VIDEO"
                    pic.style.backgroundImage=`url("play_icon.webp")`
                }
                else{
                    pic.style.backgroundImage = `url("${data.url}")`
                }
                a.appendChild(pic)
                pictures.appendChild(a)
        })

    }
    for(let i=0; i<9; i++){
        addDogPicture()
    }
}


foxPage()
//dogPage()
function updatePage(choice){
    document.getElementById("pictures").innerHTML = null
    if(choice.value=="dog"){
        dogPage()

    }else{
        foxPage()
    }

}
 