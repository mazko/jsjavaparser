
    test("extends", function(assert) {
      var src = "class Hello extends World {}";
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
                    superclassType: {
                        node: "SimpleType",
                        name: {
                            node: "SimpleName",
                            identifier: "World"
                        }
                    },
                    superInterfaceTypes: [

                    ],
                    bodyDeclarations: [

                    ]
                }
            ]
        }
      );
    });

    test("extends ws qualified generic", function(assert) {
      var src = "class Hello extends Foo.Bar<T> {}";
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
                    superclassType: {
                        node: "ParameterizedType",
                        type: {
                            node: "SimpleType",
                            name: {
                                node: "QualifiedName",
                                qualifier: {
                                    node: "SimpleName",
                                    identifier: "Foo"
                                },
                                name: {
                                    node: "SimpleName",
                                    identifier: "Bar"
                                }
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
                    },
                    superInterfaceTypes: [

                    ],
                    bodyDeclarations: [

                    ]
                }
            ]
        }
      );
    });

    test("extends ws dots ws spaces ws generic", function(assert) {
      var src = "class Hello<C> extends Foo < ? extends T.A<C>> . Bar {}";
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
                        {
                            node: "TypeParameter",
                            name: {
                                node: "SimpleName",
                                identifier: "C"
                            },
                            typeBounds: [

                            ]
                        }
                    ],
                    superclassType: {
                        node: "QualifiedType",
                        qualifier: {
                            node: "ParameterizedType",
                            type: {
                                node: "SimpleType",
                                name: {
                                    node: "SimpleName",
                                    identifier: "Foo"
                                }
                            },
                            typeArguments: [
                                {
                                    node: "WildcardType",
                                    bound: {
                                        node: "ParameterizedType",
                                        type: {
                                            node: "SimpleType",
                                            name: {
                                                node: "QualifiedName",
                                                qualifier: {
                                                    node: "SimpleName",
                                                    identifier: "T"
                                                },
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "A"
                                                }
                                            }
                                        },
                                        typeArguments: [
                                            {
                                                node: "SimpleType",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "C"
                                                }
                                            }
                                        ]
                                    },
                                    upperBound: true
                                }
                            ]
                        },
                        name: {
                            node: "SimpleName",
                            identifier: "Bar"
                        }
                    },
                    superInterfaceTypes: [

                    ],
                    bodyDeclarations: [

                    ]
                }
            ]
        }
      );
    });

    test("implements single", function(assert) {
      var src = "class Hello implements IList {}";
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
                        {
                            node: "SimpleType",
                            name: {
                                node: "SimpleName",
                                identifier: "IList"
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

    test("implements multiple ws qualified", function(assert) {
      var src = "class Hello implements IList, org.git.IHub {}";
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
                        {
                            node: "SimpleType",
                            name: {
                                node: "SimpleName",
                                identifier: "IList"
                            }
                        },
                        {
                            node: "SimpleType",
                            name: {
                                node: "QualifiedName",
                                qualifier: {
                                    node: "QualifiedName",
                                    qualifier: {
                                        node: "SimpleName",
                                        identifier: "org"
                                    },
                                    name: {
                                        node: "SimpleName",
                                        identifier: "git"
                                    }
                                },
                                name: {
                                    node: "SimpleName",
                                    identifier: "IHub"
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

    test("implements multiple ws qualified ws generic", function(assert) {
      var src = "class Hello< A, B> implements IList< C > , org.git. IHub <A,B.C<C>> {}";
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
                        {
                            node: "TypeParameter",
                            name: {
                                node: "SimpleName",
                                identifier: "A"
                            },
                            typeBounds: [

                            ]
                        },
                        {
                            node: "TypeParameter",
                            name: {
                                node: "SimpleName",
                                identifier: "B"
                            },
                            typeBounds: [

                            ]
                        }
                    ],
                    superclassType: null,
                    superInterfaceTypes: [
                        {
                            node: "ParameterizedType",
                            type: {
                                node: "SimpleType",
                                name: {
                                    node: "SimpleName",
                                    identifier: "IList"
                                }
                            },
                            typeArguments: [
                                {
                                    node: "SimpleType",
                                    name: {
                                        node: "SimpleName",
                                        identifier: "C"
                                    }
                                }
                            ]
                        },
                        {
                            node: "ParameterizedType",
                            type: {
                                node: "SimpleType",
                                name: {
                                    node: "QualifiedName",
                                    qualifier: {
                                        node: "QualifiedName",
                                        qualifier: {
                                            node: "SimpleName",
                                            identifier: "org"
                                        },
                                        name: {
                                            node: "SimpleName",
                                            identifier: "git"
                                        }
                                    },
                                    name: {
                                        node: "SimpleName",
                                        identifier: "IHub"
                                    }
                                }
                            },
                            typeArguments: [
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
                                        node: "SimpleType",
                                        name: {
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
                                    },
                                    typeArguments: [
                                        {
                                            node: "SimpleType",
                                            name: {
                                                node: "SimpleName",
                                                identifier: "C"
                                            }
                                        }
                                    ]
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
