
    test("package without types", function(assert) {
      var src = 'package a;';
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
                    identifier: "a"
                }
            },
            imports: [

            ],
            types: [

            ]
        }
      );
    });

    test("package without types with dots", function(assert) {
      var src = 'package a.b.c;';
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
                        node: "QualifiedName",
                        qualifier: {
                            node: "SimpleName",
                            identifier: "a"
                        },
                        name: {
                            node: "SimpleName",
                            identifier: "b"
                        }
                    },
                    name: {
                        node: "SimpleName",
                        identifier: "c"
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

