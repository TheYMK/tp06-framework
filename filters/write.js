module.exports = (text, finalfilePath) =>{
  const fs = require('fs')
  try {
    fs.writeFileSync(finalfilePath, text)
  } catch (error) {
    throw new Error( `Can't create a file at this path ${filePath}.` )
  }
}