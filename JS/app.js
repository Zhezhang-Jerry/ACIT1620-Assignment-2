function slideout() {
    document.getElementById("slidemenu").style.display = 'block';
    document.getElementById("buttonleft").style.backgroundColor = '#191724';
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
function popout() {
    document.getElementById("addnotes").style.display = 'block';
    document.getElementById("itemcc2").style.display = 'block';
    document.getElementById("createnotes").style.display = 'none';
    document.getElementById("plus1").style.display = "none";
    document.getElementById("plus2").style.display = "block";
    document.getElementById("plus2").style.backgroundColor = "#191724";
}
function popin() {
    document.getElementById("addnotes").style.display = 'none';
    document.getElementById("itemcc2").style.display = 'none';
    document.getElementById("createnotes").style.display = 'block';
    document.getElementById("plus1").style.display = "block";
    document.getElementById("plus2").style.display = "none";
}



/* function to make a real textarea
1. make the text can be saved.
2. make the text can be clean.
function textarea () {

}

function to make those button as a real functional button
1. link all button to corresponding page.
2. make all buttons work.
function button () {

}
 */