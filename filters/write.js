module.exports = (input) =>{
  const fs = require('fs')
  try {
    fs.writeFileSync(input[1], input[0])
  } catch (error) {
    throw new Error( `Can't create a file at this path ${input[1]}.` )
  }
}