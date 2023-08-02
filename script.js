const htmlEditor = CodeMirror(
  document.querySelector(".code-editor .editor .html-code"),
  {
    lineNumbers: true,
    tabSize: 4,
    mode: "xml",
    theme: "dracula",
    autoCloseTags: true,
    autoCloseBrackets: true,
    matchBrackets: true,
  }
);
const cssEditor = CodeMirror(
  document.querySelector(".code-editor .editor .css-code"),
  {
    lineNumbers: true,
    tabSize: 4,
    mode: "css",
    theme: "dracula",
    autoCloseBrackets: true,
    matchBrackets: true,
  }
);
const jsEditor = CodeMirror(
  document.querySelector(".code-editor .editor .js-code"),
  {
    lineNumbers: true,
    tabSize: 4,
    mode: "javascript",
    theme: "dracula",
    autoCloseBrackets: true,
    matchBrackets: true,
  }
);

// document.querySelector("#run-button").addEventListener("click", function () {
//   let htmlCode = htmlEditor.getValue();
//   let cssCode = "<style>" + cssEditor.getValue() + "</style>";
//   let jsCode = "<scri" + "pt>" + jsEditor.getValue() + "</scri" + "pt>";
//   let previewWindow =
//     document.querySelector("#show-code").contentWindow.document;
//   previewWindow.open();
//   previewWindow.write(htmlCode + cssCode + jsCode);
//   previewWindow.close();
// });
document.body.onkeyup = function () {
  setTimeout(function () {
    let htmlcode = htmlEditor.getValue();
    let csscode = "<style>" + cssEditor.getValue() + "</style>";
    let jscode = "<scri" + "pt>" + jsEditor.getValue() + "</scri" + "pt>";
    let previewWindow =
      document.querySelector("#show-code").contentWindow.document;
    previewWindow.open();
    previewWindow.write(htmlcode + csscode + jscode);
    previewWindow.close();
  }, 0); // 2000 milliseconds = 2 seconds
};
