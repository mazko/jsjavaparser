
    test("empty class", function(assert) {
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

    test("empty class ws package", function(assert) {
      var src = multiline(function(){/*
        package hello;
        public class Hello {}
      */});
      assert.deepEqual(
        JavaParser.parse(src)
        ,
        {
            node: "CompilationUnit",
            package: {
                node: "PackageDeclaration",
                annotations: [

                ],
                name: {
                    node: "SimpleName",
                    identifier: "hello"
                }
            },
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

    test("empty class ws import", function(assert) {
      var src = multiline(function(){/*
        import hello;
        public class Hello {}
      */});
      assert.deepEqual(
        JavaParser.parse(src)
        ,
        {
            node: "CompilationUnit",
            package: null,
            imports: [
                {
                    node: "ImportDeclaration",
                    static: false,
                    name: {
                        node: "SimpleName",
                        identifier: "hello"
                    },
                    onDemand: false
                }
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

    test("empty class ws modifiers ws semi ending", function(assert) {
      var src = "public final class Hello {};";
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
                        },
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

    test("empty class ws generic", function(assert) {
      var src = "class Hello<E>  {}";
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
                                identifier: "E"
                            },
                            typeBounds: [

                            ]
                        }
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

    test("empty class ws generic ws bounds", function(assert) {
      var src = "class Hello<T extends B.A.C & B2.A2 & B3> {}";
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
                                identifier: "T"
                            },
                            typeBounds: [
                                {
                                    node: "SimpleType",
                                    name: {
                                        node: "QualifiedName",
                                        qualifier: {
                                            node: "QualifiedName",
                                            qualifier: {
                                                node: "SimpleName",
                                                identifier: "B"
                                            },
                                            name: {
                                                node: "SimpleName",
                                                identifier: "A"
                                            }
                                        },
                                        name: {
                                            node: "SimpleName",
                                            identifier: "C"
                                        }
                                    }
                                },
                                {
                                    node: "SimpleType",
                                    name: {
                                        node: "QualifiedName",
                                        qualifier: {
                                            node: "SimpleName",
                                            identifier: "B2"
                                        },
                                        name: {
                                            node: "SimpleName",
                                            identifier: "A2"
                                        }
                                    }
                                },
                                {
                                    node: "SimpleType",
                                    name: {
                                        node: "SimpleName",
                                        identifier: "B3"
                                    }
                                }
                            ]
                        }
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

    test("empty class ws generic ws generic", function(assert) {
      var src = "class Hello<T,T2 extends A<T>> {}";
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
                                identifier: "T"
                            },
                            typeBounds: [

                            ]
                        },
                        {
                            node: "TypeParameter",
                            name: {
                                node: "SimpleName",
                                identifier: "T2"
                            },
                            typeBounds: [
                                {
                                    node: "ParameterizedType",
                                    type: {
                                        node: "SimpleType",
                                        name: {
                                            node: "SimpleName",
                                            identifier: "A"
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
                            ]
                        }
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

    test("empty class ws generic ws generic ws qual left", function(assert) {
      var src = "class Hello<T,T2 extends A.B<T>> {}";
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
                                identifier: "T"
                            },
                            typeBounds: [

                            ]
                        },
                        {
                            node: "TypeParameter",
                            name: {
                                node: "SimpleName",
                                identifier: "T2"
                            },
                            typeBounds: [
                                {
                                    node: "ParameterizedType",
                                    type: {
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
                            ]
                        }
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

    test("empty class ws generic ws generic ws qual right", function(assert) {
      var src = "class Hello<T,T2 extends A<T>.B> {}";
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
                                identifier: "T"
                            },
                            typeBounds: [

                            ]
                        },
                        {
                            node: "TypeParameter",
                            name: {
                                node: "SimpleName",
                                identifier: "T2"
                            },
                            typeBounds: [
                                {
                                    node: "QualifiedType",
                                    qualifier: {
                                        node: "ParameterizedType",
                                        type: {
                                            node: "SimpleType",
                                            name: {
                                                node: "SimpleName",
                                                identifier: "A"
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
                                    name: {
                                        node: "SimpleName",
                                        identifier: "B"
                                    }
                                }
                            ]
                        }
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

    test("empty class ws generic ws generic generic ws qual", function(assert) {
      var src = "class Hello<T,T2 extends A.B.C<T>.D.E<T>.F<T>.G>{}";
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
                                identifier: "T"
                            },
                            typeBounds: [

                            ]
                        },
                        {
                            node: "TypeParameter",
                            name: {
                                node: "SimpleName",
                                identifier: "T2"
                            },
                            typeBounds: [
                                {
                                    node: "QualifiedType",
                                    qualifier: {
                                        node: "ParameterizedType",
                                        type: {
                                            node: "QualifiedType",
                                            qualifier: {
                                                node: "ParameterizedType",
                                                type: {
                                                    node: "QualifiedType",
                                                    qualifier: {
                                                        node: "QualifiedType",
                                                        qualifier: {
                                                            node: "ParameterizedType",
                                                            type: {
                                                                node: "SimpleType",
                                                                name: {
                                                                    node: "QualifiedName",
                                                                    qualifier: {
                                                                        node: "QualifiedName",
                                                                        qualifier: {
                                                                            node: "SimpleName",
                                                                            identifier: "A"
                                                                        },
                                                                        name: {
                                                                            node: "SimpleName",
                                                                            identifier: "B"
                                                                        }
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
                                                                        identifier: "T"
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "D"
                                                        }
                                                    },
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "E"
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
                                            name: {
                                                node: "SimpleName",
                                                identifier: "F"
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
                                    name: {
                                        node: "SimpleName",
                                        identifier: "G"
                                    }
                                }
                            ]
                        }
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

    test("empty class ws generic generic qual generic end", function(assert) {
      var src = "class Hello<T,T2 extends A.B.C<T>.D.E<T>.F<T>.G<R>>{}";
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
                                identifier: "T"
                            },
                            typeBounds: [

                            ]
                        },
                        {
                            node: "TypeParameter",
                            name: {
                                node: "SimpleName",
                                identifier: "T2"
                            },
                            typeBounds: [
                                {
                                    node: "ParameterizedType",
                                    type: {
                                        node: "QualifiedType",
                                        qualifier: {
                                            node: "ParameterizedType",
                                            type: {
                                                node: "QualifiedType",
                                                qualifier: {
                                                    node: "ParameterizedType",
                                                    type: {
                                                        node: "QualifiedType",
                                                        qualifier: {
                                                            node: "QualifiedType",
                                                            qualifier: {
                                                                node: "ParameterizedType",
                                                                type: {
                                                                    node: "SimpleType",
                                                                    name: {
                                                                        node: "QualifiedName",
                                                                        qualifier: {
                                                                            node: "QualifiedName",
                                                                            qualifier: {
                                                                                node: "SimpleName",
                                                                                identifier: "A"
                                                                            },
                                                                            name: {
                                                                                node: "SimpleName",
                                                                                identifier: "B"
                                                                            }
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
                                                                            identifier: "T"
                                                                        }
                                                                    }
                                                                ]
                                                            },
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "D"
                                                            }
                                                        },
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "E"
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
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "F"
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
                                        name: {
                                            node: "SimpleName",
                                            identifier: "G"
                                        }
                                    },
                                    typeArguments: [
                                        {
                                            node: "SimpleType",
                                            name: {
                                                node: "SimpleName",
                                                identifier: "R"
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
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

    test("empty class ws generic generic qual generic start end", function(assert) {
      var src = "class Hello<T,T2 extends A<O>.B.C<T>.D.E<T>.F.G<R>>{}";
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
                                identifier: "T"
                            },
                            typeBounds: [

                            ]
                        },
                        {
                            node: "TypeParameter",
                            name: {
                                node: "SimpleName",
                                identifier: "T2"
                            },
                            typeBounds: [
                                {
                                    node: "ParameterizedType",
                                    type: {
                                        node: "QualifiedType",
                                        qualifier: {
                                            node: "QualifiedType",
                                            qualifier: {
                                                node: "ParameterizedType",
                                                type: {
                                                    node: "QualifiedType",
                                                    qualifier: {
                                                        node: "QualifiedType",
                                                        qualifier: {
                                                            node: "ParameterizedType",
                                                            type: {
                                                                node: "QualifiedType",
                                                                qualifier: {
                                                                    node: "QualifiedType",
                                                                    qualifier: {
                                                                        node: "ParameterizedType",
                                                                        type: {
                                                                            node: "SimpleType",
                                                                            name: {
                                                                                node: "SimpleName",
                                                                                identifier: "A"
                                                                            }
                                                                        },
                                                                        typeArguments: [
                                                                            {
                                                                                node: "SimpleType",
                                                                                name: {
                                                                                    node: "SimpleName",
                                                                                    identifier: "O"
                                                                                }
                                                                            }
                                                                        ]
                                                                    },
                                                                    name: {
                                                                        node: "SimpleName",
                                                                        identifier: "B"
                                                                    }
                                                                },
                                                                name: {
                                                                    node: "SimpleName",
                                                                    identifier: "C"
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
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "D"
                                                        }
                                                    },
                                                    name: {
                                                        node: "SimpleName",
                                                        identifier: "E"
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
                                            name: {
                                                node: "SimpleName",
                                                identifier: "F"
                                            }
                                        },
                                        name: {
                                            node: "SimpleName",
                                            identifier: "G"
                                        }
                                    },
                                    typeArguments: [
                                        {
                                            node: "SimpleType",
                                            name: {
                                                node: "SimpleName",
                                                identifier: "R"
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
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

    test("empty class ws generic dim", function(assert) {
      var src = "class Hello<E extends A<D[]>>{}";
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
                                identifier: "E"
                            },
                            typeBounds: [
                                {
                                    node: "ParameterizedType",
                                    type: {
                                        node: "SimpleType",
                                        name: {
                                            node: "SimpleName",
                                            identifier: "A"
                                        }
                                    },
                                    typeArguments: [
                                        {
                                            node: "ArrayType",
                                            componentType: {
                                                node: "SimpleType",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "D"
                                                }
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
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

    test("empty class ws generic dims", function(assert) {
      var src = "class Hello<E extends A<D.B[][]>>{}";
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
                                identifier: "E"
                            },
                            typeBounds: [
                                {
                                    node: "ParameterizedType",
                                    type: {
                                        node: "SimpleType",
                                        name: {
                                            node: "SimpleName",
                                            identifier: "A"
                                        }
                                    },
                                    typeArguments: [
                                        {
                                            node: "ArrayType",
                                            componentType: {
                                                node: "ArrayType",
                                                componentType: {
                                                    node: "SimpleType",
                                                    name: {
                                                        node: "QualifiedName",
                                                        qualifier: {
                                                            node: "SimpleName",
                                                            identifier: "D"
                                                        },
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "B"
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
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

    test("empty class ws generic primitive dim", function(assert) {
      var src = "class Hello<E extends A<int[]>>{}";
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
                                identifier: "E"
                            },
                            typeBounds: [
                                {
                                    node: "ParameterizedType",
                                    type: {
                                        node: "SimpleType",
                                        name: {
                                            node: "SimpleName",
                                            identifier: "A"
                                        }
                                    },
                                    typeArguments: [
                                        {
                                            node: "ArrayType",
                                            componentType: {
                                                node: "PrimitiveType",
                                                primitiveTypeCode: "int"
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
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

    test("empty class ws generic primitive dims", function(assert) {
      var src = "class Hello<E extends A<double[][][]>>{}";
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
                                identifier: "E"
                            },
                            typeBounds: [
                                {
                                    node: "ParameterizedType",
                                    type: {
                                        node: "SimpleType",
                                        name: {
                                            node: "SimpleName",
                                            identifier: "A"
                                        }
                                    },
                                    typeArguments: [
                                        {
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
                                    ]
                                }
                            ]
                        }
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

    test("empty class ws generic query super", function(assert) {
      var src = "class Hello<T extends Object & Comparable<? super T>> {}";
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
                                identifier: "T"
                            },
                            typeBounds: [
                                {
                                    node: "SimpleType",
                                    name: {
                                        node: "SimpleName",
                                        identifier: "Object"
                                    }
                                },
                                {
                                    node: "ParameterizedType",
                                    type: {
                                        node: "SimpleType",
                                        name: {
                                            node: "SimpleName",
                                            identifier: "Comparable"
                                        }
                                    },
                                    typeArguments: [
                                        {
                                            node: "WildcardType",
                                            bound: {
                                                node: "SimpleType",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "T"
                                                }
                                            },
                                            upperBound: false
                                        }
                                    ]
                                }
                            ]
                        }
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

    test("empty class ws generic query extends", function(assert) {
      var src = "class Hello<T extends Object & Comparable<? extends T>> {}";
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
                                identifier: "T"
                            },
                            typeBounds: [
                                {
                                    node: "SimpleType",
                                    name: {
                                        node: "SimpleName",
                                        identifier: "Object"
                                    }
                                },
                                {
                                    node: "ParameterizedType",
                                    type: {
                                        node: "SimpleType",
                                        name: {
                                            node: "SimpleName",
                                            identifier: "Comparable"
                                        }
                                    },
                                    typeArguments: [
                                        {
                                            node: "WildcardType",
                                            bound: {
                                                node: "SimpleType",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "T"
                                                }
                                            },
                                            upperBound: true
                                        }
                                    ]
                                }
                            ]
                        }
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

    test("empty class ws generic query extends single query", function(assert) {
      var src = "class Hello<T extends org.Comparable<?>> {}";
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
                                identifier: "T"
                            },
                            typeBounds: [
                                {
                                    node: "ParameterizedType",
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
                                                identifier: "Comparable"
                                            }
                                        }
                                    },
                                    typeArguments: [
                                        {
                                            node: "WildcardType",
                                            bound: null,
                                            upperBound: true
                                        }
                                    ]
                                }
                            ]
                        }
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

