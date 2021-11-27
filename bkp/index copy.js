// function downloadFile(filePath) {
//   var link = document.createElement("a");
//   link.href = filePath;
//   link.download = filePath.substr(filePath.lastIndexOf("/") + 1);
//   link.click();
// }

// downloadFile(
//   "http://www.adobe.com/content/dam/Adobe/en/accessibility/pdfs/accessing-pdf-sr.pdf"
// );

// function data2blob(data, isBase64) {
//   var chars = "";

//   if (isBase64) chars = atob(data);
//   else chars = data;

//   var bytes = new Array(chars.length);
//   for (var i = 0; i < chars.length; i++) {
//     bytes[i] = chars.charCodeAt(i);
//   }

//   var blob = new Blob([new Uint8Array(bytes)]);
//   return blob;
// }

// var myString = "my string with some stuff";
// saveAs(data2blob(myString), "myString.txt");

const markup = `<svg width="5cm" height="4cm" version="1.1"
xmlns="http://www.w3.org/2000/svg">
<desc>Four separate rectangles
</desc>
<rect x="0.5cm" y="0.5cm" width="2cm" height="1cm"/>
<rect x="0.5cm" y="2cm" width="1cm" height="1.5cm"/>
<rect x="3cm" y="0.5cm" width="1.5cm" height="2cm"/>
<rect x="3.5cm" y="3cm" width="1cm" height="0.5cm"/>

<!-- Show outline of viewport using 'rect' element -->
<rect x=".01cm" y=".01cm" width="4.98cm" height="3.98cm"
   fill="none" stroke="blue" stroke-width=".02cm" />

</svg>
`;
document
  .getElementsByClassName("it")[0]
  .insertAdjacentHTML("beforeend", markup);

const fileSelect = document.getElementById("fileSelect"),
  fileElem = document.getElementById("fileElem"),
  fileList = document.getElementById("fileList");

fileSelect.addEventListener(
  "click",
  function (e) {
    if (fileElem) {
      fileElem.click();
    }
    e.preventDefault(); // prevent navigation to "#"
  },
  false
);

fileElem.addEventListener("change", handleFiles, false);

function handleFiles() {
  if (!this.files.length) {
    fileList.innerHTML = "<p>No files selected!</p>";
  } else {
    fileList.innerHTML = "";
    const list = document.createElement("ul");
    fileList.appendChild(list);
    for (let i = 0; i < this.files.length; i++) {
      const li = document.createElement("li");
      list.appendChild(li);

      const img = document.createElement("img");
      img.src = URL.createObjectURL(this.files[i]);
      //   img.height = 400;
      img.onload = function () {
        URL.revokeObjectURL(this.src);
      };
      li.appendChild(img);
      const info = document.createElement("div");
      info.innerHTML =
        this.files[i].name + ": " + this.files[i].size + " bytes";
      li.appendChild(info);
    }
  }
}

function saveFile(fileName, urlFile) {
  let a = document.createElement("a");
  a.style = "display: none";
  document.body.appendChild(a);
  a.href = urlFile;
  a.download = fileName;
  a.click();
  window.URL.revokeObjectURL(url);
  a.remove();
}

let blobData = new Blob([markup], { type: "text/plain" });
let url = window.URL.createObjectURL(blobData);
//let url = "pathExample/localFile.png"; // LocalFileDownload
saveFile("test.svg", url);

var BB = get_blob();
saveAs(
  new BB(["text"], { type: "text/plain;charset=" + document.characterSet }),
  (text_filename.value || text_filename.placeholder) + ".txt"
);
