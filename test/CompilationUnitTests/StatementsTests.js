
    test("block statements", function(assert) {
      var src = multiline(function(){/*
        class Test {
          public static void main(String[] args) {
            {     
              new Runnable() {
                @Override
                public void run() {
                  new Runnable() {
                    @Override
                    public void run() {
                    }
                  }.hashCode(); 
                }
              }.run(); 
            }
            {     
              int i = 42;
            }
         }
       }
      */});
      assert.deepEqual(
        JavaParser.parse(src)
        ,
        {
            node: "CompilationUnit",
            package: null,
            imports: [],
            types: [
                {
                    node: "TypeDeclaration",
                    modifiers: [],
                    interface: false,
                    name: {
                        node: "SimpleName",
                        identifier: "Test"
                    },
                    typeParameters: [],
                    superclassType: null,
                    superInterfaceTypes: [],
                    bodyDeclarations: [
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "public"
                                },
                                {
                                    node: "Modifier",
                                    keyword: "static"
                                }
                            ],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "void"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "main"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "ArrayType",
                                        componentType: {
                                            node: "SimpleType",
                                            name: {
                                                node: "SimpleName",
                                                identifier: "String"
                                            }
                                        }
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "args"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: {
                                node: "Block",
                                statements: [
                                    {
                                        node: "Block",
                                        statements: [
                                            {
                                                node: "ExpressionStatement",
                                                expression: {
                                                    node: "MethodInvocation",
                                                    expression: {
                                                        node: "ClassInstanceCreation",
                                                        expression: null,
                                                        typeArguments: [],
                                                        type: {
                                                            node: "SimpleType",
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "Runnable"
                                                            }
                                                        },
                                                        arguments: [],
                                                        anonymousClassDeclaration: {
                                                            node: "AnonymousClassDeclaration",
                                                            bodyDeclarations: [
                                                                {
                                                                    node: "MethodDeclaration",
                                                                    modifiers: [
                                                                        {
                                                                            node: "MarkerAnnotation",
                                                                            typeName: {
                                                                                node: "SimpleName",
                                                                                identifier: "Override"
                                                                            }
                                                                        },
                                                                        {
                                                                            node: "Modifier",
                                                                            keyword: "public"
                                                                        }
                                                                    ],
                                                                    constructor: false,
                                                                    typeParameters: [],
                                                                    returnType2: {
                                                                        node: "PrimitiveType",
                                                                        primitiveTypeCode: "void"
                                                                    },
                                                                    name: {
                                                                        node: "SimpleName",
                                                                        identifier: "run"
                                                                    },
                                                                    parameters: [],
                                                                    extraDimensions: 0,
                                                                    thrownExceptions: [],
                                                                    body: {
                                                                        node: "Block",
                                                                        statements: [
                                                                            {
                                                                                node: "ExpressionStatement",
                                                                                expression: {
                                                                                    node: "MethodInvocation",
                                                                                    expression: {
                                                                                        node: "ClassInstanceCreation",
                                                                                        expression: null,
                                                                                        typeArguments: [],
                                                                                        type: {
                                                                                            node: "SimpleType",
                                                                                            name: {
                                                                                                node: "SimpleName",
                                                                                                identifier: "Runnable"
                                                                                            }
                                                                                        },
                                                                                        arguments: [],
                                                                                        anonymousClassDeclaration: {
                                                                                            node: "AnonymousClassDeclaration",
                                                                                            bodyDeclarations: [
                                                                                                {
                                                                                                    node: "MethodDeclaration",
                                                                                                    modifiers: [
                                                                                                        {
                                                                                                            node: "MarkerAnnotation",
                                                                                                            typeName: {
                                                                                                                node: "SimpleName",
                                                                                                                identifier: "Override"
                                                                                                            }
                                                                                                        },
                                                                                                        {
                                                                                                            node: "Modifier",
                                                                                                            keyword: "public"
                                                                                                        }
                                                                                                    ],
                                                                                                    constructor: false,
                                                                                                    typeParameters: [],
                                                                                                    returnType2: {
                                                                                                        node: "PrimitiveType",
                                                                                                        primitiveTypeCode: "void"
                                                                                                    },
                                                                                                    name: {
                                                                                                        node: "SimpleName",
                                                                                                        identifier: "run"
                                                                                                    },
                                                                                                    parameters: [],
                                                                                                    extraDimensions: 0,
                                                                                                    thrownExceptions: [],
                                                                                                    body: {
                                                                                                        node: "Block",
                                                                                                        statements: []
                                                                                                    }
                                                                                                }
                                                                                            ]
                                                                                        }
                                                                                    },
                                                                                    typeArguments: [],
                                                                                    name: {
                                                                                        node: "SimpleName",
                                                                                        identifier: "hashCode"
                                                                                    },
                                                                                    arguments: []
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    },
                                                    typeArguments: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "run"
                                                    },
                                                    arguments: []
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        node: "Block",
                                        statements: [
                                            {
                                                node: "VariableDeclarationStatement",
                                                modifiers: [],
                                                type: {
                                                    node: "PrimitiveType",
                                                    primitiveTypeCode: "int"
                                                },
                                                fragments: [
                                                    {
                                                        node: "VariableDeclarationFragment",
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "i"
                                                        },
                                                        extraDimensions: 0,
                                                        initializer: {
                                                            node: "NumberLiteral",
                                                            token: "42"
                                                        }
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        }
                    ]
                }
            ]
        }
      );
    });

    test("class statements", function(assert) {
      var src = multiline(function(){/*
        class Test {
          { private class World {} };
          static {
            final class Hello {}
            int i = 42;
          }
          { public static class Hello1 {public enum Enum {}} }
        }
      */});
      assert.deepEqual(
        JavaParser.parse(src)
        ,
        {
            node: "CompilationUnit",
            package: null,
            imports: [],
            types: [
                {
                    node: "TypeDeclaration",
                    modifiers: [],
                    interface: false,
                    name: {
                        node: "SimpleName",
                        identifier: "Test"
                    },
                    typeParameters: [],
                    superclassType: null,
                    superInterfaceTypes: [],
                    bodyDeclarations: [
                        {
                            node: "Initializer",
                            modifiers: [],
                            body: {
                                node: "Block",
                                statements: [
                                    {
                                        node: "TypeDeclarationStatement",
                                        declaration: {
                                            node: "TypeDeclaration",
                                            modifiers: [
                                                {
                                                    node: "Modifier",
                                                    keyword: "private"
                                                }
                                            ],
                                            interface: false,
                                            name: {
                                                node: "SimpleName",
                                                identifier: "World"
                                            },
                                            typeParameters: [],
                                            superclassType: null,
                                            superInterfaceTypes: [],
                                            bodyDeclarations: []
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            node: "Initializer",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "static"
                                }
                            ],
                            body: {
                                node: "Block",
                                statements: [
                                    {
                                        node: "TypeDeclarationStatement",
                                        declaration: {
                                            node: "TypeDeclaration",
                                            modifiers: [
                                                {
                                                    node: "Modifier",
                                                    keyword: "final"
                                                }
                                            ],
                                            interface: false,
                                            name: {
                                                node: "SimpleName",
                                                identifier: "Hello"
                                            },
                                            typeParameters: [],
                                            superclassType: null,
                                            superInterfaceTypes: [],
                                            bodyDeclarations: []
                                        }
                                    },
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "int"
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "i"
                                                },
                                                extraDimensions: 0,
                                                initializer: {
                                                    node: "NumberLiteral",
                                                    token: "42"
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }
                        },
                        {
                            node: "Initializer",
                            modifiers: [],
                            body: {
                                node: "Block",
                                statements: [
                                    {
                                        node: "TypeDeclarationStatement",
                                        declaration: {
                                            node: "TypeDeclaration",
                                            modifiers: [
                                                {
                                                    node: "Modifier",
                                                    keyword: "public"
                                                },
                                                {
                                                    node: "Modifier",
                                                    keyword: "static"
                                                }
                                            ],
                                            interface: false,
                                            name: {
                                                node: "SimpleName",
                                                identifier: "Hello1"
                                            },
                                            typeParameters: [],
                                            superclassType: null,
                                            superInterfaceTypes: [],
                                            bodyDeclarations: [
                                                {
                                                    node: "EnumDeclaration",
                                                    modifiers: [
                                                        {
                                                            node: "Modifier",
                                                            keyword: "public"
                                                        }
                                                    ],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "Enum"
                                                    },
                                                    superInterfaceTypes: [],
                                                    enumConstants: [],
                                                    bodyDeclarations: []
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            ]
        }
      );
    });

    test("assert statements", function(assert) {
      var src = multiline(function(){/*
        class Test {
          { assert false; };
          { assert i % 3 == 2 : i; };
          public class Test {
            public static void main(String[] args) {
              { assert x > 42; };
              { assert i : i; };
            }
          }
        }
      */});
      assert.deepEqual(
        JavaParser.parse(src)
        ,
        {
            node: "CompilationUnit",
            package: null,
            imports: [],
            types: [
                {
                    node: "TypeDeclaration",
                    modifiers: [],
                    interface: false,
                    name: {
                        node: "SimpleName",
                        identifier: "Test"
                    },
                    typeParameters: [],
                    superclassType: null,
                    superInterfaceTypes: [],
                    bodyDeclarations: [
                        {
                            node: "Initializer",
                            modifiers: [],
                            body: {
                                node: "Block",
                                statements: [
                                    {
                                        node: "AssertStatement",
                                        expression: {
                                            node: "BooleanLiteral",
                                            booleanValue: false
                                        },
                                        message: null
                                    }
                                ]
                            }
                        },
                        {
                            node: "Initializer",
                            modifiers: [],
                            body: {
                                node: "Block",
                                statements: [
                                    {
                                        node: "AssertStatement",
                                        expression: {
                                            node: "InfixExpression",
                                            leftOperand: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "SimpleName",
                                                    identifier: "i"
                                                },
                                                operator: "%",
                                                rightOperand: {
                                                    node: "NumberLiteral",
                                                    token: "3"
                                                },
                                            },
                                            operator: "==",
                                            rightOperand: {
                                                node: "NumberLiteral",
                                                token: "2"
                                            },
                                        },
                                        message: {
                                            node: "SimpleName",
                                            identifier: "i"
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            node: "TypeDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "public"
                                }
                            ],
                            interface: false,
                            name: {
                                node: "SimpleName",
                                identifier: "Test"
                            },
                            typeParameters: [],
                            superclassType: null,
                            superInterfaceTypes: [],
                            bodyDeclarations: [
                                {
                                    node: "MethodDeclaration",
                                    modifiers: [
                                        {
                                            node: "Modifier",
                                            keyword: "public"
                                        },
                                        {
                                            node: "Modifier",
                                            keyword: "static"
                                        }
                                    ],
                                    constructor: false,
                                    typeParameters: [],
                                    returnType2: {
                                        node: "PrimitiveType",
                                        primitiveTypeCode: "void"
                                    },
                                    name: {
                                        node: "SimpleName",
                                        identifier: "main"
                                    },
                                    parameters: [
                                        {
                                            node: "SingleVariableDeclaration",
                                            modifiers: [],
                                            type: {
                                                node: "ArrayType",
                                                componentType: {
                                                    node: "SimpleType",
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "String"
                                                    }
                                                }
                                            },
                                            varargs: false,
                                            name: {
                                                node: "SimpleName",
                                                identifier: "args"
                                            },
                                            extraDimensions: 0,
                                            initializer: null
                                        }
                                    ],
                                    extraDimensions: 0,
                                    thrownExceptions: [],
                                    body: {
                                        node: "Block",
                                        statements: [
                                            {
                                                node: "Block",
                                                statements: [
                                                    {
                                                        node: "AssertStatement",
                                                        expression: {
                                                            node: "InfixExpression",
                                                            leftOperand: {
                                                                node: "SimpleName",
                                                                identifier: "x"
                                                            },
                                                            operator: ">",
                                                            rightOperand: {
                                                                node: "NumberLiteral",
                                                                token: "42"
                                                            },
                                                        },
                                                        message: null
                                                    }
                                                ]
                                            },
                                            {
                                                node: "EmptyStatement"
                                            },
                                            {
                                                node: "Block",
                                                statements: [
                                                    {
                                                        node: "AssertStatement",
                                                        expression: {
                                                            node: "SimpleName",
                                                            identifier: "i"
                                                        },
                                                        message: {
                                                            node: "SimpleName",
                                                            identifier: "i"
                                                        }
                                                    }
                                                ]
                                            },
                                            {
                                                node: "EmptyStatement"
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
      );
    });

    test("for statements", function(assert) {
      var src = multiline(function(){/*
        public class Test {
          public static void main(String[] args) {
            for (int i = 0; i < 42; i++) System.out.println("hello"); 
            for (int i = 0, y =42; i < 42; i*=3*y) {  
              for (int i = 0; i < 42; i++) System.out.println("hello"); 
            }
            for (final @ann Iterator<Integer> i = l.iterator(); i.hasNext(); ) {
              float i0 = (Integer)i.next();
            }
            for (; i++ < 42; ) { System.out.println("hello.world"); }
            for (final Object o = new Object();/* expr *\/;/* expr *\/) {}
            for (;;) { System.out.println("hello.world"); }

            for (i = 0; i*=3*y;) { ; }
            for (i = 0, y =42; i < 42; i*=3*y) { System.out.println("hello"); }
          }
        }
      */}).replace(/\*\\\//g, '*/');
      assert.deepEqual(
        JavaParser.parse(src)
        ,
        {
            node: "CompilationUnit",
            package: null,
            imports: [],
            types: [
                {
                    node: "TypeDeclaration",
                    modifiers: [
                        {
                            node: "Modifier",
                            keyword: "public"
                        }
                    ],
                    interface: false,
                    name: {
                        node: "SimpleName",
                        identifier: "Test"
                    },
                    typeParameters: [],
                    superclassType: null,
                    superInterfaceTypes: [],
                    bodyDeclarations: [
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "public"
                                },
                                {
                                    node: "Modifier",
                                    keyword: "static"
                                }
                            ],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "void"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "main"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "ArrayType",
                                        componentType: {
                                            node: "SimpleType",
                                            name: {
                                                node: "SimpleName",
                                                identifier: "String"
                                            }
                                        }
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "args"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: {
                                node: "Block",
                                statements: [
                                    {
                                        node: "ForStatement",
                                        initializers: [
                                            {
                                                node: "VariableDeclarationExpression",
                                                modifiers: [],
                                                type: {
                                                    node: "PrimitiveType",
                                                    primitiveTypeCode: "int"
                                                },
                                                fragments: [
                                                    {
                                                        node: "VariableDeclarationFragment",
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "i"
                                                        },
                                                        extraDimensions: 0,
                                                        initializer: {
                                                            node: "NumberLiteral",
                                                            token: "0"
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        expression: {
                                            node: "InfixExpression",
                                            leftOperand: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "<",
                                            rightOperand: {
                                                node: "NumberLiteral",
                                                token: "42"
                                            },
                                        },
                                        updaters: [
                                            {
                                                node: "PostfixExpression",
                                                operand: {
                                                    node: "SimpleName",
                                                    identifier: "i"
                                                },
                                                operator: "++"
                                            }
                                        ],
                                        body: {
                                            node: "ExpressionStatement",
                                            expression: {
                                                node: "MethodInvocation",
                                                expression: {
                                                    node: "QualifiedName",
                                                    qualifier: {
                                                        node: "SimpleName",
                                                        identifier: "System"
                                                    },
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "out"
                                                    }
                                                },
                                                typeArguments: [],
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "println"
                                                },
                                                arguments: [
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"hello\""
                                                    }
                                                ]
                                            }
                                        }
                                    },
                                    {
                                        node: "ForStatement",
                                        initializers: [
                                            {
                                                node: "VariableDeclarationExpression",
                                                modifiers: [],
                                                type: {
                                                    node: "PrimitiveType",
                                                    primitiveTypeCode: "int"
                                                },
                                                fragments: [
                                                    {
                                                        node: "VariableDeclarationFragment",
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "i"
                                                        },
                                                        extraDimensions: 0,
                                                        initializer: {
                                                            node: "NumberLiteral",
                                                            token: "0"
                                                        }
                                                    },
                                                    {
                                                        node: "VariableDeclarationFragment",
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "y"
                                                        },
                                                        extraDimensions: 0,
                                                        initializer: {
                                                            node: "NumberLiteral",
                                                            token: "42"
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        expression: {
                                            node: "InfixExpression",
                                            leftOperand: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "<",
                                            rightOperand: {
                                                node: "NumberLiteral",
                                                token: "42"
                                            },
                                        },
                                        updaters: [
                                            {
                                                node: "Assignment",
                                                leftHandSide: {
                                                    node: "SimpleName",
                                                    identifier: "i"
                                                },
                                                operator: "*=",
                                                rightHandSide: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "NumberLiteral",
                                                        token: "3"
                                                    },
                                                    operator: "*",
                                                    rightOperand: {
                                                        node: "SimpleName",
                                                        identifier: "y"
                                                    },
                                                }
                                            }
                                        ],
                                        body: {
                                            node: "Block",
                                            statements: [
                                                {
                                                    node: "ForStatement",
                                                    initializers: [
                                                        {
                                                            node: "VariableDeclarationExpression",
                                                            modifiers: [],
                                                            type: {
                                                                node: "PrimitiveType",
                                                                primitiveTypeCode: "int"
                                                            },
                                                            fragments: [
                                                                {
                                                                    node: "VariableDeclarationFragment",
                                                                    name: {
                                                                        node: "SimpleName",
                                                                        identifier: "i"
                                                                    },
                                                                    extraDimensions: 0,
                                                                    initializer: {
                                                                        node: "NumberLiteral",
                                                                        token: "0"
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    ],
                                                    expression: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "i"
                                                        },
                                                        operator: "<",
                                                        rightOperand: {
                                                            node: "NumberLiteral",
                                                            token: "42"
                                                        },
                                                    },
                                                    updaters: [
                                                        {
                                                            node: "PostfixExpression",
                                                            operand: {
                                                                node: "SimpleName",
                                                                identifier: "i"
                                                            },
                                                            operator: "++"
                                                        }
                                                    ],
                                                    body: {
                                                        node: "ExpressionStatement",
                                                        expression: {
                                                            node: "MethodInvocation",
                                                            expression: {
                                                                node: "QualifiedName",
                                                                qualifier: {
                                                                    node: "SimpleName",
                                                                    identifier: "System"
                                                                },
                                                                name: {
                                                                    node: "SimpleName",
                                                                    identifier: "out"
                                                                }
                                                            },
                                                            typeArguments: [],
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "println"
                                                            },
                                                            arguments: [
                                                                {
                                                                    node: "StringLiteral",
                                                                    escapedValue: "\"hello\""
                                                                }
                                                            ]
                                                        }
                                                    }
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        node: "ForStatement",
                                        initializers: [
                                            {
                                                node: "VariableDeclarationExpression",
                                                modifiers: [
                                                    {
                                                        node: "Modifier",
                                                        keyword: "final"
                                                    },
                                                    {
                                                        node: "MarkerAnnotation",
                                                        typeName: {
                                                            node: "SimpleName",
                                                            identifier: "ann"
                                                        }
                                                    }
                                                ],
                                                type: {
                                                    node: "ParameterizedType",
                                                    type: {
                                                        node: "SimpleType",
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "Iterator"
                                                        }
                                                    },
                                                    typeArguments: [
                                                        {
                                                            node: "SimpleType",
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "Integer"
                                                            }
                                                        }
                                                    ]
                                                },
                                                fragments: [
                                                    {
                                                        node: "VariableDeclarationFragment",
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "i"
                                                        },
                                                        extraDimensions: 0,
                                                        initializer: {
                                                            node: "MethodInvocation",
                                                            expression: {
                                                                node: "SimpleName",
                                                                identifier: "l"
                                                            },
                                                            typeArguments: [],
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "iterator"
                                                            },
                                                            arguments: []
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        expression: {
                                            node: "MethodInvocation",
                                            expression: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            typeArguments: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "hasNext"
                                            },
                                            arguments: []
                                        },
                                        updaters: [],
                                        body: {
                                            node: "Block",
                                            statements: [
                                                {
                                                    node: "VariableDeclarationStatement",
                                                    modifiers: [],
                                                    type: {
                                                        node: "PrimitiveType",
                                                        primitiveTypeCode: "float"
                                                    },
                                                    fragments: [
                                                        {
                                                            node: "VariableDeclarationFragment",
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "i0"
                                                            },
                                                            extraDimensions: 0,
                                                            initializer: {
                                                                node: "CastExpression",
                                                                type: {
                                                                    node: "SimpleType",
                                                                    name: {
                                                                        node: "SimpleName",
                                                                        identifier: "Integer"
                                                                    }
                                                                },
                                                                expression: {
                                                                    node: "MethodInvocation",
                                                                    expression: {
                                                                        node: "SimpleName",
                                                                        identifier: "i"
                                                                    },
                                                                    typeArguments: [],
                                                                    name: {
                                                                        node: "SimpleName",
                                                                        identifier: "next"
                                                                    },
                                                                    arguments: []
                                                                }
                                                            }
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        node: "ForStatement",
                                        initializers: [],
                                        expression: {
                                            node: "InfixExpression",
                                            leftOperand: {
                                                node: "PostfixExpression",
                                                operand: {
                                                    node: "SimpleName",
                                                    identifier: "i"
                                                },
                                                operator: "++"
                                            },
                                            operator: "<",
                                            rightOperand: {
                                                node: "NumberLiteral",
                                                token: "42"
                                            },
                                        },
                                        updaters: [],
                                        body: {
                                            node: "Block",
                                            statements: [
                                                {
                                                    node: "ExpressionStatement",
                                                    expression: {
                                                        node: "MethodInvocation",
                                                        expression: {
                                                            node: "QualifiedName",
                                                            qualifier: {
                                                                node: "SimpleName",
                                                                identifier: "System"
                                                            },
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "out"
                                                            }
                                                        },
                                                        typeArguments: [],
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "println"
                                                        },
                                                        arguments: [
                                                            {
                                                                node: "StringLiteral",
                                                                escapedValue: "\"hello.world\""
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        node: "ForStatement",
                                        initializers: [
                                            {
                                                node: "VariableDeclarationExpression",
                                                modifiers: [
                                                    {
                                                        node: "Modifier",
                                                        keyword: "final"
                                                    }
                                                ],
                                                type: {
                                                    node: "SimpleType",
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "Object"
                                                    }
                                                },
                                                fragments: [
                                                    {
                                                        node: "VariableDeclarationFragment",
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "o"
                                                        },
                                                        extraDimensions: 0,
                                                        initializer: {
                                                            node: "ClassInstanceCreation",
                                                            expression: null,
                                                            typeArguments: [],
                                                            type: {
                                                                node: "SimpleType",
                                                                name: {
                                                                    node: "SimpleName",
                                                                    identifier: "Object"
                                                                }
                                                            },
                                                            arguments: [],
                                                            anonymousClassDeclaration: null
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        expression: null,
                                        updaters: [],
                                        body: {
                                            node: "Block",
                                            statements: []
                                        }
                                    },
                                    {
                                        node: "ForStatement",
                                        initializers: [],
                                        expression: null,
                                        updaters: [],
                                        body: {
                                            node: "Block",
                                            statements: [
                                                {
                                                    node: "ExpressionStatement",
                                                    expression: {
                                                        node: "MethodInvocation",
                                                        expression: {
                                                            node: "QualifiedName",
                                                            qualifier: {
                                                                node: "SimpleName",
                                                                identifier: "System"
                                                            },
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "out"
                                                            }
                                                        },
                                                        typeArguments: [],
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "println"
                                                        },
                                                        arguments: [
                                                            {
                                                                node: "StringLiteral",
                                                                escapedValue: "\"hello.world\""
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        node: "ForStatement",
                                        initializers: [
                                            {
                                                node: "Assignment",
                                                leftHandSide: {
                                                    node: "SimpleName",
                                                    identifier: "i"
                                                },
                                                operator: "=",
                                                rightHandSide: {
                                                    node: "NumberLiteral",
                                                    token: "0"
                                                }
                                            }
                                        ],
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "*=",
                                            rightHandSide: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "NumberLiteral",
                                                    token: "3"
                                                },
                                                operator: "*",
                                                rightOperand: {
                                                    node: "SimpleName",
                                                    identifier: "y"
                                                },
                                            }
                                        },
                                        updaters: [],
                                        body: {
                                            node: "Block",
                                            statements: [
                                                {
                                                    node: "EmptyStatement"
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        node: "ForStatement",
                                        initializers: [
                                            {
                                                node: "Assignment",
                                                leftHandSide: {
                                                    node: "SimpleName",
                                                    identifier: "i"
                                                },
                                                operator: "=",
                                                rightHandSide: {
                                                    node: "NumberLiteral",
                                                    token: "0"
                                                }
                                            },
                                            {
                                                node: "Assignment",
                                                leftHandSide: {
                                                    node: "SimpleName",
                                                    identifier: "y"
                                                },
                                                operator: "=",
                                                rightHandSide: {
                                                    node: "NumberLiteral",
                                                    token: "42"
                                                }
                                            }
                                        ],
                                        expression: {
                                            node: "InfixExpression",
                                            leftOperand: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "<",
                                            rightOperand: {
                                                node: "NumberLiteral",
                                                token: "42"
                                            },
                                        },
                                        updaters: [
                                            {
                                                node: "Assignment",
                                                leftHandSide: {
                                                    node: "SimpleName",
                                                    identifier: "i"
                                                },
                                                operator: "*=",
                                                rightHandSide: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "NumberLiteral",
                                                        token: "3"
                                                    },
                                                    operator: "*",
                                                    rightOperand: {
                                                        node: "SimpleName",
                                                        identifier: "y"
                                                    },
                                                }
                                            }
                                        ],
                                        body: {
                                            node: "Block",
                                            statements: [
                                                {
                                                    node: "ExpressionStatement",
                                                    expression: {
                                                        node: "MethodInvocation",
                                                        expression: {
                                                            node: "QualifiedName",
                                                            qualifier: {
                                                                node: "SimpleName",
                                                                identifier: "System"
                                                            },
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "out"
                                                            }
                                                        },
                                                        typeArguments: [],
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "println"
                                                        },
                                                        arguments: [
                                                            {
                                                                node: "StringLiteral",
                                                                escapedValue: "\"hello\""
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            ]
        }
      );
    });

    test("enhanced for statements", function(assert) {
      var src = multiline(function(){/*
        public class Test {
          public static void main(String[] args) {
            for (float i : l) hello();
            for (final java.lang.String i : new String[]{"one","two"}) { hello(); }
            for (final @ann List<String> i : x) { hello(); }
          }
        }
      */});
      assert.deepEqual(
        JavaParser.parse(src)
        ,
        {
            node: "CompilationUnit",
            package: null,
            imports: [],
            types: [
                {
                    node: "TypeDeclaration",
                    modifiers: [
                        {
                            node: "Modifier",
                            keyword: "public"
                        }
                    ],
                    interface: false,
                    name: {
                        node: "SimpleName",
                        identifier: "Test"
                    },
                    typeParameters: [],
                    superclassType: null,
                    superInterfaceTypes: [],
                    bodyDeclarations: [
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "public"
                                },
                                {
                                    node: "Modifier",
                                    keyword: "static"
                                }
                            ],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "void"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "main"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "ArrayType",
                                        componentType: {
                                            node: "SimpleType",
                                            name: {
                                                node: "SimpleName",
                                                identifier: "String"
                                            }
                                        }
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "args"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: {
                                node: "Block",
                                statements: [
                                    {
                                        node: "EnhancedForStatement",
                                        parameter: {
                                            node: "SingleVariableDeclaration",
                                            modifiers: [],
                                            type: {
                                                node: "PrimitiveType",
                                                primitiveTypeCode: "float"
                                            },
                                            varargs: false,
                                            name: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            extraDimensions: 0,
                                            initializer: null
                                        },
                                        expression: {
                                            node: "SimpleName",
                                            identifier: "l"
                                        },
                                        body: {
                                            node: "ExpressionStatement",
                                            expression: {
                                                node: "MethodInvocation",
                                                expression: null,
                                                typeArguments: [],
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "hello"
                                                },
                                                arguments: []
                                            }
                                        }
                                    },
                                    {
                                        node: "EnhancedForStatement",
                                        parameter: {
                                            node: "SingleVariableDeclaration",
                                            modifiers: [
                                                {
                                                    node: "Modifier",
                                                    keyword: "final"
                                                }
                                            ],
                                            type: {
                                                node: "SimpleType",
                                                name: {
                                                    node: "QualifiedName",
                                                    qualifier: {
                                                        node: "QualifiedName",
                                                        qualifier: {
                                                            node: "SimpleName",
                                                            identifier: "java"
                                                        },
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "lang"
                                                        }
                                                    },
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "String"
                                                    }
                                                }
                                            },
                                            varargs: false,
                                            name: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            extraDimensions: 0,
                                            initializer: null
                                        },
                                        expression: {
                                            node: "ArrayCreation",
                                            type: {
                                                node: "ArrayType",
                                                componentType: {
                                                    node: "SimpleType",
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "String"
                                                    }
                                                }
                                            },
                                            dimensions: [],
                                            initializer: {
                                                node: "ArrayInitializer",
                                                expressions: [
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"one\""
                                                    },
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"two\""
                                                    }
                                                ]
                                            }
                                        },
                                        body: {
                                            node: "Block",
                                            statements: [
                                                {
                                                    node: "ExpressionStatement",
                                                    expression: {
                                                        node: "MethodInvocation",
                                                        expression: null,
                                                        typeArguments: [],
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "hello"
                                                        },
                                                        arguments: []
                                                    }
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        node: "EnhancedForStatement",
                                        parameter: {
                                            node: "SingleVariableDeclaration",
                                            modifiers: [
                                                {
                                                    node: "Modifier",
                                                    keyword: "final"
                                                },
                                                {
                                                    node: "MarkerAnnotation",
                                                    typeName: {
                                                        node: "SimpleName",
                                                        identifier: "ann"
                                                    }
                                                }
                                            ],
                                            type: {
                                                node: "ParameterizedType",
                                                type: {
                                                    node: "SimpleType",
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "List"
                                                    }
                                                },
                                                typeArguments: [
                                                    {
                                                        node: "SimpleType",
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "String"
                                                        }
                                                    }
                                                ]
                                            },
                                            varargs: false,
                                            name: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            extraDimensions: 0,
                                            initializer: null
                                        },
                                        expression: {
                                            node: "SimpleName",
                                            identifier: "x"
                                        },
                                        body: {
                                            node: "Block",
                                            statements: [
                                                {
                                                    node: "ExpressionStatement",
                                                    expression: {
                                                        node: "MethodInvocation",
                                                        expression: null,
                                                        typeArguments: [],
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "hello"
                                                        },
                                                        arguments: []
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            ]
        }
      );
    });

    test("while statements", function(assert) {
      var src = multiline(function(){/*
        public class Test {
          public static void main(String[] args) {
            while (i--) hello();
            while (true) {
              hello();
            }
            while (itr.next()) while(false);
            golab1: while(true) {;}
          }
        }
      */});
      assert.deepEqual(
        JavaParser.parse(src)
        ,
        {
            node: "CompilationUnit",
            package: null,
            imports: [],
            types: [
                {
                    node: "TypeDeclaration",
                    modifiers: [
                        {
                            node: "Modifier",
                            keyword: "public"
                        }
                    ],
                    interface: false,
                    name: {
                        node: "SimpleName",
                        identifier: "Test"
                    },
                    typeParameters: [],
                    superclassType: null,
                    superInterfaceTypes: [],
                    bodyDeclarations: [
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "public"
                                },
                                {
                                    node: "Modifier",
                                    keyword: "static"
                                }
                            ],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "void"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "main"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "ArrayType",
                                        componentType: {
                                            node: "SimpleType",
                                            name: {
                                                node: "SimpleName",
                                                identifier: "String"
                                            }
                                        }
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "args"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: {
                                node: "Block",
                                statements: [
                                    {
                                        node: "WhileStatement",
                                        expression: {
                                            node: "PostfixExpression",
                                            operand: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "--"
                                        },
                                        body: {
                                            node: "ExpressionStatement",
                                            expression: {
                                                node: "MethodInvocation",
                                                expression: null,
                                                typeArguments: [],
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "hello"
                                                },
                                                arguments: []
                                            }
                                        }
                                    },
                                    {
                                        node: "WhileStatement",
                                        expression: {
                                            node: "BooleanLiteral",
                                            booleanValue: true
                                        },
                                        body: {
                                            node: "Block",
                                            statements: [
                                                {
                                                    node: "ExpressionStatement",
                                                    expression: {
                                                        node: "MethodInvocation",
                                                        expression: null,
                                                        typeArguments: [],
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "hello"
                                                        },
                                                        arguments: []
                                                    }
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        node: "WhileStatement",
                                        expression: {
                                            node: "MethodInvocation",
                                            expression: {
                                                node: "SimpleName",
                                                identifier: "itr"
                                            },
                                            typeArguments: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "next"
                                            },
                                            arguments: []
                                        },
                                        body: {
                                            node: "WhileStatement",
                                            expression: {
                                                node: "BooleanLiteral",
                                                booleanValue: false
                                            },
                                            body: {
                                                node: "EmptyStatement"
                                            }
                                        }
                                    },
                                    {
                                        node: "LabeledStatement",
                                        label: {
                                            node: "SimpleName",
                                            identifier: "golab1"
                                        },
                                        body: {
                                            node: "WhileStatement",
                                            expression: {
                                                node: "BooleanLiteral",
                                                booleanValue: true
                                            },
                                            body: {
                                                node: "Block",
                                                statements: [
                                                    {
                                                        node: "EmptyStatement"
                                                    }
                                                ]
                                            }
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            ]
        }
      );
    });

    test("do while statements", function(assert) {
      var src = multiline(function(){/*
        public class Test {
          public static void main(String[] args) {
            do hello(); while (i--);
            do {
              world();
            } while (itr.next());
            golab1: do hello(); while (42);
          }
        }
      */});
      assert.deepEqual(
        JavaParser.parse(src)
        ,
        {
            node: "CompilationUnit",
            package: null,
            imports: [],
            types: [
                {
                    node: "TypeDeclaration",
                    modifiers: [
                        {
                            node: "Modifier",
                            keyword: "public"
                        }
                    ],
                    interface: false,
                    name: {
                        node: "SimpleName",
                        identifier: "Test"
                    },
                    typeParameters: [],
                    superclassType: null,
                    superInterfaceTypes: [],
                    bodyDeclarations: [
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "public"
                                },
                                {
                                    node: "Modifier",
                                    keyword: "static"
                                }
                            ],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "void"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "main"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "ArrayType",
                                        componentType: {
                                            node: "SimpleType",
                                            name: {
                                                node: "SimpleName",
                                                identifier: "String"
                                            }
                                        }
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "args"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: {
                                node: "Block",
                                statements: [
                                    {
                                        node: "DoStatement",
                                        body: {
                                            node: "ExpressionStatement",
                                            expression: {
                                                node: "MethodInvocation",
                                                expression: null,
                                                typeArguments: [],
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "hello"
                                                },
                                                arguments: []
                                            }
                                        },
                                        expression: {
                                            node: "PostfixExpression",
                                            operand: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "--"
                                        }
                                    },
                                    {
                                        node: "DoStatement",
                                        body: {
                                            node: "Block",
                                            statements: [
                                                {
                                                    node: "ExpressionStatement",
                                                    expression: {
                                                        node: "MethodInvocation",
                                                        expression: null,
                                                        typeArguments: [],
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "world"
                                                        },
                                                        arguments: []
                                                    }
                                                }
                                            ]
                                        },
                                        expression: {
                                            node: "MethodInvocation",
                                            expression: {
                                                node: "SimpleName",
                                                identifier: "itr"
                                            },
                                            typeArguments: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "next"
                                            },
                                            arguments: []
                                        }
                                    },
                                    {
                                        node: "LabeledStatement",
                                        label: {
                                            node: "SimpleName",
                                            identifier: "golab1"
                                        },
                                        body: {
                                            node: "DoStatement",
                                            body: {
                                                node: "ExpressionStatement",
                                                expression: {
                                                    node: "MethodInvocation",
                                                    expression: null,
                                                    typeArguments: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "hello"
                                                    },
                                                    arguments: []
                                                }
                                            },
                                            expression: {
                                                node: "NumberLiteral",
                                                token: "42"
                                            }
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            ]
        }
      );
    });

    test("try statements", function(assert) {
      var src = multiline(function(){/*
        public class Test {
          public static void main(String[] args) {
            try {
              throw BlewIt();
            } catch (RuntimeException r) {
              System.out.println("Caught RuntimeException");
            } catch (BlewIt b) {
              System.out.println("Caught BlewIt");
            }

            try {
              throw ClassNotFoundException(42);
            }
            catch (ClassNotFoundException | IllegalAccessException ex) {
              world();
            }
            catch (final ClassNotFoundException | IllegalAccessException | BlewIt ex) {
              world();
            }

            try {
              throw BlewIt();
            } catch (BlewIt b) {
              System.out.println("Caught BlewIt");
            } finally {
              System.out.println("Uncaught Exception");
            }

            try {
              throw BlewIt();
            } finally {
              System.out.println("Uncaught Exception");
            }
          }
        }
      */});
      assert.deepEqual(
        JavaParser.parse(src)
        ,
        {
            node: "CompilationUnit",
            package: null,
            imports: [],
            types: [
                {
                    node: "TypeDeclaration",
                    modifiers: [
                        {
                            node: "Modifier",
                            keyword: "public"
                        }
                    ],
                    interface: false,
                    name: {
                        node: "SimpleName",
                        identifier: "Test"
                    },
                    typeParameters: [],
                    superclassType: null,
                    superInterfaceTypes: [],
                    bodyDeclarations: [
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "public"
                                },
                                {
                                    node: "Modifier",
                                    keyword: "static"
                                }
                            ],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "void"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "main"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "ArrayType",
                                        componentType: {
                                            node: "SimpleType",
                                            name: {
                                                node: "SimpleName",
                                                identifier: "String"
                                            }
                                        }
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "args"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: {
                                node: "Block",
                                statements: [
                                    {
                                        node: "TryStatement",
                                        resources: [],
                                        body: {
                                            node: "Block",
                                            statements: [
                                                {
                                                    node: "ThrowStatement",
                                                    expression: {
                                                        node: "MethodInvocation",
                                                        expression: null,
                                                        typeArguments: [],
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "BlewIt"
                                                        },
                                                        arguments: []
                                                    }
                                                }
                                            ]
                                        },
                                        catchClauses: [
                                            {
                                                node: "CatchClause",
                                                exception: {
                                                    node: "SingleVariableDeclaration",
                                                    modifiers: [],
                                                    type: {
                                                        node: "SimpleType",
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "RuntimeException"
                                                        }
                                                    },
                                                    varargs: false,
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "r"
                                                    },
                                                    extraDimensions: 0,
                                                    initializer: null
                                                },
                                                body: {
                                                    node: "Block",
                                                    statements: [
                                                        {
                                                            node: "ExpressionStatement",
                                                            expression: {
                                                                node: "MethodInvocation",
                                                                expression: {
                                                                    node: "QualifiedName",
                                                                    qualifier: {
                                                                        node: "SimpleName",
                                                                        identifier: "System"
                                                                    },
                                                                    name: {
                                                                        node: "SimpleName",
                                                                        identifier: "out"
                                                                    }
                                                                },
                                                                typeArguments: [],
                                                                name: {
                                                                    node: "SimpleName",
                                                                    identifier: "println"
                                                                },
                                                                arguments: [
                                                                    {
                                                                        node: "StringLiteral",
                                                                        escapedValue: "\"Caught RuntimeException\""
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                node: "CatchClause",
                                                exception: {
                                                    node: "SingleVariableDeclaration",
                                                    modifiers: [],
                                                    type: {
                                                        node: "SimpleType",
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "BlewIt"
                                                        }
                                                    },
                                                    varargs: false,
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "b"
                                                    },
                                                    extraDimensions: 0,
                                                    initializer: null
                                                },
                                                body: {
                                                    node: "Block",
                                                    statements: [
                                                        {
                                                            node: "ExpressionStatement",
                                                            expression: {
                                                                node: "MethodInvocation",
                                                                expression: {
                                                                    node: "QualifiedName",
                                                                    qualifier: {
                                                                        node: "SimpleName",
                                                                        identifier: "System"
                                                                    },
                                                                    name: {
                                                                        node: "SimpleName",
                                                                        identifier: "out"
                                                                    }
                                                                },
                                                                typeArguments: [],
                                                                name: {
                                                                    node: "SimpleName",
                                                                    identifier: "println"
                                                                },
                                                                arguments: [
                                                                    {
                                                                        node: "StringLiteral",
                                                                        escapedValue: "\"Caught BlewIt\""
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        ],
                                        finally: null
                                    },
                                    {
                                        node: "TryStatement",
                                        resources: [],
                                        body: {
                                            node: "Block",
                                            statements: [
                                                {
                                                    node: "ThrowStatement",
                                                    expression: {
                                                        node: "MethodInvocation",
                                                        expression: null,
                                                        typeArguments: [],
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "ClassNotFoundException"
                                                        },
                                                        arguments: [
                                                            {
                                                                node: "NumberLiteral",
                                                                token: "42"
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        },
                                        catchClauses: [
                                            {
                                                node: "CatchClause",
                                                exception: {
                                                    node: "SingleVariableDeclaration",
                                                    modifiers: [],
                                                    type: {
                                                        node: "UnionType",
                                                        types: [
                                                            {
                                                                node: "SimpleType",
                                                                name: {
                                                                    node: "SimpleName",
                                                                    identifier: "ClassNotFoundException"
                                                                }
                                                            },
                                                            {
                                                                node: "SimpleType",
                                                                name: {
                                                                    node: "SimpleName",
                                                                    identifier: "IllegalAccessException"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    varargs: false,
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "ex"
                                                    },
                                                    extraDimensions: 0,
                                                    initializer: null
                                                },
                                                body: {
                                                    node: "Block",
                                                    statements: [
                                                        {
                                                            node: "ExpressionStatement",
                                                            expression: {
                                                                node: "MethodInvocation",
                                                                expression: null,
                                                                typeArguments: [],
                                                                name: {
                                                                    node: "SimpleName",
                                                                    identifier: "world"
                                                                },
                                                                arguments: []
                                                            }
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                node: "CatchClause",
                                                exception: {
                                                    node: "SingleVariableDeclaration",
                                                    modifiers: [
                                                        {
                                                            node: "Modifier",
                                                            keyword: "final"
                                                        }
                                                    ],
                                                    type: {
                                                        node: "UnionType",
                                                        types: [
                                                            {
                                                                node: "SimpleType",
                                                                name: {
                                                                    node: "SimpleName",
                                                                    identifier: "ClassNotFoundException"
                                                                }
                                                            },
                                                            {
                                                                node: "SimpleType",
                                                                name: {
                                                                    node: "SimpleName",
                                                                    identifier: "IllegalAccessException"
                                                                }
                                                            },
                                                            {
                                                                node: "SimpleType",
                                                                name: {
                                                                    node: "SimpleName",
                                                                    identifier: "BlewIt"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    varargs: false,
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "ex"
                                                    },
                                                    extraDimensions: 0,
                                                    initializer: null
                                                },
                                                body: {
                                                    node: "Block",
                                                    statements: [
                                                        {
                                                            node: "ExpressionStatement",
                                                            expression: {
                                                                node: "MethodInvocation",
                                                                expression: null,
                                                                typeArguments: [],
                                                                name: {
                                                                    node: "SimpleName",
                                                                    identifier: "world"
                                                                },
                                                                arguments: []
                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        ],
                                        finally: null
                                    },
                                    {
                                        node: "TryStatement",
                                        resources: [],
                                        body: {
                                            node: "Block",
                                            statements: [
                                                {
                                                    node: "ThrowStatement",
                                                    expression: {
                                                        node: "MethodInvocation",
                                                        expression: null,
                                                        typeArguments: [],
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "BlewIt"
                                                        },
                                                        arguments: []
                                                    }
                                                }
                                            ]
                                        },
                                        catchClauses: [
                                            {
                                                node: "CatchClause",
                                                exception: {
                                                    node: "SingleVariableDeclaration",
                                                    modifiers: [],
                                                    type: {
                                                        node: "SimpleType",
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "BlewIt"
                                                        }
                                                    },
                                                    varargs: false,
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "b"
                                                    },
                                                    extraDimensions: 0,
                                                    initializer: null
                                                },
                                                body: {
                                                    node: "Block",
                                                    statements: [
                                                        {
                                                            node: "ExpressionStatement",
                                                            expression: {
                                                                node: "MethodInvocation",
                                                                expression: {
                                                                    node: "QualifiedName",
                                                                    qualifier: {
                                                                        node: "SimpleName",
                                                                        identifier: "System"
                                                                    },
                                                                    name: {
                                                                        node: "SimpleName",
                                                                        identifier: "out"
                                                                    }
                                                                },
                                                                typeArguments: [],
                                                                name: {
                                                                    node: "SimpleName",
                                                                    identifier: "println"
                                                                },
                                                                arguments: [
                                                                    {
                                                                        node: "StringLiteral",
                                                                        escapedValue: "\"Caught BlewIt\""
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        ],
                                        finally: {
                                            node: "Block",
                                            statements: [
                                                {
                                                    node: "ExpressionStatement",
                                                    expression: {
                                                        node: "MethodInvocation",
                                                        expression: {
                                                            node: "QualifiedName",
                                                            qualifier: {
                                                                node: "SimpleName",
                                                                identifier: "System"
                                                            },
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "out"
                                                            }
                                                        },
                                                        typeArguments: [],
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "println"
                                                        },
                                                        arguments: [
                                                            {
                                                                node: "StringLiteral",
                                                                escapedValue: "\"Uncaught Exception\""
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        node: "TryStatement",
                                        resources: [],
                                        body: {
                                            node: "Block",
                                            statements: [
                                                {
                                                    node: "ThrowStatement",
                                                    expression: {
                                                        node: "MethodInvocation",
                                                        expression: null,
                                                        typeArguments: [],
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "BlewIt"
                                                        },
                                                        arguments: []
                                                    }
                                                }
                                            ]
                                        },
                                        catchClauses: [],
                                        finally: {
                                            node: "Block",
                                            statements: [
                                                {
                                                    node: "ExpressionStatement",
                                                    expression: {
                                                        node: "MethodInvocation",
                                                        expression: {
                                                            node: "QualifiedName",
                                                            qualifier: {
                                                                node: "SimpleName",
                                                                identifier: "System"
                                                            },
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "out"
                                                            }
                                                        },
                                                        typeArguments: [],
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "println"
                                                        },
                                                        arguments: [
                                                            {
                                                                node: "StringLiteral",
                                                                escapedValue: "\"Uncaught Exception\""
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            ]
        }
      );
    });

    test("try resource statements", function(assert) {
      var src = multiline(function(){/*
        public class Test {
          public static void main(String[] args) {
            try (BufferedReader br =
                           new BufferedReader(new FileReader(path))) {
                return br.readLine();
            }
            try (final BufferedReader br =
                           new BufferedReader(new FileReader(path))) {
                return br.readLine();
            } catch (Exception ex){
              hello(ex);
            }

            try (final BufferedReader br =
                           new BufferedReader(new FileReader(path))) {
                return br.readLine();
            } finally {
              hello();
            }

            try (final BufferedReader br =
                           new BufferedReader(new FileReader(path))) {
                return br.readLine();
            } catch (Hello | World ex) {
              hello.world();
            } catch (Exception ex) {
              hello(ex);
            } finally {
              hello();
            }

            try (final @ann BufferedReader br =
                           new BufferedReader(new FileReader(path))) {
                return br.readLine();
            }

            try (
              java.util.zip.ZipFile zf = new java.util.zip.ZipFile(zipFileName);
              final java.io.BufferedWriter writer = java.nio.file.Files.newBufferedWriter(outputFilePath, charset)
            ) 
            {
              // Enumerate each entry
              for (java.util.Enumeration entries =
                    zf.entries(); entries.hasMoreElements();) {
                // Get the entry name and write it to the output file
                String newLine = System.getProperty("line.separator");
                String zipEntryName = ((java.util.zip.ZipEntry)entries.nextElement()).getName() + newLine;
                writer.write(zipEntryName, 0, zipEntryName.length());
              }
            }
          }
        }
      */});
      assert.deepEqual(
        JavaParser.parse(src)
        ,
        {
            node: "CompilationUnit",
            package: null,
            imports: [],
            types: [
                {
                    node: "TypeDeclaration",
                    modifiers: [
                        {
                            node: "Modifier",
                            keyword: "public"
                        }
                    ],
                    interface: false,
                    name: {
                        node: "SimpleName",
                        identifier: "Test"
                    },
                    typeParameters: [],
                    superclassType: null,
                    superInterfaceTypes: [],
                    bodyDeclarations: [
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "public"
                                },
                                {
                                    node: "Modifier",
                                    keyword: "static"
                                }
                            ],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "void"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "main"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "ArrayType",
                                        componentType: {
                                            node: "SimpleType",
                                            name: {
                                                node: "SimpleName",
                                                identifier: "String"
                                            }
                                        }
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "args"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: {
                                node: "Block",
                                statements: [
                                    {
                                        node: "TryStatement",
                                        resources: [
                                            {
                                                node: "VariableDeclarationExpression",
                                                modifiers: [],
                                                type: {
                                                    node: "SimpleType",
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "BufferedReader"
                                                    }
                                                },
                                                fragments: [
                                                    {
                                                        node: "VariableDeclarationFragment",
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "br"
                                                        },
                                                        extraDimensions: 0,
                                                        initializer: {
                                                            node: "ClassInstanceCreation",
                                                            expression: null,
                                                            typeArguments: [],
                                                            type: {
                                                                node: "SimpleType",
                                                                name: {
                                                                    node: "SimpleName",
                                                                    identifier: "BufferedReader"
                                                                }
                                                            },
                                                            arguments: [
                                                                {
                                                                    node: "ClassInstanceCreation",
                                                                    expression: null,
                                                                    typeArguments: [],
                                                                    type: {
                                                                        node: "SimpleType",
                                                                        name: {
                                                                            node: "SimpleName",
                                                                            identifier: "FileReader"
                                                                        }
                                                                    },
                                                                    arguments: [
                                                                        {
                                                                            node: "SimpleName",
                                                                            identifier: "path"
                                                                        }
                                                                    ],
                                                                    anonymousClassDeclaration: null
                                                                }
                                                            ],
                                                            anonymousClassDeclaration: null
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        body: {
                                            node: "Block",
                                            statements: [
                                                {
                                                    node: "ReturnStatement",
                                                    expression: {
                                                        node: "MethodInvocation",
                                                        expression: {
                                                            node: "SimpleName",
                                                            identifier: "br"
                                                        },
                                                        typeArguments: [],
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "readLine"
                                                        },
                                                        arguments: []
                                                    }
                                                }
                                            ]
                                        },
                                        catchClauses: [],
                                        finally: null
                                    },
                                    {
                                        node: "TryStatement",
                                        resources: [
                                            {
                                                node: "VariableDeclarationExpression",
                                                modifiers: [
                                                    {
                                                        node: "Modifier",
                                                        keyword: "final"
                                                    }
                                                ],
                                                type: {
                                                    node: "SimpleType",
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "BufferedReader"
                                                    }
                                                },
                                                fragments: [
                                                    {
                                                        node: "VariableDeclarationFragment",
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "br"
                                                        },
                                                        extraDimensions: 0,
                                                        initializer: {
                                                            node: "ClassInstanceCreation",
                                                            expression: null,
                                                            typeArguments: [],
                                                            type: {
                                                                node: "SimpleType",
                                                                name: {
                                                                    node: "SimpleName",
                                                                    identifier: "BufferedReader"
                                                                }
                                                            },
                                                            arguments: [
                                                                {
                                                                    node: "ClassInstanceCreation",
                                                                    expression: null,
                                                                    typeArguments: [],
                                                                    type: {
                                                                        node: "SimpleType",
                                                                        name: {
                                                                            node: "SimpleName",
                                                                            identifier: "FileReader"
                                                                        }
                                                                    },
                                                                    arguments: [
                                                                        {
                                                                            node: "SimpleName",
                                                                            identifier: "path"
                                                                        }
                                                                    ],
                                                                    anonymousClassDeclaration: null
                                                                }
                                                            ],
                                                            anonymousClassDeclaration: null
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        body: {
                                            node: "Block",
                                            statements: [
                                                {
                                                    node: "ReturnStatement",
                                                    expression: {
                                                        node: "MethodInvocation",
                                                        expression: {
                                                            node: "SimpleName",
                                                            identifier: "br"
                                                        },
                                                        typeArguments: [],
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "readLine"
                                                        },
                                                        arguments: []
                                                    }
                                                }
                                            ]
                                        },
                                        catchClauses: [
                                            {
                                                node: "CatchClause",
                                                exception: {
                                                    node: "SingleVariableDeclaration",
                                                    modifiers: [],
                                                    type: {
                                                        node: "SimpleType",
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "Exception"
                                                        }
                                                    },
                                                    varargs: false,
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "ex"
                                                    },
                                                    extraDimensions: 0,
                                                    initializer: null
                                                },
                                                body: {
                                                    node: "Block",
                                                    statements: [
                                                        {
                                                            node: "ExpressionStatement",
                                                            expression: {
                                                                node: "MethodInvocation",
                                                                expression: null,
                                                                typeArguments: [],
                                                                name: {
                                                                    node: "SimpleName",
                                                                    identifier: "hello"
                                                                },
                                                                arguments: [
                                                                    {
                                                                        node: "SimpleName",
                                                                        identifier: "ex"
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        ],
                                        finally: null
                                    },
                                    {
                                        node: "TryStatement",
                                        resources: [
                                            {
                                                node: "VariableDeclarationExpression",
                                                modifiers: [
                                                    {
                                                        node: "Modifier",
                                                        keyword: "final"
                                                    }
                                                ],
                                                type: {
                                                    node: "SimpleType",
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "BufferedReader"
                                                    }
                                                },
                                                fragments: [
                                                    {
                                                        node: "VariableDeclarationFragment",
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "br"
                                                        },
                                                        extraDimensions: 0,
                                                        initializer: {
                                                            node: "ClassInstanceCreation",
                                                            expression: null,
                                                            typeArguments: [],
                                                            type: {
                                                                node: "SimpleType",
                                                                name: {
                                                                    node: "SimpleName",
                                                                    identifier: "BufferedReader"
                                                                }
                                                            },
                                                            arguments: [
                                                                {
                                                                    node: "ClassInstanceCreation",
                                                                    expression: null,
                                                                    typeArguments: [],
                                                                    type: {
                                                                        node: "SimpleType",
                                                                        name: {
                                                                            node: "SimpleName",
                                                                            identifier: "FileReader"
                                                                        }
                                                                    },
                                                                    arguments: [
                                                                        {
                                                                            node: "SimpleName",
                                                                            identifier: "path"
                                                                        }
                                                                    ],
                                                                    anonymousClassDeclaration: null
                                                                }
                                                            ],
                                                            anonymousClassDeclaration: null
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        body: {
                                            node: "Block",
                                            statements: [
                                                {
                                                    node: "ReturnStatement",
                                                    expression: {
                                                        node: "MethodInvocation",
                                                        expression: {
                                                            node: "SimpleName",
                                                            identifier: "br"
                                                        },
                                                        typeArguments: [],
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "readLine"
                                                        },
                                                        arguments: []
                                                    }
                                                }
                                            ]
                                        },
                                        catchClauses: [],
                                        finally: {
                                            node: "Block",
                                            statements: [
                                                {
                                                    node: "ExpressionStatement",
                                                    expression: {
                                                        node: "MethodInvocation",
                                                        expression: null,
                                                        typeArguments: [],
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "hello"
                                                        },
                                                        arguments: []
                                                    }
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        node: "TryStatement",
                                        resources: [
                                            {
                                                node: "VariableDeclarationExpression",
                                                modifiers: [
                                                    {
                                                        node: "Modifier",
                                                        keyword: "final"
                                                    }
                                                ],
                                                type: {
                                                    node: "SimpleType",
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "BufferedReader"
                                                    }
                                                },
                                                fragments: [
                                                    {
                                                        node: "VariableDeclarationFragment",
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "br"
                                                        },
                                                        extraDimensions: 0,
                                                        initializer: {
                                                            node: "ClassInstanceCreation",
                                                            expression: null,
                                                            typeArguments: [],
                                                            type: {
                                                                node: "SimpleType",
                                                                name: {
                                                                    node: "SimpleName",
                                                                    identifier: "BufferedReader"
                                                                }
                                                            },
                                                            arguments: [
                                                                {
                                                                    node: "ClassInstanceCreation",
                                                                    expression: null,
                                                                    typeArguments: [],
                                                                    type: {
                                                                        node: "SimpleType",
                                                                        name: {
                                                                            node: "SimpleName",
                                                                            identifier: "FileReader"
                                                                        }
                                                                    },
                                                                    arguments: [
                                                                        {
                                                                            node: "SimpleName",
                                                                            identifier: "path"
                                                                        }
                                                                    ],
                                                                    anonymousClassDeclaration: null
                                                                }
                                                            ],
                                                            anonymousClassDeclaration: null
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        body: {
                                            node: "Block",
                                            statements: [
                                                {
                                                    node: "ReturnStatement",
                                                    expression: {
                                                        node: "MethodInvocation",
                                                        expression: {
                                                            node: "SimpleName",
                                                            identifier: "br"
                                                        },
                                                        typeArguments: [],
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "readLine"
                                                        },
                                                        arguments: []
                                                    }
                                                }
                                            ]
                                        },
                                        catchClauses: [
                                            {
                                                node: "CatchClause",
                                                exception: {
                                                    node: "SingleVariableDeclaration",
                                                    modifiers: [],
                                                    type: {
                                                        node: "UnionType",
                                                        types: [
                                                            {
                                                                node: "SimpleType",
                                                                name: {
                                                                    node: "SimpleName",
                                                                    identifier: "Hello"
                                                                }
                                                            },
                                                            {
                                                                node: "SimpleType",
                                                                name: {
                                                                    node: "SimpleName",
                                                                    identifier: "World"
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    varargs: false,
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "ex"
                                                    },
                                                    extraDimensions: 0,
                                                    initializer: null
                                                },
                                                body: {
                                                    node: "Block",
                                                    statements: [
                                                        {
                                                            node: "ExpressionStatement",
                                                            expression: {
                                                                node: "MethodInvocation",
                                                                expression: {
                                                                    node: "SimpleName",
                                                                    identifier: "hello"
                                                                },
                                                                typeArguments: [],
                                                                name: {
                                                                    node: "SimpleName",
                                                                    identifier: "world"
                                                                },
                                                                arguments: []
                                                            }
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                node: "CatchClause",
                                                exception: {
                                                    node: "SingleVariableDeclaration",
                                                    modifiers: [],
                                                    type: {
                                                        node: "SimpleType",
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "Exception"
                                                        }
                                                    },
                                                    varargs: false,
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "ex"
                                                    },
                                                    extraDimensions: 0,
                                                    initializer: null
                                                },
                                                body: {
                                                    node: "Block",
                                                    statements: [
                                                        {
                                                            node: "ExpressionStatement",
                                                            expression: {
                                                                node: "MethodInvocation",
                                                                expression: null,
                                                                typeArguments: [],
                                                                name: {
                                                                    node: "SimpleName",
                                                                    identifier: "hello"
                                                                },
                                                                arguments: [
                                                                    {
                                                                        node: "SimpleName",
                                                                        identifier: "ex"
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        ],
                                        finally: {
                                            node: "Block",
                                            statements: [
                                                {
                                                    node: "ExpressionStatement",
                                                    expression: {
                                                        node: "MethodInvocation",
                                                        expression: null,
                                                        typeArguments: [],
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "hello"
                                                        },
                                                        arguments: []
                                                    }
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        node: "TryStatement",
                                        resources: [
                                            {
                                                node: "VariableDeclarationExpression",
                                                modifiers: [
                                                    {
                                                        node: "Modifier",
                                                        keyword: "final"
                                                    },
                                                    {
                                                        node: "MarkerAnnotation",
                                                        typeName: {
                                                            node: "SimpleName",
                                                            identifier: "ann"
                                                        }
                                                    }
                                                ],
                                                type: {
                                                    node: "SimpleType",
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "BufferedReader"
                                                    }
                                                },
                                                fragments: [
                                                    {
                                                        node: "VariableDeclarationFragment",
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "br"
                                                        },
                                                        extraDimensions: 0,
                                                        initializer: {
                                                            node: "ClassInstanceCreation",
                                                            expression: null,
                                                            typeArguments: [],
                                                            type: {
                                                                node: "SimpleType",
                                                                name: {
                                                                    node: "SimpleName",
                                                                    identifier: "BufferedReader"
                                                                }
                                                            },
                                                            arguments: [
                                                                {
                                                                    node: "ClassInstanceCreation",
                                                                    expression: null,
                                                                    typeArguments: [],
                                                                    type: {
                                                                        node: "SimpleType",
                                                                        name: {
                                                                            node: "SimpleName",
                                                                            identifier: "FileReader"
                                                                        }
                                                                    },
                                                                    arguments: [
                                                                        {
                                                                            node: "SimpleName",
                                                                            identifier: "path"
                                                                        }
                                                                    ],
                                                                    anonymousClassDeclaration: null
                                                                }
                                                            ],
                                                            anonymousClassDeclaration: null
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        body: {
                                            node: "Block",
                                            statements: [
                                                {
                                                    node: "ReturnStatement",
                                                    expression: {
                                                        node: "MethodInvocation",
                                                        expression: {
                                                            node: "SimpleName",
                                                            identifier: "br"
                                                        },
                                                        typeArguments: [],
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "readLine"
                                                        },
                                                        arguments: []
                                                    }
                                                }
                                            ]
                                        },
                                        catchClauses: [],
                                        finally: null
                                    },
                                    {
                                        node: "TryStatement",
                                        resources: [
                                            {
                                                node: "VariableDeclarationExpression",
                                                modifiers: [],
                                                type: {
                                                    node: "SimpleType",
                                                    name: {
                                                        node: "QualifiedName",
                                                        qualifier: {
                                                            node: "QualifiedName",
                                                            qualifier: {
                                                                node: "QualifiedName",
                                                                qualifier: {
                                                                    node: "SimpleName",
                                                                    identifier: "java"
                                                                },
                                                                name: {
                                                                    node: "SimpleName",
                                                                    identifier: "util"
                                                                }
                                                            },
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "zip"
                                                            }
                                                        },
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "ZipFile"
                                                        }
                                                    }
                                                },
                                                fragments: [
                                                    {
                                                        node: "VariableDeclarationFragment",
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "zf"
                                                        },
                                                        extraDimensions: 0,
                                                        initializer: {
                                                            node: "ClassInstanceCreation",
                                                            expression: null,
                                                            typeArguments: [],
                                                            type: {
                                                                node: "SimpleType",
                                                                name: {
                                                                    node: "QualifiedName",
                                                                    qualifier: {
                                                                        node: "QualifiedName",
                                                                        qualifier: {
                                                                            node: "QualifiedName",
                                                                            qualifier: {
                                                                                node: "SimpleName",
                                                                                identifier: "java"
                                                                            },
                                                                            name: {
                                                                                node: "SimpleName",
                                                                                identifier: "util"
                                                                            }
                                                                        },
                                                                        name: {
                                                                            node: "SimpleName",
                                                                            identifier: "zip"
                                                                        }
                                                                    },
                                                                    name: {
                                                                        node: "SimpleName",
                                                                        identifier: "ZipFile"
                                                                    }
                                                                }
                                                            },
                                                            arguments: [
                                                                {
                                                                    node: "SimpleName",
                                                                    identifier: "zipFileName"
                                                                }
                                                            ],
                                                            anonymousClassDeclaration: null
                                                        }
                                                    }
                                                ]
                                            },
                                            {
                                                node: "VariableDeclarationExpression",
                                                modifiers: [
                                                    {
                                                        node: "Modifier",
                                                        keyword: "final"
                                                    }
                                                ],
                                                type: {
                                                    node: "SimpleType",
                                                    name: {
                                                        node: "QualifiedName",
                                                        qualifier: {
                                                            node: "QualifiedName",
                                                            qualifier: {
                                                                node: "SimpleName",
                                                                identifier: "java"
                                                            },
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "io"
                                                            }
                                                        },
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "BufferedWriter"
                                                        }
                                                    }
                                                },
                                                fragments: [
                                                    {
                                                        node: "VariableDeclarationFragment",
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "writer"
                                                        },
                                                        extraDimensions: 0,
                                                        initializer: {
                                                            node: "MethodInvocation",
                                                            expression: {
                                                                node: "QualifiedName",
                                                                qualifier: {
                                                                    node: "QualifiedName",
                                                                    qualifier: {
                                                                        node: "QualifiedName",
                                                                        qualifier: {
                                                                            node: "SimpleName",
                                                                            identifier: "java"
                                                                        },
                                                                        name: {
                                                                            node: "SimpleName",
                                                                            identifier: "nio"
                                                                        }
                                                                    },
                                                                    name: {
                                                                        node: "SimpleName",
                                                                        identifier: "file"
                                                                    }
                                                                },
                                                                name: {
                                                                    node: "SimpleName",
                                                                    identifier: "Files"
                                                                }
                                                            },
                                                            typeArguments: [],
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "newBufferedWriter"
                                                            },
                                                            arguments: [
                                                                {
                                                                    node: "SimpleName",
                                                                    identifier: "outputFilePath"
                                                                },
                                                                {
                                                                    node: "SimpleName",
                                                                    identifier: "charset"
                                                                }
                                                            ]
                                                        }
                                                    }
                                                ]
                                            }
                                        ],
                                        body: {
                                            node: "Block",
                                            statements: [
                                                {
                                                    node: "ForStatement",
                                                    initializers: [
                                                        {
                                                            node: "VariableDeclarationExpression",
                                                            modifiers: [],
                                                            type: {
                                                                node: "SimpleType",
                                                                name: {
                                                                    node: "QualifiedName",
                                                                    qualifier: {
                                                                        node: "QualifiedName",
                                                                        qualifier: {
                                                                            node: "SimpleName",
                                                                            identifier: "java"
                                                                        },
                                                                        name: {
                                                                            node: "SimpleName",
                                                                            identifier: "util"
                                                                        }
                                                                    },
                                                                    name: {
                                                                        node: "SimpleName",
                                                                        identifier: "Enumeration"
                                                                    }
                                                                }
                                                            },
                                                            fragments: [
                                                                {
                                                                    node: "VariableDeclarationFragment",
                                                                    name: {
                                                                        node: "SimpleName",
                                                                        identifier: "entries"
                                                                    },
                                                                    extraDimensions: 0,
                                                                    initializer: {
                                                                        node: "MethodInvocation",
                                                                        expression: {
                                                                            node: "SimpleName",
                                                                            identifier: "zf"
                                                                        },
                                                                        typeArguments: [],
                                                                        name: {
                                                                            node: "SimpleName",
                                                                            identifier: "entries"
                                                                        },
                                                                        arguments: []
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    ],
                                                    expression: {
                                                        node: "MethodInvocation",
                                                        expression: {
                                                            node: "SimpleName",
                                                            identifier: "entries"
                                                        },
                                                        typeArguments: [],
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "hasMoreElements"
                                                        },
                                                        arguments: []
                                                    },
                                                    updaters: [],
                                                    body: {
                                                        node: "Block",
                                                        statements: [
                                                            {
                                                                node: "VariableDeclarationStatement",
                                                                modifiers: [],
                                                                type: {
                                                                    node: "SimpleType",
                                                                    name: {
                                                                        node: "SimpleName",
                                                                        identifier: "String"
                                                                    }
                                                                },
                                                                fragments: [
                                                                    {
                                                                        node: "VariableDeclarationFragment",
                                                                        name: {
                                                                            node: "SimpleName",
                                                                            identifier: "newLine"
                                                                        },
                                                                        extraDimensions: 0,
                                                                        initializer: {
                                                                            node: "MethodInvocation",
                                                                            expression: {
                                                                                node: "SimpleName",
                                                                                identifier: "System"
                                                                            },
                                                                            typeArguments: [],
                                                                            name: {
                                                                                node: "SimpleName",
                                                                                identifier: "getProperty"
                                                                            },
                                                                            arguments: [
                                                                                {
                                                                                    node: "StringLiteral",
                                                                                    escapedValue: "\"line.separator\""
                                                                                }
                                                                            ]
                                                                        }
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                node: "VariableDeclarationStatement",
                                                                modifiers: [],
                                                                type: {
                                                                    node: "SimpleType",
                                                                    name: {
                                                                        node: "SimpleName",
                                                                        identifier: "String"
                                                                    }
                                                                },
                                                                fragments: [
                                                                    {
                                                                        node: "VariableDeclarationFragment",
                                                                        name: {
                                                                            node: "SimpleName",
                                                                            identifier: "zipEntryName"
                                                                        },
                                                                        extraDimensions: 0,
                                                                        initializer: {
                                                                            node: "InfixExpression",
                                                                            leftOperand: {
                                                                                node: "MethodInvocation",
                                                                                expression: {
                                                                                    node: "ParenthesizedExpression",
                                                                                    expression: {
                                                                                        node: "CastExpression",
                                                                                        type: {
                                                                                            node: "SimpleType",
                                                                                            name: {
                                                                                                node: "QualifiedName",
                                                                                                qualifier: {
                                                                                                    node: "QualifiedName",
                                                                                                    qualifier: {
                                                                                                        node: "QualifiedName",
                                                                                                        qualifier: {
                                                                                                            node: "SimpleName",
                                                                                                            identifier: "java"
                                                                                                        },
                                                                                                        name: {
                                                                                                            node: "SimpleName",
                                                                                                            identifier: "util"
                                                                                                        }
                                                                                                    },
                                                                                                    name: {
                                                                                                        node: "SimpleName",
                                                                                                        identifier: "zip"
                                                                                                    }
                                                                                                },
                                                                                                name: {
                                                                                                    node: "SimpleName",
                                                                                                    identifier: "ZipEntry"
                                                                                                }
                                                                                            }
                                                                                        },
                                                                                        expression: {
                                                                                            node: "MethodInvocation",
                                                                                            expression: {
                                                                                                node: "SimpleName",
                                                                                                identifier: "entries"
                                                                                            },
                                                                                            typeArguments: [],
                                                                                            name: {
                                                                                                node: "SimpleName",
                                                                                                identifier: "nextElement"
                                                                                            },
                                                                                            arguments: []
                                                                                        }
                                                                                    }
                                                                                },
                                                                                typeArguments: [],
                                                                                name: {
                                                                                    node: "SimpleName",
                                                                                    identifier: "getName"
                                                                                },
                                                                                arguments: []
                                                                            },
                                                                            operator: "+",
                                                                            rightOperand: {
                                                                                node: "SimpleName",
                                                                                identifier: "newLine"
                                                                            },
                                                                        }
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                node: "ExpressionStatement",
                                                                expression: {
                                                                    node: "MethodInvocation",
                                                                    expression: {
                                                                        node: "SimpleName",
                                                                        identifier: "writer"
                                                                    },
                                                                    typeArguments: [],
                                                                    name: {
                                                                        node: "SimpleName",
                                                                        identifier: "write"
                                                                    },
                                                                    arguments: [
                                                                        {
                                                                            node: "SimpleName",
                                                                            identifier: "zipEntryName"
                                                                        },
                                                                        {
                                                                            node: "NumberLiteral",
                                                                            token: "0"
                                                                        },
                                                                        {
                                                                            node: "MethodInvocation",
                                                                            expression: {
                                                                                node: "SimpleName",
                                                                                identifier: "zipEntryName"
                                                                            },
                                                                            typeArguments: [],
                                                                            name: {
                                                                                node: "SimpleName",
                                                                                identifier: "length"
                                                                            },
                                                                            arguments: []
                                                                        }
                                                                    ]
                                                                }
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        },
                                        catchClauses: [],
                                        finally: null
                                    }
                                ]
                            }
                        }
                    ]
                }
            ]
        }
      );
    });

    test("try switch break continue return statements", function(assert) {
      var src = multiline(function(){/*
        public class Test {
          public static void main(String[] args) {
            switch(x){

            }

            switch(y){
              default:
                hello();
            }


            switch(y){
              case 42:{
                hello();
              }
            }

            switch(z){
              case 0:
                break A;
              case 1:
                world();
              case 4:
              case 42:
                hello();
                break;
              case -1:
                {
                  return 42;
                }
              case -42:
                continue A;
              case 99:
              {
                hello();
              }
              {
                continue;
              }
              case 123:
                return;
              default:
                hello();
            }
          }
        }
      */});
      assert.deepEqual(
        JavaParser.parse(src)
        ,
        {
            node: "CompilationUnit",
            package: null,
            imports: [],
            types: [
                {
                    node: "TypeDeclaration",
                    modifiers: [
                        {
                            node: "Modifier",
                            keyword: "public"
                        }
                    ],
                    interface: false,
                    name: {
                        node: "SimpleName",
                        identifier: "Test"
                    },
                    typeParameters: [],
                    superclassType: null,
                    superInterfaceTypes: [],
                    bodyDeclarations: [
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "public"
                                },
                                {
                                    node: "Modifier",
                                    keyword: "static"
                                }
                            ],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "void"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "main"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "ArrayType",
                                        componentType: {
                                            node: "SimpleType",
                                            name: {
                                                node: "SimpleName",
                                                identifier: "String"
                                            }
                                        }
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "args"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: {
                                node: "Block",
                                statements: [
                                    {
                                        node: "SwitchStatement",
                                        expression: {
                                            node: "SimpleName",
                                            identifier: "x"
                                        },
                                        statements: []
                                    },
                                    {
                                        node: "SwitchStatement",
                                        expression: {
                                            node: "SimpleName",
                                            identifier: "y"
                                        },
                                        statements: [
                                            {
                                                node: "SwitchCase",
                                                expression: null
                                            },
                                            {
                                                node: "ExpressionStatement",
                                                expression: {
                                                    node: "MethodInvocation",
                                                    expression: null,
                                                    typeArguments: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "hello"
                                                    },
                                                    arguments: []
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        node: "SwitchStatement",
                                        expression: {
                                            node: "SimpleName",
                                            identifier: "y"
                                        },
                                        statements: [
                                            {
                                                node: "SwitchCase",
                                                expression: {
                                                    node: "NumberLiteral",
                                                    token: "42"
                                                }
                                            },
                                            {
                                                node: "Block",
                                                statements: [
                                                    {
                                                        node: "ExpressionStatement",
                                                        expression: {
                                                            node: "MethodInvocation",
                                                            expression: null,
                                                            typeArguments: [],
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "hello"
                                                            },
                                                            arguments: []
                                                        }
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        node: "SwitchStatement",
                                        expression: {
                                            node: "SimpleName",
                                            identifier: "z"
                                        },
                                        statements: [
                                            {
                                                node: "SwitchCase",
                                                expression: {
                                                    node: "NumberLiteral",
                                                    token: "0"
                                                }
                                            },
                                            {
                                                node: "BreakStatement",
                                                label: {
                                                    node: "SimpleName",
                                                    identifier: "A"
                                                }
                                            },
                                            {
                                                node: "SwitchCase",
                                                expression: {
                                                    node: "NumberLiteral",
                                                    token: "1"
                                                }
                                            },
                                            {
                                                node: "ExpressionStatement",
                                                expression: {
                                                    node: "MethodInvocation",
                                                    expression: null,
                                                    typeArguments: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "world"
                                                    },
                                                    arguments: []
                                                }
                                            },
                                            {
                                                node: "SwitchCase",
                                                expression: {
                                                    node: "NumberLiteral",
                                                    token: "4"
                                                }
                                            },
                                            {
                                                node: "SwitchCase",
                                                expression: {
                                                    node: "NumberLiteral",
                                                    token: "42"
                                                }
                                            },
                                            {
                                                node: "ExpressionStatement",
                                                expression: {
                                                    node: "MethodInvocation",
                                                    expression: null,
                                                    typeArguments: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "hello"
                                                    },
                                                    arguments: []
                                                }
                                            },
                                            {
                                                node: "BreakStatement",
                                                label: null
                                            },
                                            {
                                                node: "SwitchCase",
                                                expression: {
                                                    node: "PrefixExpression",
                                                    operator: "-",
                                                    operand: {
                                                        node: "NumberLiteral",
                                                        token: "1"
                                                    }
                                                }
                                            },
                                            {
                                                node: "Block",
                                                statements: [
                                                    {
                                                        node: "ReturnStatement",
                                                        expression: {
                                                            node: "NumberLiteral",
                                                            token: "42"
                                                        }
                                                    }
                                                ]
                                            },
                                            {
                                                node: "SwitchCase",
                                                expression: {
                                                    node: "PrefixExpression",
                                                    operator: "-",
                                                    operand: {
                                                        node: "NumberLiteral",
                                                        token: "42"
                                                    }
                                                }
                                            },
                                            {
                                                node: "ContinueStatement",
                                                label: {
                                                    node: "SimpleName",
                                                    identifier: "A"
                                                }
                                            },
                                            {
                                                node: "SwitchCase",
                                                expression: {
                                                    node: "NumberLiteral",
                                                    token: "99"
                                                }
                                            },
                                            {
                                                node: "Block",
                                                statements: [
                                                    {
                                                        node: "ExpressionStatement",
                                                        expression: {
                                                            node: "MethodInvocation",
                                                            expression: null,
                                                            typeArguments: [],
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "hello"
                                                            },
                                                            arguments: []
                                                        }
                                                    }
                                                ]
                                            },
                                            {
                                                node: "Block",
                                                statements: [
                                                    {
                                                        node: "ContinueStatement",
                                                        label: null
                                                    }
                                                ]
                                            },
                                            {
                                                node: "SwitchCase",
                                                expression: {
                                                    node: "NumberLiteral",
                                                    token: "123"
                                                }
                                            },
                                            {
                                                node: "ReturnStatement",
                                                expression: null
                                            },
                                            {
                                                node: "SwitchCase",
                                                expression: null
                                            },
                                            {
                                                node: "ExpressionStatement",
                                                expression: {
                                                    node: "MethodInvocation",
                                                    expression: null,
                                                    typeArguments: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "hello"
                                                    },
                                                    arguments: []
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }
                        }
                    ]
                }
            ]
        }

      );
    });

    test("synchronized statements", function(assert) {
      var src = multiline(function(){/*
        class Test {
          public static synchronized void main(String[] args) {
            synchronized(org.Test.class) {
              System.out.println("hello");
            }

            synchronized(Test.class) {
              System.out.println("hello");
            }

            synchronized(Test.this) {
              System.out.println("hello");
            }

            synchronized(org.Test.this) {
              System.out.println("hello");
            }

            Test t = new Test();
            synchronized(t) {
              synchronized(t) {
                System.out.println("made it!");
              }
            }
          }
        }
      */});
      assert.deepEqual(
        JavaParser.parse(src)
        ,
        {
            node: "CompilationUnit",
            package: null,
            imports: [],
            types: [
                {
                    node: "TypeDeclaration",
                    modifiers: [],
                    interface: false,
                    name: {
                        node: "SimpleName",
                        identifier: "Test"
                    },
                    typeParameters: [],
                    superclassType: null,
                    superInterfaceTypes: [],
                    bodyDeclarations: [
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "public"
                                },
                                {
                                    node: "Modifier",
                                    keyword: "static"
                                },
                                {
                                    node: "Modifier",
                                    keyword: "synchronized"
                                }
                            ],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "void"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "main"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "ArrayType",
                                        componentType: {
                                            node: "SimpleType",
                                            name: {
                                                node: "SimpleName",
                                                identifier: "String"
                                            }
                                        }
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "args"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: {
                                node: "Block",
                                statements: [
                                    {
                                        node: "SynchronizedStatement",
                                        expression: {
                                            node: "TypeLiteral",
                                            type: {
                                                node: "SimpleType",
                                                name: {
                                                    node: "QualifiedName",
                                                    qualifier: {
                                                        node: "SimpleName",
                                                        identifier: "org"
                                                    },
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "Test"
                                                    }
                                                }
                                            }
                                        },
                                        body: {
                                            node: "Block",
                                            statements: [
                                                {
                                                    node: "ExpressionStatement",
                                                    expression: {
                                                        node: "MethodInvocation",
                                                        expression: {
                                                            node: "QualifiedName",
                                                            qualifier: {
                                                                node: "SimpleName",
                                                                identifier: "System"
                                                            },
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "out"
                                                            }
                                                        },
                                                        typeArguments: [],
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "println"
                                                        },
                                                        arguments: [
                                                            {
                                                                node: "StringLiteral",
                                                                escapedValue: "\"hello\""
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        node: "SynchronizedStatement",
                                        expression: {
                                            node: "TypeLiteral",
                                            type: {
                                                node: "SimpleType",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "Test"
                                                }
                                            }
                                        },
                                        body: {
                                            node: "Block",
                                            statements: [
                                                {
                                                    node: "ExpressionStatement",
                                                    expression: {
                                                        node: "MethodInvocation",
                                                        expression: {
                                                            node: "QualifiedName",
                                                            qualifier: {
                                                                node: "SimpleName",
                                                                identifier: "System"
                                                            },
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "out"
                                                            }
                                                        },
                                                        typeArguments: [],
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "println"
                                                        },
                                                        arguments: [
                                                            {
                                                                node: "StringLiteral",
                                                                escapedValue: "\"hello\""
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        node: "SynchronizedStatement",
                                        expression: {
                                            node: "ThisExpression",
                                            qualifier: {
                                                node: "SimpleName",
                                                identifier: "Test"
                                            }
                                        },
                                        body: {
                                            node: "Block",
                                            statements: [
                                                {
                                                    node: "ExpressionStatement",
                                                    expression: {
                                                        node: "MethodInvocation",
                                                        expression: {
                                                            node: "QualifiedName",
                                                            qualifier: {
                                                                node: "SimpleName",
                                                                identifier: "System"
                                                            },
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "out"
                                                            }
                                                        },
                                                        typeArguments: [],
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "println"
                                                        },
                                                        arguments: [
                                                            {
                                                                node: "StringLiteral",
                                                                escapedValue: "\"hello\""
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        node: "SynchronizedStatement",
                                        expression: {
                                            node: "ThisExpression",
                                            qualifier: {
                                                node: "QualifiedName",
                                                qualifier: {
                                                    node: "SimpleName",
                                                    identifier: "org"
                                                },
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "Test"
                                                }
                                            }
                                        },
                                        body: {
                                            node: "Block",
                                            statements: [
                                                {
                                                    node: "ExpressionStatement",
                                                    expression: {
                                                        node: "MethodInvocation",
                                                        expression: {
                                                            node: "QualifiedName",
                                                            qualifier: {
                                                                node: "SimpleName",
                                                                identifier: "System"
                                                            },
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "out"
                                                            }
                                                        },
                                                        typeArguments: [],
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "println"
                                                        },
                                                        arguments: [
                                                            {
                                                                node: "StringLiteral",
                                                                escapedValue: "\"hello\""
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "SimpleType",
                                            name: {
                                                node: "SimpleName",
                                                identifier: "Test"
                                            }
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "t"
                                                },
                                                extraDimensions: 0,
                                                initializer: {
                                                    node: "ClassInstanceCreation",
                                                    expression: null,
                                                    typeArguments: [],
                                                    type: {
                                                        node: "SimpleType",
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "Test"
                                                        }
                                                    },
                                                    arguments: [],
                                                    anonymousClassDeclaration: null
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        node: "SynchronizedStatement",
                                        expression: {
                                            node: "SimpleName",
                                            identifier: "t"
                                        },
                                        body: {
                                            node: "Block",
                                            statements: [
                                                {
                                                    node: "SynchronizedStatement",
                                                    expression: {
                                                        node: "SimpleName",
                                                        identifier: "t"
                                                    },
                                                    body: {
                                                        node: "Block",
                                                        statements: [
                                                            {
                                                                node: "ExpressionStatement",
                                                                expression: {
                                                                    node: "MethodInvocation",
                                                                    expression: {
                                                                        node: "QualifiedName",
                                                                        qualifier: {
                                                                            node: "SimpleName",
                                                                            identifier: "System"
                                                                        },
                                                                        name: {
                                                                            node: "SimpleName",
                                                                            identifier: "out"
                                                                        }
                                                                    },
                                                                    typeArguments: [],
                                                                    name: {
                                                                        node: "SimpleName",
                                                                        identifier: "println"
                                                                    },
                                                                    arguments: [
                                                                        {
                                                                            node: "StringLiteral",
                                                                            escapedValue: "\"made it!\""
                                                                        }
                                                                    ]
                                                                }
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            ]
        }
      );
    });

