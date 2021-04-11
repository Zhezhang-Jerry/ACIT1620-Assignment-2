const notesArray = []

function AddnotesSec() {
    html = `
    <div id="note-area">
        <textarea id="addnotes" >Your note here.</textarea>
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
    const div = document.querySelector('#addnotes')
    const title = div.firstChild.textContent
    const body = convertTexttoString()
    notesArray.push(addNote(title, body))
    document.getElementById("createnotes").style.display = 'block';    
    document.getElementById("slidemenu").style.display = 'block';
    deleteNote()
}

function addNote(title, body) {
    return { title, body }
}

function convertTexttoString() {
    let str = ""
    const divs = [...document.querySelectorAll('[contenteditable] > div:not(:first-child)')]
    for (const i of divs) {
        str += `${i.textContent}\n`
    }
    return str
}

function deleteNote() {
    const div = document.querySelector('#note-area')
    document.getElementById("createnotes").style.display = 'block';
    div.remove()
}

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

let countclick = 0
function turnDark() {
    if (countclick == 0) {
    document.getElementById("header").style.backgroundColor = '#1f1d2e';
    document.getElementById("footer").style.backgroundColor = '#1f1d2e';
    document.getElementById("sidebarmenu").style.backgroundColor = '#1f1d2e';
    document.getElementById("icontent").style.backgroundColor = '#1f1d2e';
    document.getElementById("buttonleft").style.backgroundColor = '#1f1d2e';
    document.getElementById("buttonright").style.backgroundColor = '#1f1d2e';
    document.getElementById('bdy').style.color = '#fffaf3';
    countclick = 1;}
    else {
        document.getElementById("header").style.backgroundColor = '#f2e9de';
    document.getElementById("footer").style.backgroundColor = '#f2e9de';
    document.getElementById("sidebarmenu").style.backgroundColor = '#f2e9de';
    document.getElementById("icontent").style.backgroundColor = '#f2e9de';
    document.getElementById("buttonleft").style.backgroundColor = '#f2e9de';
    document.getElementById("buttonright").style.backgroundColor = '#f2e9de';
    document.getElementById('bdy').style.color = '#1f1d2e';
    countclick = 0;
    }}

// function popout() {
//     document.getElementById("addnotes").style.display = 'block';
//     document.getElementById("itemcc2").style.display = 'block';
//     document.getElementById("createnotes").style.display = 'none';
//     document.getElementById("plus1").style.display = "none";
//     document.getElementById("plus2").style.display = "block";
//     document.getElementById("plus2").style.backgroundColor = "#191724";
// }
// function popin() {
//     document.getElementById("addnotes").style.display = 'none';
//     document.getElementById("itemcc2").style.display = 'none';
//     document.getElementById("createnotes").style.display = 'block';
//     document.getElementById("plus1").style.display = "block";
//     document.getElementById("plus2").style.display = "none";
// }