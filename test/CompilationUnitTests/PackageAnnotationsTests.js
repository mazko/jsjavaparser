
    test("package ws Marker Annotations", function(assert) {
      var src = multiline(function(){/*
        @hello
        package hello.world;
      */});
      assert.deepEqual(
        JavaParser.parse(src)
        ,
        {
            node: "CompilationUnit",
            package: {
                node: "PackageDeclaration",
                annotations: [
                    {
                        node: "MarkerAnnotation",
                        typeName: {
                            node: "SimpleName",
                            identifier: "hello"
                        }
                    }
                ],
                name: {
                    node: "QualifiedName",
                    qualifier: {
                        node: "SimpleName",
                        identifier: "hello"
                    },
                    name: {
                        node: "SimpleName",
                        identifier: "world"
                    }
                }
            },
            imports: [

            ],
            types: [

            ]
        }
      );
    });

    test("package ws Normal Empty Annotations", function(assert) {
      var src = multiline(function(){/*
        @RequestForEnhancement()
        package hello.world;
      */});
      assert.deepEqual(
        JavaParser.parse(src)
        ,
        {
            node: "CompilationUnit",
            package: {
                node: "PackageDeclaration",
                annotations: [
                    {
                        node: "NormalAnnotation",
                        typeName: {
                            node: "SimpleName",
                            identifier: "RequestForEnhancement"
                        },
                        values: [

                        ]
                    }
                ],
                name: {
                    node: "QualifiedName",
                    qualifier: {
                        node: "SimpleName",
                        identifier: "hello"
                    },
                    name: {
                        node: "SimpleName",
                        identifier: "world"
                    }
                }
            },
            imports: [

            ],
            types: [

            ]
        }
      );
    });

    test("package ws Normal Annotations", function(assert) {
      var src = multiline(function(){/*
        @RequestForEnhancement(
            id = 2868724,
            synopsis = "Provide time-travel functionality",
            engineer = "Mr. Peabody",
            date = "4/1/2004"
        )
        package hello.world;
      */});
      assert.deepEqual(
        JavaParser.parse(src)
        ,
        {
            node: "CompilationUnit",
            package: {
                node: "PackageDeclaration",
                annotations: [
                    {
                        node: "NormalAnnotation",
                        typeName: {
                            node: "SimpleName",
                            identifier: "RequestForEnhancement"
                        },
                        values: [
                            {
                                node: "MemberValuePair",
                                name: {
                                    node: "SimpleName",
                                    identifier: "id"
                                },
                                value: {
                                    node: "NumberLiteral",
                                    token: "2868724"
                                }
                            },
                            {
                                node: "MemberValuePair",
                                name: {
                                    node: "SimpleName",
                                    identifier: "synopsis"
                                },
                                value: {
                                    node: "StringLiteral",
                                    escapedValue: "\"Provide time-travel functionality\""
                                }
                            },
                            {
                                node: "MemberValuePair",
                                name: {
                                    node: "SimpleName",
                                    identifier: "engineer"
                                },
                                value: {
                                    node: "StringLiteral",
                                    escapedValue: "\"Mr. Peabody\""
                                }
                            },
                            {
                                node: "MemberValuePair",
                                name: {
                                    node: "SimpleName",
                                    identifier: "date"
                                },
                                value: {
                                    node: "StringLiteral",
                                    escapedValue: "\"4/1/2004\""
                                }
                            }
                        ]
                    }
                ],
                name: {
                    node: "QualifiedName",
                    qualifier: {
                        node: "SimpleName",
                        identifier: "hello"
                    },
                    name: {
                        node: "SimpleName",
                        identifier: "world"
                    }
                }
            },
            imports: [

            ],
            types: [

            ]
        }
      );
    });

    test("package ws Single-Element Annotations", function(assert) {
      var src = multiline(function(){/*
        @Copyright("2002 Yoyodyne Propulsion Systems, Inc.")
        package hello;
      */});
      assert.deepEqual(
        JavaParser.parse(src)
        ,
        {
            node: "CompilationUnit",
            package: {
                node: "PackageDeclaration",
                annotations: [
                    {
                        node: "SingleMemberAnnotation",
                        typeName: {
                            node: "SimpleName",
                            identifier: "Copyright"
                        },
                        value: {
                            node: "StringLiteral",
                            escapedValue: "\"2002 Yoyodyne Propulsion Systems, Inc.\""
                        }
                    }
                ],
                name: {
                    node: "SimpleName",
                    identifier: "hello"
                }
            },
            imports: [

            ],
            types: [

            ]
        }
      );
    });

    test("array-valued single-element annotation", function(assert) {
      var src = multiline(function(){/*
        @Endorsers({"Children", "Unscrupulous dentists"})
        package hello;
      */});
      assert.deepEqual(
        JavaParser.parse(src)
        ,
        {
            node: "CompilationUnit",
            package: {
                node: "PackageDeclaration",
                annotations: [
                    {
                        node: "SingleMemberAnnotation",
                        typeName: {
                            node: "SimpleName",
                            identifier: "Endorsers"
                        },
                        value: {
                            node: "ArrayInitializer",
                            expressions: [
                                {
                                    node: "StringLiteral",
                                    escapedValue: "\"Children\""
                                },
                                {
                                    node: "StringLiteral",
                                    escapedValue: "\"Unscrupulous dentists\""
                                }
                            ]
                        }
                    }
                ],
                name: {
                    node: "SimpleName",
                    identifier: "hello"
                }
            },
            imports: [

            ],
            types: [

            ]
        }
      );
    });

    test("array-valued empty annotation", function(assert) {
      var src = multiline(function(){/*
        @Endorsers({})
        package hello;
      */});
      assert.deepEqual(
        JavaParser.parse(src)
        ,
        {
            node: "CompilationUnit",
            package: {
                node: "PackageDeclaration",
                annotations: [
                    {
                        node: "SingleMemberAnnotation",
                        typeName: {
                            node: "SimpleName",
                            identifier: "Endorsers"
                        },
                        value: {
                            node: "ArrayInitializer",
                            expressions: [

                            ]
                        }
                    }
                ],
                name: {
                    node: "SimpleName",
                    identifier: "hello"
                }
            },
            imports: [

            ],
            types: [

            ]
        }
      );
    });

    test("single-element array-valued single-element annotation", function(assert) {
      var src = multiline(function(){/*
        @Endorsers("Epicurus")
        package hello;
      */});
      assert.deepEqual(
        JavaParser.parse(src)
        ,
        {
            node: "CompilationUnit",
            package: {
                node: "PackageDeclaration",
                annotations: [
                    {
                        node: "SingleMemberAnnotation",
                        typeName: {
                            node: "SimpleName",
                            identifier: "Endorsers"
                        },
                        value: {
                            node: "StringLiteral",
                            escapedValue: "\"Epicurus\""
                        }
                    }
                ],
                name: {
                    node: "SimpleName",
                    identifier: "hello"
                }
            },
            imports: [

            ],
            types: [

            ]
        }
      );
    });

    test("single-element annotation that contains a normal annotation", function(assert) {
      var src = multiline(function(){/*
        @Author(@Name(first = "Joe", last = "Hacker"))
        package hello;
      */});
      assert.deepEqual(
        JavaParser.parse(src)
        ,
        {
            node: "CompilationUnit",
            package: {
                node: "PackageDeclaration",
                annotations: [
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
                name: {
                    node: "SimpleName",
                    identifier: "hello"
                }
            },
            imports: [

            ],
            types: [

            ]
        }
      );
    });
 
