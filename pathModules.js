const path = require("path");
console.log(path.sep);

const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath);
const base = path.basename(filePath);
console.log(base);

console.log(path.dirname(filePath));
console.log(path.extname(filePath));
console.log(path.isAbsolute(filePath));
console.log(path.resolve(__dirname, "content", "subfolder", "test.txt"));
