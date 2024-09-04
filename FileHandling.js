const fs = require("fs");

//Sync & Async Write Files
fs.writeFileSync("./text1", "I AM First Text File");
fs.writeFile("./text2", "I AM Second TEXT File", (err) => {
  if (err) console.log(err);
});

//Sync & Async Read Files
const file1read = fs.readFileSync("./text1", "utf-8");
console.log(file1read + " *Sync Readed* ");
fs.readFile("./text2", "utf-8", (err, result) => {
  err ? console.log(err) : console.log(result + " *Async Readed* ");
});

//Append Files

fs.appendFile("./text1", "\nNew Worlds added\n", (err) => {
  if (err) console.log(err);
});

//copy Files
fs.cpSync("./text1", "./Copy.text");

//deleting a file
fs.unlinkSync("./Copy.text");

//getting stats of a file
console.log(fs.statSync("./text1"));
console.log(fs.statSync("./text1").isFile());

//Making a new directory
//fs.mkdirSync("My_Docs");

fs.mkdirSync("My_Docs/a/b", { recursive: true }); // Recurcisively create directories inside a directory
