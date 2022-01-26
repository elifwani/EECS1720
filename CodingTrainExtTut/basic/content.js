console.log("Hello World!");

let paragraphs = document.getElementsByTagName('p')

for (elt of paragraphs) {
    elt.style['background-color'] = '#00FF00';
}