# StickyNotes 📝
A frontend JavaScript library that makes note taking easier on webpage for the user

This library will add sticky notes to a webpage that allows users to take notes while browsing this page. It also allows the developer to add sticky notes with predefined contents in them without having the user take notes themselves. This library can be used in article and guide website where taking notes will greatly imporoves users' experience. The website developer can add a note to each section of the page/article/guide by letting the user click a button or triggering on other events. The content of an instance will not lose if the user close the note. It will appear again when the same instance is added back to the DOM.

## Example Demo Page
The example usage page is deployed [here](https://stickynotesdemo-309-sky.herokuapp.com/) on heroku. <br>
This webpage contains a slightly long article as a demostration for the library. The content of the article is the industry standard **Lorem Ipsum**. There are several buttons that open a specific sticky note instance which is the entry point to this library.
  
## Features
Currently, an instance of note can either be **fixed** in the viewport or **absolute** positioned to a parent HTML element. This cannot be change after the object creatation. A **fixed** note have 4 buttons that allow the user to change the position of the note to one corner of the viewport. An **absolute** note have 2 buttons that move the note to the left or right of the parent HTML element. Each note also has a close button that will simply remove itself from the DOM. However, content in the note will not lose and it can be add back to the DOM just like before closing it.

## Object Representation




## Features to be Implemented
One feature mentioned in the proposal but has not been implemented is the user draggale note. This is challenging because simply subscribe to the `mousemove` event will have performance issue and it is buggy when the user right clicks. The other things that I will implement later is more customization options for the users and developer. This includes backaground color, disable repositioning, initial text field size... etc. The challenge here is how do I give these api without directly exposing my objects and how much customizability is good.  


