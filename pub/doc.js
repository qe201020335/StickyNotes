function getMarkdown(filePath, callback){
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
      // console.log("here")
      callback(xmlHttp.responseText);
    }
  }
  xmlHttp.open("GET", filePath, true); // true for asynchronous
  xmlHttp.send();
}

function loadMarkdownCallback(text) {
  // console.log(text)
  if (text) {
    const content = document.getElementById('md-content')

    // JS lib for display markdown file https://github.com/markedjs/marked
    marked.setOptions({
      gfm: true,
    })
    content.innerHTML = marked.parse(text)
    content.style.margin = "10px"
    content.style.padding = "30px"
    content.style.border = "5px solid grey"
    content.style.borderRadius = "10px"
  }

}


getMarkdown("/Documentation.md", loadMarkdownCallback)