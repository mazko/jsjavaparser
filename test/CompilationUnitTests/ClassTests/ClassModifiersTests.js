
    test("default class modifier", function(assert) {
      var src = "class Hello {}";
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
                    interface: false,
                    name: {
                        node: "SimpleName",
                        identifier: "Hello"
                    },
                    typeParameters: [

                    ],
                    superclassType: null,
                    superInterfaceTypes: [

                    ],
                    bodyDeclarations: [

                    ]
                }
            ]
        }
      );
    });

    test("single class modifier", function(assert) {
      var src = "final class Hello {}";
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
                            keyword: "final"
                        }
                    ],
                    interface: false,
                    name: {
                        node: "SimpleName",
                        identifier: "Hello"
                    },
                    typeParameters: [

                    ],
                    superclassType: null,
                    superInterfaceTypes: [

                    ],
                    bodyDeclarations: [

                    ]
                }
            ]
        }
      );
    });

    test("multi class modifier", function(assert) {
      var src = "final private class Hello {}";
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
                            keyword: "final"
                        },
                        {
                            node: "Modifier",
                            keyword: "private"
                        }
                    ],
                    interface: false,
                    name: {
                        node: "SimpleName",
                        identifier: "Hello"
                    },
                    typeParameters: [

                    ],
                    superclassType: null,
                    superInterfaceTypes: [

                    ],
                    bodyDeclarations: [

                    ]
                }
            ]
        }
      );
    });

    test("default class modifier ws annotation", function(assert) {
      var src = multiline(function(){/*
        @Author(@Name(first = "Joe", last = "Hacker"))
        class Hello {}
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
                            node: "SingleMemberAnnotation",
                            typeName: {
                                node: "SimpleName",
                                identifier: "Author"
                            },
                            value: {
                                node: "NormalAnnotation",
                                typeName: {
                                    node: "SimpleName",
                                    identifier: "Name"
                                },
                                values: [
                                    {
                                        node: "MemberValuePair",
                                        name: {
                                            node: "SimpleName",
                                            identifier: "first"
                                        },
                                        value: {
                                            node: "StringLiteral",
                                            escapedValue: "\"Joe\""
                                        }
                                    },
                                    {
                                        node: "MemberValuePair",
                                        name: {
                                            node: "SimpleName",
                                            identifier: "last"
                                        },
                                        value: {
                                            node: "StringLiteral",
                                            escapedValue: "\"Hacker\""
                                        }
                                    }
                                ]
                            }
                        }
                    ],
                    interface: false,
                    name: {
                        node: "SimpleName",
                        identifier: "Hello"
                    },
                    typeParameters: [

                    ],
                    superclassType: null,
                    superInterfaceTypes: [

                    ],
                    bodyDeclarations: [

                    ]
                }
            ]
        }
      );
    });

    test("multi class modifier ws annotation", function(assert) {
      var src = multiline(function(){/*
        @Author(@Name(first = "Joe", last = "Hacker"))
        private static class Hello {}
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
                            node: "SingleMemberAnnotation",
                            typeName: {
                                node: "SimpleName",
                                identifier: "Author"
                            },
                            value: {
                                node: "NormalAnnotation",
                                typeName: {
                                    node: "SimpleName",
                                    identifier: "Name"
                                },
                                values: [
                                    {
                                        node: "MemberValuePair",
                                        name: {
                                            node: "SimpleName",
                                            identifier: "first"
                                        },
                                        value: {
                                            node: "StringLiteral",
                                            escapedValue: "\"Joe\""
                                        }
                                    },
                                    {
                                        node: "MemberValuePair",
                                        name: {
                                            node: "SimpleName",
                                            identifier: "last"
                                        },
                                        value: {
                                            node: "StringLiteral",
                                            escapedValue: "\"Hacker\""
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            node: "Modifier",
                            keyword: "private"
                        },
                        {
                            node: "Modifier",
                            keyword: "static"
                        }
                    ],
                    interface: false,
                    name: {
                        node: "SimpleName",
                        identifier: "Hello"
                    },
                    typeParameters: [

                    ],
                    superclassType: null,
                    superInterfaceTypes: [

                    ],
                    bodyDeclarations: [

                    ]
                }
            ]
        }
      );
    });
