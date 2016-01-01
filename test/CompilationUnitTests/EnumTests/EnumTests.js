
    test("empty enum", function(assert) {
      var src = "enum Test {}";
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
                    node: "EnumDeclaration",
                    modifiers: [

                    ],
                    name: {
                        node: "SimpleName",
                        identifier: "Test"
                    },
                    superInterfaceTypes: [

                    ],
                    enumConstants: [

                    ],
                    bodyDeclarations: [

                    ]
                }
            ]
        }
      );
    });

    test("empty enum implements", function(assert) {
      var src = "enum Color implements ITest<A> {}";
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
                    node: "EnumDeclaration",
                    modifiers: [

                    ],
                    name: {
                        node: "SimpleName",
                        identifier: "Color"
                    },
                    superInterfaceTypes: [
                        {
                            node: "ParameterizedType",
                            type: {
                                node: "SimpleType",
                                name: {
                                    node: "SimpleName",
                                    identifier: "ITest"
                                }
                            },
                            typeArguments: [
                                {
                                    node: "SimpleType",
                                    name: {
                                        node: "SimpleName",
                                        identifier: "A"
                                    }
                                }
                            ]
                        }
                    ],
                    enumConstants: [

                    ],
                    bodyDeclarations: [

                    ]
                }
            ]
        }
      );
    });

    test("empty enum ws body ws modifiers", function(assert) {
      var src = "public final enum Season { WINTER, SPRING, SUMMER,  FALL }";
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
                    node: "EnumDeclaration",
                    modifiers: [
                        {
                            node: "Modifier",
                            keyword: "public"
                        },
                        {
                            node: "Modifier",
                            keyword: "final"
                        }
                    ],
                    name: {
                        node: "SimpleName",
                        identifier: "Season"
                    },
                    superInterfaceTypes: [

                    ],
                    enumConstants: [
                        {
                            node: "EnumConstantDeclaration",
                            modifiers: [

                            ],
                            name: {
                                node: "SimpleName",
                                identifier: "WINTER"
                            },
                            arguments: [

                            ],
                            anonymousClassDeclaration: null
                        },
                        {
                            node: "EnumConstantDeclaration",
                            modifiers: [

                            ],
                            name: {
                                node: "SimpleName",
                                identifier: "SPRING"
                            },
                            arguments: [

                            ],
                            anonymousClassDeclaration: null
                        },
                        {
                            node: "EnumConstantDeclaration",
                            modifiers: [

                            ],
                            name: {
                                node: "SimpleName",
                                identifier: "SUMMER"
                            },
                            arguments: [

                            ],
                            anonymousClassDeclaration: null
                        },
                        {
                            node: "EnumConstantDeclaration",
                            modifiers: [

                            ],
                            name: {
                                node: "SimpleName",
                                identifier: "FALL"
                            },
                            arguments: [

                            ],
                            anonymousClassDeclaration: null
                        }
                    ],
                    bodyDeclarations: [

                    ]
                }
            ]
        }
      );
    });

    test("empty enum ws body ws members", function(assert) {
      var src = multiline(function(){/*
        enum Color {
            RED, GREEN, BLUE;
            private  int value;
            static Object obj[][];
            static Object[] test;
            Object[][] testdims[];
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
                    node: "EnumDeclaration",
                    modifiers: [

                    ],
                    name: {
                        node: "SimpleName",
                        identifier: "Color"
                    },
                    superInterfaceTypes: [

                    ],
                    enumConstants: [
                        {
                            node: "EnumConstantDeclaration",
                            modifiers: [

                            ],
                            name: {
                                node: "SimpleName",
                                identifier: "RED"
                            },
                            arguments: [

                            ],
                            anonymousClassDeclaration: null
                        },
                        {
                            node: "EnumConstantDeclaration",
                            modifiers: [

                            ],
                            name: {
                                node: "SimpleName",
                                identifier: "GREEN"
                            },
                            arguments: [

                            ],
                            anonymousClassDeclaration: null
                        },
                        {
                            node: "EnumConstantDeclaration",
                            modifiers: [

                            ],
                            name: {
                                node: "SimpleName",
                                identifier: "BLUE"
                            },
                            arguments: [

                            ],
                            anonymousClassDeclaration: null
                        }
                    ],
                    bodyDeclarations: [
                        {
                            node: "FieldDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "private"
                                }
                            ],
                            type: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "int"
                            },
                            fragments: [
                                {
                                    node: "VariableDeclarationFragment",
                                    name: {
                                        node: "SimpleName",
                                        identifier: "value"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ]
                        },
                        {
                            node: "FieldDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "static"
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
                                        identifier: "obj"
                                    },
                                    extraDimensions: 2,
                                    initializer: null
                                }
                            ]
                        },
                        {
                            node: "FieldDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "static"
                                }
                            ],
                            type: {
                                node: "ArrayType",
                                componentType: {
                                    node: "SimpleType",
                                    name: {
                                        node: "SimpleName",
                                        identifier: "Object"
                                    }
                                }
                            },
                            fragments: [
                                {
                                    node: "VariableDeclarationFragment",
                                    name: {
                                        node: "SimpleName",
                                        identifier: "test"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ]
                        },
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
                                        identifier: "testdims"
                                    },
                                    extraDimensions: 1,
                                    initializer: null
                                }
                            ]
                        }
                    ]
                }
            ]
        }
      );
    });

    test("Enum Constants ws Class Bodies", function(assert) {
      var src = multiline(function(){/*
        enum Operation {
            PLUS { public double a;},
            MINUS {int b;},
            TIMES {Object c;},
            DIVIDED_BY{;};
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
                    node: "EnumDeclaration",
                    modifiers: [

                    ],
                    name: {
                        node: "SimpleName",
                        identifier: "Operation"
                    },
                    superInterfaceTypes: [

                    ],
                    enumConstants: [
                        {
                            node: "EnumConstantDeclaration",
                            modifiers: [

                            ],
                            name: {
                                node: "SimpleName",
                                identifier: "PLUS"
                            },
                            arguments: [

                            ],
                            anonymousClassDeclaration: {
                                node: "AnonymousClassDeclaration",
                                bodyDeclarations: [
                                    {
                                        node: "FieldDeclaration",
                                        modifiers: [
                                            {
                                                node: "Modifier",
                                                keyword: "public"
                                            }
                                        ],
                                        type: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "double"
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "a"
                                                },
                                                extraDimensions: 0,
                                                initializer: null
                                            }
                                        ]
                                    }
                                ]
                            }
                        },
                        {
                            node: "EnumConstantDeclaration",
                            modifiers: [

                            ],
                            name: {
                                node: "SimpleName",
                                identifier: "MINUS"
                            },
                            arguments: [

                            ],
                            anonymousClassDeclaration: {
                                node: "AnonymousClassDeclaration",
                                bodyDeclarations: [
                                    {
                                        node: "FieldDeclaration",
                                        modifiers: [

                                        ],
                                        type: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "int"
                                        },
                                        fragments: [
                                            {
                                                node: "VariableDeclarationFragment",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "b"
                                                },
                                                extraDimensions: 0,
                                                initializer: null
                                            }
                                        ]
                                    }
                                ]
                            }
                        },
                        {
                            node: "EnumConstantDeclaration",
                            modifiers: [

                            ],
                            name: {
                                node: "SimpleName",
                                identifier: "TIMES"
                            },
                            arguments: [

                            ],
                            anonymousClassDeclaration: {
                                node: "AnonymousClassDeclaration",
                                bodyDeclarations: [
                                    {
                                        node: "FieldDeclaration",
                                        modifiers: [

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
                                                    identifier: "c"
                                                },
                                                extraDimensions: 0,
                                                initializer: null
                                            }
                                        ]
                                    }
                                ]
                            }
                        },
                        {
                            node: "EnumConstantDeclaration",
                            modifiers: [

                            ],
                            name: {
                                node: "SimpleName",
                                identifier: "DIVIDED_BY"
                            },
                            arguments: [

                            ],
                            anonymousClassDeclaration: {
                                node: "AnonymousClassDeclaration",
                                bodyDeclarations: [

                                ]
                            }
                        }
                    ],
                    bodyDeclarations: [

                    ]
                }
            ]
        }
      );
    });

    test("Enum Constants ws arguments", function(assert) {
      var src = multiline(function(){/*
        enum Coin {
            T,PENNY(1L), NICKEL(), DIME(0x10,-42), QUARTER(0b11), 
            R(0222), R1(true), R5(false), R3(null), R4(3.14), T('a'), 
            T1("hello\u1984"), T34(-0x1.8p1);
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
                    node: "EnumDeclaration",
                    modifiers: [],
                    name: {
                        node: "SimpleName",
                        identifier: "Coin"
                    },
                    superInterfaceTypes: [],
                    enumConstants: [
                        {
                            node: "EnumConstantDeclaration",
                            modifiers: [],
                            name: {
                                node: "SimpleName",
                                identifier: "T"
                            },
                            arguments: [],
                            anonymousClassDeclaration: null
                        },
                        {
                            node: "EnumConstantDeclaration",
                            modifiers: [],
                            name: {
                                node: "SimpleName",
                                identifier: "PENNY"
                            },
                            arguments: [
                                {
                                    node: "NumberLiteral",
                                    token: "1L"
                                }
                            ],
                            anonymousClassDeclaration: null
                        },
                        {
                            node: "EnumConstantDeclaration",
                            modifiers: [],
                            name: {
                                node: "SimpleName",
                                identifier: "NICKEL"
                            },
                            arguments: [],
                            anonymousClassDeclaration: null
                        },
                        {
                            node: "EnumConstantDeclaration",
                            modifiers: [],
                            name: {
                                node: "SimpleName",
                                identifier: "DIME"
                            },
                            arguments: [
                                {
                                    node: "NumberLiteral",
                                    token: "0x10"
                                },
                                {
                                    node: "PrefixExpression",
                                    operator: "-",
                                    operand: {
                                        node: "NumberLiteral",
                                        token: "42"
                                    }
                                }
                            ],
                            anonymousClassDeclaration: null
                        },
                        {
                            node: "EnumConstantDeclaration",
                            modifiers: [],
                            name: {
                                node: "SimpleName",
                                identifier: "QUARTER"
                            },
                            arguments: [
                                {
                                    node: "NumberLiteral",
                                    token: "0b11"
                                }
                            ],
                            anonymousClassDeclaration: null
                        },
                        {
                            node: "EnumConstantDeclaration",
                            modifiers: [],
                            name: {
                                node: "SimpleName",
                                identifier: "R"
                            },
                            arguments: [
                                {
                                    node: "NumberLiteral",
                                    token: "0222"
                                }
                            ],
                            anonymousClassDeclaration: null
                        },
                        {
                            node: "EnumConstantDeclaration",
                            modifiers: [],
                            name: {
                                node: "SimpleName",
                                identifier: "R1"
                            },
                            arguments: [
                                {
                                    node: "BooleanLiteral",
                                    booleanValue: true
                                }
                            ],
                            anonymousClassDeclaration: null
                        },
                        {
                            node: "EnumConstantDeclaration",
                            modifiers: [],
                            name: {
                                node: "SimpleName",
                                identifier: "R5"
                            },
                            arguments: [
                                {
                                    node: "BooleanLiteral",
                                    booleanValue: false
                                }
                            ],
                            anonymousClassDeclaration: null
                        },
                        {
                            node: "EnumConstantDeclaration",
                            modifiers: [],
                            name: {
                                node: "SimpleName",
                                identifier: "R3"
                            },
                            arguments: [
                                {
                                    node: "NullLiteral"
                                }
                            ],
                            anonymousClassDeclaration: null
                        },
                        {
                            node: "EnumConstantDeclaration",
                            modifiers: [],
                            name: {
                                node: "SimpleName",
                                identifier: "R4"
                            },
                            arguments: [
                                {
                                    node: "NumberLiteral",
                                    token: "3.14"
                                }
                            ],
                            anonymousClassDeclaration: null
                        },
                        {
                            node: "EnumConstantDeclaration",
                            modifiers: [],
                            name: {
                                node: "SimpleName",
                                identifier: "T"
                            },
                            arguments: [
                                {
                                    node: "CharacterLiteral",
                                    escapedValue: "'a'"
                                }
                            ],
                            anonymousClassDeclaration: null
                        },
                        {
                            node: "EnumConstantDeclaration",
                            modifiers: [],
                            name: {
                                node: "SimpleName",
                                identifier: "T1"
                            },
                            arguments: [
                                {
                                    node: "StringLiteral",
                                    escapedValue: "\"hello\\u1984\""
                                }
                            ],
                            anonymousClassDeclaration: null
                        },
                        {
                            node: "EnumConstantDeclaration",
                            modifiers: [],
                            name: {
                                node: "SimpleName",
                                identifier: "T34"
                            },
                            arguments: [
                                {
                                    node: "PrefixExpression",
                                    operator: "-",
                                    operand: {
                                        node: "NumberLiteral",
                                        token: "0x1.8p1"
                                    }
                                }
                            ],
                            anonymousClassDeclaration: null
                        }
                    ],
                    bodyDeclarations: []
                }
            ]
        }
      );
    });

    test("Enum Constants ws annotation ws arguments", function(assert) {
      var src = multiline(function(){/*
        enum Coin {
            @annotation T,PENNY(1L), NICKEL(), DIME(-42), QUARTER(0b11);
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
                    node: "EnumDeclaration",
                    modifiers: [

                    ],
                    name: {
                        node: "SimpleName",
                        identifier: "Coin"
                    },
                    superInterfaceTypes: [

                    ],
                    enumConstants: [
                        {
                            node: "EnumConstantDeclaration",
                            modifiers: [
                                {
                                    node: "MarkerAnnotation",
                                    typeName: {
                                        node: "SimpleName",
                                        identifier: "annotation"
                                    }
                                }
                            ],
                            name: {
                                node: "SimpleName",
                                identifier: "T"
                            },
                            arguments: [

                            ],
                            anonymousClassDeclaration: null
                        },
                        {
                            node: "EnumConstantDeclaration",
                            modifiers: [

                            ],
                            name: {
                                node: "SimpleName",
                                identifier: "PENNY"
                            },
                            arguments: [
                                {
                                    node: "NumberLiteral",
                                    token: "1L"
                                }
                            ],
                            anonymousClassDeclaration: null
                        },
                        {
                            node: "EnumConstantDeclaration",
                            modifiers: [

                            ],
                            name: {
                                node: "SimpleName",
                                identifier: "NICKEL"
                            },
                            arguments: [

                            ],
                            anonymousClassDeclaration: null
                        },
                        {
                            node: "EnumConstantDeclaration",
                            modifiers: [

                            ],
                            name: {
                                node: "SimpleName",
                                identifier: "DIME"
                            },
                            arguments: [
                                {
                                    node: "PrefixExpression",
                                    operator: "-",
                                    operand: {
                                        node: "NumberLiteral",
                                        token: "42"
                                    }
                                }
                            ],
                            anonymousClassDeclaration: null
                        },
                        {
                            node: "EnumConstantDeclaration",
                            modifiers: [

                            ],
                            name: {
                                node: "SimpleName",
                                identifier: "QUARTER"
                            },
                            arguments: [
                                {
                                    node: "NumberLiteral",
                                    token: "0b11"
                                }
                            ],
                            anonymousClassDeclaration: null
                        }
                    ],
                    bodyDeclarations: [

                    ]
                }
            ]
        }
      );
    });

