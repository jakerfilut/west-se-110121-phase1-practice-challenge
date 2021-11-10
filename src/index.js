

//const span = document.createElement("span")
const charBar = document.getElementById("character-bar")
const deltailedInfo = document.getElementById("detailed-info")
const image = document.getElementById("image")
const charname = document.getElementById("name")
const votes = document.getElementById("vote-count")


const URL = "http://localhost:3000"
fetch(URL + `/characters/`)
    .then(res => res.json())
    .then(loopChar)

function loopChar(char) {
    char.forEach(renderChar)
    //console.log(char)
}

function renderChar(chars) {
    const span = document.createElement("span")
    span.innerHTML = chars.name
    charBar.append(span)
    
    span.addEventListener('click', changeChar)

    function changeChar(){
        image.src = (chars.image)
        charname.textContent = chars.name
        votes.textContent = chars.votes
    }


}