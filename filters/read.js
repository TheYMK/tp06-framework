module.exports =(previous, filePath)=>{
  const fs = require('fs')
  let file;
  try {
    file = fs.readFileSync(filePath, 'utf8')
  } catch (error) {
    throw new Error( `Cannot read this file; ${filePath}` )
  }
  return file
}