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

### `StickyNoteGenerator.closeAll()` and `StickyNoteGenerator.openAll()`

These two will close or open all the sticky notes ever created by the previous two methods


## StickyNote

This is the object that represent a Sticky Note


