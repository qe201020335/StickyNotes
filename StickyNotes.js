/* StickyNotes Library*/
/* By Tianhe Zhang, zhan6247 */

"use strict";

class StickyNote {

    parentNode = null
    isPositionFixed = false
    noteDiv = document.createElement('div')

    constructor(isFixed) {
        const newNote = this.noteDiv

        newNote.className = 'StickyNote'
        newNote.style.width = '16%'
        newNote.style.height = '9%'
        newNote.style.borderRadius = '5%'
        newNote.style.margin = '10px'
        newNote.style.backgroundColor = 'grey'

        this.isPositionFixed = isFixed
        if (isFixed) {
            newNote.style.position = 'fixed'
        }
        newNote.innerText = "Place Holder Text"
    }

    setLocationRelative() {

    }

    setLocetionFixed() {

    }

    addToDOM(parent) {
        parent.append(this.noteDiv)
        this.parentNode = parent
    }

    removeFromDom() {
        if (this.parentNode !== null) {
            this.parentNode.removeChild(this.noteDiv)
            this.parentNode = null;
        }
    }



}


function StickyNoteGenerator() {
    this.allNotes = []
}

StickyNoteGenerator.prototype = {

    createNote: function (isFixed) {
        const newNote = new StickyNote(isFixed)
        this.allNotes.push(newNote)
        return newNote
    },

    removeAll: function () {
        for (const note of this.allNotes) {
            note.removeFromDom()
        }
    }
}


