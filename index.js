const Case = {};

Case.snake = (str) => {
  return str.split(/\s/g).join("_");
};

Case.kebab = (str) => {
  return str.split(/\s+/g).join("-");
};

Case.camel = (str) => {
  return str
    .replace(/\s(.)/g, function ($1) {
      return $1.toUpperCase();
    })
    .replace(/\s/g, "")
    .replace(/^(.)/g, function ($2) {
      return $2.toLowerCase();
    });
};

Case.pascal = (str) => {
  return str
    .replace(/\s(.)/g, function ($1) {
      return $1.toUpperCase();
    })
    .replace(/\s/g, "")
    .replace(/^(.)/g, function ($2) {
      return $2.toUpperCase();
    });
};

Case.lower = (str) => {
  return str.toLowerCase();
};

Case.upper = (str) => {
  return str.toUpperCase();
};

Case.noWhiteSpace = (str) => {
  return str.split(/\s+/g).join("");
};

Case.path = (str) => {
  return str
    .replace(/\s(.)/g, function ($1) {
      return $1;
    })
    .replace(/\s/g, "/")
    .replace(/^(.)/g, function ($2) {
      return $2;
    });
};

/*console.log (Case.kebab ("Hello World"))
console.log (Case.snake ("Hello World"))
console.log (Case.camel ("Hello World"))
console.log (Case.pascal ("Hello World"))
*/

module.exports = Case