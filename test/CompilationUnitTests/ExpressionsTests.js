
    test("ExpressionStatement", function(assert) {
      var src = multiline(function(){/*
        class Test {
          public static void main(String[] args) {
            println("hello");
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
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "MethodInvocation",
                                            expression: null,
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
            ]
        }
      );
    });

    test("Assignment Expression", function(assert) {
      var src = multiline(function(){/*
        class Test {
          public static void main(String[] args) {
            int min = - 2147483648;
            int min = (- 2147483648);
            int min = -2147483648L;
            int max = +2147483647;
            int max = 2147483647;
            int max = 2147483647L;
            int max2 = 9223372036854775807L;
            int max2 = 9223372036854775807;
            int max2 = + 9223372036854775807L;
            int max2 = 0x7fffffffffffffffL;
            int max2 = + 0x7fffffffffffffffL;
            int max2 = 0x7fffffffffffffff;
            int max2 = 0777777777777777777777L;
            int max2 = 0777777777777777777777;
            int max2 = +0777777777777777777777L;
            int max2 = 0b0111111111111111111111111111111111111111111111111111111111111111L;
            int max2 = 0b0111111111111111111111111111111111111111111111111111111111111111;
            int max2 = +0b0111111111111111111111111111111111111111111111111111111111111111L;

            int min2 = -9223372036854775808L;
            int min2 = - 9223372036854775808L;
            int min2 = -9223372036854775808;
            int min2 = -9223372036854775808l;
            int min2 = - 9223372036854775808l;
            int min2 = -9223372036854775808;
            int min2 = 0x8000_0000_0000_0000L;
            int min2 = 0x8000000000000000;
            int min2 = 010_0000_0000_0000_0000_0000L;
            int min2 = 0b1000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000L;


            int max = -min;

            i = -42;
            i = 42;
            i = !x;
            i = ~x;
            i = ++x;
            i = ++x;
            i = -++x;

            i = 42;
            i += 42;
            i -= 42;
            i *= 42;
            i /= 42;
            i %= 42;
            i |= 42;
            i &= 42;
            i ^= 42;
            i <<= 42;
            i >>= 42;
            i >>>= 42;
            i += i *= 42;
            i += i *= i >>= 42*i ;
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
                                                    identifier: "min"
                                                },
                                                extraDimensions: 0,
                                                initializer: {
                                                    node: "NumberLiteral",
                                                    token: "- 2147483648"
                                                }
                                            }
                                        ]
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
                                                    identifier: "min"
                                                },
                                                extraDimensions: 0,
                                                initializer: {
                                                    node: "ParenthesizedExpression",
                                                    expression: {
                                                        node: "NumberLiteral",
                                                        token: "- 2147483648"
                                                    }
                                                }
                                            }
                                        ]
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
                                                    identifier: "min"
                                                },
                                                extraDimensions: 0,
                                                initializer: {
                                                    node: "PrefixExpression",
                                                    operator: "-",
                                                    operand: {
                                                        node: "NumberLiteral",
                                                        token: "2147483648L"
                                                    }
                                                }
                                            }
                                        ]
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
                                                    identifier: "max"
                                                },
                                                extraDimensions: 0,
                                                initializer: {
                                                    node: "PrefixExpression",
                                                    operator: "+",
                                                    operand: {
                                                        node: "NumberLiteral",
                                                        token: "2147483647"
                                                    }
                                                }
                                            }
                                        ]
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
                                                    identifier: "max"
                                                },
                                                extraDimensions: 0,
                                                initializer: {
                                                    node: "NumberLiteral",
                                                    token: "2147483647"
                                                }
                                            }
                                        ]
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
                                                    identifier: "max"
                                                },
                                                extraDimensions: 0,
                                                initializer: {
                                                    node: "NumberLiteral",
                                                    token: "2147483647L"
                                                }
                                            }
                                        ]
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
                                                    identifier: "max2"
                                                },
                                                extraDimensions: 0,
                                                initializer: {
                                                    node: "NumberLiteral",
                                                    token: "9223372036854775807L"
                                                }
                                            }
                                        ]
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
                                                    identifier: "max2"
                                                },
                                                extraDimensions: 0,
                                                initializer: {
                                                    node: "NumberLiteral",
                                                    token: "9223372036854775807"
                                                }
                                            }
                                        ]
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
                                                    identifier: "max2"
                                                },
                                                extraDimensions: 0,
                                                initializer: {
                                                    node: "PrefixExpression",
                                                    operator: "+",
                                                    operand: {
                                                        node: "NumberLiteral",
                                                        token: "9223372036854775807L"
                                                    }
                                                }
                                            }
                                        ]
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
                                                    identifier: "max2"
                                                },
                                                extraDimensions: 0,
                                                initializer: {
                                                    node: "NumberLiteral",
                                                    token: "0x7fffffffffffffffL"
                                                }
                                            }
                                        ]
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
                                                    identifier: "max2"
                                                },
                                                extraDimensions: 0,
                                                initializer: {
                                                    node: "PrefixExpression",
                                                    operator: "+",
                                                    operand: {
                                                        node: "NumberLiteral",
                                                        token: "0x7fffffffffffffffL"
                                                    }
                                                }
                                            }
                                        ]
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
                                                    identifier: "max2"
                                                },
                                                extraDimensions: 0,
                                                initializer: {
                                                    node: "NumberLiteral",
                                                    token: "0x7fffffffffffffff"
                                                }
                                            }
                                        ]
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
                                                    identifier: "max2"
                                                },
                                                extraDimensions: 0,
                                                initializer: {
                                                    node: "NumberLiteral",
                                                    token: "0777777777777777777777L"
                                                }
                                            }
                                        ]
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
                                                    identifier: "max2"
                                                },
                                                extraDimensions: 0,
                                                initializer: {
                                                    node: "NumberLiteral",
                                                    token: "0777777777777777777777"
                                                }
                                            }
                                        ]
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
                                                    identifier: "max2"
                                                },
                                                extraDimensions: 0,
                                                initializer: {
                                                    node: "PrefixExpression",
                                                    operator: "+",
                                                    operand: {
                                                        node: "NumberLiteral",
                                                        token: "0777777777777777777777L"
                                                    }
                                                }
                                            }
                                        ]
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
                                                    identifier: "max2"
                                                },
                                                extraDimensions: 0,
                                                initializer: {
                                                    node: "NumberLiteral",
                                                    token: "0b0111111111111111111111111111111111111111111111111111111111111111L"
                                                }
                                            }
                                        ]
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
                                                    identifier: "max2"
                                                },
                                                extraDimensions: 0,
                                                initializer: {
                                                    node: "NumberLiteral",
                                                    token: "0b0111111111111111111111111111111111111111111111111111111111111111"
                                                }
                                            }
                                        ]
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
                                                    identifier: "max2"
                                                },
                                                extraDimensions: 0,
                                                initializer: {
                                                    node: "PrefixExpression",
                                                    operator: "+",
                                                    operand: {
                                                        node: "NumberLiteral",
                                                        token: "0b0111111111111111111111111111111111111111111111111111111111111111L"
                                                    }
                                                }
                                            }
                                        ]
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
                                                    identifier: "min2"
                                                },
                                                extraDimensions: 0,
                                                initializer: {
                                                    node: "NumberLiteral",
                                                    token: "-9223372036854775808L"
                                                }
                                            }
                                        ]
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
                                                    identifier: "min2"
                                                },
                                                extraDimensions: 0,
                                                initializer: {
                                                    node: "NumberLiteral",
                                                    token: "- 9223372036854775808L"
                                                }
                                            }
                                        ]
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
                                                    identifier: "min2"
                                                },
                                                extraDimensions: 0,
                                                initializer: {
                                                    node: "PrefixExpression",
                                                    operator: "-",
                                                    operand: {
                                                        node: "NumberLiteral",
                                                        token: "9223372036854775808"
                                                    }
                                                }
                                            }
                                        ]
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
                                                    identifier: "min2"
                                                },
                                                extraDimensions: 0,
                                                initializer: {
                                                    node: "NumberLiteral",
                                                    token: "-9223372036854775808l"
                                                }
                                            }
                                        ]
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
                                                    identifier: "min2"
                                                },
                                                extraDimensions: 0,
                                                initializer: {
                                                    node: "NumberLiteral",
                                                    token: "- 9223372036854775808l"
                                                }
                                            }
                                        ]
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
                                                    identifier: "min2"
                                                },
                                                extraDimensions: 0,
                                                initializer: {
                                                    node: "PrefixExpression",
                                                    operator: "-",
                                                    operand: {
                                                        node: "NumberLiteral",
                                                        token: "9223372036854775808"
                                                    }
                                                }
                                            }
                                        ]
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
                                                    identifier: "min2"
                                                },
                                                extraDimensions: 0,
                                                initializer: {
                                                    node: "NumberLiteral",
                                                    token: "0x8000_0000_0000_0000L"
                                                }
                                            }
                                        ]
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
                                                    identifier: "min2"
                                                },
                                                extraDimensions: 0,
                                                initializer: {
                                                    node: "NumberLiteral",
                                                    token: "0x8000000000000000"
                                                }
                                            }
                                        ]
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
                                                    identifier: "min2"
                                                },
                                                extraDimensions: 0,
                                                initializer: {
                                                    node: "NumberLiteral",
                                                    token: "010_0000_0000_0000_0000_0000L"
                                                }
                                            }
                                        ]
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
                                                    identifier: "min2"
                                                },
                                                extraDimensions: 0,
                                                initializer: {
                                                    node: "NumberLiteral",
                                                    token: "0b1000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000L"
                                                }
                                            }
                                        ]
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
                                                    identifier: "max"
                                                },
                                                extraDimensions: 0,
                                                initializer: {
                                                    node: "PrefixExpression",
                                                    operator: "-",
                                                    operand: {
                                                        node: "SimpleName",
                                                        identifier: "min"
                                                    }
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "PrefixExpression",
                                                operator: "-",
                                                operand: {
                                                    node: "NumberLiteral",
                                                    token: "42"
                                                }
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "NumberLiteral",
                                                token: "42"
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "PrefixExpression",
                                                operator: "!",
                                                operand: {
                                                    node: "SimpleName",
                                                    identifier: "x"
                                                }
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "PrefixExpression",
                                                operator: "~",
                                                operand: {
                                                    node: "SimpleName",
                                                    identifier: "x"
                                                }
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "PrefixExpression",
                                                operator: "++",
                                                operand: {
                                                    node: "SimpleName",
                                                    identifier: "x"
                                                }
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "PrefixExpression",
                                                operator: "++",
                                                operand: {
                                                    node: "SimpleName",
                                                    identifier: "x"
                                                }
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "PrefixExpression",
                                                operator: "-",
                                                operand: {
                                                    node: "PrefixExpression",
                                                    operator: "++",
                                                    operand: {
                                                        node: "SimpleName",
                                                        identifier: "x"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "NumberLiteral",
                                                token: "42"
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "+=",
                                            rightHandSide: {
                                                node: "NumberLiteral",
                                                token: "42"
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "-=",
                                            rightHandSide: {
                                                node: "NumberLiteral",
                                                token: "42"
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "*=",
                                            rightHandSide: {
                                                node: "NumberLiteral",
                                                token: "42"
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "\/=",
                                            rightHandSide: {
                                                node: "NumberLiteral",
                                                token: "42"
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "%=",
                                            rightHandSide: {
                                                node: "NumberLiteral",
                                                token: "42"
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "|=",
                                            rightHandSide: {
                                                node: "NumberLiteral",
                                                token: "42"
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "&=",
                                            rightHandSide: {
                                                node: "NumberLiteral",
                                                token: "42"
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "^=",
                                            rightHandSide: {
                                                node: "NumberLiteral",
                                                token: "42"
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "<<=",
                                            rightHandSide: {
                                                node: "NumberLiteral",
                                                token: "42"
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: ">>=",
                                            rightHandSide: {
                                                node: "NumberLiteral",
                                                token: "42"
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: ">>>=",
                                            rightHandSide: {
                                                node: "NumberLiteral",
                                                token: "42"
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "+=",
                                            rightHandSide: {
                                                node: "Assignment",
                                                leftHandSide: {
                                                    node: "SimpleName",
                                                    identifier: "i"
                                                },
                                                operator: "*=",
                                                rightHandSide: {
                                                    node: "NumberLiteral",
                                                    token: "42"
                                                }
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "+=",
                                            rightHandSide: {
                                                node: "Assignment",
                                                leftHandSide: {
                                                    node: "SimpleName",
                                                    identifier: "i"
                                                },
                                                operator: "*=",
                                                rightHandSide: {
                                                    node: "Assignment",
                                                    leftHandSide: {
                                                        node: "SimpleName",
                                                        identifier: "i"
                                                    },
                                                    operator: ">>=",
                                                    rightHandSide: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "NumberLiteral",
                                                            token: "42"
                                                        },
                                                        operator: "*",
                                                        rightOperand: {
                                                            node: "SimpleName",
                                                            identifier: "i"
                                                        },
                                                    }
                                                }
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

    test("ConditionalExpression", function(assert) {
      var src = multiline(function(){/*
        class Test {
          public static void main(String[] args) {
              i = i > 42 ? 42 : -42;
              i += i > 42 ? 42 : -42;
              i += i > 42 ? 42 : y ? -1 : +1;
              i += i > 42 ? y ? -1 : i != 42 ? --y : -42 : i++;
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
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "ConditionalExpression",
                                                expression: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "SimpleName",
                                                        identifier: "i"
                                                    },
                                                    operator: ">",
                                                    rightOperand: {
                                                        node: "NumberLiteral",
                                                        token: "42"
                                                    },
                                                },
                                                thenExpression: {
                                                    node: "NumberLiteral",
                                                    token: "42"
                                                },
                                                elseExpression: {
                                                    node: "PrefixExpression",
                                                    operator: "-",
                                                    operand: {
                                                        node: "NumberLiteral",
                                                        token: "42"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "+=",
                                            rightHandSide: {
                                                node: "ConditionalExpression",
                                                expression: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "SimpleName",
                                                        identifier: "i"
                                                    },
                                                    operator: ">",
                                                    rightOperand: {
                                                        node: "NumberLiteral",
                                                        token: "42"
                                                    },
                                                },
                                                thenExpression: {
                                                    node: "NumberLiteral",
                                                    token: "42"
                                                },
                                                elseExpression: {
                                                    node: "PrefixExpression",
                                                    operator: "-",
                                                    operand: {
                                                        node: "NumberLiteral",
                                                        token: "42"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "+=",
                                            rightHandSide: {
                                                node: "ConditionalExpression",
                                                expression: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "SimpleName",
                                                        identifier: "i"
                                                    },
                                                    operator: ">",
                                                    rightOperand: {
                                                        node: "NumberLiteral",
                                                        token: "42"
                                                    },
                                                },
                                                thenExpression: {
                                                    node: "NumberLiteral",
                                                    token: "42"
                                                },
                                                elseExpression: {
                                                    node: "ConditionalExpression",
                                                    expression: {
                                                        node: "SimpleName",
                                                        identifier: "y"
                                                    },
                                                    thenExpression: {
                                                        node: "PrefixExpression",
                                                        operator: "-",
                                                        operand: {
                                                            node: "NumberLiteral",
                                                            token: "1"
                                                        }
                                                    },
                                                    elseExpression: {
                                                        node: "PrefixExpression",
                                                        operator: "+",
                                                        operand: {
                                                            node: "NumberLiteral",
                                                            token: "1"
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "+=",
                                            rightHandSide: {
                                                node: "ConditionalExpression",
                                                expression: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "SimpleName",
                                                        identifier: "i"
                                                    },
                                                    operator: ">",
                                                    rightOperand: {
                                                        node: "NumberLiteral",
                                                        token: "42"
                                                    },
                                                },
                                                thenExpression: {
                                                    node: "ConditionalExpression",
                                                    expression: {
                                                        node: "SimpleName",
                                                        identifier: "y"
                                                    },
                                                    thenExpression: {
                                                        node: "PrefixExpression",
                                                        operator: "-",
                                                        operand: {
                                                            node: "NumberLiteral",
                                                            token: "1"
                                                        }
                                                    },
                                                    elseExpression: {
                                                        node: "ConditionalExpression",
                                                        expression: {
                                                            node: "InfixExpression",
                                                            leftOperand: {
                                                                node: "SimpleName",
                                                                identifier: "i"
                                                            },
                                                            operator: "!=",
                                                            rightOperand: {
                                                                node: "NumberLiteral",
                                                                token: "42"
                                                            },
                                                        },
                                                        thenExpression: {
                                                            node: "PrefixExpression",
                                                            operator: "--",
                                                            operand: {
                                                                node: "SimpleName",
                                                                identifier: "y"
                                                            }
                                                        },
                                                        elseExpression: {
                                                            node: "PrefixExpression",
                                                            operator: "-",
                                                            operand: {
                                                                node: "NumberLiteral",
                                                                token: "42"
                                                            }
                                                        }
                                                    }
                                                },
                                                elseExpression: {
                                                    node: "PostfixExpression",
                                                    operand: {
                                                        node: "SimpleName",
                                                        identifier: "i"
                                                    },
                                                    operator: "++"
                                                }
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

    test("ConditionalOrExpression", function(assert) {
      var src = multiline(function(){/*
        class Test {
          public static void main(String[] args) {
              boolean i = i > 42 || y < 13;
              i = i > 42 || y < 13 || false;
              i = i > 42 ? true : i > -42 || y < 13;
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
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "boolean"
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
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "i"
                                                        },
                                                        operator: ">",
                                                        rightOperand: {
                                                            node: "NumberLiteral",
                                                            token: "42"
                                                        },
                                                    },
                                                    operator: "||",
                                                    rightOperand: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "y"
                                                        },
                                                        operator: "<",
                                                        rightOperand: {
                                                            node: "NumberLiteral",
                                                            token: "13"
                                                        },
                                                    },
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "i"
                                                        },
                                                        operator: ">",
                                                        rightOperand: {
                                                            node: "NumberLiteral",
                                                            token: "42"
                                                        },
                                                    },
                                                    operator: "||",
                                                    rightOperand: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "y"
                                                        },
                                                        operator: "<",
                                                        rightOperand: {
                                                            node: "NumberLiteral",
                                                            token: "13"
                                                        },
                                                    },
                                                },
                                                operator: "||",
                                                rightOperand: {
                                                    node: "BooleanLiteral",
                                                    booleanValue: false
                                                },
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "ConditionalExpression",
                                                expression: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "SimpleName",
                                                        identifier: "i"
                                                    },
                                                    operator: ">",
                                                    rightOperand: {
                                                        node: "NumberLiteral",
                                                        token: "42"
                                                    },
                                                },
                                                thenExpression: {
                                                    node: "BooleanLiteral",
                                                    booleanValue: true
                                                },
                                                elseExpression: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "i"
                                                        },
                                                        operator: ">",
                                                        rightOperand: {
                                                            node: "PrefixExpression",
                                                            operator: "-",
                                                            operand: {
                                                                node: "NumberLiteral",
                                                                token: "42"
                                                            }
                                                        },
                                                    },
                                                    operator: "||",
                                                    rightOperand: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "y"
                                                        },
                                                        operator: "<",
                                                        rightOperand: {
                                                            node: "NumberLiteral",
                                                            token: "13"
                                                        },
                                                    },
                                                }
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

    test("ConditionalAndExpression", function(assert) {
      var src = multiline(function(){/*
        class Test {
          public static void main(String[] args) {
              boolean i = i > 42 && y < 13;
              i = i > 42 && y < 13 && false;
              i = i > 42 || y < 13 && false;
              i = i > 42 ? true : i > -42 && y < 13;
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
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "boolean"
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
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "i"
                                                        },
                                                        operator: ">",
                                                        rightOperand: {
                                                            node: "NumberLiteral",
                                                            token: "42"
                                                        },
                                                    },
                                                    operator: "&&",
                                                    rightOperand: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "y"
                                                        },
                                                        operator: "<",
                                                        rightOperand: {
                                                            node: "NumberLiteral",
                                                            token: "13"
                                                        },
                                                    },
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "i"
                                                        },
                                                        operator: ">",
                                                        rightOperand: {
                                                            node: "NumberLiteral",
                                                            token: "42"
                                                        },
                                                    },
                                                    operator: "&&",
                                                    rightOperand: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "y"
                                                        },
                                                        operator: "<",
                                                        rightOperand: {
                                                            node: "NumberLiteral",
                                                            token: "13"
                                                        },
                                                    },
                                                },
                                                operator: "&&",
                                                rightOperand: {
                                                    node: "BooleanLiteral",
                                                    booleanValue: false
                                                },
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "SimpleName",
                                                        identifier: "i"
                                                    },
                                                    operator: ">",
                                                    rightOperand: {
                                                        node: "NumberLiteral",
                                                        token: "42"
                                                    },
                                                },
                                                operator: "||",
                                                rightOperand: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "y"
                                                        },
                                                        operator: "<",
                                                        rightOperand: {
                                                            node: "NumberLiteral",
                                                            token: "13"
                                                        },
                                                    },
                                                    operator: "&&",
                                                    rightOperand: {
                                                        node: "BooleanLiteral",
                                                        booleanValue: false
                                                    },
                                                },
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "ConditionalExpression",
                                                expression: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "SimpleName",
                                                        identifier: "i"
                                                    },
                                                    operator: ">",
                                                    rightOperand: {
                                                        node: "NumberLiteral",
                                                        token: "42"
                                                    },
                                                },
                                                thenExpression: {
                                                    node: "BooleanLiteral",
                                                    booleanValue: true
                                                },
                                                elseExpression: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "i"
                                                        },
                                                        operator: ">",
                                                        rightOperand: {
                                                            node: "PrefixExpression",
                                                            operator: "-",
                                                            operand: {
                                                                node: "NumberLiteral",
                                                                token: "42"
                                                            }
                                                        },
                                                    },
                                                    operator: "&&",
                                                    rightOperand: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "y"
                                                        },
                                                        operator: "<",
                                                        rightOperand: {
                                                            node: "NumberLiteral",
                                                            token: "13"
                                                        },
                                                    },
                                                }
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

    test("InclusiveOrExpression", function(assert) {
      var src = multiline(function(){/*
        class Test {
          public static void main(String[] args) {
              boolean i = i | 13;
              i = i | 13 | y | 42;
              i = i > 42 || y < 13 && i | 13 | y | 42;
              i = i > 42 ? true : i > -42 && i | 13 | y | 42;
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
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "boolean"
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
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "SimpleName",
                                                        identifier: "i"
                                                    },
                                                    operator: "|",
                                                    rightOperand: {
                                                        node: "NumberLiteral",
                                                        token: "13"
                                                    },
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "i"
                                                        },
                                                        operator: "|",
                                                        rightOperand: {
                                                            node: "NumberLiteral",
                                                            token: "13"
                                                        },
                                                    },
                                                    operator: "|",
                                                    rightOperand: {
                                                        node: "SimpleName",
                                                        identifier: "y"
                                                    },
                                                },
                                                operator: "|",
                                                rightOperand: {
                                                    node: "NumberLiteral",
                                                    token: "42"
                                                },
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "SimpleName",
                                                        identifier: "i"
                                                    },
                                                    operator: ">",
                                                    rightOperand: {
                                                        node: "NumberLiteral",
                                                        token: "42"
                                                    },
                                                },
                                                operator: "||",
                                                rightOperand: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "y"
                                                        },
                                                        operator: "<",
                                                        rightOperand: {
                                                            node: "NumberLiteral",
                                                            token: "13"
                                                        },
                                                    },
                                                    operator: "&&",
                                                    rightOperand: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "InfixExpression",
                                                            leftOperand: {
                                                                node: "InfixExpression",
                                                                leftOperand: {
                                                                    node: "SimpleName",
                                                                    identifier: "i"
                                                                },
                                                                operator: "|",
                                                                rightOperand: {
                                                                    node: "NumberLiteral",
                                                                    token: "13"
                                                                },
                                                            },
                                                            operator: "|",
                                                            rightOperand: {
                                                                node: "SimpleName",
                                                                identifier: "y"
                                                            },
                                                        },
                                                        operator: "|",
                                                        rightOperand: {
                                                            node: "NumberLiteral",
                                                            token: "42"
                                                        },
                                                    },
                                                },
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "ConditionalExpression",
                                                expression: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "SimpleName",
                                                        identifier: "i"
                                                    },
                                                    operator: ">",
                                                    rightOperand: {
                                                        node: "NumberLiteral",
                                                        token: "42"
                                                    },
                                                },
                                                thenExpression: {
                                                    node: "BooleanLiteral",
                                                    booleanValue: true
                                                },
                                                elseExpression: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "i"
                                                        },
                                                        operator: ">",
                                                        rightOperand: {
                                                            node: "PrefixExpression",
                                                            operator: "-",
                                                            operand: {
                                                                node: "NumberLiteral",
                                                                token: "42"
                                                            }
                                                        },
                                                    },
                                                    operator: "&&",
                                                    rightOperand: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "InfixExpression",
                                                            leftOperand: {
                                                                node: "InfixExpression",
                                                                leftOperand: {
                                                                    node: "SimpleName",
                                                                    identifier: "i"
                                                                },
                                                                operator: "|",
                                                                rightOperand: {
                                                                    node: "NumberLiteral",
                                                                    token: "13"
                                                                },
                                                            },
                                                            operator: "|",
                                                            rightOperand: {
                                                                node: "SimpleName",
                                                                identifier: "y"
                                                            },
                                                        },
                                                        operator: "|",
                                                        rightOperand: {
                                                            node: "NumberLiteral",
                                                            token: "42"
                                                        },
                                                    },
                                                }
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

    test("ExclusiveOrExpression", function(assert) {
      var src = multiline(function(){/*
        class Test {
          public static void main(String[] args) {
              boolean i = i ^ 13;
              i = i ^ 13 ^ y ^ 42;
              i = i > 42 || y < 13 && i | 13 ^ y | 42;
              i = i > 42 ? true : i > -42 && i | 13 | y ^ 42;
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
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "boolean"
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
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "SimpleName",
                                                        identifier: "i"
                                                    },
                                                    operator: "^",
                                                    rightOperand: {
                                                        node: "NumberLiteral",
                                                        token: "13"
                                                    },
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "i"
                                                        },
                                                        operator: "^",
                                                        rightOperand: {
                                                            node: "NumberLiteral",
                                                            token: "13"
                                                        },
                                                    },
                                                    operator: "^",
                                                    rightOperand: {
                                                        node: "SimpleName",
                                                        identifier: "y"
                                                    },
                                                },
                                                operator: "^",
                                                rightOperand: {
                                                    node: "NumberLiteral",
                                                    token: "42"
                                                },
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "SimpleName",
                                                        identifier: "i"
                                                    },
                                                    operator: ">",
                                                    rightOperand: {
                                                        node: "NumberLiteral",
                                                        token: "42"
                                                    },
                                                },
                                                operator: "||",
                                                rightOperand: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "y"
                                                        },
                                                        operator: "<",
                                                        rightOperand: {
                                                            node: "NumberLiteral",
                                                            token: "13"
                                                        },
                                                    },
                                                    operator: "&&",
                                                    rightOperand: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "InfixExpression",
                                                            leftOperand: {
                                                                node: "SimpleName",
                                                                identifier: "i"
                                                            },
                                                            operator: "|",
                                                            rightOperand: {
                                                                node: "InfixExpression",
                                                                leftOperand: {
                                                                    node: "NumberLiteral",
                                                                    token: "13"
                                                                },
                                                                operator: "^",
                                                                rightOperand: {
                                                                    node: "SimpleName",
                                                                    identifier: "y"
                                                                },
                                                            },
                                                        },
                                                        operator: "|",
                                                        rightOperand: {
                                                            node: "NumberLiteral",
                                                            token: "42"
                                                        },
                                                    },
                                                },
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "ConditionalExpression",
                                                expression: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "SimpleName",
                                                        identifier: "i"
                                                    },
                                                    operator: ">",
                                                    rightOperand: {
                                                        node: "NumberLiteral",
                                                        token: "42"
                                                    },
                                                },
                                                thenExpression: {
                                                    node: "BooleanLiteral",
                                                    booleanValue: true
                                                },
                                                elseExpression: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "i"
                                                        },
                                                        operator: ">",
                                                        rightOperand: {
                                                            node: "PrefixExpression",
                                                            operator: "-",
                                                            operand: {
                                                                node: "NumberLiteral",
                                                                token: "42"
                                                            }
                                                        },
                                                    },
                                                    operator: "&&",
                                                    rightOperand: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "InfixExpression",
                                                            leftOperand: {
                                                                node: "SimpleName",
                                                                identifier: "i"
                                                            },
                                                            operator: "|",
                                                            rightOperand: {
                                                                node: "NumberLiteral",
                                                                token: "13"
                                                            },
                                                        },
                                                        operator: "|",
                                                        rightOperand: {
                                                            node: "InfixExpression",
                                                            leftOperand: {
                                                                node: "SimpleName",
                                                                identifier: "y"
                                                            },
                                                            operator: "^",
                                                            rightOperand: {
                                                                node: "NumberLiteral",
                                                                token: "42"
                                                            },
                                                        },
                                                    },
                                                }
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

    test("AndExpression", function(assert) {
      var src = multiline(function(){/*
        class Test {
          public static void main(String[] args) {
              boolean i = i & 13;
              i = i & 13 & y & 42;
              i = i > 42 || y < 13 && i | 13 ^ y & 42;
              i = i > 42 ? true : i > -42 && i & 13 | y ^ 42;
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
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "boolean"
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
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "SimpleName",
                                                        identifier: "i"
                                                    },
                                                    operator: "&",
                                                    rightOperand: {
                                                        node: "NumberLiteral",
                                                        token: "13"
                                                    },
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "i"
                                                        },
                                                        operator: "&",
                                                        rightOperand: {
                                                            node: "NumberLiteral",
                                                            token: "13"
                                                        },
                                                    },
                                                    operator: "&",
                                                    rightOperand: {
                                                        node: "SimpleName",
                                                        identifier: "y"
                                                    },
                                                },
                                                operator: "&",
                                                rightOperand: {
                                                    node: "NumberLiteral",
                                                    token: "42"
                                                },
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "SimpleName",
                                                        identifier: "i"
                                                    },
                                                    operator: ">",
                                                    rightOperand: {
                                                        node: "NumberLiteral",
                                                        token: "42"
                                                    },
                                                },
                                                operator: "||",
                                                rightOperand: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "y"
                                                        },
                                                        operator: "<",
                                                        rightOperand: {
                                                            node: "NumberLiteral",
                                                            token: "13"
                                                        },
                                                    },
                                                    operator: "&&",
                                                    rightOperand: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "i"
                                                        },
                                                        operator: "|",
                                                        rightOperand: {
                                                            node: "InfixExpression",
                                                            leftOperand: {
                                                                node: "NumberLiteral",
                                                                token: "13"
                                                            },
                                                            operator: "^",
                                                            rightOperand: {
                                                                node: "InfixExpression",
                                                                leftOperand: {
                                                                    node: "SimpleName",
                                                                    identifier: "y"
                                                                },
                                                                operator: "&",
                                                                rightOperand: {
                                                                    node: "NumberLiteral",
                                                                    token: "42"
                                                                },
                                                            },
                                                        },
                                                    },
                                                },
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "ConditionalExpression",
                                                expression: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "SimpleName",
                                                        identifier: "i"
                                                    },
                                                    operator: ">",
                                                    rightOperand: {
                                                        node: "NumberLiteral",
                                                        token: "42"
                                                    },
                                                },
                                                thenExpression: {
                                                    node: "BooleanLiteral",
                                                    booleanValue: true
                                                },
                                                elseExpression: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "i"
                                                        },
                                                        operator: ">",
                                                        rightOperand: {
                                                            node: "PrefixExpression",
                                                            operator: "-",
                                                            operand: {
                                                                node: "NumberLiteral",
                                                                token: "42"
                                                            }
                                                        },
                                                    },
                                                    operator: "&&",
                                                    rightOperand: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "InfixExpression",
                                                            leftOperand: {
                                                                node: "SimpleName",
                                                                identifier: "i"
                                                            },
                                                            operator: "&",
                                                            rightOperand: {
                                                                node: "NumberLiteral",
                                                                token: "13"
                                                            },
                                                        },
                                                        operator: "|",
                                                        rightOperand: {
                                                            node: "InfixExpression",
                                                            leftOperand: {
                                                                node: "SimpleName",
                                                                identifier: "y"
                                                            },
                                                            operator: "^",
                                                            rightOperand: {
                                                                node: "NumberLiteral",
                                                                token: "42"
                                                            },
                                                        },
                                                    },
                                                }
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

    test("EqualityExpression", function(assert) {
      var src = multiline(function(){/*
        class Test {
          public static void main(String[] args) {
              boolean i = i == 13;
              i = i == 13 == y == 42;
              boolean j = j != 13;
              j = j != 13 != y != 42;
              i = i > 42 || y < 13 && i | 13 != y == 42;
              i = i > 42 ? true : i > -42 && i & 13 != y ^ 42;
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
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "boolean"
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
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "SimpleName",
                                                        identifier: "i"
                                                    },
                                                    operator: "==",
                                                    rightOperand: {
                                                        node: "NumberLiteral",
                                                        token: "13"
                                                    },
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "i"
                                                        },
                                                        operator: "==",
                                                        rightOperand: {
                                                            node: "NumberLiteral",
                                                            token: "13"
                                                        },
                                                    },
                                                    operator: "==",
                                                    rightOperand: {
                                                        node: "SimpleName",
                                                        identifier: "y"
                                                    },
                                                },
                                                operator: "==",
                                                rightOperand: {
                                                    node: "NumberLiteral",
                                                    token: "42"
                                                },
                                            }
                                        }
                                    },
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "boolean"
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
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "SimpleName",
                                                        identifier: "j"
                                                    },
                                                    operator: "!=",
                                                    rightOperand: {
                                                        node: "NumberLiteral",
                                                        token: "13"
                                                    },
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "j"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "j"
                                                        },
                                                        operator: "!=",
                                                        rightOperand: {
                                                            node: "NumberLiteral",
                                                            token: "13"
                                                        },
                                                    },
                                                    operator: "!=",
                                                    rightOperand: {
                                                        node: "SimpleName",
                                                        identifier: "y"
                                                    },
                                                },
                                                operator: "!=",
                                                rightOperand: {
                                                    node: "NumberLiteral",
                                                    token: "42"
                                                },
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "SimpleName",
                                                        identifier: "i"
                                                    },
                                                    operator: ">",
                                                    rightOperand: {
                                                        node: "NumberLiteral",
                                                        token: "42"
                                                    },
                                                },
                                                operator: "||",
                                                rightOperand: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "y"
                                                        },
                                                        operator: "<",
                                                        rightOperand: {
                                                            node: "NumberLiteral",
                                                            token: "13"
                                                        },
                                                    },
                                                    operator: "&&",
                                                    rightOperand: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "i"
                                                        },
                                                        operator: "|",
                                                        rightOperand: {
                                                            node: "InfixExpression",
                                                            leftOperand: {
                                                                node: "InfixExpression",
                                                                leftOperand: {
                                                                    node: "NumberLiteral",
                                                                    token: "13"
                                                                },
                                                                operator: "!=",
                                                                rightOperand: {
                                                                    node: "SimpleName",
                                                                    identifier: "y"
                                                                },
                                                            },
                                                            operator: "==",
                                                            rightOperand: {
                                                                node: "NumberLiteral",
                                                                token: "42"
                                                            },
                                                        },
                                                    },
                                                },
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "ConditionalExpression",
                                                expression: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "SimpleName",
                                                        identifier: "i"
                                                    },
                                                    operator: ">",
                                                    rightOperand: {
                                                        node: "NumberLiteral",
                                                        token: "42"
                                                    },
                                                },
                                                thenExpression: {
                                                    node: "BooleanLiteral",
                                                    booleanValue: true
                                                },
                                                elseExpression: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "i"
                                                        },
                                                        operator: ">",
                                                        rightOperand: {
                                                            node: "PrefixExpression",
                                                            operator: "-",
                                                            operand: {
                                                                node: "NumberLiteral",
                                                                token: "42"
                                                            }
                                                        },
                                                    },
                                                    operator: "&&",
                                                    rightOperand: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "InfixExpression",
                                                            leftOperand: {
                                                                node: "SimpleName",
                                                                identifier: "i"
                                                            },
                                                            operator: "&",
                                                            rightOperand: {
                                                                node: "InfixExpression",
                                                                leftOperand: {
                                                                    node: "NumberLiteral",
                                                                    token: "13"
                                                                },
                                                                operator: "!=",
                                                                rightOperand: {
                                                                    node: "SimpleName",
                                                                    identifier: "y"
                                                                },
                                                            },
                                                        },
                                                        operator: "^",
                                                        rightOperand: {
                                                            node: "NumberLiteral",
                                                            token: "42"
                                                        },
                                                    },
                                                }
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

    test("RelationalExpression", function(assert) {
      var src = multiline(function(){/*
        class Test {
          public static void main(String[] args) {
              boolean i = i >= 13;
              i = i <= 13;
              i = i > 13;
              i = i < 13;
              j = j != 13 > y >= 42;
              i = i > 42 || y <= 13 && i | 13 > y < 42;
              i = i > 42 ? true : i > -42 && i >= 13 >= y ^ 42;
              boolean i = i instanceof java.util.List;
              i = i instanceof java.util.List instanceof Object;
              i = i instanceof List instanceof Object != 42;
              i = i > 42 instanceof List instanceof Object & 42;
              i = i instanceof List instanceof Hello<Y>.World instanceof Object | 42;
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
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "boolean"
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
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "SimpleName",
                                                        identifier: "i"
                                                    },
                                                    operator: ">=",
                                                    rightOperand: {
                                                        node: "NumberLiteral",
                                                        token: "13"
                                                    },
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "SimpleName",
                                                    identifier: "i"
                                                },
                                                operator: "<=",
                                                rightOperand: {
                                                    node: "NumberLiteral",
                                                    token: "13"
                                                },
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "SimpleName",
                                                    identifier: "i"
                                                },
                                                operator: ">",
                                                rightOperand: {
                                                    node: "NumberLiteral",
                                                    token: "13"
                                                },
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "SimpleName",
                                                    identifier: "i"
                                                },
                                                operator: "<",
                                                rightOperand: {
                                                    node: "NumberLiteral",
                                                    token: "13"
                                                },
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "j"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "SimpleName",
                                                    identifier: "j"
                                                },
                                                operator: "!=",
                                                rightOperand: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "NumberLiteral",
                                                            token: "13"
                                                        },
                                                        operator: ">",
                                                        rightOperand: {
                                                            node: "SimpleName",
                                                            identifier: "y"
                                                        },
                                                    },
                                                    operator: ">=",
                                                    rightOperand: {
                                                        node: "NumberLiteral",
                                                        token: "42"
                                                    },
                                                },
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "SimpleName",
                                                        identifier: "i"
                                                    },
                                                    operator: ">",
                                                    rightOperand: {
                                                        node: "NumberLiteral",
                                                        token: "42"
                                                    },
                                                },
                                                operator: "||",
                                                rightOperand: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "y"
                                                        },
                                                        operator: "<=",
                                                        rightOperand: {
                                                            node: "NumberLiteral",
                                                            token: "13"
                                                        },
                                                    },
                                                    operator: "&&",
                                                    rightOperand: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "i"
                                                        },
                                                        operator: "|",
                                                        rightOperand: {
                                                            node: "InfixExpression",
                                                            leftOperand: {
                                                                node: "InfixExpression",
                                                                leftOperand: {
                                                                    node: "NumberLiteral",
                                                                    token: "13"
                                                                },
                                                                operator: ">",
                                                                rightOperand: {
                                                                    node: "SimpleName",
                                                                    identifier: "y"
                                                                },
                                                            },
                                                            operator: "<",
                                                            rightOperand: {
                                                                node: "NumberLiteral",
                                                                token: "42"
                                                            },
                                                        },
                                                    },
                                                },
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "ConditionalExpression",
                                                expression: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "SimpleName",
                                                        identifier: "i"
                                                    },
                                                    operator: ">",
                                                    rightOperand: {
                                                        node: "NumberLiteral",
                                                        token: "42"
                                                    },
                                                },
                                                thenExpression: {
                                                    node: "BooleanLiteral",
                                                    booleanValue: true
                                                },
                                                elseExpression: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "i"
                                                        },
                                                        operator: ">",
                                                        rightOperand: {
                                                            node: "PrefixExpression",
                                                            operator: "-",
                                                            operand: {
                                                                node: "NumberLiteral",
                                                                token: "42"
                                                            }
                                                        },
                                                    },
                                                    operator: "&&",
                                                    rightOperand: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "InfixExpression",
                                                            leftOperand: {
                                                                node: "InfixExpression",
                                                                leftOperand: {
                                                                    node: "SimpleName",
                                                                    identifier: "i"
                                                                },
                                                                operator: ">=",
                                                                rightOperand: {
                                                                    node: "NumberLiteral",
                                                                    token: "13"
                                                                },
                                                            },
                                                            operator: ">=",
                                                            rightOperand: {
                                                                node: "SimpleName",
                                                                identifier: "y"
                                                            },
                                                        },
                                                        operator: "^",
                                                        rightOperand: {
                                                            node: "NumberLiteral",
                                                            token: "42"
                                                        },
                                                    },
                                                }
                                            }
                                        }
                                    },
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "boolean"
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
                                                    node: "InstanceofExpression",
                                                    leftOperand: {
                                                        node: "SimpleName",
                                                        identifier: "i"
                                                    },
                                                    rightOperand: {
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
                                                                identifier: "List"
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "InstanceofExpression",
                                                leftOperand: {
                                                    node: "InstanceofExpression",
                                                    leftOperand: {
                                                        node: "SimpleName",
                                                        identifier: "i"
                                                    },
                                                    rightOperand: {
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
                                                                identifier: "List"
                                                            }
                                                        }
                                                    }
                                                },
                                                rightOperand: {
                                                    node: "SimpleType",
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "Object"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "InstanceofExpression",
                                                    leftOperand: {
                                                        node: "InstanceofExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "i"
                                                        },
                                                        rightOperand: {
                                                            node: "SimpleType",
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "List"
                                                            }
                                                        }
                                                    },
                                                    rightOperand: {
                                                        node: "SimpleType",
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "Object"
                                                        }
                                                    }
                                                },
                                                operator: "!=",
                                                rightOperand: {
                                                    node: "NumberLiteral",
                                                    token: "42"
                                                },
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "InstanceofExpression",
                                                    leftOperand: {
                                                        node: "InstanceofExpression",
                                                        leftOperand: {
                                                            node: "InfixExpression",
                                                            leftOperand: {
                                                                node: "SimpleName",
                                                                identifier: "i"
                                                            },
                                                            operator: ">",
                                                            rightOperand: {
                                                                node: "NumberLiteral",
                                                                token: "42"
                                                            },
                                                        },
                                                        rightOperand: {
                                                            node: "SimpleType",
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "List"
                                                            }
                                                        }
                                                    },
                                                    rightOperand: {
                                                        node: "SimpleType",
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "Object"
                                                        }
                                                    }
                                                },
                                                operator: "&",
                                                rightOperand: {
                                                    node: "NumberLiteral",
                                                    token: "42"
                                                },
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "InstanceofExpression",
                                                    leftOperand: {
                                                        node: "InstanceofExpression",
                                                        leftOperand: {
                                                            node: "InstanceofExpression",
                                                            leftOperand: {
                                                                node: "SimpleName",
                                                                identifier: "i"
                                                            },
                                                            rightOperand: {
                                                                node: "SimpleType",
                                                                name: {
                                                                    node: "SimpleName",
                                                                    identifier: "List"
                                                                }
                                                            }
                                                        },
                                                        rightOperand: {
                                                            node: "QualifiedType",
                                                            qualifier: {
                                                                node: "ParameterizedType",
                                                                type: {
                                                                    node: "SimpleType",
                                                                    name: {
                                                                        node: "SimpleName",
                                                                        identifier: "Hello"
                                                                    }
                                                                },
                                                                typeArguments: [
                                                                    {
                                                                        node: "SimpleType",
                                                                        name: {
                                                                            node: "SimpleName",
                                                                            identifier: "Y"
                                                                        }
                                                                    }
                                                                ]
                                                            },
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "World"
                                                            }
                                                        }
                                                    },
                                                    rightOperand: {
                                                        node: "SimpleType",
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "Object"
                                                        }
                                                    }
                                                },
                                                operator: "|",
                                                rightOperand: {
                                                    node: "NumberLiteral",
                                                    token: "42"
                                                },
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

    test("ShiftExpression", function(assert) {
      var src = multiline(function(){/*
        class Test {
          public static void main(String[] args) {
              int i = i >> 13;
              i = i << 13;
              i = i >>> 13;
              i = i >> 13 << y >>> 42;
              j = j >>> 13 >>> y >>> 42;
              i = i > 42 || y < 13 && i | 13 >>> y << 42;
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
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "SimpleName",
                                                        identifier: "i"
                                                    },
                                                    operator: ">>",
                                                    rightOperand: {
                                                        node: "NumberLiteral",
                                                        token: "13"
                                                    },
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "SimpleName",
                                                    identifier: "i"
                                                },
                                                operator: "<<",
                                                rightOperand: {
                                                    node: "NumberLiteral",
                                                    token: "13"
                                                },
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "SimpleName",
                                                    identifier: "i"
                                                },
                                                operator: ">>>",
                                                rightOperand: {
                                                    node: "NumberLiteral",
                                                    token: "13"
                                                },
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "i"
                                                        },
                                                        operator: ">>",
                                                        rightOperand: {
                                                            node: "NumberLiteral",
                                                            token: "13"
                                                        },
                                                    },
                                                    operator: "<<",
                                                    rightOperand: {
                                                        node: "SimpleName",
                                                        identifier: "y"
                                                    },
                                                },
                                                operator: ">>>",
                                                rightOperand: {
                                                    node: "NumberLiteral",
                                                    token: "42"
                                                },
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "j"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "j"
                                                        },
                                                        operator: ">>>",
                                                        rightOperand: {
                                                            node: "NumberLiteral",
                                                            token: "13"
                                                        },
                                                    },
                                                    operator: ">>>",
                                                    rightOperand: {
                                                        node: "SimpleName",
                                                        identifier: "y"
                                                    },
                                                },
                                                operator: ">>>",
                                                rightOperand: {
                                                    node: "NumberLiteral",
                                                    token: "42"
                                                },
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "SimpleName",
                                                        identifier: "i"
                                                    },
                                                    operator: ">",
                                                    rightOperand: {
                                                        node: "NumberLiteral",
                                                        token: "42"
                                                    },
                                                },
                                                operator: "||",
                                                rightOperand: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "y"
                                                        },
                                                        operator: "<",
                                                        rightOperand: {
                                                            node: "NumberLiteral",
                                                            token: "13"
                                                        },
                                                    },
                                                    operator: "&&",
                                                    rightOperand: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "i"
                                                        },
                                                        operator: "|",
                                                        rightOperand: {
                                                            node: "InfixExpression",
                                                            leftOperand: {
                                                                node: "InfixExpression",
                                                                leftOperand: {
                                                                    node: "NumberLiteral",
                                                                    token: "13"
                                                                },
                                                                operator: ">>>",
                                                                rightOperand: {
                                                                    node: "SimpleName",
                                                                    identifier: "y"
                                                                },
                                                            },
                                                            operator: "<<",
                                                            rightOperand: {
                                                                node: "NumberLiteral",
                                                                token: "42"
                                                            },
                                                        },
                                                    },
                                                },
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

    test("AdditiveExpression", function(assert) {
      var src = multiline(function(){/*
        class Test {
          public static void main(String[] args) {
              int i = i + 13;
              i = i - 13;
              i = 13 -i;
              i = 13+i;
              i = i + 13 + y >>> 42;
              j = j - 13 - y - 42;
              i = i > 42 || y < 13 + i | 13 + y - 42;
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
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "SimpleName",
                                                        identifier: "i"
                                                    },
                                                    operator: "+",
                                                    rightOperand: {
                                                        node: "NumberLiteral",
                                                        token: "13"
                                                    },
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "SimpleName",
                                                    identifier: "i"
                                                },
                                                operator: "-",
                                                rightOperand: {
                                                    node: "NumberLiteral",
                                                    token: "13"
                                                },
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "NumberLiteral",
                                                    token: "13"
                                                },
                                                operator: "-",
                                                rightOperand: {
                                                    node: "SimpleName",
                                                    identifier: "i"
                                                },
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "NumberLiteral",
                                                    token: "13"
                                                },
                                                operator: "+",
                                                rightOperand: {
                                                    node: "SimpleName",
                                                    identifier: "i"
                                                },
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "i"
                                                        },
                                                        operator: "+",
                                                        rightOperand: {
                                                            node: "NumberLiteral",
                                                            token: "13"
                                                        },
                                                    },
                                                    operator: "+",
                                                    rightOperand: {
                                                        node: "SimpleName",
                                                        identifier: "y"
                                                    },
                                                },
                                                operator: ">>>",
                                                rightOperand: {
                                                    node: "NumberLiteral",
                                                    token: "42"
                                                },
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "j"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "j"
                                                        },
                                                        operator: "-",
                                                        rightOperand: {
                                                            node: "NumberLiteral",
                                                            token: "13"
                                                        },
                                                    },
                                                    operator: "-",
                                                    rightOperand: {
                                                        node: "SimpleName",
                                                        identifier: "y"
                                                    },
                                                },
                                                operator: "-",
                                                rightOperand: {
                                                    node: "NumberLiteral",
                                                    token: "42"
                                                },
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "SimpleName",
                                                        identifier: "i"
                                                    },
                                                    operator: ">",
                                                    rightOperand: {
                                                        node: "NumberLiteral",
                                                        token: "42"
                                                    },
                                                },
                                                operator: "||",
                                                rightOperand: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "y"
                                                        },
                                                        operator: "<",
                                                        rightOperand: {
                                                            node: "InfixExpression",
                                                            leftOperand: {
                                                                node: "NumberLiteral",
                                                                token: "13"
                                                            },
                                                            operator: "+",
                                                            rightOperand: {
                                                                node: "SimpleName",
                                                                identifier: "i"
                                                            },
                                                        },
                                                    },
                                                    operator: "|",
                                                    rightOperand: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "InfixExpression",
                                                            leftOperand: {
                                                                node: "NumberLiteral",
                                                                token: "13"
                                                            },
                                                            operator: "+",
                                                            rightOperand: {
                                                                node: "SimpleName",
                                                                identifier: "y"
                                                            },
                                                        },
                                                        operator: "-",
                                                        rightOperand: {
                                                            node: "NumberLiteral",
                                                            token: "42"
                                                        },
                                                    },
                                                },
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

    test("MultiplicativeExpression", function(assert) {
      var src = multiline(function(){/*
        class Test {
          public static void main(String[] args) {
              int i = i * 13;
              i = 42*i;
              i = i / 13;
              i = 42/i;
              i = i % 13;
              i = 42%i;
              i = i % 13 % y % 42;
              j = j % 13 / y * 42 + -1;
              i = i > 42 % y < 13 * i | 13 + y / 42;
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
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "SimpleName",
                                                        identifier: "i"
                                                    },
                                                    operator: "*",
                                                    rightOperand: {
                                                        node: "NumberLiteral",
                                                        token: "13"
                                                    },
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "NumberLiteral",
                                                    token: "42"
                                                },
                                                operator: "*",
                                                rightOperand: {
                                                    node: "SimpleName",
                                                    identifier: "i"
                                                },
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "SimpleName",
                                                    identifier: "i"
                                                },
                                                operator: "/",
                                                rightOperand: {
                                                    node: "NumberLiteral",
                                                    token: "13"
                                                },
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "NumberLiteral",
                                                    token: "42"
                                                },
                                                operator: "/",
                                                rightOperand: {
                                                    node: "SimpleName",
                                                    identifier: "i"
                                                },
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "SimpleName",
                                                    identifier: "i"
                                                },
                                                operator: "%",
                                                rightOperand: {
                                                    node: "NumberLiteral",
                                                    token: "13"
                                                },
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "NumberLiteral",
                                                    token: "42"
                                                },
                                                operator: "%",
                                                rightOperand: {
                                                    node: "SimpleName",
                                                    identifier: "i"
                                                },
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "InfixExpression",
                                                leftOperand: {
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
                                                            token: "13"
                                                        },
                                                    },
                                                    operator: "%",
                                                    rightOperand: {
                                                        node: "SimpleName",
                                                        identifier: "y"
                                                    },
                                                },
                                                operator: "%",
                                                rightOperand: {
                                                    node: "NumberLiteral",
                                                    token: "42"
                                                },
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "j"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "InfixExpression",
                                                            leftOperand: {
                                                                node: "SimpleName",
                                                                identifier: "j"
                                                            },
                                                            operator: "%",
                                                            rightOperand: {
                                                                node: "NumberLiteral",
                                                                token: "13"
                                                            },
                                                        },
                                                        operator: "/",
                                                        rightOperand: {
                                                            node: "SimpleName",
                                                            identifier: "y"
                                                        },
                                                    },
                                                    operator: "*",
                                                    rightOperand: {
                                                        node: "NumberLiteral",
                                                        token: "42"
                                                    },
                                                },
                                                operator: "+",
                                                rightOperand: {
                                                    node: "PrefixExpression",
                                                    operator: "-",
                                                    operand: {
                                                        node: "NumberLiteral",
                                                        token: "1"
                                                    }
                                                },
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "i"
                                                        },
                                                        operator: ">",
                                                        rightOperand: {
                                                            node: "InfixExpression",
                                                            leftOperand: {
                                                                node: "NumberLiteral",
                                                                token: "42"
                                                            },
                                                            operator: "%",
                                                            rightOperand: {
                                                                node: "SimpleName",
                                                                identifier: "y"
                                                            },
                                                        },
                                                    },
                                                    operator: "<",
                                                    rightOperand: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "NumberLiteral",
                                                            token: "13"
                                                        },
                                                        operator: "*",
                                                        rightOperand: {
                                                            node: "SimpleName",
                                                            identifier: "i"
                                                        },
                                                    },
                                                },
                                                operator: "|",
                                                rightOperand: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "NumberLiteral",
                                                        token: "13"
                                                    },
                                                    operator: "+",
                                                    rightOperand: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "y"
                                                        },
                                                        operator: "/",
                                                        rightOperand: {
                                                            node: "NumberLiteral",
                                                            token: "42"
                                                        },
                                                    },
                                                },
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

    test("Prefix UnaryExpression", function(assert) {
      var src = multiline(function(){/*
        class Test {
          public static void main(String[] args) {
              --i;
              i = --i - --a;
              hello.world.i -= --hello.world.i;
              ++a;
              a = +a;
              b = -b;
              c = ~c;
              d = !d;
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
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "PrefixExpression",
                                            operator: "--",
                                            operand: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "PrefixExpression",
                                                    operator: "--",
                                                    operand: {
                                                        node: "SimpleName",
                                                        identifier: "i"
                                                    }
                                                },
                                                operator: "-",
                                                rightOperand: {
                                                    node: "PrefixExpression",
                                                    operator: "--",
                                                    operand: {
                                                        node: "SimpleName",
                                                        identifier: "a"
                                                    }
                                                },
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "QualifiedName",
                                                qualifier: {
                                                    node: "QualifiedName",
                                                    qualifier: {
                                                        node: "SimpleName",
                                                        identifier: "hello"
                                                    },
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "world"
                                                    }
                                                },
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "i"
                                                }
                                            },
                                            operator: "-=",
                                            rightHandSide: {
                                                node: "PrefixExpression",
                                                operator: "--",
                                                operand: {
                                                    node: "QualifiedName",
                                                    qualifier: {
                                                        node: "QualifiedName",
                                                        qualifier: {
                                                            node: "SimpleName",
                                                            identifier: "hello"
                                                        },
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "world"
                                                        }
                                                    },
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "i"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "PrefixExpression",
                                            operator: "++",
                                            operand: {
                                                node: "SimpleName",
                                                identifier: "a"
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "a"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "PrefixExpression",
                                                operator: "+",
                                                operand: {
                                                    node: "SimpleName",
                                                    identifier: "a"
                                                }
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "b"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "PrefixExpression",
                                                operator: "-",
                                                operand: {
                                                    node: "SimpleName",
                                                    identifier: "b"
                                                }
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "c"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "PrefixExpression",
                                                operator: "~",
                                                operand: {
                                                    node: "SimpleName",
                                                    identifier: "c"
                                                }
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "d"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "PrefixExpression",
                                                operator: "!",
                                                operand: {
                                                    node: "SimpleName",
                                                    identifier: "d"
                                                }
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

    test("Cast UnaryExpression", function(assert) {
      var src = multiline(function(){/*
        class Test {
          public static void main(String[] args) {
              i = (int)d;
              i = (int)hello.d++;
              i = ((double)hello.d) > 3.14 ? 42 : -42;
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
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "CastExpression",
                                                type: {
                                                    node: "PrimitiveType",
                                                    primitiveTypeCode: "int"
                                                },
                                                expression: {
                                                    node: "SimpleName",
                                                    identifier: "d"
                                                }
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "CastExpression",
                                                type: {
                                                    node: "PrimitiveType",
                                                    primitiveTypeCode: "int"
                                                },
                                                expression: {
                                                    node: "PostfixExpression",
                                                    operand: {
                                                        node: "QualifiedName",
                                                        qualifier: {
                                                            node: "SimpleName",
                                                            identifier: "hello"
                                                        },
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "d"
                                                        }
                                                    },
                                                    operator: "++"
                                                }
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "ConditionalExpression",
                                                expression: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "ParenthesizedExpression",
                                                        expression: {
                                                            node: "CastExpression",
                                                            type: {
                                                                node: "PrimitiveType",
                                                                primitiveTypeCode: "double"
                                                            },
                                                            expression: {
                                                                node: "QualifiedName",
                                                                qualifier: {
                                                                    node: "SimpleName",
                                                                    identifier: "hello"
                                                                },
                                                                name: {
                                                                    node: "SimpleName",
                                                                    identifier: "d"
                                                                }
                                                            }
                                                        }
                                                    },
                                                    operator: ">",
                                                    rightOperand: {
                                                        node: "NumberLiteral",
                                                        token: "3.14"
                                                    },
                                                },
                                                thenExpression: {
                                                    node: "NumberLiteral",
                                                    token: "42"
                                                },
                                                elseExpression: {
                                                    node: "PrefixExpression",
                                                    operator: "-",
                                                    operand: {
                                                        node: "NumberLiteral",
                                                        token: "42"
                                                    }
                                                }
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

    test("Primary UnaryExpression", function(assert) {
      var src = multiline(function(){/*
        class Test {
          public static void main(String[] args) {
            new Object(); // Primary
            new java.lang.String("hello").hashCode("hello"); // Primary Selector
            new String(new char[]{'h', 'e', 'l', 'l', 'o'}).hashCode().equals(42); // Primary Selector+
            new String(new char[]{'h', 'e', 'l', 'l', 'o'}).hashCode().some(42).equals(42); // Primary Selector+
            Hello.World++; // Primary PostfixOp
            Hello().World++; // Primary Selector PostfixOp
            new java.lang.String("hello").hashCode("hello").v++; // Primary Selector+ PostfixOp
            new java.lang.String("hello").hashCode("hello").h.v++; // Primary Selector+ PostfixOp
            new String("hello").hashCode("hello").h.v().hello.world++;
            ++new String("hello").hashCode("hello").h.v().hello.world;
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
                                        node: "ExpressionStatement",
                                        expression: {
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
                                    },
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
                                                arguments: [
                                                    {
                                                        node: "StringLiteral",
                                                        escapedValue: "\"hello\""
                                                    }
                                                ],
                                                anonymousClassDeclaration: null
                                            },
                                            typeArguments: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "hashCode"
                                            },
                                            arguments: [
                                                {
                                                    node: "StringLiteral",
                                                    escapedValue: "\"hello\""
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "MethodInvocation",
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
                                                            identifier: "String"
                                                        }
                                                    },
                                                    arguments: [
                                                        {
                                                            node: "ArrayCreation",
                                                            type: {
                                                                node: "ArrayType",
                                                                componentType: {
                                                                    node: "PrimitiveType",
                                                                    primitiveTypeCode: "char"
                                                                }
                                                            },
                                                            dimensions: [],
                                                            initializer: {
                                                                node: "ArrayInitializer",
                                                                expressions: [
                                                                    {
                                                                        node: "CharacterLiteral",
                                                                        escapedValue: "'h'"
                                                                    },
                                                                    {
                                                                        node: "CharacterLiteral",
                                                                        escapedValue: "'e'"
                                                                    },
                                                                    {
                                                                        node: "CharacterLiteral",
                                                                        escapedValue: "'l'"
                                                                    },
                                                                    {
                                                                        node: "CharacterLiteral",
                                                                        escapedValue: "'l'"
                                                                    },
                                                                    {
                                                                        node: "CharacterLiteral",
                                                                        escapedValue: "'o'"
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ],
                                                    anonymousClassDeclaration: null
                                                },
                                                typeArguments: [],
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "hashCode"
                                                },
                                                arguments: []
                                            },
                                            typeArguments: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "equals"
                                            },
                                            arguments: [
                                                {
                                                    node: "NumberLiteral",
                                                    token: "42"
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "MethodInvocation",
                                            expression: {
                                                node: "MethodInvocation",
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
                                                                identifier: "String"
                                                            }
                                                        },
                                                        arguments: [
                                                            {
                                                                node: "ArrayCreation",
                                                                type: {
                                                                    node: "ArrayType",
                                                                    componentType: {
                                                                        node: "PrimitiveType",
                                                                        primitiveTypeCode: "char"
                                                                    }
                                                                },
                                                                dimensions: [],
                                                                initializer: {
                                                                    node: "ArrayInitializer",
                                                                    expressions: [
                                                                        {
                                                                            node: "CharacterLiteral",
                                                                            escapedValue: "'h'"
                                                                        },
                                                                        {
                                                                            node: "CharacterLiteral",
                                                                            escapedValue: "'e'"
                                                                        },
                                                                        {
                                                                            node: "CharacterLiteral",
                                                                            escapedValue: "'l'"
                                                                        },
                                                                        {
                                                                            node: "CharacterLiteral",
                                                                            escapedValue: "'l'"
                                                                        },
                                                                        {
                                                                            node: "CharacterLiteral",
                                                                            escapedValue: "'o'"
                                                                        }
                                                                    ]
                                                                }
                                                            }
                                                        ],
                                                        anonymousClassDeclaration: null
                                                    },
                                                    typeArguments: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "hashCode"
                                                    },
                                                    arguments: []
                                                },
                                                typeArguments: [],
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "some"
                                                },
                                                arguments: [
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "42"
                                                    }
                                                ]
                                            },
                                            typeArguments: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "equals"
                                            },
                                            arguments: [
                                                {
                                                    node: "NumberLiteral",
                                                    token: "42"
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "PostfixExpression",
                                            operand: {
                                                node: "QualifiedName",
                                                qualifier: {
                                                    node: "SimpleName",
                                                    identifier: "Hello"
                                                },
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "World"
                                                }
                                            },
                                            operator: "++"
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "PostfixExpression",
                                            operand: {
                                                node: "FieldAccess",
                                                expression: {
                                                    node: "MethodInvocation",
                                                    expression: null,
                                                    typeArguments: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "Hello"
                                                    },
                                                    arguments: []
                                                },
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "World"
                                                }
                                            },
                                            operator: "++"
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "PostfixExpression",
                                            operand: {
                                                node: "FieldAccess",
                                                expression: {
                                                    node: "MethodInvocation",
                                                    expression: {
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
                                                        arguments: [
                                                            {
                                                                node: "StringLiteral",
                                                                escapedValue: "\"hello\""
                                                            }
                                                        ],
                                                        anonymousClassDeclaration: null
                                                    },
                                                    typeArguments: [],
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "hashCode"
                                                    },
                                                    arguments: [
                                                        {
                                                            node: "StringLiteral",
                                                            escapedValue: "\"hello\""
                                                        }
                                                    ]
                                                },
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "v"
                                                }
                                            },
                                            operator: "++"
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "PostfixExpression",
                                            operand: {
                                                node: "FieldAccess",
                                                expression: {
                                                    node: "FieldAccess",
                                                    expression: {
                                                        node: "MethodInvocation",
                                                        expression: {
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
                                                            arguments: [
                                                                {
                                                                    node: "StringLiteral",
                                                                    escapedValue: "\"hello\""
                                                                }
                                                            ],
                                                            anonymousClassDeclaration: null
                                                        },
                                                        typeArguments: [],
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "hashCode"
                                                        },
                                                        arguments: [
                                                            {
                                                                node: "StringLiteral",
                                                                escapedValue: "\"hello\""
                                                            }
                                                        ]
                                                    },
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "h"
                                                    }
                                                },
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "v"
                                                }
                                            },
                                            operator: "++"
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "PostfixExpression",
                                            operand: {
                                                node: "FieldAccess",
                                                expression: {
                                                    node: "FieldAccess",
                                                    expression: {
                                                        node: "MethodInvocation",
                                                        expression: {
                                                            node: "FieldAccess",
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
                                                                            identifier: "String"
                                                                        }
                                                                    },
                                                                    arguments: [
                                                                        {
                                                                            node: "StringLiteral",
                                                                            escapedValue: "\"hello\""
                                                                        }
                                                                    ],
                                                                    anonymousClassDeclaration: null
                                                                },
                                                                typeArguments: [],
                                                                name: {
                                                                    node: "SimpleName",
                                                                    identifier: "hashCode"
                                                                },
                                                                arguments: [
                                                                    {
                                                                        node: "StringLiteral",
                                                                        escapedValue: "\"hello\""
                                                                    }
                                                                ]
                                                            },
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "h"
                                                            }
                                                        },
                                                        typeArguments: [],
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "v"
                                                        },
                                                        arguments: []
                                                    },
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "hello"
                                                    }
                                                },
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "world"
                                                }
                                            },
                                            operator: "++"
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "PrefixExpression",
                                            operator: "++",
                                            operand: {
                                                node: "FieldAccess",
                                                expression: {
                                                    node: "FieldAccess",
                                                    expression: {
                                                        node: "MethodInvocation",
                                                        expression: {
                                                            node: "FieldAccess",
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
                                                                            identifier: "String"
                                                                        }
                                                                    },
                                                                    arguments: [
                                                                        {
                                                                            node: "StringLiteral",
                                                                            escapedValue: "\"hello\""
                                                                        }
                                                                    ],
                                                                    anonymousClassDeclaration: null
                                                                },
                                                                typeArguments: [],
                                                                name: {
                                                                    node: "SimpleName",
                                                                    identifier: "hashCode"
                                                                },
                                                                arguments: [
                                                                    {
                                                                        node: "StringLiteral",
                                                                        escapedValue: "\"hello\""
                                                                    }
                                                                ]
                                                            },
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "h"
                                                            }
                                                        },
                                                        typeArguments: [],
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "v"
                                                        },
                                                        arguments: []
                                                    },
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "hello"
                                                    }
                                                },
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "world"
                                                }
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

    test("Primary ParExpression", function(assert) {
      var src = multiline(function(){/*
        class Test {
          public static void main(String[] args) {
            i = (i);
            i = (i++);
            i = 3*(x+(1-i++))*(a+b);
            if (i++) i--;
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
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "ParenthesizedExpression",
                                                expression: {
                                                    node: "SimpleName",
                                                    identifier: "i"
                                                }
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "ParenthesizedExpression",
                                                expression: {
                                                    node: "PostfixExpression",
                                                    operand: {
                                                        node: "SimpleName",
                                                        identifier: "i"
                                                    },
                                                    operator: "++"
                                                }
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "InfixExpression",
                                                leftOperand: {
                                                    node: "InfixExpression",
                                                    leftOperand: {
                                                        node: "NumberLiteral",
                                                        token: "3"
                                                    },
                                                    operator: "*",
                                                    rightOperand: {
                                                        node: "ParenthesizedExpression",
                                                        expression: {
                                                            node: "InfixExpression",
                                                            leftOperand: {
                                                                node: "SimpleName",
                                                                identifier: "x"
                                                            },
                                                            operator: "+",
                                                            rightOperand: {
                                                                node: "ParenthesizedExpression",
                                                                expression: {
                                                                    node: "InfixExpression",
                                                                    leftOperand: {
                                                                        node: "NumberLiteral",
                                                                        token: "1"
                                                                    },
                                                                    operator: "-",
                                                                    rightOperand: {
                                                                        node: "PostfixExpression",
                                                                        operand: {
                                                                            node: "SimpleName",
                                                                            identifier: "i"
                                                                        },
                                                                        operator: "++"
                                                                    },
                                                                }
                                                            },
                                                        }
                                                    },
                                                },
                                                operator: "*",
                                                rightOperand: {
                                                    node: "ParenthesizedExpression",
                                                    expression: {
                                                        node: "InfixExpression",
                                                        leftOperand: {
                                                            node: "SimpleName",
                                                            identifier: "a"
                                                        },
                                                        operator: "+",
                                                        rightOperand: {
                                                            node: "SimpleName",
                                                            identifier: "b"
                                                        },
                                                    }
                                                },
                                            }
                                        }
                                    },
                                    {
                                        node: "IfStatement",
                                        expression: {
                                            node: "PostfixExpression",
                                            operand: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "++"
                                        },
                                        thenStatement: {
                                            node: "ExpressionStatement",
                                            expression: {
                                                node: "PostfixExpression",
                                                operand: {
                                                    node: "SimpleName",
                                                    identifier: "i"
                                                },
                                                operator: "--"
                                            }
                                        },
                                        elseStatement: null
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

    test("Primary NonWildcardTypeArguments", function(assert) {
      var src = multiline(function(){/*
        class Test {
          public static void main(String[] args) {
            <Integer>super();
            <Integer>super(a, b);
            <Integer>this();
            <Integer>this(a,b,c);
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
                                        node: "SuperConstructorInvocation",
                                        expression: null,
                                        typeArguments: [
                                            {
                                                node: "SimpleType",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "Integer"
                                                }
                                            }
                                        ],
                                        arguments: []
                                    },
                                    {
                                        node: "SuperConstructorInvocation",
                                        expression: null,
                                        typeArguments: [
                                            {
                                                node: "SimpleType",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "Integer"
                                                }
                                            }
                                        ],
                                        arguments: [
                                            {
                                                node: "SimpleName",
                                                identifier: "a"
                                            },
                                            {
                                                node: "SimpleName",
                                                identifier: "b"
                                            }
                                        ]
                                    },
                                    {
                                        node: "ConstructorInvocation",
                                        typeArguments: [
                                            {
                                                node: "SimpleType",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "Integer"
                                                }
                                            }
                                        ],
                                        arguments: []
                                    },
                                    {
                                        node: "ConstructorInvocation",
                                        typeArguments: [
                                            {
                                                node: "SimpleType",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "Integer"
                                                }
                                            }
                                        ],
                                        arguments: [
                                            {
                                                node: "SimpleName",
                                                identifier: "a"
                                            },
                                            {
                                                node: "SimpleName",
                                                identifier: "b"
                                            },
                                            {
                                                node: "SimpleName",
                                                identifier: "c"
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

    test("Primary this/super SuperSuffix", function(assert) {
      var src = multiline(function(){/*
        class Test {
          public static void main(String[] args) {
            super();
            super(42);
            super(a, b, c);
            this();
            this(42);
            this(a,b,c);
            super.hello();
            super.hello(a, b, c);
            super.<Integer>hello();
            super.<Integer, String>hello(a, b, c);
            this.hello(a, b, c);
            this.hello.world();
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
                                        node: "SuperConstructorInvocation",
                                        expression: null,
                                        typeArguments: [],
                                        arguments: []
                                    },
                                    {
                                        node: "SuperConstructorInvocation",
                                        expression: null,
                                        typeArguments: [],
                                        arguments: [
                                            {
                                                node: "NumberLiteral",
                                                token: "42"
                                            }
                                        ]
                                    },
                                    {
                                        node: "SuperConstructorInvocation",
                                        expression: null,
                                        typeArguments: [],
                                        arguments: [
                                            {
                                                node: "SimpleName",
                                                identifier: "a"
                                            },
                                            {
                                                node: "SimpleName",
                                                identifier: "b"
                                            },
                                            {
                                                node: "SimpleName",
                                                identifier: "c"
                                            }
                                        ]
                                    },
                                    {
                                        node: "ConstructorInvocation",
                                        typeArguments: [],
                                        arguments: []
                                    },
                                    {
                                        node: "ConstructorInvocation",
                                        typeArguments: [],
                                        arguments: [
                                            {
                                                node: "NumberLiteral",
                                                token: "42"
                                            }
                                        ]
                                    },
                                    {
                                        node: "ConstructorInvocation",
                                        typeArguments: [],
                                        arguments: [
                                            {
                                                node: "SimpleName",
                                                identifier: "a"
                                            },
                                            {
                                                node: "SimpleName",
                                                identifier: "b"
                                            },
                                            {
                                                node: "SimpleName",
                                                identifier: "c"
                                            }
                                        ]
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "SuperMethodInvocation",
                                            qualifier: null,
                                            typeArguments: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "hello"
                                            },
                                            arguments: []
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "SuperMethodInvocation",
                                            qualifier: null,
                                            typeArguments: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "hello"
                                            },
                                            arguments: [
                                                {
                                                    node: "SimpleName",
                                                    identifier: "a"
                                                },
                                                {
                                                    node: "SimpleName",
                                                    identifier: "b"
                                                },
                                                {
                                                    node: "SimpleName",
                                                    identifier: "c"
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "SuperMethodInvocation",
                                            qualifier: null,
                                            typeArguments: [
                                                {
                                                    node: "SimpleType",
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "Integer"
                                                    }
                                                }
                                            ],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "hello"
                                            },
                                            arguments: []
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "SuperMethodInvocation",
                                            qualifier: null,
                                            typeArguments: [
                                                {
                                                    node: "SimpleType",
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "Integer"
                                                    }
                                                },
                                                {
                                                    node: "SimpleType",
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "String"
                                                    }
                                                }
                                            ],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "hello"
                                            },
                                            arguments: [
                                                {
                                                    node: "SimpleName",
                                                    identifier: "a"
                                                },
                                                {
                                                    node: "SimpleName",
                                                    identifier: "b"
                                                },
                                                {
                                                    node: "SimpleName",
                                                    identifier: "c"
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "MethodInvocation",
                                            expression: {
                                                node: "ThisExpression",
                                                qualifier: null
                                            },
                                            typeArguments: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "hello"
                                            },
                                            arguments: [
                                                {
                                                    node: "SimpleName",
                                                    identifier: "a"
                                                },
                                                {
                                                    node: "SimpleName",
                                                    identifier: "b"
                                                },
                                                {
                                                    node: "SimpleName",
                                                    identifier: "c"
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "MethodInvocation",
                                            expression: {
                                                node: "FieldAccess",
                                                expression: {
                                                    node: "ThisExpression",
                                                    qualifier: null
                                                },
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "hello"
                                                }
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
                        }
                    ]
                }
            ]
        }
      );
    });

    test("Primary NEW", function(assert) {
      var src = multiline(function(){/*
        class Test {
          public static void main(String[] args) {
            new String();
            new String(a);
            new java.util.Array(100);
            new String(new String(), 100);
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
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "ClassInstanceCreation",
                                            expression: null,
                                            typeArguments: [],
                                            type: {
                                                node: "SimpleType",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "String"
                                                }
                                            },
                                            arguments: [],
                                            anonymousClassDeclaration: null
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "ClassInstanceCreation",
                                            expression: null,
                                            typeArguments: [],
                                            type: {
                                                node: "SimpleType",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "String"
                                                }
                                            },
                                            arguments: [
                                                {
                                                    node: "SimpleName",
                                                    identifier: "a"
                                                }
                                            ],
                                            anonymousClassDeclaration: null
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
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
                                                        identifier: "Array"
                                                    }
                                                }
                                            },
                                            arguments: [
                                                {
                                                    node: "NumberLiteral",
                                                    token: "100"
                                                }
                                            ],
                                            anonymousClassDeclaration: null
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "ClassInstanceCreation",
                                            expression: null,
                                            typeArguments: [],
                                            type: {
                                                node: "SimpleType",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "String"
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
                                                            identifier: "String"
                                                        }
                                                    },
                                                    arguments: [],
                                                    anonymousClassDeclaration: null
                                                },
                                                {
                                                    node: "NumberLiteral",
                                                    token: "100"
                                                }
                                            ],
                                            anonymousClassDeclaration: null
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

    test("Primary QualifiedIdentifierSuffix", function(assert) {
      var src = multiline(function(){/*
        class Test {
          public static void main(String[] args) {
            c = Hello.World[].class;
            c = Hello.World[][].class;
            c = Hello[][][][].class;
            i = world[42];
            i = world[i++];
            i = hello.world[--i];
            synchronized(Test.class) {}
            synchronized(Hello.World.class){hello.world[--i]++;}
            hello.<String>world();
            hello.world.<String, Object>world(42);
            z = hello.world.<String, Object>world(42).x.field;
            hello.world.<String, Object>super();
            hello.world.<String, Object>super(42);
            x = super.field;
            x = super.field++;
            a = hello.world.super.field++;
            a = hello.world.super.field;
            b = super.field.subfield;
            x = this;
            y = this.a;
            this.b();
            this.a.b(42);
            hello.super();
            hello.world.super(42);
            hello.new World(){};
            hello.world.new <String>World(42){};
            hello.world.new <String>World<Object>(42){};
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
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "c"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "TypeLiteral",
                                                type: {
                                                    node: "ArrayType",
                                                    componentType: {
                                                        node: "SimpleType",
                                                        name: {
                                                            node: "QualifiedName",
                                                            qualifier: {
                                                                node: "SimpleName",
                                                                identifier: "Hello"
                                                            },
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "World"
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "c"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "TypeLiteral",
                                                type: {
                                                    node: "ArrayType",
                                                    componentType: {
                                                        node: "ArrayType",
                                                        componentType: {
                                                            node: "SimpleType",
                                                            name: {
                                                                node: "QualifiedName",
                                                                qualifier: {
                                                                    node: "SimpleName",
                                                                    identifier: "Hello"
                                                                },
                                                                name: {
                                                                    node: "SimpleName",
                                                                    identifier: "World"
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "c"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "TypeLiteral",
                                                type: {
                                                    node: "ArrayType",
                                                    componentType: {
                                                        node: "ArrayType",
                                                        componentType: {
                                                            node: "ArrayType",
                                                            componentType: {
                                                                node: "ArrayType",
                                                                componentType: {
                                                                    node: "SimpleType",
                                                                    name: {
                                                                        node: "SimpleName",
                                                                        identifier: "Hello"
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "ArrayAccess",
                                                array: {
                                                    node: "SimpleName",
                                                    identifier: "world"
                                                },
                                                index: {
                                                    node: "NumberLiteral",
                                                    token: "42"
                                                }
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "ArrayAccess",
                                                array: {
                                                    node: "SimpleName",
                                                    identifier: "world"
                                                },
                                                index: {
                                                    node: "PostfixExpression",
                                                    operand: {
                                                        node: "SimpleName",
                                                        identifier: "i"
                                                    },
                                                    operator: "++"
                                                }
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "ArrayAccess",
                                                array: {
                                                    node: "QualifiedName",
                                                    qualifier: {
                                                        node: "SimpleName",
                                                        identifier: "hello"
                                                    },
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "world"
                                                    }
                                                },
                                                index: {
                                                    node: "PrefixExpression",
                                                    operator: "--",
                                                    operand: {
                                                        node: "SimpleName",
                                                        identifier: "i"
                                                    }
                                                }
                                            }
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
                                            statements: []
                                        }
                                    },
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
                                                        identifier: "Hello"
                                                    },
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "World"
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
                                                        node: "PostfixExpression",
                                                        operand: {
                                                            node: "ArrayAccess",
                                                            array: {
                                                                node: "QualifiedName",
                                                                qualifier: {
                                                                    node: "SimpleName",
                                                                    identifier: "hello"
                                                                },
                                                                name: {
                                                                    node: "SimpleName",
                                                                    identifier: "world"
                                                                }
                                                            },
                                                            index: {
                                                                node: "PrefixExpression",
                                                                operator: "--",
                                                                operand: {
                                                                    node: "SimpleName",
                                                                    identifier: "i"
                                                                }
                                                            }
                                                        },
                                                        operator: "++"
                                                    }
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "MethodInvocation",
                                            expression: {
                                                node: "SimpleName",
                                                identifier: "hello"
                                            },
                                            typeArguments: [
                                                {
                                                    node: "SimpleType",
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "String"
                                                    }
                                                }
                                            ],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "world"
                                            },
                                            arguments: []
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "MethodInvocation",
                                            expression: {
                                                node: "QualifiedName",
                                                qualifier: {
                                                    node: "SimpleName",
                                                    identifier: "hello"
                                                },
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "world"
                                                }
                                            },
                                            typeArguments: [
                                                {
                                                    node: "SimpleType",
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "String"
                                                    }
                                                },
                                                {
                                                    node: "SimpleType",
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "Object"
                                                    }
                                                }
                                            ],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "world"
                                            },
                                            arguments: [
                                                {
                                                    node: "NumberLiteral",
                                                    token: "42"
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "z"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "FieldAccess",
                                                expression: {
                                                    node: "FieldAccess",
                                                    expression: {
                                                        node: "MethodInvocation",
                                                        expression: {
                                                            node: "QualifiedName",
                                                            qualifier: {
                                                                node: "SimpleName",
                                                                identifier: "hello"
                                                            },
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "world"
                                                            }
                                                        },
                                                        typeArguments: [
                                                            {
                                                                node: "SimpleType",
                                                                name: {
                                                                    node: "SimpleName",
                                                                    identifier: "String"
                                                                }
                                                            },
                                                            {
                                                                node: "SimpleType",
                                                                name: {
                                                                    node: "SimpleName",
                                                                    identifier: "Object"
                                                                }
                                                            }
                                                        ],
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "world"
                                                        },
                                                        arguments: [
                                                            {
                                                                node: "NumberLiteral",
                                                                token: "42"
                                                            }
                                                        ]
                                                    },
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "x"
                                                    }
                                                },
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "field"
                                                }
                                            }
                                        }
                                    },
                                    {
                                        node: "SuperConstructorInvocation",
                                        expression: {
                                            node: "QualifiedName",
                                            qualifier: {
                                                node: "SimpleName",
                                                identifier: "hello"
                                            },
                                            name: {
                                                node: "SimpleName",
                                                identifier: "world"
                                            }
                                        },
                                        typeArguments: [
                                            {
                                                node: "SimpleType",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "String"
                                                }
                                            },
                                            {
                                                node: "SimpleType",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "Object"
                                                }
                                            }
                                        ],
                                        arguments: []
                                    },
                                    {
                                        node: "SuperConstructorInvocation",
                                        expression: {
                                            node: "QualifiedName",
                                            qualifier: {
                                                node: "SimpleName",
                                                identifier: "hello"
                                            },
                                            name: {
                                                node: "SimpleName",
                                                identifier: "world"
                                            }
                                        },
                                        typeArguments: [
                                            {
                                                node: "SimpleType",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "String"
                                                }
                                            },
                                            {
                                                node: "SimpleType",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "Object"
                                                }
                                            }
                                        ],
                                        arguments: [
                                            {
                                                node: "NumberLiteral",
                                                token: "42"
                                            }
                                        ]
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "x"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "SuperFieldAccess",
                                                qualifier: null,
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "field"
                                                }
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "x"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "PostfixExpression",
                                                operand: {
                                                    node: "SuperFieldAccess",
                                                    qualifier: null,
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "field"
                                                    }
                                                },
                                                operator: "++"
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "a"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "PostfixExpression",
                                                operand: {
                                                    node: "SuperFieldAccess",
                                                    qualifier: {
                                                        node: "QualifiedName",
                                                        qualifier: {
                                                            node: "SimpleName",
                                                            identifier: "hello"
                                                        },
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "world"
                                                        }
                                                    },
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "field"
                                                    }
                                                },
                                                operator: "++"
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "a"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "SuperFieldAccess",
                                                qualifier: {
                                                    node: "QualifiedName",
                                                    qualifier: {
                                                        node: "SimpleName",
                                                        identifier: "hello"
                                                    },
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "world"
                                                    }
                                                },
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "field"
                                                }
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "b"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "FieldAccess",
                                                expression: {
                                                    node: "SuperFieldAccess",
                                                    qualifier: null,
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "field"
                                                    }
                                                },
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "subfield"
                                                }
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "x"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "ThisExpression",
                                                qualifier: null
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "y"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "FieldAccess",
                                                expression: {
                                                    node: "ThisExpression",
                                                    qualifier: null
                                                },
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "a"
                                                }
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "MethodInvocation",
                                            expression: {
                                                node: "ThisExpression",
                                                qualifier: null
                                            },
                                            typeArguments: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "b"
                                            },
                                            arguments: []
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "MethodInvocation",
                                            expression: {
                                                node: "FieldAccess",
                                                expression: {
                                                    node: "ThisExpression",
                                                    qualifier: null
                                                },
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "a"
                                                }
                                            },
                                            typeArguments: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "b"
                                            },
                                            arguments: [
                                                {
                                                    node: "NumberLiteral",
                                                    token: "42"
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        node: "SuperConstructorInvocation",
                                        expression: {
                                            node: "SimpleName",
                                            identifier: "hello"
                                        },
                                        typeArguments: [],
                                        arguments: []
                                    },
                                    {
                                        node: "SuperConstructorInvocation",
                                        expression: {
                                            node: "QualifiedName",
                                            qualifier: {
                                                node: "SimpleName",
                                                identifier: "hello"
                                            },
                                            name: {
                                                node: "SimpleName",
                                                identifier: "world"
                                            }
                                        },
                                        typeArguments: [],
                                        arguments: [
                                            {
                                                node: "NumberLiteral",
                                                token: "42"
                                            }
                                        ]
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "ClassInstanceCreation",
                                            expression: {
                                                node: "SimpleName",
                                                identifier: "hello"
                                            },
                                            typeArguments: [],
                                            type: {
                                                node: "SimpleType",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "World"
                                                }
                                            },
                                            arguments: [],
                                            anonymousClassDeclaration: {
                                                node: "AnonymousClassDeclaration",
                                                bodyDeclarations: []
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "ClassInstanceCreation",
                                            expression: {
                                                node: "QualifiedName",
                                                qualifier: {
                                                    node: "SimpleName",
                                                    identifier: "hello"
                                                },
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "world"
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
                                            ],
                                            type: {
                                                node: "SimpleType",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "World"
                                                }
                                            },
                                            arguments: [
                                                {
                                                    node: "NumberLiteral",
                                                    token: "42"
                                                }
                                            ],
                                            anonymousClassDeclaration: {
                                                node: "AnonymousClassDeclaration",
                                                bodyDeclarations: []
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "ClassInstanceCreation",
                                            expression: {
                                                node: "QualifiedName",
                                                qualifier: {
                                                    node: "SimpleName",
                                                    identifier: "hello"
                                                },
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "world"
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
                                            ],
                                            type: {
                                                node: "ParameterizedType",
                                                type: {
                                                    node: "SimpleType",
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "World"
                                                    }
                                                },
                                                typeArguments: [
                                                    {
                                                        node: "SimpleType",
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "Object"
                                                        }
                                                    }
                                                ]
                                            },
                                            arguments: [
                                                {
                                                    node: "NumberLiteral",
                                                    token: "42"
                                                }
                                            ],
                                            anonymousClassDeclaration: {
                                                node: "AnonymousClassDeclaration",
                                                bodyDeclarations: []
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

    test("Primary rest", function(assert) {
      var src = multiline(function(){/*
        class Test {
          public static void main(String[] args) {
            c = Hello.World++;
            t = int.class;
            y = int[].class;
            i = int[][][].class;
            cls = void.class;
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
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "c"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "PostfixExpression",
                                                operand: {
                                                    node: "QualifiedName",
                                                    qualifier: {
                                                        node: "SimpleName",
                                                        identifier: "Hello"
                                                    },
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "World"
                                                    }
                                                },
                                                operator: "++"
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "t"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "TypeLiteral",
                                                type: {
                                                    node: "PrimitiveType",
                                                    primitiveTypeCode: "int"
                                                }
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "y"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "TypeLiteral",
                                                type: {
                                                    node: "ArrayType",
                                                    componentType: {
                                                        node: "PrimitiveType",
                                                        primitiveTypeCode: "int"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "TypeLiteral",
                                                type: {
                                                    node: "ArrayType",
                                                    componentType: {
                                                        node: "ArrayType",
                                                        componentType: {
                                                            node: "ArrayType",
                                                            componentType: {
                                                                node: "PrimitiveType",
                                                                primitiveTypeCode: "int"
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "cls"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "TypeLiteral",
                                                type: {
                                                    node: "PrimitiveType",
                                                    primitiveTypeCode: "void"
                                                }
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

    test("Selector SuperSuffix", function(assert) {
      var src = multiline(function(){/*
        class Test {
          public static void main(String[] args) {
            this.world(42);
            int a = this.world;
            this.<String>world(42);
            super(42);
            x = super.hello;
            super.hello.world(42);
            this.hello.new Runnable(){ @override void run(){} };
            Outer.this.hello.new <String>Runnable(){ @override void run(){} };
            super.hello[42]++;
            this.hello[42]++;
            Outer.this.hello[42]++;
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
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "MethodInvocation",
                                            expression: {
                                                node: "ThisExpression",
                                                qualifier: null
                                            },
                                            typeArguments: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "world"
                                            },
                                            arguments: [
                                                {
                                                    node: "NumberLiteral",
                                                    token: "42"
                                                }
                                            ]
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
                                                    identifier: "a"
                                                },
                                                extraDimensions: 0,
                                                initializer: {
                                                    node: "FieldAccess",
                                                    expression: {
                                                        node: "ThisExpression",
                                                        qualifier: null
                                                    },
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "world"
                                                    }
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "MethodInvocation",
                                            expression: {
                                                node: "ThisExpression",
                                                qualifier: null
                                            },
                                            typeArguments: [
                                                {
                                                    node: "SimpleType",
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "String"
                                                    }
                                                }
                                            ],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "world"
                                            },
                                            arguments: [
                                                {
                                                    node: "NumberLiteral",
                                                    token: "42"
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        node: "SuperConstructorInvocation",
                                        expression: null,
                                        typeArguments: [],
                                        arguments: [
                                            {
                                                node: "NumberLiteral",
                                                token: "42"
                                            }
                                        ]
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "x"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "SuperFieldAccess",
                                                qualifier: null,
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "hello"
                                                }
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "MethodInvocation",
                                            expression: {
                                                node: "SuperFieldAccess",
                                                qualifier: null,
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "hello"
                                                }
                                            },
                                            typeArguments: [],
                                            name: {
                                                node: "SimpleName",
                                                identifier: "world"
                                            },
                                            arguments: [
                                                {
                                                    node: "NumberLiteral",
                                                    token: "42"
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "ClassInstanceCreation",
                                            expression: {
                                                node: "FieldAccess",
                                                expression: {
                                                    node: "ThisExpression",
                                                    qualifier: null
                                                },
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "hello"
                                                }
                                            },
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
                                                                    identifier: "override"
                                                                }
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
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "ClassInstanceCreation",
                                            expression: {
                                                node: "FieldAccess",
                                                expression: {
                                                    node: "ThisExpression",
                                                    qualifier: {
                                                        node: "SimpleName",
                                                        identifier: "Outer"
                                                    }
                                                },
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "hello"
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
                                            ],
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
                                                                    identifier: "override"
                                                                }
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
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "PostfixExpression",
                                            operand: {
                                                node: "ArrayAccess",
                                                array: {
                                                    node: "SuperFieldAccess",
                                                    qualifier: null,
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "hello"
                                                    }
                                                },
                                                index: {
                                                    node: "NumberLiteral",
                                                    token: "42"
                                                }
                                            },
                                            operator: "++"
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "PostfixExpression",
                                            operand: {
                                                node: "ArrayAccess",
                                                array: {
                                                    node: "FieldAccess",
                                                    expression: {
                                                        node: "ThisExpression",
                                                        qualifier: null
                                                    },
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "hello"
                                                    }
                                                },
                                                index: {
                                                    node: "NumberLiteral",
                                                    token: "42"
                                                }
                                            },
                                            operator: "++"
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "PostfixExpression",
                                            operand: {
                                                node: "ArrayAccess",
                                                array: {
                                                    node: "FieldAccess",
                                                    expression: {
                                                        node: "ThisExpression",
                                                        qualifier: {
                                                            node: "SimpleName",
                                                            identifier: "Outer"
                                                        }
                                                    },
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "hello"
                                                    }
                                                },
                                                index: {
                                                    node: "NumberLiteral",
                                                    token: "42"
                                                }
                                            },
                                            operator: "++"
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

    test("Expressions rest", function(assert) {
      var src = multiline(function(){/*
        class Test {
          public static void main(String[] args) {
            c = new byte[]{42};
            c = new short[];
            c = new int[5][];
            c = new long[5][42][];
            c = new float[5][42][x];
            c = new double[5][42][x][];
            boolean[] c = new boolean[42];
            c = new Hello[] {new Hello(), new Hello(42), new Hello(world)};
            c = new Hello.World[][] {
              {new Hello(), new Hello(42), new Hello(){ @override world(){} }},
              {new Hello<String>(){}, new Hello<String>(42), new Hello(world)}
            };
            x();
            x(42);
            x(y, 42);
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
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "c"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "ArrayCreation",
                                                type: {
                                                    node: "ArrayType",
                                                    componentType: {
                                                        node: "PrimitiveType",
                                                        primitiveTypeCode: "byte"
                                                    }
                                                },
                                                dimensions: [],
                                                initializer: {
                                                    node: "ArrayInitializer",
                                                    expressions: [
                                                        {
                                                            node: "NumberLiteral",
                                                            token: "42"
                                                        }
                                                    ]
                                                }
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "c"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "ArrayCreation",
                                                type: {
                                                    node: "ArrayType",
                                                    componentType: {
                                                        node: "PrimitiveType",
                                                        primitiveTypeCode: "short"
                                                    }
                                                },
                                                dimensions: [],
                                                initializer: null
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "c"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "ArrayCreation",
                                                type: {
                                                    node: "ArrayType",
                                                    componentType: {
                                                        node: "ArrayType",
                                                        componentType: {
                                                            node: "PrimitiveType",
                                                            primitiveTypeCode: "int"
                                                        }
                                                    }
                                                },
                                                dimensions: [
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "5"
                                                    }
                                                ],
                                                initializer: null
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "c"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "ArrayCreation",
                                                type: {
                                                    node: "ArrayType",
                                                    componentType: {
                                                        node: "ArrayType",
                                                        componentType: {
                                                            node: "ArrayType",
                                                            componentType: {
                                                                node: "PrimitiveType",
                                                                primitiveTypeCode: "long"
                                                            }
                                                        }
                                                    }
                                                },
                                                dimensions: [
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "5"
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "42"
                                                    }
                                                ],
                                                initializer: null
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "c"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "ArrayCreation",
                                                type: {
                                                    node: "ArrayType",
                                                    componentType: {
                                                        node: "ArrayType",
                                                        componentType: {
                                                            node: "ArrayType",
                                                            componentType: {
                                                                node: "PrimitiveType",
                                                                primitiveTypeCode: "float"
                                                            }
                                                        }
                                                    }
                                                },
                                                dimensions: [
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "5"
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "42"
                                                    },
                                                    {
                                                        node: "SimpleName",
                                                        identifier: "x"
                                                    }
                                                ],
                                                initializer: null
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "c"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "ArrayCreation",
                                                type: {
                                                    node: "ArrayType",
                                                    componentType: {
                                                        node: "ArrayType",
                                                        componentType: {
                                                            node: "ArrayType",
                                                            componentType: {
                                                                node: "ArrayType",
                                                                componentType: {
                                                                    node: "PrimitiveType",
                                                                    primitiveTypeCode: "double"
                                                                }
                                                            }
                                                        }
                                                    }
                                                },
                                                dimensions: [
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "5"
                                                    },
                                                    {
                                                        node: "NumberLiteral",
                                                        token: "42"
                                                    },
                                                    {
                                                        node: "SimpleName",
                                                        identifier: "x"
                                                    }
                                                ],
                                                initializer: null
                                            }
                                        }
                                    },
                                    {
                                        node: "VariableDeclarationStatement",
                                        modifiers: [],
                                        type: {
                                            node: "ArrayType",
                                            componentType: {
                                                node: "PrimitiveType",
                                                primitiveTypeCode: "boolean"
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
                                                initializer: {
                                                    node: "ArrayCreation",
                                                    type: {
                                                        node: "ArrayType",
                                                        componentType: {
                                                            node: "PrimitiveType",
                                                            primitiveTypeCode: "boolean"
                                                        }
                                                    },
                                                    dimensions: [
                                                        {
                                                            node: "NumberLiteral",
                                                            token: "42"
                                                        }
                                                    ],
                                                    initializer: null
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "c"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "ArrayCreation",
                                                type: {
                                                    node: "ArrayType",
                                                    componentType: {
                                                        node: "SimpleType",
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "Hello"
                                                        }
                                                    }
                                                },
                                                dimensions: [],
                                                initializer: {
                                                    node: "ArrayInitializer",
                                                    expressions: [
                                                        {
                                                            node: "ClassInstanceCreation",
                                                            expression: null,
                                                            typeArguments: [],
                                                            type: {
                                                                node: "SimpleType",
                                                                name: {
                                                                    node: "SimpleName",
                                                                    identifier: "Hello"
                                                                }
                                                            },
                                                            arguments: [],
                                                            anonymousClassDeclaration: null
                                                        },
                                                        {
                                                            node: "ClassInstanceCreation",
                                                            expression: null,
                                                            typeArguments: [],
                                                            type: {
                                                                node: "SimpleType",
                                                                name: {
                                                                    node: "SimpleName",
                                                                    identifier: "Hello"
                                                                }
                                                            },
                                                            arguments: [
                                                                {
                                                                    node: "NumberLiteral",
                                                                    token: "42"
                                                                }
                                                            ],
                                                            anonymousClassDeclaration: null
                                                        },
                                                        {
                                                            node: "ClassInstanceCreation",
                                                            expression: null,
                                                            typeArguments: [],
                                                            type: {
                                                                node: "SimpleType",
                                                                name: {
                                                                    node: "SimpleName",
                                                                    identifier: "Hello"
                                                                }
                                                            },
                                                            arguments: [
                                                                {
                                                                    node: "SimpleName",
                                                                    identifier: "world"
                                                                }
                                                            ],
                                                            anonymousClassDeclaration: null
                                                        }
                                                    ]
                                                }
                                            }
                                        }
                                    },
                                    {
                                        node: "ExpressionStatement",
                                        expression: {
                                            node: "Assignment",
                                            leftHandSide: {
                                                node: "SimpleName",
                                                identifier: "c"
                                            },
                                            operator: "=",
                                            rightHandSide: {
                                                node: "ArrayCreation",
                                                type: {
                                                    node: "ArrayType",
                                                    componentType: {
                                                        node: "ArrayType",
                                                        componentType: {
                                                            node: "SimpleType",
                                                            name: {
                                                                node: "QualifiedName",
                                                                qualifier: {
                                                                    node: "SimpleName",
                                                                    identifier: "Hello"
                                                                },
                                                                name: {
                                                                    node: "SimpleName",
                                                                    identifier: "World"
                                                                }
                                                            }
                                                        }
                                                    }
                                                },
                                                dimensions: [],
                                                initializer: {
                                                    node: "ArrayInitializer",
                                                    expressions: [
                                                        {
                                                            node: "ArrayInitializer",
                                                            expressions: [
                                                                {
                                                                    node: "ClassInstanceCreation",
                                                                    expression: null,
                                                                    typeArguments: [],
                                                                    type: {
                                                                        node: "SimpleType",
                                                                        name: {
                                                                            node: "SimpleName",
                                                                            identifier: "Hello"
                                                                        }
                                                                    },
                                                                    arguments: [],
                                                                    anonymousClassDeclaration: null
                                                                },
                                                                {
                                                                    node: "ClassInstanceCreation",
                                                                    expression: null,
                                                                    typeArguments: [],
                                                                    type: {
                                                                        node: "SimpleType",
                                                                        name: {
                                                                            node: "SimpleName",
                                                                            identifier: "Hello"
                                                                        }
                                                                    },
                                                                    arguments: [
                                                                        {
                                                                            node: "NumberLiteral",
                                                                            token: "42"
                                                                        }
                                                                    ],
                                                                    anonymousClassDeclaration: null
                                                                },
                                                                {
                                                                    node: "ClassInstanceCreation",
                                                                    expression: null,
                                                                    typeArguments: [],
                                                                    type: {
                                                                        node: "SimpleType",
                                                                        name: {
                                                                            node: "SimpleName",
                                                                            identifier: "Hello"
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
                                                                                            identifier: "override"
                                                                                        }
                                                                                    }
                                                                                ],
                                                                                constructor: true,
                                                                                typeParameters: [],
                                                                                returnType2: null,
                                                                                name: {
                                                                                    node: "SimpleName",
                                                                                    identifier: "world"
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
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            node: "ArrayInitializer",
                                                            expressions: [
                                                                {
                                                                    node: "ClassInstanceCreation",
                                                                    expression: null,
                                                                    typeArguments: [],
                                                                    type: {
                                                                        node: "ParameterizedType",
                                                                        type: {
                                                                            node: "SimpleType",
                                                                            name: {
                                                                                node: "SimpleName",
                                                                                identifier: "Hello"
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
                                                                    arguments: [],
                                                                    anonymousClassDeclaration: {
                                                                        node: "AnonymousClassDeclaration",
                                                                        bodyDeclarations: []
                                                                    }
                                                                },
                                                                {
                                                                    node: "ClassInstanceCreation",
                                                                    expression: null,
                                                                    typeArguments: [],
                                                                    type: {
                                                                        node: "ParameterizedType",
                                                                        type: {
                                                                            node: "SimpleType",
                                                                            name: {
                                                                                node: "SimpleName",
                                                                                identifier: "Hello"
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
                                                                    arguments: [
                                                                        {
                                                                            node: "NumberLiteral",
                                                                            token: "42"
                                                                        }
                                                                    ],
                                                                    anonymousClassDeclaration: null
                                                                },
                                                                {
                                                                    node: "ClassInstanceCreation",
                                                                    expression: null,
                                                                    typeArguments: [],
                                                                    type: {
                                                                        node: "SimpleType",
                                                                        name: {
                                                                            node: "SimpleName",
                                                                            identifier: "Hello"
                                                                        }
                                                                    },
                                                                    arguments: [
                                                                        {
                                                                            node: "SimpleName",
                                                                            identifier: "world"
                                                                        }
                                                                    ],
                                                                    anonymousClassDeclaration: null
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            }
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
                                                identifier: "x"
                                            },
                                            arguments: []
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
                                                identifier: "x"
                                            },
                                            arguments: [
                                                {
                                                    node: "NumberLiteral",
                                                    token: "42"
                                                }
                                            ]
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
                                                identifier: "x"
                                            },
                                            arguments: [
                                                {
                                                    node: "SimpleName",
                                                    identifier: "y"
                                                },
                                                {
                                                    node: "NumberLiteral",
                                                    token: "42"
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

