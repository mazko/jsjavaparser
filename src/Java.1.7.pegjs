
//===========================================================================
//
//  Parsing Expression Grammar of Java 1.7 for Mouse 1.1 - 1.6.
//  Based on Java Language Specification, Java SE 7 Edition, dated 2012-07-27,
//  obtained from http://docs.oracle.com/javase/specs/jls/se7/html/index.html.
//
//---------------------------------------------------------------------------
//
//  Copyright (C) 2006, 2009, 2010, 2011, 2013
//  by Roman R Redziejowski(www.romanredz.se).
//
//  The author gives unlimited permission to copy and distribute
//  this file, with or without modifications, as long as this notice
//  is preserved, and any changes are properly documented.
//
//  This file is distributed in the hope that it will be useful,
//  but WITHOUT ANY WARRANTY; without even the implied warranty of
//  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
//
//---------------------------------------------------------------------------
//
//  Latest update 2013-04-23
//
//---------------------------------------------------------------------------
//  Change log
//---------------------------------------------------------------------------
//
//    2006-12-06 Posted on Internet.
//    2009-04-04 Modified to conform to Mouse syntax:
//               Underscore removed from names
//               \f in Space replaced by Unicode for FormFeed.
//    2009-07-10 Unused rule THREADSAFE removed.
//    2009-07-10 Copying and distribution conditions relaxed by the author.
//    2010-07-01 Updated Mouse version in the comment.
//    2010-09-15 Updated comment on Java release.
//    2010-09-18 Updated list of reserved words ("keywords") according to
//               JLS 3.9: added "const" and "goto", removed "threadsafe".
//    2010-09-18 Removed superfluous "?" everywhere after "Spacing".
//    2010-10-05 Removed erroneous "TypeArguments?" from "EnumConstant".
//               See JLS 8.9, JLS 18.1.
//               NB. "Annotations" are optional, but not shown as such in JLS.
//    2010-10-20 Corrected "FormalParameterList" according to JLS 8.4.1.
//               NB. "VariableModifiers" in "FormalParameter" and "LastFormalParameter"
//               are optional, but not shown as such in JLS.
//    2010-10-20 Corrected "Annotation" according to JLS 9.7.
//               Is incorrect in JLS 18.1 (does not allow list of value pairs).
//    2010-10-20 Corrected "LocalVariableDeclarationStatement".
//               Is incorrect in JLS 18.1: only FINAL allowed as "VariableModifier".
//               Is incorrect in JLS 14.4: "VariableModifiers" not shown as optional.
//    2010-10-20 Corrected "AnnotationTypeElementRest": added SEMI as last alternative.
//               See JLS 9.6. NB. Missing in JLS 18.1.
//    2010-10-20 Moved "Identifier" from "AnnotationTypeElementRest" to
//               "AnnotationMethodRest". Was incorrect in JLS 18.1.
//    2010-10-21 Inverted order of alternatives in "HexSignificand".
//    2010-10-24 Corrected previous correction: moved SEMI from
//               "AnnotationTypeElementRest" to "AnnotationTypeElementDeclaration".
//    2010-10-25 Repeated "u" allowed in UnicodeEscape (JLS 3.3).
//               Line terminators not allowed in StringLiteral (JLS 3.10.5).
//               (Found thanks to Java PEG for Parboiled, which in turn credits
//               Reinier Zwitserloot for finding it.)
//
//---------------------------------------------------------------------------
//    Change log for Java 1.7 starts here.
//    Updates based on project documentation, guess, and javac parser code.
//---------------------------------------------------------------------------
//
//    2011-07-18 Implemented Binary Literals: added "BinaryNumeral".
//    2011-07-19 Implemented Underscores in Numerical Literals:
//               Added "Digits" and "HexDigits". Removed "Digit".
//               Modified "DecimalNumeral", "HexNumeral", "BinaryNumeral",
//               "OctalNumeral", "DecimalFloat", "Exponent",
//               "HexSignificand", and "BinaryExponent".
//    2011-07-19 Added SEMI after "VariableDeclarators" in "MemberDecl" (JLS 8.3).
//    2011-07-21 Corrected "ArrayInitializer" to allow for "{,}" (JLS 10.6).
//    2011-07-20 Implemented Type Inference for Generic Instance Creation:
//               Added "Diamond".
//               Modified "ClassCreatorRest" by adding "Diamond?".
//    2011-07-20 Implemented try-with-resources Statement:
//               Added try-with-resources as an alternative of "Statement".
//               Added "Resource".
//    2011-07-20 Implemented catching of multiple exceptions:
//               Modified "Catch" to allow multiple exception types.
//    2011-10-15 Updated Mouse version in the comment.
//    2011-11-05 Updated Mouse version in the comment.
//
//---------------------------------------------------------------------------
//    Updates based on the new Java Language Specifications
//    (SE7 Edition of 2012-07-27)
//---------------------------------------------------------------------------
//
//    2013-02-15 Try-with-resource (14.20.3): replaced "Modifiers*"
//               in "Resource" by "(FINAL / Annotation)*",
//               which is the syntax for VariableModifier*.
//    2013-02-15  Diamond operator: Copied definition of "Creator",
//               "CreatedName", "TypeArgumentsOrDiamond",
//               "NonWildcardTypeArgumentsOrDiamond", "ClassCreatorRest",
//               "ArrayCreatorRest", and "InnerCreator" from Chapter 18.
//               Removed "Diamond".
//    2013-02-15 In "Creator", allowed "BasicType" for array creator.
//               Was obviously an error. See JLS 15.10.
//               (Found already 2006-11-10, not corrected in SE7.)
//    2013-02-15 Expanded "ArrayCreatorRest".
//    2013-02-18 Line terminators not allowed in CharLiteral (JLS 3.10.4).
//    2013-02-19 Added "NonWildcardTypeArguments?" in the second alternative
//               of "SuperSuffix". Version in Chapter 18 is incorrect.
//               See JLS 15.10.
//    2013-02-19 Added semicolon as dummy import declaration.
//    2013-02-19 Commented deviations from JLS SE7.
//    2013-04-23 Updated Mouse version in the comment.
//               Corrected spelling in a comment to IdentifierSuffix.
//
//===========================================================================

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  AST:  Copyright (C) 2015 Oleg Mazko
//  TODO: Comments, javadoc; Ugly UnaryExpression->Primary->Selector, split rules ?
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ClassType
//  = Identifier TypeArguments? (DOT Identifier TypeArguments?)*
// ==>
// ClassType
//  = QualifiedIdentifier TypeArguments? (DOT Identifier TypeArguments?)*
//---------------------------------------------------------------------------
// Expression
//  = ConditionalExpression (AssignmentOperator ConditionalExpression)*
// ==>
// Expression
//  = ConditionalExpression AssignmentOperator Expression
//  / ConditionalExpression
//---------------------------------------------------------------------------
// ConditionalExpression
//  = ConditionalOrExpression (QUERY Expression COLON ConditionalOrExpression)*
// ==>
// ConditionalExpression
//  = ConditionalOrExpression QUERY Expression COLON ConditionalExpression
//  / ConditionalOrExpression
//---------------------------------------------------------------------------
// Primary
//  = ParExpression
//  ...
//  / QualifiedIdentifier IdentifierSuffix?
// ==>
// Primary
//  = ParExpression
//  ...
//  / QualifiedIdentifierSuffix
//  / QualifiedIdentifier
//---------------------------------------------------------------------------
// IdentifierSuffix
//  = LBRK ( RBRK Dim* DOT CLASS / Expression RBRK )
//    / Arguments
//    / DOT
//      ( CLASS
//      / ExplicitGenericInvocation
//      / THIS
//      / SUPER Arguments
//      / NEW NonWildcardTypeArguments? InnerCreator
//      )
// ==>
// QualifiedIdentifierSuffix
//  = QualifiedIdentifier Dim+ DOT CLASS
//  / QualifiedIdentifier LBRK Expression RBRK
//  / QualifiedIdentifier Arguments
//  / QualifiedIdentifier DOT CLASS 
//  / QualifiedIdentifier DOT ExplicitGenericInvocation
//  / QualifiedIdentifier DOT THIS
//  / QualifiedIdentifier DOT SUPER Arguments
//  / QualifiedIdentifier DOT NEW NonWildcardTypeArguments? InnerCreator
//---------------------------------------------------------------------------
// CreatedName
//  = Identifier TypeArgumentsOrDiamond? ( DOT Identifier TypeArgumentsOrDiamond? )*
// ==>
// CreatedName
//  = QualifiedIdentifier TypeArgumentsOrDiamond? 
//  ( DOT Identifier TypeArgumentsOrDiamond? )*
//---------------------------------------------------------------------------
// UnaryExpression
//  = PrefixOp UnaryExpression
//  / LPAR Type RPAR UnaryExpression
//  / Primary (Selector)* (PostfixOp)*
// ==>
// UnaryExpression
//  = PrefixOp UnaryExpression
//  / UnaryExpressionNotPlusMinus
//
// UnaryExpressionNotPlusMinus
//  = CastExpression
//  / Primary Selector Selector* PostfixOp+
//  / Primary Selector Selector*
//  / Primary PostfixOp+
//  / Primary
//
// CastExpression
//  = LPAR PrimitiveType RPAR UnaryExpression
//  / LPAR ReferenceType RPAR UnaryExpressionNotPlusMinus
//
// PrimitiveType
//  = BasicType
//---------------------------------------------------------------------------
// Selector
//  = DOT Identifier Arguments?
// ==>
// Selector
//  = DOT Identifier Arguments
//  / DOT Identifier
//---------------------------------------------------------------------------

{
  function extractOptional(optional, index, def) {
    def = typeof def !== 'undefined' ?  def : null;
    return optional ? optional[index] : def;
  }

  function extractList(list, index) {
    var result = new Array(list.length), i;

    for (i = 0; i < list.length; i++) {
      result[i] = list[i][index];
    }

    return result;
  }

  function buildList(first, rest, index) {
    return [first].concat(extractList(rest, index));
  }

  function buildTree(first, rest, builder) {
    var result = first, i;

    for (i = 0; i < rest.length; i++) {
      result = builder(result, rest[i]);
    }

    return result;
  }

  function buildInfixExpr(first, rest) {
    return buildTree(first, rest, function(result, element) {
      return {
        node:        'InfixExpression',
        operator:     element[0][0], // remove ending Spacing
        leftOperand:  result,
        rightOperand: element[1]
      };
    });
  }

  function buildQualified(first, rest, index) {
    return buildTree(first, rest, 
      function(result, element) {
        return {
          node:     'QualifiedName',
          qualifier: result,
          name:      element[index]
        };
      }
    );
  }

  function popQualified(tree) {
    return tree.node === 'QualifiedName' 
      ? { name: tree.name, expression: tree.qualifier }
      : { name: tree, expression: null };
  }

  function extractThrowsClassType(list) {
    return list.map(function(node){ 
      return node.name; 
    });
  }

  function extractExpressions(list) {
    return list.map(function(node) { 
      return node.expression; 
    });
  }

  function buildArrayTree(first, rest) {
    return buildTree(first, rest, 
      function(result, element) {
      return {
        node:         'ArrayType',
        componentType: result
      }; 
    });
  }

  function optionalList(value) {
    return value !== null ? value : [];
  }

  function extractOptionalList(list, index) {
    return optionalList(extractOptional(list, index));
  }

  function skipNulls(list) {
    return list.filter(function(v){ return v !== null; });
  }

  function makePrimitive(code) {
    return {
      node:             'PrimitiveType',
      primitiveTypeCode: code
    }
  }

  function makeModifier(keyword) {
    return { 
      node:   'Modifier', 
      keyword: keyword 
    };
  }

  function makeCatchFinally(catchClauses, finallyBlock) {
      return { 
        catchClauses: catchClauses, 
        finally:      finallyBlock 
      };
  }

  function buildTypeName(qual, args, rest) {
    var first = args === null ? {
      node: 'SimpleType',
      name:  qual
    } : {
      node: 'ParameterizedType',
      type:  {
          node: 'SimpleType',
          name:  qual
      },
      typeArguments: args
    };

    return buildTree(first, rest, 
      function(result, element) {
        var args = element[2];
        return args === null ? {
          node:     'QualifiedType',
          name:      element[1],
          qualifier: result
        } :
        {
          node: 'ParameterizedType',
          type:  {
            node:     'QualifiedType',
            name:      element[1],
            qualifier: result
          },
          typeArguments: args
        };
      }
    );
  }

  function mergeProps(obj, props) {
    var key;
    for (key in props) {
      if (props.hasOwnProperty(key)) {
        if (obj.hasOwnProperty(key)) {
          throw new Error(
            'Property ' + key + ' exists ' + line() + '\n' + text() + 
            '\nCurrent value: ' + JSON.stringify(obj[key], null, 2) + 
            '\nNew value: ' + JSON.stringify(props[key], null, 2)
          );
        } else {
          obj[key] = props[key];
        }
      }
    }
    return obj;
  }

  function buildSelectorTree(arg, sel, sels) {
    function getMergeVal(o,v) {
      switch(o.node){
        case 'SuperFieldAccess':
        case 'SuperMethodInvocation':
          return { qualifier: v };
        case 'ArrayAccess':
          return { array: v };
        default:
          return { expression: v };
      }
    }
    return buildTree(mergeProps(sel, getMergeVal(sel, arg)), 
      sels, function(result, element) {
        return mergeProps(element, getMergeVal(element, result));
    });
  }

  function TODO() {
    throw new Error('TODO: not impl line ' + line() + '\n' + text());
  }
}

/* ---- Syntactic Grammar ----- */

//-------------------------------------------------------------------------
//  Compilation Unit
//-------------------------------------------------------------------------

CompilationUnit
    = Spacing pack:PackageDeclaration? imports:ImportDeclaration* types:TypeDeclaration* EOT
    {
      return {
        node:   'CompilationUnit',
        types:   skipNulls(types),
        package: pack,
        imports: skipNulls(imports)
      };
    }

PackageDeclaration
    = annot:Annotation* PACKAGE name:QualifiedIdentifier SEMI
    {
      return {
        node:       'PackageDeclaration',
        name:        name,
        annotations: annot
      };
    }

ImportDeclaration
    = IMPORT stat:STATIC? name:QualifiedIdentifier asterisk:(DOT STAR)? SEMI
    {
      return {
        node:    'ImportDeclaration',
        name:     name,
        static:   !!stat,
        onDemand: !!extractOptional(asterisk, 1)
      };
    }
    / SEMI
    { return null; }

    // Experiment shows that Java accepts dummy semicolon among
    // import declaration - which is not allowed according to JLS.

TypeDeclaration
    = modifiers:Modifier*
      type:( 
          ClassDeclaration
        / EnumDeclaration
        / InterfaceDeclaration
        / AnnotationTypeDeclaration
      )
      { return mergeProps(type, { modifiers: modifiers }); }
      / SEMI
      { return null; }

//-------------------------------------------------------------------------
//  Class Declaration
//-------------------------------------------------------------------------

ClassDeclaration
    = CLASS id:Identifier gen:TypeParameters? ext:(EXTENDS ClassType)? impl:(IMPLEMENTS ClassTypeList)? body:ClassBody
    {
      return {
        node:               'TypeDeclaration',
        name:                id,
        superInterfaceTypes: extractOptionalList(impl, 1),
        superclassType:      extractOptional(ext, 1),
        bodyDeclarations:    body,
        typeParameters:      optionalList(gen),
        interface:           false
      };
    }

ClassBody
    = LWING decls:ClassBodyDeclaration* RWING
    { return skipNulls(decls); }

ClassBodyDeclaration
    = SEMI
    { return null; }
    / modifier:STATIC? body:Block                      // Static or Instance Initializer
    {
      return {
        node:     'Initializer',
        body:      body,
        modifiers: modifier === null ? [] : [makeModifier('static')]
      };
    }
    / modifiers:Modifier* member:MemberDecl            // ClassMemberDeclaration
    { return mergeProps(member, { modifiers: modifiers }); }

MemberDecl
    = params:TypeParameters 
      rest:GenericMethodOrConstructorRest              // Generic Method or Constructor
    { 
      return mergeProps(rest, {
        node:          'MethodDeclaration',
        typeParameters: params
      });
    }
    / type:Type id:Identifier 
      rest:MethodDeclaratorRest                        // Method
    {
      return mergeProps(rest, {
        node:          'MethodDeclaration',
        returnType2:    type,
        name:           id,
        typeParameters: []
      });
    }
    / type:Type decls:VariableDeclarators SEMI         // Field
    {
      return {
        node:     'FieldDeclaration',
        fragments: decls,
        type:      type
      };
    }
    / VOID id:Identifier rest:VoidMethodDeclaratorRest // Void method
    {
      return mergeProps(rest, {
        node:       'MethodDeclaration',
        returnType2: makePrimitive('void'),
        name:        id,
        constructor: false
      });
    }
    / id:Identifier rest:ConstructorDeclaratorRest     // Constructor
    { 
      return mergeProps(rest, {
        node:           'MethodDeclaration',
        name:            id,
        typeParameters:  []
      });
    }
    / InterfaceDeclaration                             // Interface
    / ClassDeclaration                                 // Class
    / EnumDeclaration                                  // Enum
    / AnnotationTypeDeclaration                        // Annotation

GenericMethodOrConstructorRest
    = type:(Type / VOID { return makePrimitive('void'); }) 
      id:Identifier rest:MethodDeclaratorRest
    {
      return mergeProps(rest, {
        returnType2: type,
        name:        id
      });
    }
    / id:Identifier rest:ConstructorDeclaratorRest
    { return mergeProps(rest, { name: id }); }

MethodDeclaratorRest
    = params:FormalParameters dims:Dim*
      throws:(THROWS ClassTypeList)? 
      body:(MethodBody / SEMI { return null; })
    {
      return {
        parameters:       params,
        thrownExceptions: extractThrowsClassType(extractOptionalList(throws, 1)),
        extraDimensions:  dims.length,
        body:             body,
        constructor:      false
      };
    }

VoidMethodDeclaratorRest
    = params:FormalParameters 
      throws:(THROWS ClassTypeList)? 
      body:(MethodBody / SEMI { return null; })
    {
      return {
        parameters:       params,
        thrownExceptions: extractThrowsClassType(extractOptionalList(throws, 1)),
        body:             body,
        extraDimensions:  0,
        typeParameters:   []
      };
    }

ConstructorDeclaratorRest
    = params:FormalParameters throws:(THROWS ClassTypeList)? body:MethodBody
    {
      return {
        parameters:       params,
        thrownExceptions: extractThrowsClassType(extractOptionalList(throws, 1)),
        body:             body,
        returnType2:      null,
        constructor:      true,
        extraDimensions:  0
      };
    }

MethodBody
    = Block

//-------------------------------------------------------------------------
//  Interface Declaration
//-------------------------------------------------------------------------

InterfaceDeclaration
    = INTERFACE id:Identifier gen:TypeParameters? ext:(EXTENDS ClassTypeList)? body:InterfaceBody
    {
      return {
          node:               'TypeDeclaration',
          name:                id,
          superInterfaceTypes: extractOptionalList(ext, 1),
          superclassType:      null,
          bodyDeclarations:    body,
          typeParameters:      optionalList(gen),
          interface:           true
        };
    }

InterfaceBody
    = LWING decls:InterfaceBodyDeclaration* RWING
    { return skipNulls(decls); }

InterfaceBodyDeclaration
    = modifiers:Modifier* member:InterfaceMemberDecl
    { return mergeProps(member, { modifiers: modifiers }); }
    / SEMI
    { return null; }

InterfaceMemberDecl
    = InterfaceMethodOrFieldDecl
    / InterfaceGenericMethodDecl
    / VOID id:Identifier rest:VoidInterfaceMethodDeclaratorRest
    { return mergeProps(rest, { name: id }); }
    / InterfaceDeclaration
    / AnnotationTypeDeclaration
    / ClassDeclaration
    / EnumDeclaration

InterfaceMethodOrFieldDecl
    = type:Type id:Identifier rest:InterfaceMethodOrFieldRest
    {
      if (rest.node === 'FieldDeclaration') {
        rest.fragments[0].name = id;
        return mergeProps(rest, { type: type });
      } else {
        return mergeProps(rest, { 
          returnType2:    type, 
          name:           id,
          typeParameters: []
        });
      }
    }

InterfaceMethodOrFieldRest
    = rest:ConstantDeclaratorsRest SEMI
    { return { node: 'FieldDeclaration', fragments: rest }; }
    / InterfaceMethodDeclaratorRest

InterfaceMethodDeclaratorRest
    = params:FormalParameters dims:Dim* throws:(THROWS ClassTypeList)? SEMI
    {
      return {
        node:            'MethodDeclaration',
        parameters:       params,
        thrownExceptions: extractThrowsClassType(extractOptionalList(throws, 1)),
        extraDimensions:  dims.length,
        body:             null,
        constructor:      false
      };
    }

InterfaceGenericMethodDecl
    = params:TypeParameters type:(Type / VOID { return makePrimitive('void'); }) id:Identifier rest:InterfaceMethodDeclaratorRest
    {
      return mergeProps(rest, { 
        returnType2:    type, 
        name:           id, 
        typeParameters: params 
      });
    }

VoidInterfaceMethodDeclaratorRest
    = params:FormalParameters throws:(THROWS ClassTypeList)? SEMI
    {
      return {
        node:            'MethodDeclaration',
        parameters:       params,
        thrownExceptions: extractThrowsClassType(extractOptionalList(throws, 1)),
        returnType2:      makePrimitive('void'),
        extraDimensions:  0,
        typeParameters:   [],
        body:             null,
        constructor:      false
      };
    }

ConstantDeclaratorsRest
    = first:ConstantDeclaratorRest rest:(COMMA ConstantDeclarator)*
    { return buildList(first, rest, 1); }

ConstantDeclarator
    = id:Identifier rest:ConstantDeclaratorRest
    { return mergeProps(rest, { name: id }); }

ConstantDeclaratorRest
    = dims:Dim* EQU init:VariableInitializer
    { 
        return {
          node:           'VariableDeclarationFragment',
          extraDimensions: dims.length,
          initializer:     init
      }; 
    }

//-------------------------------------------------------------------------
//  Enum Declaration
//-------------------------------------------------------------------------

EnumDeclaration
    = ENUM name:Identifier impl:(IMPLEMENTS ClassTypeList)? eb:EnumBody
    {
      return mergeProps(eb, {
        node:               'EnumDeclaration',
        name:                name,
        superInterfaceTypes: extractOptionalList(impl, 1)
      });
    }

EnumBody
    = LWING consts:EnumConstants? COMMA? body:EnumBodyDeclarations? RWING
    {
      return {
        enumConstants:    optionalList(consts),
        bodyDeclarations: optionalList(body)
      };
    }

EnumConstants
    = first:EnumConstant rest:(COMMA EnumConstant)*
    { return buildList(first, rest, 1); }

EnumConstant
    = annot:Annotation* name:Identifier args:Arguments? cls:ClassBody?
    {
      return {
        node:                     'EnumConstantDeclaration',
        anonymousClassDeclaration: cls === null ? null : {
          node:             'AnonymousClassDeclaration',
          bodyDeclarations:  cls
        },
        arguments:                 optionalList(args),
        modifiers:                 annot, 
        name:                      name
      };
    }

EnumBodyDeclarations
    = SEMI decl:ClassBodyDeclaration*
    { return decl; }

//-------------------------------------------------------------------------
//  Variable Declarations
//-------------------------------------------------------------------------

LocalVariableDeclarationStatement
    = modifiers:(FINAL { return makeModifier('final'); } / Annotation)* 
      type:Type decls:VariableDeclarators SEMI
    {
      return {
        node:        'VariableDeclarationStatement',
        fragments:    decls,
        modifiers:    modifiers,
        type:         type
      };
    }

VariableDeclarators
    = first:VariableDeclarator rest:(COMMA VariableDeclarator)*
    { return buildList(first, rest, 1); }

VariableDeclarator
    = name:Identifier dims:Dim* init:(EQU VariableInitializer)?
    {
      return {
        node:           'VariableDeclarationFragment',
        name:            name,
        extraDimensions: dims.length,
        initializer:     extractOptional(init, 1)
      };
    }

//-------------------------------------------------------------------------
//  Formal Parameters
//-------------------------------------------------------------------------

FormalParameters
    = LPAR params:FormalParameterList? RPAR
    { return optionalList(params); }

FormalParameter
    = modifiers:(FINAL { return makeModifier('final'); } / Annotation)* 
      type:Type decl:VariableDeclaratorId
    { 
      return mergeProps(decl, {
        type:        type,
        modifiers:   modifiers,
        varargs:     false,
        initializer: null
      });
    }

LastFormalParameter
    = modifiers:(FINAL { return makeModifier('final'); } / Annotation)* 
      type:Type ELLIPSIS decl:VariableDeclaratorId
    { 
      return mergeProps(decl, {
        type:        type,
        modifiers:   modifiers,
        varargs:     true,
        initializer: null
      });
    }

FormalParameterList
    = first:FormalParameter rest:(COMMA FormalParameter)* last:(COMMA LastFormalParameter)?
    { return buildList(first, rest, 1).concat(extractOptionalList(last, 1)); }
    / last:LastFormalParameter
    { return [last]; }

VariableDeclaratorId
    = id:Identifier dims:Dim*
    { 
      return { 
        node:           'SingleVariableDeclaration', 
        name:            id, 
        extraDimensions: dims.length 
      }; 
    }

//-------------------------------------------------------------------------
//  Statements
//-------------------------------------------------------------------------

Block
    = LWING statements:BlockStatements RWING
    { 
      return {
        node:      'Block',
        statements: statements
      }
    }

BlockStatements
    = BlockStatement*

BlockStatement
    = LocalVariableDeclarationStatement
    / modifiers:Modifier* decl:( ClassDeclaration / EnumDeclaration )
    { 
      return { 
        node:       'TypeDeclarationStatement', 
        declaration: mergeProps(decl,  { modifiers: modifiers }) 
      }; 
    }
    / Statement

Statement
    = Block
    / ASSERT expr:Expression message:(COLON Expression)? SEMI
    { 
      return { 
        node:      'AssertStatement', 
        expression: expr,
        message:    extractOptional(message, 1)
      }; 
    }
    / IF expr:ParExpression then:Statement alt:(ELSE Statement)?
    { 
      return { 
        node:         'IfStatement', 
        elseStatement: extractOptional(alt, 1), 
        thenStatement: then,
        expression:    expr.expression,   
      }; 
    }
    / FOR LPAR init:ForInit? SEMI expr:Expression? SEMI up:ForUpdate? RPAR body:Statement
    { 
      return {
        node:        'ForStatement',
        initializers: optionalList(init),
        expression:   expr,
        updaters:     optionalList(up),
        body:         body
      };
    }
    / FOR LPAR param:FormalParameter COLON expr:Expression RPAR statement:Statement
    {       
      return {
        node:      'EnhancedForStatement',
        parameter:  param,
        expression: expr,
        body:       statement
      }; 
    }
    / WHILE expr:ParExpression body:Statement
    { 
      return { 
        node:      'WhileStatement', 
        expression: expr.expression, 
        body:       body 
      };
    }
    / DO statement:Statement WHILE expr:ParExpression SEMI
    { 
      return { 
        node:      'DoStatement', 
        expression: expr.expression, 
        body:       statement 
      };  
    }
    / TRY LPAR first:Resource rest:(SEMI Resource)* SEMI? RPAR 
      body:Block cat:Catch* fin:Finally?
    { 
      return mergeProps(makeCatchFinally(cat, fin), {
        node:        'TryStatement',
        body:         body,
        resources:    buildList(first, rest, 1)
      });
    }
    / TRY body:Block 
      rest:(cat:Catch+ fin:Finally? { return makeCatchFinally(cat, fin); } 
            / fin:Finally { return makeCatchFinally([], fin); })
    { 
      return mergeProps(rest, {
        node:        'TryStatement',
        body:         body,
        resources:    []
      });
    }
    / SWITCH expr:ParExpression LWING cases:SwitchBlockStatementGroups RWING
    { return { node: 'SwitchStatement', statements: cases, expression: expr.expression }; }
    / SYNCHRONIZED expr:ParExpression body:Block
    { return { node: 'SynchronizedStatement', expression: expr.expression, body: body } }
    / RETURN expr:Expression? SEMI
    { return { node: 'ReturnStatement', expression: expr } }
    / THROW expr:Expression SEMI
    { return { node: 'ThrowStatement', expression: expr }; }
    / BREAK id:Identifier? SEMI
    { return { node: 'BreakStatement', label: id }; }
    / CONTINUE id:Identifier? SEMI
    { return { node: 'ContinueStatement', label: id }; }
    / SEMI
    { return { node: 'EmptyStatement' }; }
    / statement:StatementExpression SEMI
    { return statement; }
    / id:Identifier COLON statement:Statement
    { return { node: 'LabeledStatement', label: id, body: statement }; }

Resource
    = modifiers:(FINAL { return makeModifier('final'); } / Annotation)* type:Type decl:VariableDeclaratorId EQU expr:Expression
    { 
      var fragment = mergeProps(decl, { initializer: expr });
      fragment.node = 'VariableDeclarationFragment';
      return {
        node:     'VariableDeclarationExpression',
        modifiers: modifiers,
        type:      type,
        fragments: [fragment]
      }; 
    }

Catch
    = CATCH LPAR modifiers:(FINAL { return makeModifier('final'); } / Annotation)* 
      first:Type rest:(OR Type)* decl:VariableDeclaratorId RPAR body:Block
    {
      return {
        node:       'CatchClause',
        body:        body,
        exception:   mergeProps(decl, {
          modifiers:   modifiers,
          initializer: null,
          varargs:     false,
          type:        rest.length ? { 
            node: 'UnionType', 
            types: buildList(first, rest, 1) 
            } : first
        })
      };
    }

Finally
    = FINALLY block:Block
    { return block; }

SwitchBlockStatementGroups
    = blocks:SwitchBlockStatementGroup*
    { return [].concat.apply([], blocks); }

SwitchBlockStatementGroup
    = expr:SwitchLabel blocks:BlockStatements
    { return [{ node: 'SwitchCase', expression: expr }].concat(blocks); }

SwitchLabel
    = CASE expr:ConstantExpression COLON
    { return expr; }
    / CASE expr:EnumConstantName COLON
    { return expr; }
    / DEFAULT COLON
    { return null; }

ForInit
    = modifiers:(FINAL { return makeModifier('final'); } / Annotation)* type:Type decls:VariableDeclarators
    { 
      return [{
        node:     'VariableDeclarationExpression',
        modifiers: modifiers,
        fragments: decls,
        type:      type
      }]; 
    }
    / first:StatementExpression rest:(COMMA StatementExpression)*
    { return extractExpressions(buildList(first, rest, 1)); }

ForUpdate
    = first:StatementExpression rest:(COMMA StatementExpression)*
    { return extractExpressions(buildList(first, rest, 1)); }

EnumConstantName
    = Identifier

//-------------------------------------------------------------------------
//  Expressions
//-------------------------------------------------------------------------

StatementExpression
    = expr:Expression
    { 
      switch(expr.node) {
        case 'SuperConstructorInvocation':
        case 'ConstructorInvocation':
          return expr;
        default:
          return { 
            node:      'ExpressionStatement', 
            expression: expr 
          };  
      }
    } 

    // This is more generous than definition in section 14.8, which allows only
    // specific forms of Expression.


ConstantExpression
    = Expression

Expression
    = left:ConditionalExpression op:AssignmentOperator right:Expression
    {
      return {
        node:         'Assignment',
        operator:      op[0] /* remove ending spaces */,
        leftHandSide:  left,
        rightHandSide: right
      };
    } 
    / ConditionalExpression

    // This definition is part of the modification in JLS Chapter 18
    // to minimize look ahead. In JLS Chapter 15.27, Expression is defined
    // as AssignmentExpression, which is effectively defined as
    // (LeftHandSide AssignmentOperator)* ConditionalExpression.
    // The above is obtained by allowing ANY ConditionalExpression
    // as LeftHandSide, which results in accepting statements like 5 = a.

AssignmentOperator
    = EQU
    / PLUSEQU
    / MINUSEQU
    / STAREQU
    / DIVEQU
    / ANDEQU
    / OREQU
    / HATEQU
    / MODEQU
    / SLEQU
    / SREQU
    / BSREQU

ConditionalExpression
    = expr:ConditionalOrExpression QUERY then:Expression COLON alt:ConditionalExpression
    {
      return {
        node:          'ConditionalExpression',
        expression:     expr,
        thenExpression: then,
        elseExpression: alt
      };
    }
    / ConditionalOrExpression

ConditionalOrExpression
    = first:ConditionalAndExpression rest:(OROR ConditionalAndExpression)*
    { return buildInfixExpr(first, rest); }

ConditionalAndExpression
    = first:InclusiveOrExpression rest:(ANDAND InclusiveOrExpression)*
    { return buildInfixExpr(first, rest); }

InclusiveOrExpression
    = first:ExclusiveOrExpression rest:(OR ExclusiveOrExpression)*
    { return buildInfixExpr(first, rest); }

ExclusiveOrExpression
    = first:AndExpression rest:(HAT AndExpression)*
    { return buildInfixExpr(first, rest); }

AndExpression
    = first:EqualityExpression rest:(AND EqualityExpression)*
    { return buildInfixExpr(first, rest); }

EqualityExpression
    = first:RelationalExpression rest:((EQUAL /  NOTEQUAL) RelationalExpression)*
    { return buildInfixExpr(first, rest); }

RelationalExpression
    = first:ShiftExpression rest:((LE / GE / LT / GT) ShiftExpression / INSTANCEOF ReferenceType )*
    {
      return buildTree(first, rest, function(result, element) {
        return element[0][0] === 'instanceof' ? {
          node:        'InstanceofExpression',
          leftOperand:  result,
          rightOperand: element[1]
        } : {
          node:        'InfixExpression',
          operator:     element[0][0], // remove ending Spacing
          leftOperand:  result,
          rightOperand: element[1]
        };
      });
    }

ShiftExpression
    = first:AdditiveExpression rest:((SL / SR / BSR) AdditiveExpression)*
    { return buildInfixExpr(first, rest); }

AdditiveExpression
    = first:MultiplicativeExpression rest:((PLUS / MINUS) MultiplicativeExpression)*
    { return buildInfixExpr(first, rest); }

MultiplicativeExpression
    = first:UnaryExpression rest:((STAR / DIV / MOD) UnaryExpression)*
    { return buildInfixExpr(first, rest); }

UnaryExpression
    = operator:PrefixOp operand:UnaryExpression
    {
      return operand.node === 'NumberLiteral' && operator === '-' && 
        (operand.token === '9223372036854775808L' || 
         operand.token === '9223372036854775808l' ||
         operand.token === '2147483648') 
        ? { node: 'NumberLiteral', token: text() }
        : { 
          node:    'PrefixExpression', 
          operator: operator, 
          operand:  operand
        };
    }
    / UnaryExpressionNotPlusMinus

UnaryExpressionNotPlusMinus
    = expr:CastExpression
    {
      return {
        node:      'CastExpression',
        type:       expr[1],     
        expression: expr[3]
      };
    }
    / arg:Primary sel:Selector sels:Selector* operator:PostfixOp+
    { 
      return operator.length > 1 ? TODO(/* JLS7? */) : {
        node:    'PostfixExpression', 
        operator: operator[0], 
        operand:  buildSelectorTree(arg, sel, sels)
      };
    }
    / arg:Primary sel:Selector sels:Selector*
    { return buildSelectorTree(arg, sel, sels); }
    / arg:Primary operator:PostfixOp+
    { 
      return operator.length > 1 ? TODO(/* JLS7? */) : {
        node:    'PostfixExpression', 
        operator: operator[0], 
        operand:  arg
      };
    }
    / Primary

CastExpression
    = LPAR PrimitiveType RPAR UnaryExpression
    / LPAR ReferenceType RPAR UnaryExpressionNotPlusMinus

Primary
    = ParExpression
    / args:NonWildcardTypeArguments 
      ret:(ExplicitGenericInvocationSuffix / THIS args_r:Arguments 
      { return { node: 'ConstructorInvocation', arguments: args_r, typeArguments: [] }; })
    { 
      if (ret.typeArguments.length) return TODO(/* Ugly ! */);
      ret.typeArguments = args;
      return ret;
    }
    / THIS args:Arguments?
    { 
      return args === null ? {
        node:     'ThisExpression',
        qualifier: null
      } : { 
        node:         'ConstructorInvocation', 
        arguments:     args, 
        typeArguments: [] 
      }; 
    }
    / SUPER suffix:SuperSuffix
    { 
      return suffix.node === 'SuperConstructorInvocation' 
        ? suffix
        : mergeProps(suffix, { qualifier: null }); 
    }
    / Literal
    / NEW creator:Creator
    { return creator; }
    / QualifiedIdentifierSuffix
    / QualifiedIdentifier
    / type:BasicType dims:Dim* DOT CLASS
    {
      return {
        node: 'TypeLiteral',
        type:  buildArrayTree(type, dims)
      };
    }
    / VOID DOT CLASS
    {
      return {
        node: 'TypeLiteral',
        type:  makePrimitive('void')
      };
    }

QualifiedIdentifierSuffix
    = qual:QualifiedIdentifier dims:Dim+ DOT CLASS 
    { 
      return {
        node: 'TypeLiteral',
        type:  buildArrayTree(buildTypeName(qual, null, []), dims)
      };
    }
    / qual:QualifiedIdentifier LBRK expr:Expression RBRK
    { return { node: 'ArrayAccess', array: qual, index: expr }; }
    / qual:QualifiedIdentifier args:Arguments
    { 
      return mergeProps(popQualified(qual), { 
        node:         'MethodInvocation', 
        arguments:     args, 
        typeArguments: [] 
      }); 
    }
    / qual:QualifiedIdentifier DOT CLASS 
    { return { node: 'TypeLiteral', type: buildTypeName(qual, null, []) }; }
    / qual:QualifiedIdentifier DOT ret:ExplicitGenericInvocation
    { 
      if (ret.expression) return TODO(/* Ugly ! */);
      ret.expression = qual;
      return ret; 
    }
    / qual:QualifiedIdentifier DOT THIS
    { return { node: 'ThisExpression', qualifier: qual }; }
    / qual:QualifiedIdentifier DOT SUPER args:Arguments
    {
      return { 
        node:         'SuperConstructorInvocation', 
        arguments:     args, 
        expression:    qual,
        typeArguments: []
      };  
    }
    / qual:QualifiedIdentifier DOT NEW args:NonWildcardTypeArguments? rest:InnerCreator
    { return mergeProps(rest, { expression: qual, typeArguments: optionalList(args) }); }

    // This definition comes from Chapter 18 in JLS Third edition.
    // The definition in JLS SE7 seems incorrect as it would mean
    // nesting of brackets.

ExplicitGenericInvocation
    = args:NonWildcardTypeArguments ret:ExplicitGenericInvocationSuffix
    { 
      if (ret.typeArguments.length) return TODO(/* Ugly ! */);
      ret.typeArguments = args;
      return ret;
    }

NonWildcardTypeArguments
    = LPOINT first:ReferenceType rest:(COMMA ReferenceType)* RPOINT
    { return buildList(first, rest, 1); }

TypeArgumentsOrDiamond
    = LPOINT RPOINT
    { return []; }
    / TypeArguments

NonWildcardTypeArgumentsOrDiamond
    = LPOINT RPOINT
    / NonWildcardTypeArguments

ExplicitGenericInvocationSuffix
    = SUPER suffix:SuperSuffix
    { return suffix; }
    / id:Identifier args:Arguments
    { return { node: 'MethodInvocation', arguments: args, name: id, typeArguments: [] }; }

PrefixOp
    = op:(
      INC
    / DEC
    / BANG
    / TILDA
    / PLUS
    / MINUS
    ) { return op[0]; /* remove ending spaces */ }

PostfixOp
    = op:(
      INC
    / DEC
    ) { return op[0]; /* remove ending spaces */ }

Selector
    = DOT id:Identifier args:Arguments
    { return { node: 'MethodInvocation', arguments: args, name: id, typeArguments: [] }; }
    / DOT id:Identifier
    { return { node: 'FieldAccess', name: id }; }
    / DOT ret:ExplicitGenericInvocation
    { return ret; }
    / DOT THIS
    { return TODO(/* Any sample ? */); }
    / DOT SUPER suffix:SuperSuffix
    { return suffix; }
    / DOT NEW args:NonWildcardTypeArguments? ret:InnerCreator
    { return mergeProps(ret, { typeArguments: optionalList(args) }); }
    / expr:DimExpr
    { return { node: 'ArrayAccess', index: expr }; }

SuperSuffix
    = args:Arguments
    { 
      return { 
        node:         'SuperConstructorInvocation', 
        arguments:     args, 
        expression:    null,
        typeArguments: []
      }; 
    }
    / DOT gen:NonWildcardTypeArguments? id:Identifier args:Arguments?
    { 
      return args === null ? {
        node: 'SuperFieldAccess',
        name:  id  
      } : { 
        node:         'SuperMethodInvocation', 
        typeArguments: optionalList(gen),
        name:          id, 
        arguments:     args
      }; 
    }

    // The definition of SuperSuffix in JLS Chapter 18 is incorrect:
    // it does not allow NonWildcardTypeArguments. See JLS 15.12.

BasicType
    = type:( 
        "byte"
      / "short"
      / "char"
      / "int"
      / "long"
      / "float"
      / "double"
      / "boolean"
      ) !LetterOrDigit Spacing
    { return makePrimitive(type); }

PrimitiveType
    = BasicType

Arguments
    = LPAR args:(first:Expression rest:(COMMA Expression)* { return buildList(first, rest, 1); })? RPAR
    { return optionalList(args); }

Creator
    = type:(BasicType / CreatedName) rest:ArrayCreatorRest
    { 
      return  { 
        node:       'ArrayCreation', 
        type:        buildArrayTree(type, rest.extraDims), 
        initializer: rest.init,
        dimensions:  rest.dimms
      }; 
    }
    / args:NonWildcardTypeArguments? type:CreatedName rest:ClassCreatorRest
    {
      return mergeProps(rest, {
        node:          'ClassInstanceCreation',
        type:           type,
        typeArguments:  optionalList(args),
        expression:     null
      });
    }

    // The definition of Creator in JLS Chapter 18 is incorrect:
    // it does not allow BasicType for array creator. See JLS 15.10.

CreatedName
    = qual:QualifiedIdentifier args:TypeArgumentsOrDiamond? rest:( DOT Identifier TypeArgumentsOrDiamond? )*
    { return buildTypeName(qual, args, rest); }

InnerCreator
    = id:Identifier args:NonWildcardTypeArgumentsOrDiamond? rest:ClassCreatorRest
    { 
      return mergeProps(rest, {
        node: 'ClassInstanceCreation',
        type:  buildTypeName(id, args, [])
      });  
    }

ClassCreatorRest
    = args:Arguments body:ClassBody?
    {
      return {
        arguments:                 args,
        anonymousClassDeclaration: body === null ? null : {
          node:            'AnonymousClassDeclaration',
          bodyDeclarations: body
        }
      };
    }

ArrayCreatorRest
    = dims:Dim+ init:ArrayInitializer
    { return { extraDims:dims, init:init, dimms: [] }; }
    / dimexpr:DimExpr+ dims:Dim*
    { return { extraDims:dimexpr.concat(dims), init:null, dimms: dimexpr }; }
    / dim:Dim
    { return { extraDims:[dim], init:null, dimms: [] }; }

    // This version comes from JLS Chapter 18.
    // It is more generous than JLS 15.10. According to that definition,
    // BasicType must be followed by at least one DimExpr or by ArrayInitializer.
    // Besides, the last alternative does not correspond to JLS 15.10,
    // and may be an error.

ArrayInitializer
    = LWING 
      init:(
        first:VariableInitializer rest:(COMMA VariableInitializer)* 
        { return buildList(first, rest, 1); }
      )? 
      COMMA?  RWING
    { return { node: 'ArrayInitializer', expressions: optionalList(init) }; }

VariableInitializer
    = ArrayInitializer
    / Expression

ParExpression
    = LPAR expr:Expression RPAR
    { return { node: 'ParenthesizedExpression', expression: expr }; }

QualifiedIdentifier
    = first:Identifier rest:(DOT Identifier)*
    { return buildQualified(first, rest, 1); }

Dim
    = LBRK RBRK

DimExpr
    = LBRK exp:Expression RBRK
    { return exp; }

//-------------------------------------------------------------------------
//  Types and Modifiers
//-------------------------------------------------------------------------

Type
    = type:(BasicType / ClassType) dims:Dim*
      { return buildArrayTree(type, dims); }

ReferenceType
    = bas:BasicType dims:Dim+
    { return buildArrayTree(bas, dims); }
    / cls:ClassType dims:Dim*
    { return buildArrayTree(cls, dims); }

ClassType
    = qual:QualifiedIdentifier args:TypeArguments? rest:(DOT Identifier TypeArguments?)*
    { return buildTypeName(qual, args, rest); }

ClassTypeList
    = first:ClassType rest:(COMMA ClassType)*
    { return buildList(first, rest, 1); }

TypeArguments
    = LPOINT first:TypeArgument rest:(COMMA TypeArgument)* RPOINT
    { return buildList(first, rest, 1); }

TypeArgument
    = ReferenceType
    / QUERY rest:((EXTENDS { return true; } / SUPER { return false; }) ReferenceType)?
    {
      return {
        node:      'WildcardType',
        upperBound: extractOptional(rest, 0, true),
        bound:      extractOptional(rest, 1)
      }; 
    }

TypeParameters
    = LPOINT first:TypeParameter rest:(COMMA TypeParameter)* RPOINT
    { return buildList(first, rest, 1); }

TypeParameter
    = id:Identifier bounds:(EXTENDS Bound)?
    { 
      return {
        node:      'TypeParameter',
        name:       id,
        typeBounds: extractOptionalList(bounds, 1)
      }
    }

Bound
    = first:ClassType rest:(AND ClassType)*
    { return buildList(first, rest, 1); }

Modifier
    = Annotation
    / keyword:( 
        "public"
      / "protected"
      / "private"
      / "static"
      / "abstract"
      / "final"
      / "native"
      / "synchronized"
      / "transient"
      / "volatile"
      / "strictfp"
      ) !LetterOrDigit Spacing
    { return makeModifier(keyword); }

    // This common definition of Modifier is part of the modification
    // in JLS Chapter 18 to minimize look ahead. The main body of JLS has
    // different lists of modifiers for different language elements.

//-------------------------------------------------------------------------
//  Annotations
//-------------------------------------------------------------------------

AnnotationTypeDeclaration
    = AT INTERFACE id:Identifier body:AnnotationTypeBody
    { 
      return {
        node:            'AnnotationTypeDeclaration',
        name:             id,
        bodyDeclarations: body
      }; 
    }

AnnotationTypeBody
    = LWING decl:AnnotationTypeElementDeclaration* RWING
    { return skipNulls(decl); }

AnnotationTypeElementDeclaration
    = modifiers:Modifier* rest:AnnotationTypeElementRest
    { return mergeProps(rest, { modifiers: modifiers }); }
    / SEMI
    { return null; }

AnnotationTypeElementRest
    = type:Type rest:AnnotationMethodOrConstantRest SEMI
    { return mergeProps(rest, { type: type }); }
    / ClassDeclaration
    / EnumDeclaration
    / InterfaceDeclaration
    / AnnotationTypeDeclaration

AnnotationMethodOrConstantRest
    = AnnotationMethodRest
    / AnnotationConstantRest

AnnotationMethodRest
    = id:Identifier LPAR RPAR def:DefaultValue?
    { 
      return { 
        node:   'AnnotationTypeMemberDeclaration', 
        name:    id, 
        default: def 
      }; 
    }

AnnotationConstantRest
    = fragments:VariableDeclarators
    { return { node: 'FieldDeclaration', fragments: fragments }; }

DefaultValue
    = DEFAULT val:ElementValue
    { return val; }

Annotation
    = NormalAnnotation
    / SingleElementAnnotation
    / MarkerAnnotation

NormalAnnotation
    = AT id:QualifiedIdentifier LPAR pairs:ElementValuePairs? RPAR
    { 
      return { 
        node:    'NormalAnnotation', 
        typeName: id, 
        values:   optionalList(pairs)
      }; 
    }

SingleElementAnnotation
    = AT id:QualifiedIdentifier LPAR value:ElementValue RPAR
    { 
      return { 
        node:    'SingleMemberAnnotation', 
        typeName: id, 
        value:    value 
      }; 
    }

MarkerAnnotation
    = AT id:QualifiedIdentifier
    { return { node: 'MarkerAnnotation', typeName: id }; }

ElementValuePairs
    = first:ElementValuePair rest:(COMMA ElementValuePair)*
    { return buildList(first, rest, 1); }

ElementValuePair
    = name:Identifier EQU value:ElementValue
    { 
      return {
        node: 'MemberValuePair',
        name:  name,
        value: value
      };
    }

ElementValue
    = ConditionalExpression
    / Annotation
    / ElementValueArrayInitializer

ElementValueArrayInitializer
    = LWING values:ElementValues? COMMA? RWING
    { return { node: 'ArrayInitializer', expressions: optionalList(values)}; }

ElementValues
    = first:ElementValue rest:(COMMA ElementValue)*
    { return buildList(first, rest, 1); }


//=========================================================================
//  Lexical Structure
//=========================================================================
//-------------------------------------------------------------------------
//  JLS 3.1-3  Unicode
//-------------------------------------------------------------------------
//  The Unicode escapes in Java source are converted
//  to Java characters by a preprocessor prior to parsing.
//  This is not emulated here; the Unicode escapes are only allowed
//  in string and character literals. They are treated as error in other
//  structures (except comments). The warning in JLS 3.10.5 against using
//  Unicode escapes for line terminators and quotes in string and character
//  literals does not apply here.
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
//  JLS 3.6-7  Spacing
//-------------------------------------------------------------------------

Spacing
    = ( [ \t\r\n\u000C]+          // WhiteSpace
      / "/*" (!"*/" _)* "*/"      // TraditionalComment
      / "//" (![\r\n] _)* [\r\n]  // EndOfLineComment
      )* ;

//-------------------------------------------------------------------------
//  JLS 3.8  Identifiers
//-------------------------------------------------------------------------

Identifier
    = !Keyword first:Letter rest:$LetterOrDigit* Spacing
    { return { identifier: first + rest, node: 'SimpleName' }; }

Letter = [a-z] / [A-Z] / [_$] ;

LetterOrDigit = [a-z] / [A-Z] / [0-9] / [_$] ;

    // These are traditional definitions of letters and digits.
    // JLS defines letters and digits as Unicode characters recognized
    // as such by special Java procedures, which is difficult
    // to express in terms of Parsing Expressions.

//-------------------------------------------------------------------------
//  JLS 3.9  Keywords
//  More precisely: reserved words. According to JLS, "true", "false",
//  and "null" are technically not keywords - but still must not appear
//  as identifiers. Keywords "const" and "goto" are not used; JLS explains
//  the reason.
//-------------------------------------------------------------------------

Keyword

    = ( "abstract"
      / "assert"
      / "boolean"
      / "break"
      / "byte"
      / "case"
      / "catch"
      / "char"
      / "class"
      / "const"
      / "continue"
      / "default"
      / "double"
      / "do"
      / "else"
      / "enum"
      / "extends"
      / "false"
      / "finally"
      / "final"
      / "float"
      / "for"
      / "goto"
      / "if"
      / "implements"
      / "import"
      / "interface"
      / "int"
      / "instanceof"
      / "long"
      / "native"
      / "new"
      / "null"
      / "package"
      / "private"
      / "protected"
      / "public"
      / "return"
      / "short"
      / "static"
      / "strictfp"
      / "super"
      / "switch"
      / "synchronized"
      / "this"
      / "throws"
      / "throw"
      / "transient"
      / "true"
      / "try"
      / "void"
      / "volatile"
      / "while"
      ) !LetterOrDigit

ASSERT       = "assert"       !LetterOrDigit Spacing 
BREAK        = "break"        !LetterOrDigit Spacing 
CASE         = "case"         !LetterOrDigit Spacing 
CATCH        = "catch"        !LetterOrDigit Spacing 
CLASS        = "class"        !LetterOrDigit Spacing 
CONTINUE     = "continue"     !LetterOrDigit Spacing 
DEFAULT      = "default"      !LetterOrDigit Spacing 
DO           = "do"           !LetterOrDigit Spacing 
ELSE         = "else"         !LetterOrDigit Spacing 
ENUM         = "enum"         !LetterOrDigit Spacing 
EXTENDS      = "extends"      !LetterOrDigit Spacing 
FINALLY      = "finally"      !LetterOrDigit Spacing 
FINAL        = "final"        !LetterOrDigit Spacing 
FOR          = "for"          !LetterOrDigit Spacing 
IF           = "if"           !LetterOrDigit Spacing 
IMPLEMENTS   = "implements"   !LetterOrDigit Spacing 
IMPORT       = "import"       !LetterOrDigit Spacing 
INTERFACE    = "interface"    !LetterOrDigit Spacing 
INSTANCEOF   = "instanceof"   !LetterOrDigit Spacing 
NEW          = "new"          !LetterOrDigit Spacing 
PACKAGE      = "package"      !LetterOrDigit Spacing 
RETURN       = "return"       !LetterOrDigit Spacing 
STATIC       = "static"       !LetterOrDigit Spacing 
SUPER        = "super"        !LetterOrDigit Spacing 
SWITCH       = "switch"       !LetterOrDigit Spacing 
SYNCHRONIZED = "synchronized" !LetterOrDigit Spacing 
THIS         = "this"         !LetterOrDigit Spacing 
THROWS       = "throws"       !LetterOrDigit Spacing 
THROW        = "throw"        !LetterOrDigit Spacing 
TRY          = "try"          !LetterOrDigit Spacing 
VOID         = "void"         !LetterOrDigit Spacing 
WHILE        = "while"        !LetterOrDigit Spacing 

//-------------------------------------------------------------------------
//  JLS 3.10  Literals
//-------------------------------------------------------------------------

Literal
    = literal:( FloatLiteral
      / IntegerLiteral          // May be a prefix of FloatLiteral
      / CharLiteral
      / StringLiteral
      / "true"  !LetterOrDigit
      { return { node: 'BooleanLiteral', booleanValue: true }; }
      / "false" !LetterOrDigit
      { return { node: 'BooleanLiteral', booleanValue: false }; }
      / "null"  !LetterOrDigit
      { return { node: 'NullLiteral' }; }
      ) Spacing
    { return literal; }

IntegerLiteral
    = ( HexNumeral
      / BinaryNumeral
      / OctalNumeral            // May be a prefix of HexNumeral or BinaryNumeral
      / DecimalNumeral          // May be a prefix of OctalNumeral
      ) [lL]?
    { return { node: 'NumberLiteral', token: text() }; }

DecimalNumeral
    = "0"
    / [1-9]([_]*[0-9])*

HexNumeral
    = ("0x" / "0X") HexDigits

BinaryNumeral
    = ("0b" / "0B") [01]([_]*[01])*

OctalNumeral
    = "0" ([_]*[0-7])+

FloatLiteral
    = ( HexFloat
    / DecimalFloat )
    { return { node: 'NumberLiteral', token: text() }; }

DecimalFloat
    = Digits "." Digits?  Exponent? [fFdD]?
    / "." Digits Exponent? [fFdD]?
    / Digits Exponent [fFdD]?
    / Digits Exponent? [fFdD]

Exponent
    = [eE] [+\-]? Digits

HexFloat
    = HexSignificand BinaryExponent [fFdD]?

HexSignificand
    = ("0x" / "0X") HexDigits? "." HexDigits
    / HexNumeral "."?                           // May be a prefix of above

BinaryExponent
    = [pP] [+\-]? Digits

Digits
    = [0-9]([_]*[0-9])*

HexDigits
    = HexDigit ([_]*HexDigit)*

HexDigit
    = [a-f] / [A-F] / [0-9]

CharLiteral
    = "'" (Escape / !['\\\n\r] _) "'"                      // this " keeps the editor happy
    { return { node: 'CharacterLiteral', escapedValue: text() }; }

StringLiteral
    = "\"" (Escape / !["\\\n\r] _)* "\""                   // this " keeps the editor happy
    { return { node: 'StringLiteral', escapedValue: text() }; }

Escape
    = "\\" ([btnfr"'\\] / OctalEscape / UnicodeEscape)     // this " keeps the editor happy

OctalEscape
    = [0-3][0-7][0-7]
    / [0-7][0-7]
    / [0-7]

UnicodeEscape
    = "u"+ HexDigit HexDigit HexDigit HexDigit

//-------------------------------------------------------------------------
//  JLS 3.11-12  Separators, Operators
//-------------------------------------------------------------------------

AT              =   "@"       Spacing
AND             =   "&"![=&]  Spacing
ANDAND          =   "&&"      Spacing
ANDEQU          =   "&="      Spacing
BANG            =   "!" !"="  Spacing
BSR             =   ">>>"!"=" Spacing
BSREQU          =   ">>>="    Spacing
COLON           =   ":"       Spacing
COMMA           =   ","       Spacing
DEC             =   "--"      Spacing
DIV             =   "/" !"="  Spacing
DIVEQU          =   "/="      Spacing
DOT             =   "."       Spacing
ELLIPSIS        =   "..."     Spacing
EQU             =   "=" !"="  Spacing
EQUAL           =   "=="      Spacing
GE              =   ">="      Spacing
GT              =   ">"![=>]  Spacing
HAT             =   "^"!"="   Spacing
HATEQU          =   "^="      Spacing
INC             =   "++"      Spacing
LBRK            =   "["       Spacing
LE              =   "<="      Spacing
LPAR            =   "("       Spacing
LPOINT          =   "<"       Spacing
LT              =   "<"![=<]  Spacing
LWING           =   "{"       Spacing
MINUS           =   "-"![=\-] Spacing
MINUSEQU        =   "-="      Spacing
MOD             =   "%"!"="   Spacing
MODEQU          =   "%="      Spacing
NOTEQUAL        =   "!="      Spacing
OR              =   "|"![=|]  Spacing
OREQU           =   "|="      Spacing
OROR            =   "||"      Spacing
PLUS            =   "+"![=+]  Spacing
PLUSEQU         =   "+="      Spacing
QUERY           =   "?"       Spacing
RBRK            =   "]"       Spacing
RPAR            =   ")"       Spacing
RPOINT          =   ">"       Spacing
RWING           =   "}"       Spacing
SEMI            =   ";"       Spacing
SL              =   "<<"!"="  Spacing
SLEQU           =   "<<="     Spacing
SR              =   ">>"![=>] Spacing
SREQU           =   ">>="     Spacing
STAR            =   "*"!"="   Spacing
STAREQU         =   "*="      Spacing
TILDA           =   "~"       Spacing

EOT = !_ 

/* http://mousepeg.sourceforge.net/Manual.pdf */

_               =   .