# npm install coffee pegjs escodegen linq traverse
fs         = require 'fs'
pegjs      = require 'pegjs'
escodegen  = require 'escodegen'
Enumerable = require 'linq'
traverse   = require 'traverse'


grammar = fs.readFileSync 'src/java.pegjs', 'utf8'
javaparser = pegjs.buildParser grammar
src = fs.readFileSync process.argv[2], 'utf8'

try 
  ast = javaparser.parse src
catch err
  if err.name is 'SyntaxError'
    console.error "Line #{err.line}, column #{err.column}: " + err
    process.exit 42
  else
    throw err

# delete is optional since escodegen ignores unknown
# delete ast.package 
# delete ast.imports

traverse ast 
  .forEach (x)-> 
    console.log x
    switch x?.type
      when "VariableDeclaration" then 
        x.kind = 'var'
        this.update x
      when "CompilationUnit" then
        x.type = 'Program'
        this.update x


# http://neue.cc/reference.htm

Enumerable.from ast.body
  .where (decl)-> decl.type is 'ClassDeclaration'
  .forEach (cls)-> 
    cls.type = 'FunctionDeclaration'
    cls.params = [] # TODO: params from counstructor
    fields = Enumerable.from cls.body.body
      .where (field)-> field.declarations?[0].id.name \
            not in ['serialVersionUID', 'methodObject']
      .toArray()
    cls.body.body = fields
    Enumerable.from fields
      .where (field)-> field.type is 'VariableDeclaration'
      .selectMany (field)-> field.declarations
      .selectMany (decl)-> decl.init?.elements
      .forEach (element)->
        if element.callee?.name is 'Among'
          # remove last 2 args
          howmany = if element.arguments[3].value is '' then 2 else 1 
          if howmany is 1
            throw 'TODO: Among !';
          element.arguments = element.arguments[...-howmany]
          

console.log JSON.stringify ast, null, 2
console.log escodegen.generate ast
# console.log JSON.stringify((javaparser.parse src), null, 2)

# estree = JSON.parse fs.readFileSync 'tree', 'utf8'
# console.log escodegen.generate estree
