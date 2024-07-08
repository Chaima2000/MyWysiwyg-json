function MyWysiwyg(zone, boutons) {
    this.zone = zone;
    this.boutons = boutons;
};


export { MyWysiwyg };

import { mw } from "./connect.js";

window.addEventListener('DOMContentLoaded', function () {
    var arrayBoutons = mw.boutons.buttons;
    var toolBar = document.getElementsByTagName('body')[0];
    arrayBoutons.forEach(element => {
        let elem = document.createElement('button');
        elem.id = element;
        elem.textContent = element;
        toolBar.prepend(elem);
    });

    var textArea = mw.zone;
    console.log(textArea);
    var div = textArea.parentElement;

    textArea.addEventListener('mouseup', event => {
        if (window.getSelection().toString().length) {
         
         
            localStorage.setItem("text", window.getSelection().toString());
        }
    });
    document.getElementById("bold").addEventListener("click", function () {
        let exactText = localStorage.getItem("text");
        console.log(exactText);
        exactText.style.fontWeight = 'bold';
    });
    

});
