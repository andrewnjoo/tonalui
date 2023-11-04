const { execSync } = require("child_process");

execSync(
  "node_modules/.bin/postcss --config src/components src/components/**/*.css --base src --dir dist --no-map"
);
// execSync("cat dist/components/unstyled/*.css > dist/unstyled.css");
execSync("cat dist/components/styled/*.css > dist/styled.css");
execSync("rm -rf dist/components");
execSync("node_modules/.bin/prejss-cli dist/styled.css --format commonjs")
