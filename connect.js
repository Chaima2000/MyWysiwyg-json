import { MyWysiwyg } from './my_wysiwyg.js';
let mw = new MyWysiwyg(document.querySelector('textarea'), {buttons: ["bold", "italic", "color"]});
export {mw};