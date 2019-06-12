/* eslint-disable no-unused-vars*/
let paintDiv
let color
let button
let disc

function start_app() {
    button = document.getElementById('clicker')
    paintDiv = document.getElementById('colour-display')
    disc = document.getElementById('value')

    getData();

    button.addEventListener('click', getData);
}

function getData() {
    NOOPBOT_FETCH({
        API: 'hexbot'
    }, runFunction);
}

function runFunction(responseJson) {
    // console.log(responseJson)
    let { colors } = responseJson;
    colors.forEach(function(point) {
        console.log(point)
        paintDiv.style.backgroundColor = point.value;
        disc.innerText = point.value
    })
}