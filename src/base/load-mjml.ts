const fs = require("fs/promises");
const path = require("path");

export async function loadMJML(mjmlFile: string): Promise<string> {
  console.log("PATH", path.join(__dirname, mjmlFile));
  
  let buffer = ""
  await fs.readFile(path.join(__dirname, mjmlFile), "utf-8").then((buffer: Buffer) => {
    buffer = buffer;
  })

  return buffer.toString();
}