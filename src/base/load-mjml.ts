const fs = require("fs/promises");
const path = require("path");

export async function loadMJML(mjmlFile: string): Promise<string> {
  return await fs.readFile(path.join(__dirname, "..", `./components/${mjmlFile}.mjml`), "utf-8")
}