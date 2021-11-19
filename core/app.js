const fs = require('fs')
const config = JSON.parse(fs.readFileSync('./config-filters.json'))

function start(){
  if(config!= null || config != undefined){
    console.log('start',Object.keys(config.steps))
    if (config.steps == undefined || config.steps == null ) {
      throw new Error('Your config doesn\'t contain any step array')
    }
    execFilter(Object.keys(config.steps)[0])
  } else {
    throw new Error('Config file doesn\'t exist')
  }
}

function execFilter(currentStep, previousResult=null){
  
  let filter;
  const step = config.steps[currentStep]
  if (step.filter == undefined || step.filter == null) {
    throw new Error('Filter attribute is missing')
  }
  try {
    filter = require(`../filters/${step.filter}.js`)
  } catch (error) {
    throw new Error( `Filter ${step.filter}.js doesn't exist in filters' folder` )
  }
  if (typeof(filter) != 'function'){
    throw new Error(`${step.filter} is not a function`)
  }
  console.log()
  console.log(`Exécution du filter ${step.filter}.js.`)
  try {
    if (step.params == undefined){
      result = filter(previousResult) == null ? null : filter(previousResult)
    } else{
      result = filter(previousResult,step.params.toString()) == null ? null : filter(previousResult,step.params.toString())
    }
  } catch (error) {
    throw new Error(`${step.filter}.js cannot be executed`)
  }
  

  // result = filter(previousResult,step.params.toString()) == null ? null : filter(previousResult,step.params.toString())
  if (step.next==0 || step.next== undefined || step.next== null){
    return
  }
  execFilter(step.next, result)
}

start()