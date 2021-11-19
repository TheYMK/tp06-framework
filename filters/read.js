module.exports =(input)=>{
  const fs = require('fs')
  let file;
  try {
    file = fs.readFileSync(input[1], 'utf8')
  } catch (error) {
    throw new Error( `Cannot read this file; ${input[1]}` )
  }
  return file
}