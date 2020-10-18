module.exports = function check(str, bracketsConfig) {
    for (let n=0; n<100; n++){
    for (let i=0; i<bracketsConfig.length; i++){
       
       while (str.indexOf(bracketsConfig[i].join('')) !== -1){
         str = str.replace(bracketsConfig[i].join(''),'')
       }     
      }
    }
   
    return str.length > 0 ? false : true
  }
