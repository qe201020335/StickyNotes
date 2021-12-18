# StickyNotes 📝
A frontend JavaScript library that makes note-taking easier on a webpage for the user

# Documentation

## Getting Started




## API Options

## StickyNoteGenerator
### `StickyNoteGenerator.createNoteFixed(location, parent, title)`

This method will create a fixed sticky note on the viewport.

| Property    | Type      | Required? | Default  | Description |
| --------------- |:---------:|:---------:|:----------:| ----------- |
| `location`  | string        | Yes | \ | The initial location of the sticky note. <br> It can be `'top-left'`, `'top-right'`, `'bottom-left'`, or `'bottom-right'` |
| `parent`    | HTML Node  | NO  | body | The parent node which the sticky note div will be added as a child |
| `title`     | string        | NO  |  `Sticky Note #` | The title of the sticky note |

### `StickyNoteGenerator.createNoteAbsolute(location, parent, title)`

This method will create a sticky note with absolute position relative to the parent.

| Property    | Type      | Required? | Default  | Description |
| --------------- |:---------:|:---------:|:----------:| ----------- |
| `location`  | string        | Yes | \ | The initial location of the sticky note. <br> It can be `'left'` or `'right'` |
| `parent`    | HTML Node  | NO  | body | The parent node which the sticky note div will be added as a child |
| `title`     | string        | NO  |  `Sticky Note #` | The title of the sticky note |

Both `StickyNoteGenerator.createNoteAbsolute` and `StickyNoteGenerator.createNoteFixed` return a sticky note object.

### `StickyNoteGenerator.closeAll()` and `StickyNoteGenerator.openAll()`

These two will close or open all the sticky notes ever created by the previous two methods


## StickyNote

This is the object that represent a Sticky Note.

Here is a list of fields that you can access. 

WARNING: DO NOT OVERWRITE ANY OF THESE FIELDS! YOU SHOULD ONLY READ FROM THEM!

| Field       		| Type          | Description |
| --------------- |:---------:| ----------- |
| `parentNode`    	| HTML Node | The parent node which the sticky note div will be added as a child |
| `isPositionFixed` | bool      | Whether this is a fixed position note or an absolute position note |
| `noteDiv`         | HTML Node | The outer most div of the note, which holds all the subsequent elements <br> that consist of the StickyNote i.e the whole sticky note |
| `textField`       | HTML Node | The textarea element that users can enter. <br> Use `StickyNote.textField.value` to access the note content |
| `title_p`         | HTML Node | The title element of the note. <br> Use `StickyNote.title_p.innerText` to access the title |
| `title_input`     | HTML Node | The input element at when the user is editing the title |
| `editingTitle`    | bool      | Whether the user is editing the title|