/* StickyNotes Library*/
/* By Tianhe Zhang, zhan6247 */

"use strict";

class StickyNote {

    parentNode = null
    isPositionFixed = false
    noteDiv = document.createElement('div')

    constructor(isFixed, parent) {
        const newNote = this.noteDiv

        newNote.className = 'StickyNote'
        newNote.style.width = '16%'
        newNote.style.height = '9%'
        newNote.style.borderRadius = '5px'
        newNote.style.margin = '30px'
        newNote.style.backgroundColor = 'grey'

        this.isPositionFixed = isFixed
        if (isFixed) {
            newNote.style.position = 'fixed'
        }

        if (parent === null) {
            this.parentNode = document.querySelector("body")
        } else {
            this.parentNode = parent
        }

        newNote.innerText = "Place Holder Text"
    }

    // setLocationAbsolute() {
    //     if (this.isPositionFixed) {
    //         throw new Error("This note has fixed location");
    //     }
    // }

    setLocationFixed(location) {
        if (!this.isPositionFixed) {
            throw new Error("This note has absolute location");
        }
        switch (location) {
            case 'top-left':
                this.noteDiv.style.top = '2%';
                this.noteDiv.style.left = '2%';
                break

            case 'top-right':
                this.noteDiv.style.top = '2%';
                this.noteDiv.style.right = '2%';
                break

            case 'bottom-left':
                this.noteDiv.style.bottom = '2%';
                this.noteDiv.style.left = '2%';
                break

            case 'bottom-right':
                this.noteDiv.style.bottom = '2%';
                this.noteDiv.style.right = '2%';
                break

            default:
                console.log("Unsupported Fixed Location")
                break
        }
    }

    addToDOM() {
        console.dir(this.parentNode)
        if (!this.parentNode.contains(this.noteDiv)) {
            this.parentNode.append(this.noteDiv)
        }

    }

    removeFromDom() {
        this.parentNode.removeChild(this.noteDiv)
    }



}


function StickyNoteGenerator() {
    this.allNotes = []
}

StickyNoteGenerator.prototype = {

    createNote: function (isFixed, parent) {
        const newNote = new StickyNote(isFixed, parent)
        this.allNotes.push(newNote)
        newNote.addToDOM()
        return newNote
    },

    createNoteFixed: function (location, parent) {
        const new_note = new StickyNote(true, parent)
        this.allNotes.push(new_note)
        new_note.addToDOM()
        new_note.setLocationFixed(location)
        return new_note
    },

    removeAll: function () {
        for (const note of this.allNotes) {
            note.removeFromDom()
        }
    }
}


