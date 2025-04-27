import path from 'path'

// const path = require("node:path");
console.log(path.basename("c/Users/jennie/app.js"))
console.log(path.dirname("c/Users/jennie/app.js"))
console.log(path.extname("c:/Users/jennie/app.js"))
console.log(path.join('c:','Users','jennie','/app.js'))
console.log(path.join('c:','Users','jennie','/app.js','..'))
console.log(path.normalize('c:///Users////jennie//feature///videos//app.js'))
console.log(path.parse("c:/Users/jennie/app.js"))
console.log(path.parse("c:/Users/jennie/app.js").base)
console.log(path.parse("c:/Users/jennie/app.js").dir)
console.log(path.parse("c:/Users/jennie/app.js").ext)
console.log(path.parse("c:/Users/jennie/app.js").name)
console.log(path.parse("c:/Users/jennie/app.js").root)
