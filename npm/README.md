[Demo](http://mazko.github.io/jsjavaparser/)

### Example Command Line:

    ~$ npm i -g java-parser

    ~$ echo '
    class HelloWorld {
      final int UNIVERSE = 42;
    }
    ' > HelloWorld.java

    ~$ java-parser HelloWorld.java
    {
      "node": "CompilationUnit",
      "types": [
        {
          "node": "TypeDeclaration",
          "name": {
            "identifier": "HelloWorld",
            "node": "SimpleName"
          },
          "superInterfaceTypes": [],
          "superclassType": null,
          "bodyDeclarations": [
            {
              "node": "FieldDeclaration",
              "fragments": [
                {
                  "node": "VariableDeclarationFragment",
                  "name": {
                    "identifier": "UNIVERSE",
                    "node": "SimpleName"
                  },
                  "extraDimensions": 0,
                  "initializer": {
                    "node": "NumberLiteral",
                    "token": "42"
                  }
                }
              ],
              "type": {
                "node": "PrimitiveType",
                "primitiveTypeCode": "int"
              },
              "modifiers": [
                {
                  "node": "Modifier",
                  "keyword": "final"
                }
              ]
            }
          ],
          "typeParameters": [],
          "interface": false,
          "modifiers": []
        }
      ],
      "package": null,
      "imports": []
    }

### Example Program:

    ~$ npm i java-parser

    ~$ echo '
        var japa = require("java-parser");
        console.log(japa.parse("package hello;"));
      ' | node
      { node: 'CompilationUnit',
        types: [],
        package: 
         { node: 'PackageDeclaration',
           name: { identifier: 'hello', node: 'SimpleName' },
           annotations: [] },
        imports: [] }