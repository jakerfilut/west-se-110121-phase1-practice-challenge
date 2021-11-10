// Your code here
function renderAnimal(animal) {
    let animalcard = document.createElement("span")
    animalcard.innerHTML = `
    <img src="${animal.image}"/>
    <div class = "content">
    <h2>${animal.name}</h2>
    <p>
    Votes: ${animal.votes}
    </div>`
    let charBar = document.getElementById("character-bar")
    charBar.append(animalcard)       
    
    animalcard.addEventListener('click', movePicture)

    function movePicture(){
        let detailedInfo = document.getElementById("#detailed-info")
        detailedInfo.innerHTML = `<img src="${animal.image}"/>`
    }
}




function fetchAnimal() {
    const URL = "http://localhost:3000"
    fetch(URL + `/characters/`)
        .then(res => res.json())
        .then(animalData => animalData.forEach(animal => renderAnimal(animal)))
    
}

function intialize() {
    fetchAnimal()
}

intialize()

// function movePicture(){
//     let newImage = document.getElementById("image")
//     newImage.innerHTML = `<img src="${animal.image}"/>`
// }
