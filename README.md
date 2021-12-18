# StickyNotes 📝
A frontend JavaScript library that makes note-taking easier on a webpage for the user

Checkout the library Main Page! [HERE](https://stickynotesdemo-309-sky.herokuapp.com/)

Checkout the detailed API documentation! [HERE](https://stickynotesdemo-309-sky.herokuapp.com/doc.html)

## Getting Started

Include `StickyNotes.js` and `StickyNotes.css` in the head

### Create a simple fixed note
```html
<button onclick="onClick('top-right')">Open a Fixed Note</button>
```
Then in your own js file
```js
const generator = new StickyNoteGenerator();
let note1 = null;
function onClick(location) {
  if (note1 === null) {
    note1 = generator.createNoteFixed(location);
  }
  note1.addToDOM()
}
```

### Create a simple absolute position note
```html
<p id="p1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
<button onclick="onClick('right')">Take Note!</button>
```
Then in your own js file
```js
const generator = new StickyNoteGenerator();
let note1 = null;
function onClick(location) {
  if (note1 === null) {
    note1 = generator.createNoteAbsolute(location, document.querySelector("#p1"), "Para 1");
  }
  note1.addToDOM()
}
```

### Some predefined content?
```js
const generator = new StickyNoteGenerator();
let note1 = null;
function onClick(location) {
  if (note1 === null) {
    note1 = generator.createNoteFixed(location);
    note1.setNoteContent("This is a predefined note.")
  }
  note1.addToDOM()
}
```



