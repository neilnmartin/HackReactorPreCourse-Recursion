// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var stringifyJSON = function(obj) {
    // var opensq = `[`
    // var closedsq = `]`
    // var opencurly = `{`
    // var closedcurly = `}`
    // if(obj === undefined){
    //   return `undefined`
    // }
    if(obj === null){
      return `null`
    }
    if(typeof obj === `number`){
      return `` + obj
    }
    if(typeof obj === `string`){
      return `'${obj}'`
    }
    if(Array.isArray(obj)){
      var stringed = ``
      stringed += `[`
      
      var strings = obj.map(function(value, index){
        return stringifyJSON(value)
      }).join(`,`)
      
      stringed += strings + `]`
      
      return stringed
      
    }
    if (typeof obj === `object`){
      var objstr = ``
      var pairs = []
      var thispair = ``
      objstr += `{`
      for(var key in obj){
        if(obj[key] !== undefined && typeof obj[key] !== `function`){
          thispair = stringifyJSON(key) + `: ` + stringifyJSON(obj[key])
          pairs.push(thispair)
        }
      }
      // console.log(pairs)
      objstr += pairs.join(`, `) + `}`
      return objstr
      // only stringify if the value is not undefined or function
      // use same logic with arrays with the object - stringify 
    }
  
    // criteria:
    // return a string
    // can accept undefined, null, numbers, arrays, objects 
    // must use recursion
    //     > call an inner function within itself
  };
};
