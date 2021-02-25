const Case = {}

Case.snake = (str) =>{
 return str.split (/(?=[A-Z])/).join ("_").toLowerCase().split (/\s/g).join ("_")
}

Case.kebab = (str) => {
  return str.split (/\s+/g).join ("-")
}

Case.camel = (str) => {
  return str
            .replace (/\s(.)/g, function ($1){
              return $1.toUpperCase ()
            })
            .replace (/\s/g, "")
            .replace (/^(.)/g, function ($2){
              return $2.toLowerCase()
            })         
}

Case.pascal = (str) => {
  return str
            .replace (/\s(.)/g, function ($1){
              return $1.toUpperCase ()
            })
            .replace (/\s/g, "")
            .replace (/^(.)/g, function ($2){
              return $2.toUpperCase()
            })       
}



/*console.log (Case.kebab ("halo dunia"))
console.log (Case.snake ("halo dunia"))
console.log (Case.camel ("halo dunia"))
console.log (Case.pascal ("halo dunia"))
*/

export default Case
