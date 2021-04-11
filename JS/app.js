const notesArray = []

function AddnotesSec() {
    html = `
    <div id="note-area">
        <div id="addnotes" contenteditable="true">You note here.</div>
        <div class="itemc2" id="itemcc2">
        <button class="sd" onclick="saveNote()">save</button>
        <button class="sd" onclick="deleteNote()">delete</button></div>
    </div>
    `
    return html
}

function createNoteWArea() {
    const div = document.querySelector('#content')
    div.insertAdjacentHTML('beforeend', AddnotesSec())
    setMouse()
    document.getElementById("createnotes").style.display = 'none';
}

function setMouse() {
    const div = document.querySelector('#addnotes')
    div.focus()
}

function saveNote() {
    const note = document.querySelector('#addnotes')
    const title = note.firstChild.textContent
    const body = divToString()
    notesArray.push(createNoteObject(title, body))
    
    displayTitle(notesArray)

    document.getElementById("createnotes").style.display = 'block';
    slideout()
    deleteNote()
}

function createNoteObject(title, body) {
    return newObject = { title, body }
}

function divToString() {
    let str = ""
    const divs = [...document.querySelectorAll('[contenteditable] > div')]
    console.log(divs)
    for (const i of divs) {
        console.log(i.textContent)
        str += `${i.textContent}\n`
    }
    return str
}

function displayTitle(notesArray) {
    if(notesArray.length === 1) {
        createSlideTitle(notesArray)
    }
    else {
        const clearTitle = document.querySelectorAll('.slideTitle')
        clearTitle.forEach(function(a){a.remove()})
        createSlideTitle(notesArray)
    }
}

function createSlideTitle(notesArray) {
    let count = 0
    for (const i of notesArray) {
        let noteDisplay = document.createElement('li')
        noteDisplay.className = "slideTitle"
        noteDisplay.setAttribute("onclick", "displayNote("+count+")")
        noteDisplay.innerHTML = i.title
        document.getElementById('slidemenu').appendChild(noteDisplay)
        count += 1
    }
}

function deleteNote() {
    const div = document.querySelector('#note-area')
    document.getElementById("createnotes").style.display = 'block';
    div.remove()
}

function displayNote(index) {
    let title = notesArray[index].title;
    let body = notesArray[index].body;
    let totalNote = title+ '<br>' + body;
    document.getElementById('createnotes').style.display = 'none';
    document.getElementById('closebutton').style.display = 'block';
    document.getElementById('fullnote').style.display = 'block';
    document.getElementById('fullnote').innerHTML = totalNote;
}

function closebtn() {
    document.getElementById('closebutton').style.display = 'none';
    document.getElementById('fullnote').style.display = 'none';
    document.getElementById('createnotes').style.display = 'block';
    document.getElementById('fullnote1').value = ''
    slidein()

}

let countclick = 0;
let darkmode = document.getElementById('darkmode');
let cssLink = document.getElementById('link1')
let linkArray = [cssLink]
darkmode.addEventListener('click', function() {
    if (countclick === 0) {
        for (let element of linkArray) {
            element.href = 'CSS/darkmode.css';
            countclick = 1
    }}
    else {
        for (let element of linkArray) {
            element.href = 'CSS/styles.css';
            countclick = 0
        }}})

function slideout() {
    document.getElementById("slidemenu").style.display = 'block';
    document.getElementById("buttonleft").style.color = '#1f1d2e';
    document.getElementById("buttonright").style.display = 'none';
    document.getElementById("buttonleft").style.display = 'block';
    document.getElementById("sidebarmenu").style.backgroundColor = '#faf4ed';
}

function slidein() {
    document.getElementById("slidemenu").style.display = 'none';
    document.getElementById("buttonright").style.display = 'block';
    document.getElementById("buttonleft").style.display = 'none';
    document.getElementById("sidebarmenu").style.backgroundColor = '#f2e9de';
}


