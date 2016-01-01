
    test("package ws import", function(assert) {
      var src = multiline(function(){/*
        package hello.world;

        import static hello.*;
        import org.hello.world;
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
                {
                    node: "ImportDeclaration",
                    static: true,
                    name: {
                        node: "SimpleName",
                        identifier: "hello"
                    },
                    onDemand: true
                },
                {
                    node: "ImportDeclaration",
                    static: false,
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
                                identifier: "hello"
                            }
                        },
                        name: {
                            node: "SimpleName",
                            identifier: "world"
                        }
                    },
                    onDemand: false
                }
            ],
            types: [

            ]
        }
      );
    });

    test("package ws import ws spaces", function(assert) {
      var src = multiline(function(){/*
        package hello . world;

        import static hello. *;
        import org.hello . world;
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
                {
                    node: "ImportDeclaration",
                    static: true,
                    name: {
                        node: "SimpleName",
                        identifier: "hello"
                    },
                    onDemand: true
                },
                {
                    node: "ImportDeclaration",
                    static: false,
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
                                identifier: "hello"
                            }
                        },
                        name: {
                            node: "SimpleName",
                            identifier: "world"
                        }
                    },
                    onDemand: false
                }
            ],
            types: [

            ]
        }
      );
    });

