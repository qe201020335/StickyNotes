/* StickyNotes Library*/
/* By Tianhe Zhang, zhan6247 */

"use strict";

(function(global, document) {

    class StickyNote {

        parentNode = null
        isPositionFixed = false
        noteDiv = document.createElement('div')  // the outer most container, i.e the whole sticky note
        textField;
        title_p;
        title_input;
        editingTitle = false;

        constructor(isFixed, parent, title) {
            const newNote = this.noteDiv

            newNote.className = 'StickyNote'

            this.isPositionFixed = isFixed
            if (isFixed) {
                newNote.style.position = 'fixed'
            } else {
                newNote.style.position = 'absolute'
            }

            if (parent === null) {
                this.parentNode = document.querySelector("body")
            } else {
                this.parentNode = parent
            }

            const btnx = document.createElement('button')
            btnx.innerText = '×'
            btnx.onclick = () => this.removeFromDom()
            btnx.className = "noteCloseBtn"
            newNote.append(btnx)


            const title_p = document.createElement('p')
            this.title_p = title_p
            title_p.innerText = title || "Sticky Note"
            title_p.style.marginLeft = '10px'
            newNote.append(title_p)

            const title_input = document.createElement('input')
            this.title_input = title_input
            title_input.value = title_p.innerText
            title_input.style.display = 'none'
            title_input.style.marginLeft = '10px'
            title_input.style.marginTop = '1em'
            title_input.style.marginBottom = '1em'
            newNote.append(title_input)

            const edit_title = document.createElement('button')
            edit_title.innerText = 'Edit Title'
            edit_title.onclick = () => this.onEditTitleClick(edit_title)
            edit_title.className = "noteEditTitleBtn"
            newNote.append(edit_title)


            const btn_div = document.createElement('div')
            btn_div.className = 'noteBtnDiv'

            const move_span = document.createElement('span')
            move_span.innerText = 'Move Note:'
            move_span.style.marginRight = '2px'
            btn_div.append(move_span)

            if (isFixed) {
                const btn1 = document.createElement('button')
                btn1.innerText = '↖'
                btn1.onclick = () => this.setLocationFixed('top-left')
                btn1.className = "notePositionBtn"

                const btn2 = document.createElement('button')
                btn2.innerText = '↙'
                btn2.onclick = () => this.setLocationFixed('bottom-left')
                btn2.className = "notePositionBtn"

                const btn3 = document.createElement('button')
                btn3.innerText = '↗'
                btn3.onclick = () => this.setLocationFixed('top-right')
                btn3.className = "notePositionBtn"

                const btn4 = document.createElement('button')
                btn4.innerText = '↘'
                btn4.onclick = () => this.setLocationFixed('bottom-right')
                btn4.className = "notePositionBtn"

                btn_div.append(btn1)
                btn_div.append(btn2)
                btn_div.append(btn3)
                btn_div.append(btn4)
            } else {
                const btnl = document.createElement('button')
                btnl.innerText = '←'
                btnl.onclick = () => this.setLocationAbsolute('left')
                btnl.className = "notePositionBtn"

                const btnr = document.createElement('button')
                btnr.innerText = '→'
                btnr.onclick = () => this.setLocationAbsolute('right')
                btnr.className = "notePositionBtn"

                btn_div.append(btnl)
                btn_div.append(btnr)
            }

            newNote.append(btn_div)

            const textField = document.createElement('textarea')
            this.textField = textField
            textField.rows = 8
            textField.cols = 40
            textField.className = 'noteTextArea'
            textField.wrap = 'hard'
            newNote.append(textField)


            const save_btn_div = document.createElement('div')
            save_btn_div.className = 'noteSaveBtnDiv'
            const save_btn = document.createElement('button')
            save_btn.innerText = 'Download'
            save_btn.className = 'noteSaveBtn'
            save_btn.onclick = () => this.saveNote()
            save_btn_div.append(save_btn)
            newNote.append(save_btn_div)

        }

        onEditTitleClick(btn) {
            if (this.editingTitle) {
                this.editingTitle = false
                btn.innerText = 'Edit Title'
                this.title_p.innerText = this.title_input.value ? this.title_input.value : "Sticky Note"
                this.title_input.style.display = 'none'
                this.title_p.style.removeProperty('display')
            } else {
                this.editingTitle = true
                btn.innerText = 'Save'
                this.title_input.value = this.title_p.innerText
                this.title_p.style.display = 'none'
                this.title_input.style.removeProperty('display')
            }


        }

        saveNote() {
            //console.dir(this.textField)
            if (this.textField.value === "") {
                // Don't download anything if it is empty
                return;
            }
            // https://stackoverflow.com/questions/3665115/how-to-create-a-file-in-memory-for-user-to-download-but-not-through-server
            let element = document.createElement('a');
            element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(this.textField.value));
            element.setAttribute('download', this.title_p.innerText + " " + new Date());
            element.style.display = 'none';
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);
        }

        setNoteContent(content) {
            this.textField.value = content
        }

        setLocationAbsolute(location) {
            if (this.isPositionFixed) {
                throw new Error("This note has fixed location");
            }
            this.noteDiv.style.removeProperty('top')
            this.noteDiv.style.removeProperty('left')
            this.noteDiv.style.removeProperty('right')
            this.noteDiv.style.removeProperty('bottom')

            switch (location) {
                case 'left':
                    this.noteDiv.style.left = "2%"
                    break

                case 'right':
                    this.noteDiv.style.right = "2%"
                    break

                default:
                    console.log("Unsupported Absolute Location")
                    break
            }

        }

        setLocationFixed(location) {
            if (!this.isPositionFixed) {
                throw new Error("This note has absolute location");
            }

            this.noteDiv.style.removeProperty('top')
            this.noteDiv.style.removeProperty('left')
            this.noteDiv.style.removeProperty('right')
            this.noteDiv.style.removeProperty('bottom')

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
            // console.dir(this.parentNode)
            if (!this.parentNode.contains(this.noteDiv)) {
                if (this.isPositionFixed) {
                    this.parentNode.append(this.noteDiv)
                } else {
                    this.parentNode.insertBefore(this.noteDiv, this.parentNode.firstChild)
                }
            }
        }

        removeFromDom() {
            if (this.parentNode.contains(this.noteDiv)) {
                this.parentNode.removeChild(this.noteDiv)
            }
        }

    }


    function StickyNoteGenerator() {
        this.allNotes = []
    }

    StickyNoteGenerator.prototype = {

        createNoteFixed: function (location, parent, title) {
            const new_note = new StickyNote(true, parent, title || `Sticky Note ${this.allNotes.length + 1}`)
            this.allNotes.push(new_note)
            new_note.addToDOM()
            new_note.setLocationFixed(location)
            return new_note
        },

        createNoteAbsolute: function (location, parent, title) {
            const new_note = new StickyNote(false, parent, title || `Sticky Note ${this.allNotes.length + 1}`)
            this.allNotes.push(new_note)
            new_note.addToDOM()
            new_note.setLocationAbsolute(location)
            return new_note
        },

        closeAll: function () {
            for (const note of this.allNotes) {
                note.removeFromDom()
            }
        },

        openAll: function () {
            for (const note of this.allNotes) {
                note.addToDOM()
            }
        }
    }


    // done setup everything,
    // expose generator to global
    global.StickyNoteGenerator = global.StickyNoteGenerator || StickyNoteGenerator

})(window, window.document);


