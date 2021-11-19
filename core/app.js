const fs = require('fs')
const config = JSON.parse(fs.readFileSync('./config-filters.json'))

function start(){
  if(config!= null || config != undefined){
    console.log('start',Object.keys(config.steps)[0])
    execFilter(Object.keys(config.steps)[0])
  } else {
    throw new Error('Config file doesn\'t exist')
  }
}

function execFilter(currentStep){
  let filter;
  try {
    filter = require(`../filters/${config.steps[currentStep].filter}.js`)
  } catch (error) {
    throw new Error( `Filter ${config.steps[currentStep].filter} doesn't exist` )
  }
  if (typeof(filter) != 'function'){
    throw new Error(`${config.steps[currentStep].filter} is not a function`)
  }
  if (config.steps[currentStep].params == undefined){
    throw new Error( `Parameters expected for filter ${config.steps[currentStep].filter}` ) 
  }
  filter(config.steps[currentStep].params.toString())
  if (config.steps[currentStep].next==0 || config.steps[currentStep].next== undefined || config.steps[currentStep].next== null){
    return
  }
  execFilter(config.steps[currentStep].next)
}

start()