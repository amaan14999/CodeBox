const htmlEditor = CodeMirror.fromTextArea(
  document.getElementById("html-code"),
  {
    lineNumbers: true,
    tabSize: 4,
    mode: "xml",
    theme: "monokai",
    autoCloseTags: true,
    autoCloseBrackets: true,
    matchBrackets: true,
  }
);
const cssEditor = CodeMirror.fromTextArea(document.getElementById("css-code"), {
  lineNumbers: true,
  tabSize: 4,
  mode: "css",
  theme: "monokai",
  autoCloseBrackets: true,
  matchBrackets: true,
});
const jsEditor = CodeMirror.fromTextArea(document.getElementById("js-code"), {
  lineNumbers: true,
  tabSize: 4,
  mode: "javascript",
  theme: "monokai",
  autoCloseBrackets: true,
  matchBrackets: true,
});

document.body.onkeyup = function run() {
  let htmlcode = htmlEditor.getValue();
  let csscode = "<style>" + cssEditor.getValue() + "</style>";
  let jscode = "<scri" + "pt>" + jsEditor.getValue() + "</scri" + "pt>";
  let previewWindow =
    document.querySelector("#preview-window").contentWindow.document;
  previewWindow.open();
  previewWindow.write(htmlcode + csscode + jscode);
  previewWindow.close();
};

// function initialise() {
//   let htmlcode = document.getElementById("html-code");
//   let csscode = document.getElementById("css-code");
//   let jscode = document.getElementById("js-code");
//   let code = document.getElementById("preview-window").contentWindow.document;
//   document.body.onkeyup = function () {
//     code.open();
//     code.writeln(
//       htmlcode.value +
//         "<style>" +
//         csscode.value +
//         "</style>" +
//         "<script>" +
//         jscode.value +
//         "</script>"
//     );
//     code.close();
//   };
// }
