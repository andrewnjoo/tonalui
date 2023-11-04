const styled = require("../dist/styled");

const mainFunction = ({ addComponents }) => {
  // inject components
  let file = styled;

  addComponents(file);
};

module.exports = require("tailwindcss/plugin")(mainFunction);
