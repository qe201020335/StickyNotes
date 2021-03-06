"use strict";

const generator = new StickyNoteGenerator();
let note1 = null;
let note2 = null;
let noteP1 = null;
let note4 = null;

let colorNote = null;


function onClickB1(location) {
    if (note1 === null) {
        note1 = generator.createNoteFixed(location);
    }
    note1.addToDOM()
}

function onClickB2(location) {
    if (note2 === null) {
        note2 = generator.createNoteFixed(location);
    }
    note2.addToDOM()
}

function onClickP1(location) {
    if (noteP1 === null) {
        noteP1 = generator.createNoteAbsolute(location, document.querySelector("#p1"), "Para 1");
    }
    noteP1.addToDOM()
}

function onClickB4(location) {
    if (note4 === null) {
        note4 = generator.createNoteAbsolute(location, document.querySelector("#p4"), "Para 4");
        note4.setNoteContent("This is a predefined note for para 4. \nTry to edit this")
    }
    note4.addToDOM()
}

function onClickColor(location) {
    if (colorNote === null) {
        colorNote = generator.createNoteFixed(location);
        colorNote.noteDiv.style.backgroundColor = "#f99bae"
    }
    colorNote.addToDOM()
}

function changeColor() {
    if (colorNote) {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        colorNote.noteDiv.style.backgroundColor = '#' + randomColor
    }
}

function onClickDelete() {
    generator.closeAll()
}

function onClickOpen() {
    generator.openAll()
}