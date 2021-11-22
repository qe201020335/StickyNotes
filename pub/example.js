"use strict";

const generator = new StickyNoteGenerator();
let note1 = null;
let note2 = null;

function onClickB1() {
    if (note1 === null) {
        note1 = generator.createNote();
    }
    note1.addToDOM(document.querySelector("body"))
}

function onClickB2() {
    if (note2 === null) {
        note2 = generator.createNote();
    }
    note2.addToDOM(document.querySelector("body"))
}

function onClickDelete() {
    generator.removeAll()
}