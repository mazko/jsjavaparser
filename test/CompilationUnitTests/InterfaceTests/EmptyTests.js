
    test("empty interface", function(assert) {
      var src = "interface Test {}";
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

                    ]
                }
            ]
        }
      );
    });

    test("empty interface extends single", function(assert) {
      var src = "interface Test extends A {}";
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
                        {
                            node: "SimpleType",
                            name: {
                                node: "SimpleName",
                                identifier: "A"
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

    test("empty interface extends multiple", function(assert) {
      var src = "interface Test extends A, C.D {}";
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
                        {
                            node: "SimpleType",
                            name: {
                                node: "SimpleName",
                                identifier: "A"
                            }
                        },
                        {
                            node: "SimpleType",
                            name: {
                                node: "QualifiedName",
                                qualifier: {
                                    node: "SimpleName",
                                    identifier: "C"
                                },
                                name: {
                                    node: "SimpleName",
                                    identifier: "D"
                                }
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

    test("empty interface ws generic extends multiple", function(assert) {
      var src = "interface Test<T> extends A, C<? extends A.B>.D<T> {}";
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
                        {
                            node: "TypeParameter",
                            name: {
                                node: "SimpleName",
                                identifier: "T"
                            },
                            typeBounds: [

                            ]
                        }
                    ],
                    superclassType: null,
                    superInterfaceTypes: [
                        {
                            node: "SimpleType",
                            name: {
                                node: "SimpleName",
                                identifier: "A"
                            }
                        },
                        {
                            node: "ParameterizedType",
                            type: {
                                node: "QualifiedType",
                                qualifier: {
                                    node: "ParameterizedType",
                                    type: {
                                        node: "SimpleType",
                                        name: {
                                            node: "SimpleName",
                                            identifier: "C"
                                        }
                                    },
                                    typeArguments: [
                                        {
                                            node: "WildcardType",
                                            bound: {
                                                node: "SimpleType",
                                                name: {
                                                    node: "QualifiedName",
                                                    qualifier: {
                                                        node: "SimpleName",
                                                        identifier: "A"
                                                    },
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "B"
                                                    }
                                                }
                                            },
                                            upperBound: true
                                        }
                                    ]
                                },
                                name: {
                                    node: "SimpleName",
                                    identifier: "D"
                                }
                            },
                            typeArguments: [
                                {
                                    node: "SimpleType",
                                    name: {
                                        node: "SimpleName",
                                        identifier: "T"
                                    }
                                }
                            ]
                        }
                    ],
                    bodyDeclarations: [

                    ]
                }
            ]
        }
      );
    });

    test("empty interface ws modifiers ws annotation", function(assert) {
      var src = multiline(function(){/*
        @Author(@Name(first = "Joe", last = "Hacker"))
        protected interface Test {}
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
                            keyword: "protected"
                        }
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

                    ]
                }
            ]
        }
      );
    });

