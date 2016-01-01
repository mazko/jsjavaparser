
    test("interface nested", function(assert) {
      var src = multiline(function(){/*
        interface Map {
            interface Entry {
                int getKey();
            }
        }
      */});
      assert.deepEqual(
        JavaParser.parse(src)
        ,
        {
            node: "CompilationUnit",
            package: null,
            imports: [

            ],
            types: [
                {
                    node: "TypeDeclaration",
                    modifiers: [

                    ],
                    interface: true,
                    name: {
                        node: "SimpleName",
                        identifier: "Map"
                    },
                    typeParameters: [

                    ],
                    superclassType: null,
                    superInterfaceTypes: [

                    ],
                    bodyDeclarations: [
                        {
                            node: "TypeDeclaration",
                            modifiers: [

                            ],
                            interface: true,
                            name: {
                                node: "SimpleName",
                                identifier: "Entry"
                            },
                            typeParameters: [

                            ],
                            superclassType: null,
                            superInterfaceTypes: [

                            ],
                            bodyDeclarations: [
                                {
                                    node: "MethodDeclaration",
                                    modifiers: [

                                    ],
                                    constructor: false,
                                    typeParameters: [

                                    ],
                                    returnType2: {
                                        node: "PrimitiveType",
                                        primitiveTypeCode: "int"
                                    },
                                    name: {
                                        node: "SimpleName",
                                        identifier: "getKey"
                                    },
                                    parameters: [

                                    ],
                                    extraDimensions: 0,
                                    thrownExceptions: [

                                    ],
                                    body: null
                                }
                            ]
                        }
                    ]
                }
            ]
        }
      );
    });

    test("interface const member", function(assert) {
      var src = multiline(function(){/*
        interface Test {
            int RED = 1, GREEN = 2, BLUE = 4;
            float f = j;
            int   j = 1;
            int   k = k + 1;
            ;
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
                    interface: true,
                    name: {
                        node: "SimpleName",
                        identifier: "Test"
                    },
                    typeParameters: [],
                    superclassType: null,
                    superInterfaceTypes: [],
                    bodyDeclarations: [
                        {
                            node: "FieldDeclaration",
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
                                        identifier: "RED"
                                    },
                                    extraDimensions: 0,
                                    initializer: {
                                        node: "NumberLiteral",
                                        token: "1"
                                    }
                                },
                                {
                                    node: "VariableDeclarationFragment",
                                    name: {
                                        node: "SimpleName",
                                        identifier: "GREEN"
                                    },
                                    extraDimensions: 0,
                                    initializer: {
                                        node: "NumberLiteral",
                                        token: "2"
                                    }
                                },
                                {
                                    node: "VariableDeclarationFragment",
                                    name: {
                                        node: "SimpleName",
                                        identifier: "BLUE"
                                    },
                                    extraDimensions: 0,
                                    initializer: {
                                        node: "NumberLiteral",
                                        token: "4"
                                    }
                                }
                            ]
                        },
                        {
                            node: "FieldDeclaration",
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
                                        identifier: "f"
                                    },
                                    extraDimensions: 0,
                                    initializer: {
                                        node: "SimpleName",
                                        identifier: "j"
                                    }
                                }
                            ]
                        },
                        {
                            node: "FieldDeclaration",
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
                                        identifier: "j"
                                    },
                                    extraDimensions: 0,
                                    initializer: {
                                        node: "NumberLiteral",
                                        token: "1"
                                    }
                                }
                            ]
                        },
                        {
                            node: "FieldDeclaration",
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
                                        identifier: "k"
                                    },
                                    extraDimensions: 0,
                                    initializer: {
                                        node: "InfixExpression",
                                        leftOperand: {
                                            node: "SimpleName",
                                            identifier: "k"
                                        },
                                        operator: "+",
                                        rightOperand: {
                                            node: "NumberLiteral",
                                            token: "1"
                                        },
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

    test("interface const member ws dims", function(assert) {
      var src = multiline(function(){/*
        interface Test {
            Object[][] n[][][] = 42;
       }
      */});
      assert.deepEqual(
        JavaParser.parse(src)
        ,
        {
            node: "CompilationUnit",
            package: null,
            imports: [

            ],
            types: [
                {
                    node: "TypeDeclaration",
                    modifiers: [

                    ],
                    interface: true,
                    name: {
                        node: "SimpleName",
                        identifier: "Test"
                    },
                    typeParameters: [

                    ],
                    superclassType: null,
                    superInterfaceTypes: [

                    ],
                    bodyDeclarations: [
                        {
                            node: "FieldDeclaration",
                            modifiers: [

                            ],
                            type: {
                                node: "ArrayType",
                                componentType: {
                                    node: "ArrayType",
                                    componentType: {
                                        node: "SimpleType",
                                        name: {
                                            node: "SimpleName",
                                            identifier: "Object"
                                        }
                                    }
                                }
                            },
                            fragments: [
                                {
                                    node: "VariableDeclarationFragment",
                                    name: {
                                        node: "SimpleName",
                                        identifier: "n"
                                    },
                                    extraDimensions: 3,
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
      );
    });

    test("interface funct member", function(assert) {
      var src = multiline(function(){/*
        interface Test {
            void hello();
            int world(int a);
            ;
       }
      */});
      assert.deepEqual(
        JavaParser.parse(src)
        ,
        {
            node: "CompilationUnit",
            package: null,
            imports: [

            ],
            types: [
                {
                    node: "TypeDeclaration",
                    modifiers: [

                    ],
                    interface: true,
                    name: {
                        node: "SimpleName",
                        identifier: "Test"
                    },
                    typeParameters: [

                    ],
                    superclassType: null,
                    superInterfaceTypes: [

                    ],
                    bodyDeclarations: [
                        {
                            node: "MethodDeclaration",
                            modifiers: [

                            ],
                            constructor: false,
                            typeParameters: [

                            ],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "void"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "hello"
                            },
                            parameters: [

                            ],
                            extraDimensions: 0,
                            thrownExceptions: [

                            ],
                            body: null
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [

                            ],
                            constructor: false,
                            typeParameters: [

                            ],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "int"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "world"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [

                                    ],
                                    type: {
                                        node: "PrimitiveType",
                                        primitiveTypeCode: "int"
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "a"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [

                            ],
                            body: null
                        }
                    ]
                }
            ]
        }
      );
    });

    test("generic interface funct member", function(assert) {
      var src = multiline(function(){/*
        public interface Service<T,U> {
            T executeService(U... args) throws Exception;
        }
      */});
      assert.deepEqual(
        JavaParser.parse(src)
        ,
        {
            node: "CompilationUnit",
            package: null,
            imports: [

            ],
            types: [
                {
                    node: "TypeDeclaration",
                    modifiers: [
                        {
                            node: "Modifier",
                            keyword: "public"
                        }
                    ],
                    interface: true,
                    name: {
                        node: "SimpleName",
                        identifier: "Service"
                    },
                    typeParameters: [
                        {
                            node: "TypeParameter",
                            name: {
                                node: "SimpleName",
                                identifier: "T"
                            },
                            typeBounds: [

                            ]
                        },
                        {
                            node: "TypeParameter",
                            name: {
                                node: "SimpleName",
                                identifier: "U"
                            },
                            typeBounds: [

                            ]
                        }
                    ],
                    superclassType: null,
                    superInterfaceTypes: [

                    ],
                    bodyDeclarations: [
                        {
                            node: "MethodDeclaration",
                            modifiers: [

                            ],
                            constructor: false,
                            typeParameters: [

                            ],
                            returnType2: {
                                node: "SimpleType",
                                name: {
                                    node: "SimpleName",
                                    identifier: "T"
                                }
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "executeService"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [

                                    ],
                                    type: {
                                        node: "SimpleType",
                                        name: {
                                            node: "SimpleName",
                                            identifier: "U"
                                        }
                                    },
                                    varargs: true,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "args"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [
                                {
                                    node: "SimpleName",
                                    identifier: "Exception"
                                }
                            ],
                            body: null
                        }
                    ]
                }
            ]
        }
      );
    });

    test("generic interface funct member ws combined args", function(assert) {
      var src = multiline(function(){/*
        public interface Service<T,U> {
            T executeService(int a, U... args) throws Exception;
        }
      */});
      assert.deepEqual(
        JavaParser.parse(src)
        ,
        {
            node: "CompilationUnit",
            package: null,
            imports: [

            ],
            types: [
                {
                    node: "TypeDeclaration",
                    modifiers: [
                        {
                            node: "Modifier",
                            keyword: "public"
                        }
                    ],
                    interface: true,
                    name: {
                        node: "SimpleName",
                        identifier: "Service"
                    },
                    typeParameters: [
                        {
                            node: "TypeParameter",
                            name: {
                                node: "SimpleName",
                                identifier: "T"
                            },
                            typeBounds: [

                            ]
                        },
                        {
                            node: "TypeParameter",
                            name: {
                                node: "SimpleName",
                                identifier: "U"
                            },
                            typeBounds: [

                            ]
                        }
                    ],
                    superclassType: null,
                    superInterfaceTypes: [

                    ],
                    bodyDeclarations: [
                        {
                            node: "MethodDeclaration",
                            modifiers: [

                            ],
                            constructor: false,
                            typeParameters: [

                            ],
                            returnType2: {
                                node: "SimpleType",
                                name: {
                                    node: "SimpleName",
                                    identifier: "T"
                                }
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "executeService"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [

                                    ],
                                    type: {
                                        node: "PrimitiveType",
                                        primitiveTypeCode: "int"
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "a"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                },
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [

                                    ],
                                    type: {
                                        node: "SimpleType",
                                        name: {
                                            node: "SimpleName",
                                            identifier: "U"
                                        }
                                    },
                                    varargs: true,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "args"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [
                                {
                                    node: "SimpleName",
                                    identifier: "Exception"
                                }
                            ],
                            body: null
                        }
                    ]
                }
            ]
        }
      );
    });

    test("interface funct member annotation", function(assert) {
      var src = multiline(function(){/*
        interface Test {
            int world(@MyAnnotation(name = "test") int a);
       }
      */});
      assert.deepEqual(
        JavaParser.parse(src)
        ,
        {
            node: "CompilationUnit",
            package: null,
            imports: [

            ],
            types: [
                {
                    node: "TypeDeclaration",
                    modifiers: [

                    ],
                    interface: true,
                    name: {
                        node: "SimpleName",
                        identifier: "Test"
                    },
                    typeParameters: [

                    ],
                    superclassType: null,
                    superInterfaceTypes: [

                    ],
                    bodyDeclarations: [
                        {
                            node: "MethodDeclaration",
                            modifiers: [

                            ],
                            constructor: false,
                            typeParameters: [

                            ],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "int"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "world"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [
                                        {
                                            node: "NormalAnnotation",
                                            typeName: {
                                                node: "SimpleName",
                                                identifier: "MyAnnotation"
                                            },
                                            values: [
                                                {
                                                    node: "MemberValuePair",
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "name"
                                                    },
                                                    value: {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"test\""
                                                    }
                                                }
                                            ]
                                        }
                                    ],
                                    type: {
                                        node: "PrimitiveType",
                                        primitiveTypeCode: "int"
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "a"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [

                            ],
                            body: null
                        }
                    ]
                }
            ]
        }
      );
    });

    test("interface funct throws", function(assert) {
      var src = multiline(function(){/*
        interface Test {
            void hello();
            int world(int a)  throws A;
            void world(int a) throws A, B.C;
       }
      */});
      assert.deepEqual(
        JavaParser.parse(src)
        ,
        {
            node: "CompilationUnit",
            package: null,
            imports: [

            ],
            types: [
                {
                    node: "TypeDeclaration",
                    modifiers: [

                    ],
                    interface: true,
                    name: {
                        node: "SimpleName",
                        identifier: "Test"
                    },
                    typeParameters: [

                    ],
                    superclassType: null,
                    superInterfaceTypes: [

                    ],
                    bodyDeclarations: [
                        {
                            node: "MethodDeclaration",
                            modifiers: [

                            ],
                            constructor: false,
                            typeParameters: [

                            ],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "void"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "hello"
                            },
                            parameters: [

                            ],
                            extraDimensions: 0,
                            thrownExceptions: [

                            ],
                            body: null
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [

                            ],
                            constructor: false,
                            typeParameters: [

                            ],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "int"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "world"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [

                                    ],
                                    type: {
                                        node: "PrimitiveType",
                                        primitiveTypeCode: "int"
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "a"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [
                                {
                                    node: "SimpleName",
                                    identifier: "A"
                                }
                            ],
                            body: null
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [

                            ],
                            constructor: false,
                            typeParameters: [

                            ],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "void"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "world"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [

                                    ],
                                    type: {
                                        node: "PrimitiveType",
                                        primitiveTypeCode: "int"
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "a"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [
                                {
                                    node: "SimpleName",
                                    identifier: "A"
                                },
                                {
                                    node: "QualifiedName",
                                    qualifier: {
                                        node: "SimpleName",
                                        identifier: "B"
                                    },
                                    name: {
                                        node: "SimpleName",
                                        identifier: "C"
                                    }
                                }
                            ],
                            body: null
                        }
                    ]
                }
            ]
        }
      );
    });

    test("generic interface generic funct member ws return", function(assert) {
      var src = multiline(function(){/*
        public interface Service<T,U> {
            <F extends U> T executeService(Collection<?> c, @anno U... args) throws Exception;
        }
      */});
      assert.deepEqual(
        JavaParser.parse(src)
        ,
        {
            node: "CompilationUnit",
            package: null,
            imports: [

            ],
            types: [
                {
                    node: "TypeDeclaration",
                    modifiers: [
                        {
                            node: "Modifier",
                            keyword: "public"
                        }
                    ],
                    interface: true,
                    name: {
                        node: "SimpleName",
                        identifier: "Service"
                    },
                    typeParameters: [
                        {
                            node: "TypeParameter",
                            name: {
                                node: "SimpleName",
                                identifier: "T"
                            },
                            typeBounds: [

                            ]
                        },
                        {
                            node: "TypeParameter",
                            name: {
                                node: "SimpleName",
                                identifier: "U"
                            },
                            typeBounds: [

                            ]
                        }
                    ],
                    superclassType: null,
                    superInterfaceTypes: [

                    ],
                    bodyDeclarations: [
                        {
                            node: "MethodDeclaration",
                            modifiers: [

                            ],
                            constructor: false,
                            typeParameters: [
                                {
                                    node: "TypeParameter",
                                    name: {
                                        node: "SimpleName",
                                        identifier: "F"
                                    },
                                    typeBounds: [
                                        {
                                            node: "SimpleType",
                                            name: {
                                                node: "SimpleName",
                                                identifier: "U"
                                            }
                                        }
                                    ]
                                }
                            ],
                            returnType2: {
                                node: "SimpleType",
                                name: {
                                    node: "SimpleName",
                                    identifier: "T"
                                }
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "executeService"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [

                                    ],
                                    type: {
                                        node: "ParameterizedType",
                                        type: {
                                            node: "SimpleType",
                                            name: {
                                                node: "SimpleName",
                                                identifier: "Collection"
                                            }
                                        },
                                        typeArguments: [
                                            {
                                                node: "WildcardType",
                                                bound: null,
                                                upperBound: true
                                            }
                                        ]
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "c"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                },
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [
                                        {
                                            node: "MarkerAnnotation",
                                            typeName: {
                                                node: "SimpleName",
                                                identifier: "anno"
                                            }
                                        }
                                    ],
                                    type: {
                                        node: "SimpleType",
                                        name: {
                                            node: "SimpleName",
                                            identifier: "U"
                                        }
                                    },
                                    varargs: true,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "args"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [
                                {
                                    node: "SimpleName",
                                    identifier: "Exception"
                                }
                            ],
                            body: null
                        }
                    ]
                }
            ]
        }
      );
    });

    test("generic interface generic funct member", function(assert) {
      var src = multiline(function(){/*
        public interface Service {
            <F> void executeService();
        }
      */});
      assert.deepEqual(
        JavaParser.parse(src)
        ,
        {
            node: "CompilationUnit",
            package: null,
            imports: [

            ],
            types: [
                {
                    node: "TypeDeclaration",
                    modifiers: [
                        {
                            node: "Modifier",
                            keyword: "public"
                        }
                    ],
                    interface: true,
                    name: {
                        node: "SimpleName",
                        identifier: "Service"
                    },
                    typeParameters: [

                    ],
                    superclassType: null,
                    superInterfaceTypes: [

                    ],
                    bodyDeclarations: [
                        {
                            node: "MethodDeclaration",
                            modifiers: [

                            ],
                            constructor: false,
                            typeParameters: [
                                {
                                    node: "TypeParameter",
                                    name: {
                                        node: "SimpleName",
                                        identifier: "F"
                                    },
                                    typeBounds: [

                                    ]
                                }
                            ],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "void"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "executeService"
                            },
                            parameters: [

                            ],
                            extraDimensions: 0,
                            thrownExceptions: [

                            ],
                            body: null
                        }
                    ]
                }
            ]
        }
      );
    });

