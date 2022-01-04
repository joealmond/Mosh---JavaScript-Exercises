const HtmlElement = function () {
  // 1. method click
  this.click = function () {
    console.log("clicked");
  };

  // 2. HtmlElement.prototype => method focus
};

HtmlElement.prototype.focus = function () {
  console.log("focused");
};

const e = new HtmlElement();

const HtmlSelectElement = function (item = []) {
  // 1. Optional array argument if not present initialized to "items: []"
  // 1. alternative solution: this.items = items || [];
  // 2. addItem: f (item)
  // 3. removeItem: f (item)
  this.items = item;
  this.addItem = function (item) {
    this.items.push(item);
  };
  this.removeItem = function (item) {
    this.items.splice(this.items.indexOf(item), 1);
  };
  this.render = function () {
    // const selectTagOpen = "<select>";
    // const selectTagClose = "</select>";
    // const optionTagOpen = "<option>";
    // const optionTagClose = "</option>";
    // let html = selectTagOpen;
    // this.items.forEach((element) => {
    //   html = html.concat(optionTagOpen + element + optionTagClose);
    // });
    // html = html.concat(selectTagClose);

    return `
    <select>
        ${this.items.map((item) => `<option>${item}</option>`).join("")}
    </select>
    `;
  };
};
// 4. HtmlSelectElement(instance) = HtmlElement
HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;
const createSelectMenu = new HtmlSelectElement([1, 2, 3]);

const HtmlImageElement = function (src) {
  this.render = function (src = "http://") {
    return `<img src="${src}"></img>`;
  };
};

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlSelectElement;

const createImageTag = new HtmlImageElement();

const elements = [
  new HtmlSelectElement([1, 2, 3, 4]),
  new HtmlImageElement("http://explorer"),
];

for (let elemnt of elements) console.log(elemnt.render());
