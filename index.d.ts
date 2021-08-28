declare module '@solidity-parser/parser/src/ASTBuilder' {
  import { ParserRuleContext } from 'antlr4ts';
  import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
  import * as SP from '@solidity-parser/parser/src/antlr/SolidityParser';
  import { SolidityVisitor } from '@solidity-parser/parser/src/antlr/SolidityVisitor';
  import { ParseOptions } from '@solidity-parser/parser/src/types';
  import * as AST from '@solidity-parser/parser/src/ast-types';
  interface WithMeta {
      __withMeta: never;
  }
  type ASTBuilderNode = AST.ASTNode & WithMeta;
  export class ASTBuilder extends AbstractParseTreeVisitor<ASTBuilderNode> implements SolidityVisitor<ASTBuilderNode | ASTBuilderNode[]> {
      options: ParseOptions;
      result: AST.SourceUnit | null;
      private _currentContract?;
      constructor(options: ParseOptions);
      defaultResult(): AST.ASTNode & WithMeta;
      aggregateResult(): AST.ASTNode & WithMeta;
      visitSourceUnit(ctx: SP.SourceUnitContext): AST.SourceUnit & WithMeta;
      visitContractPart(ctx: SP.ContractPartContext): ASTBuilderNode;
      visitContractDefinition(ctx: SP.ContractDefinitionContext): AST.ContractDefinition & WithMeta;
      visitStateVariableDeclaration(ctx: SP.StateVariableDeclarationContext): AST.StateVariableDeclaration & WithMeta;
      visitVariableDeclaration(ctx: SP.VariableDeclarationContext): AST.VariableDeclaration & WithMeta;
      visitVariableDeclarationStatement(ctx: SP.VariableDeclarationStatementContext): AST.VariableDeclarationStatement & WithMeta;
      visitStatement(ctx: SP.StatementContext): AST.Statement & WithMeta;
      visitSimpleStatement(ctx: SP.SimpleStatementContext): AST.SimpleStatement & WithMeta;
      visitEventDefinition(ctx: SP.EventDefinitionContext): AST.EventDefinition & WithMeta;
      visitBlock(ctx: SP.BlockContext): AST.Block & WithMeta;
      visitParameter(ctx: SP.ParameterContext): AST.VariableDeclaration & WithMeta;
      visitFunctionDefinition(ctx: SP.FunctionDefinitionContext): AST.FunctionDefinition & WithMeta;
      visitEnumDefinition(ctx: SP.EnumDefinitionContext): AST.EnumDefinition & WithMeta;
      visitEnumValue(ctx: SP.EnumValueContext): AST.EnumValue & WithMeta;
      visitElementaryTypeName(ctx: SP.ElementaryTypeNameContext): AST.ElementaryTypeName & WithMeta;
      visitIdentifier(ctx: SP.IdentifierContext): AST.Identifier & WithMeta;
      visitTypeName(ctx: SP.TypeNameContext): AST.TypeName & WithMeta;
      visitUserDefinedTypeName(ctx: SP.UserDefinedTypeNameContext): AST.UserDefinedTypeName & WithMeta;
      visitUsingForDeclaration(ctx: SP.UsingForDeclarationContext): AST.UsingForDeclaration & WithMeta;
      visitPragmaDirective(ctx: SP.PragmaDirectiveContext): AST.PragmaDirective & WithMeta;
      visitInheritanceSpecifier(ctx: SP.InheritanceSpecifierContext): AST.InheritanceSpecifier & WithMeta;
      visitModifierInvocation(ctx: SP.ModifierInvocationContext): AST.ModifierInvocation & WithMeta;
      visitTypeNameExpression(ctx: SP.TypeNameExpressionContext): AST.TypeNameExpression & WithMeta;
      visitFunctionTypeName(ctx: SP.FunctionTypeNameContext): AST.FunctionTypeName & WithMeta;
      visitFunctionTypeParameter(ctx: SP.FunctionTypeParameterContext): AST.VariableDeclaration & WithMeta;
      visitThrowStatement(ctx: SP.ThrowStatementContext): AST.ThrowStatement & WithMeta;
      visitReturnStatement(ctx: SP.ReturnStatementContext): AST.ReturnStatement & WithMeta;
      visitEmitStatement(ctx: SP.EmitStatementContext): AST.EmitStatement & WithMeta;
      visitCustomErrorDefinition(ctx: SP.CustomErrorDefinitionContext): AST.CustomErrorDefinition & WithMeta;
      visitRevertStatement(ctx: SP.RevertStatementContext): AST.RevertStatement & WithMeta;
      visitFunctionCall(ctx: SP.FunctionCallContext): AST.FunctionCall & WithMeta;
      visitStructDefinition(ctx: SP.StructDefinitionContext): AST.StructDefinition & WithMeta;
      visitWhileStatement(ctx: SP.WhileStatementContext): AST.WhileStatement & WithMeta;
      visitDoWhileStatement(ctx: SP.DoWhileStatementContext): AST.DoWhileStatement & WithMeta;
      visitIfStatement(ctx: SP.IfStatementContext): AST.IfStatement & WithMeta;
      visitTryStatement(ctx: SP.TryStatementContext): AST.TryStatement & WithMeta;
      visitCatchClause(ctx: SP.CatchClauseContext): AST.CatchClause & WithMeta;
      visitExpressionStatement(ctx: SP.ExpressionStatementContext): AST.ExpressionStatement & WithMeta;
      visitNumberLiteral(ctx: SP.NumberLiteralContext): AST.NumberLiteral & WithMeta;
      visitMappingKey(ctx: SP.MappingKeyContext): (AST.ElementaryTypeName | AST.UserDefinedTypeName) & WithMeta;
      visitMapping(ctx: SP.MappingContext): AST.Mapping & WithMeta;
      visitModifierDefinition(ctx: SP.ModifierDefinitionContext): AST.ModifierDefinition & WithMeta;
      visitUncheckedStatement(ctx: SP.UncheckedStatementContext): AST.UncheckedStatement & WithMeta;
      visitExpression(ctx: SP.ExpressionContext): AST.Expression & WithMeta;
      visitNameValueList(ctx: SP.NameValueListContext): AST.NameValueList & WithMeta;
      visitFileLevelConstant(ctx: SP.FileLevelConstantContext): AST.FileLevelConstant & WithMeta;
      visitForStatement(ctx: SP.ForStatementContext): AST.ForStatement & WithMeta;
      visitHexLiteral(ctx: SP.HexLiteralContext): AST.HexLiteral & WithMeta;
      visitPrimaryExpression(ctx: SP.PrimaryExpressionContext): AST.PrimaryExpression & WithMeta;
      visitTupleExpression(ctx: SP.TupleExpressionContext): AST.TupleExpression & WithMeta;
      buildIdentifierList(ctx: SP.IdentifierListContext): ((AST.VariableDeclaration & WithMeta) | null)[];
      buildVariableDeclarationList(ctx: SP.VariableDeclarationListContext): Array<(AST.VariableDeclaration & WithMeta) | null>;
      visitImportDirective(ctx: SP.ImportDirectiveContext): AST.ImportDirective & WithMeta;
      buildEventParameterList(ctx: SP.EventParameterListContext): {
          type: string;
          typeName: ASTBuilderNode;
          name: string | null;
          isStateVar: boolean;
          isIndexed: boolean;
      }[];
      visitReturnParameters(ctx: SP.ReturnParametersContext): (AST.VariableDeclaration & WithMeta)[];
      visitParameterList(ctx: SP.ParameterListContext): (AST.VariableDeclaration & WithMeta)[];
      visitInlineAssemblyStatement(ctx: SP.InlineAssemblyStatementContext): AST.InlineAssemblyStatement & WithMeta;
      visitAssemblyBlock(ctx: SP.AssemblyBlockContext): AST.AssemblyBlock & WithMeta;
      visitAssemblyItem(ctx: SP.AssemblyItemContext): AST.AssemblyItem & WithMeta;
      visitAssemblyExpression(ctx: SP.AssemblyExpressionContext): AST.AssemblyExpression & WithMeta;
      visitAssemblyCall(ctx: SP.AssemblyCallContext): AST.AssemblyCall & WithMeta;
      visitAssemblyLiteral(ctx: SP.AssemblyLiteralContext): AST.AssemblyLiteral & WithMeta;
      visitAssemblySwitch(ctx: SP.AssemblySwitchContext): AST.AssemblySwitch & WithMeta;
      visitAssemblyCase(ctx: SP.AssemblyCaseContext): AST.AssemblyCase & WithMeta;
      visitAssemblyLocalDefinition(ctx: SP.AssemblyLocalDefinitionContext): AST.AssemblyLocalDefinition & WithMeta;
      visitAssemblyFunctionDefinition(ctx: SP.AssemblyFunctionDefinitionContext): AST.AssemblyFunctionDefinition & WithMeta;
      visitAssemblyAssignment(ctx: SP.AssemblyAssignmentContext): AST.AssemblyAssignment & WithMeta;
      visitAssemblyMember(ctx: SP.AssemblyMemberContext): AST.AssemblyMemberAccess & WithMeta;
      visitLabelDefinition(ctx: SP.LabelDefinitionContext): AST.LabelDefinition & WithMeta;
      visitAssemblyStackAssignment(ctx: SP.AssemblyStackAssignmentContext): AST.AssemblyStackAssignment & WithMeta;
      visitAssemblyFor(ctx: SP.AssemblyForContext): AST.AssemblyFor & WithMeta;
      visitAssemblyIf(ctx: SP.AssemblyIfContext): AST.AssemblyIf & WithMeta;
      visitContinueStatement(ctx: SP.ContinueStatementContext): AST.ContinueStatement & WithMeta;
      visitBreakStatement(ctx: SP.BreakStatementContext): AST.BreakStatement & WithMeta;
      private _toText;
      private _stateMutabilityToText;
      private _loc;
      _range(ctx: ParserRuleContext): [number, number];
      private _addMeta;
      private _mapCommasToNulls;
  }
  export {};

}
declare module '@solidity-parser/parser/src/ErrorListener' {
  import antlr4 from 'antlr4';
  class ErrorListener extends antlr4.error.ErrorListener {
      private _errors;
      constructor();
      syntaxError(recognizer: any, offendingSymbol: any, line: number, column: number, message: string): void;
      getErrors(): any[];
      hasErrors(): boolean;
  }
  export default ErrorListener;

}
declare module '@solidity-parser/parser/src/antlr/SolidityLexer' {
  import { ATN } from "antlr4ts/atn/ATN";
  import { CharStream } from "antlr4ts/CharStream";
  import { Lexer } from "antlr4ts/Lexer";
  import { Vocabulary } from "antlr4ts/Vocabulary";
  export class SolidityLexer extends Lexer {
      static readonly T__0 = 1;
      static readonly T__1 = 2;
      static readonly T__2 = 3;
      static readonly T__3 = 4;
      static readonly T__4 = 5;
      static readonly T__5 = 6;
      static readonly T__6 = 7;
      static readonly T__7 = 8;
      static readonly T__8 = 9;
      static readonly T__9 = 10;
      static readonly T__10 = 11;
      static readonly T__11 = 12;
      static readonly T__12 = 13;
      static readonly T__13 = 14;
      static readonly T__14 = 15;
      static readonly T__15 = 16;
      static readonly T__16 = 17;
      static readonly T__17 = 18;
      static readonly T__18 = 19;
      static readonly T__19 = 20;
      static readonly T__20 = 21;
      static readonly T__21 = 22;
      static readonly T__22 = 23;
      static readonly T__23 = 24;
      static readonly T__24 = 25;
      static readonly T__25 = 26;
      static readonly T__26 = 27;
      static readonly T__27 = 28;
      static readonly T__28 = 29;
      static readonly T__29 = 30;
      static readonly T__30 = 31;
      static readonly T__31 = 32;
      static readonly T__32 = 33;
      static readonly T__33 = 34;
      static readonly T__34 = 35;
      static readonly T__35 = 36;
      static readonly T__36 = 37;
      static readonly T__37 = 38;
      static readonly T__38 = 39;
      static readonly T__39 = 40;
      static readonly T__40 = 41;
      static readonly T__41 = 42;
      static readonly T__42 = 43;
      static readonly T__43 = 44;
      static readonly T__44 = 45;
      static readonly T__45 = 46;
      static readonly T__46 = 47;
      static readonly T__47 = 48;
      static readonly T__48 = 49;
      static readonly T__49 = 50;
      static readonly T__50 = 51;
      static readonly T__51 = 52;
      static readonly T__52 = 53;
      static readonly T__53 = 54;
      static readonly T__54 = 55;
      static readonly T__55 = 56;
      static readonly T__56 = 57;
      static readonly T__57 = 58;
      static readonly T__58 = 59;
      static readonly T__59 = 60;
      static readonly T__60 = 61;
      static readonly T__61 = 62;
      static readonly T__62 = 63;
      static readonly T__63 = 64;
      static readonly T__64 = 65;
      static readonly T__65 = 66;
      static readonly T__66 = 67;
      static readonly T__67 = 68;
      static readonly T__68 = 69;
      static readonly T__69 = 70;
      static readonly T__70 = 71;
      static readonly T__71 = 72;
      static readonly T__72 = 73;
      static readonly T__73 = 74;
      static readonly T__74 = 75;
      static readonly T__75 = 76;
      static readonly T__76 = 77;
      static readonly T__77 = 78;
      static readonly T__78 = 79;
      static readonly T__79 = 80;
      static readonly T__80 = 81;
      static readonly T__81 = 82;
      static readonly T__82 = 83;
      static readonly T__83 = 84;
      static readonly T__84 = 85;
      static readonly T__85 = 86;
      static readonly T__86 = 87;
      static readonly T__87 = 88;
      static readonly T__88 = 89;
      static readonly T__89 = 90;
      static readonly T__90 = 91;
      static readonly T__91 = 92;
      static readonly T__92 = 93;
      static readonly T__93 = 94;
      static readonly T__94 = 95;
      static readonly T__95 = 96;
      static readonly T__96 = 97;
      static readonly Int = 98;
      static readonly Uint = 99;
      static readonly Byte = 100;
      static readonly Fixed = 101;
      static readonly Ufixed = 102;
      static readonly BooleanLiteral = 103;
      static readonly DecimalNumber = 104;
      static readonly HexNumber = 105;
      static readonly NumberUnit = 106;
      static readonly HexLiteralFragment = 107;
      static readonly ReservedKeyword = 108;
      static readonly AnonymousKeyword = 109;
      static readonly BreakKeyword = 110;
      static readonly ConstantKeyword = 111;
      static readonly ImmutableKeyword = 112;
      static readonly ContinueKeyword = 113;
      static readonly LeaveKeyword = 114;
      static readonly ExternalKeyword = 115;
      static readonly IndexedKeyword = 116;
      static readonly InternalKeyword = 117;
      static readonly PayableKeyword = 118;
      static readonly PrivateKeyword = 119;
      static readonly PublicKeyword = 120;
      static readonly VirtualKeyword = 121;
      static readonly PureKeyword = 122;
      static readonly TypeKeyword = 123;
      static readonly ViewKeyword = 124;
      static readonly ConstructorKeyword = 125;
      static readonly FallbackKeyword = 126;
      static readonly ReceiveKeyword = 127;
      static readonly Identifier = 128;
      static readonly StringLiteralFragment = 129;
      static readonly VersionLiteral = 130;
      static readonly WS = 131;
      static readonly COMMENT = 132;
      static readonly LINE_COMMENT = 133;
      static readonly channelNames: string[];
      static readonly modeNames: string[];
      static readonly ruleNames: string[];
      private static readonly _LITERAL_NAMES;
      private static readonly _SYMBOLIC_NAMES;
      static readonly VOCABULARY: Vocabulary;
      get vocabulary(): Vocabulary;
      constructor(input: CharStream);
      get grammarFileName(): string;
      get ruleNames(): string[];
      get serializedATN(): string;
      get channelNames(): string[];
      get modeNames(): string[];
      private static readonly _serializedATNSegments;
      private static readonly _serializedATNSegment0;
      private static readonly _serializedATNSegment1;
      private static readonly _serializedATNSegment2;
      private static readonly _serializedATNSegment3;
      static readonly _serializedATN: string;
      static __ATN: ATN;
      static get _ATN(): ATN;
  }

}
declare module '@solidity-parser/parser/src/antlr/SolidityListener' {
  import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
  import { SourceUnitContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { PragmaDirectiveContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { PragmaNameContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { PragmaValueContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { VersionContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { VersionOperatorContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { VersionConstraintContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { ImportDeclarationContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { ImportDirectiveContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { ImportPathContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { ContractDefinitionContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { InheritanceSpecifierContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { ContractPartContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { StateVariableDeclarationContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { FileLevelConstantContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { CustomErrorDefinitionContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { UsingForDeclarationContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { StructDefinitionContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { ModifierDefinitionContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { ModifierInvocationContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { FunctionDefinitionContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { FunctionDescriptorContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { ReturnParametersContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { ModifierListContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { EventDefinitionContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { EnumValueContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { EnumDefinitionContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { ParameterListContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { ParameterContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { EventParameterListContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { EventParameterContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { FunctionTypeParameterListContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { FunctionTypeParameterContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { VariableDeclarationContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { TypeNameContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { UserDefinedTypeNameContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { MappingKeyContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { MappingContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { FunctionTypeNameContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { StorageLocationContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { StateMutabilityContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { BlockContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { StatementContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { ExpressionStatementContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { IfStatementContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { TryStatementContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { CatchClauseContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { WhileStatementContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { SimpleStatementContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { UncheckedStatementContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { ForStatementContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { InlineAssemblyStatementContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { DoWhileStatementContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { ContinueStatementContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { BreakStatementContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { ReturnStatementContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { ThrowStatementContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { EmitStatementContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { RevertStatementContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { VariableDeclarationStatementContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { VariableDeclarationListContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { IdentifierListContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { ElementaryTypeNameContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { ExpressionContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { PrimaryExpressionContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { ExpressionListContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { NameValueListContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { NameValueContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { FunctionCallArgumentsContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { FunctionCallContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { AssemblyBlockContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { AssemblyItemContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { AssemblyExpressionContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { AssemblyMemberContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { AssemblyCallContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { AssemblyLocalDefinitionContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { AssemblyAssignmentContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { AssemblyIdentifierOrListContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { AssemblyIdentifierListContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { AssemblyStackAssignmentContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { LabelDefinitionContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { AssemblySwitchContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { AssemblyCaseContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { AssemblyFunctionDefinitionContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { AssemblyFunctionReturnsContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { AssemblyForContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { AssemblyIfContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { AssemblyLiteralContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { SubAssemblyContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { TupleExpressionContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { TypeNameExpressionContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { NumberLiteralContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { IdentifierContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { HexLiteralContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { OverrideSpecifierContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { StringLiteralContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  /**
   * This interface defines a complete listener for a parse tree produced by
   * `SolidityParser`.
   */
  export interface SolidityListener extends ParseTreeListener {
      /**
       * Enter a parse tree produced by `SolidityParser.sourceUnit`.
       * @param ctx the parse tree
       */
      enterSourceUnit?: (ctx: SourceUnitContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.sourceUnit`.
       * @param ctx the parse tree
       */
      exitSourceUnit?: (ctx: SourceUnitContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.pragmaDirective`.
       * @param ctx the parse tree
       */
      enterPragmaDirective?: (ctx: PragmaDirectiveContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.pragmaDirective`.
       * @param ctx the parse tree
       */
      exitPragmaDirective?: (ctx: PragmaDirectiveContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.pragmaName`.
       * @param ctx the parse tree
       */
      enterPragmaName?: (ctx: PragmaNameContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.pragmaName`.
       * @param ctx the parse tree
       */
      exitPragmaName?: (ctx: PragmaNameContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.pragmaValue`.
       * @param ctx the parse tree
       */
      enterPragmaValue?: (ctx: PragmaValueContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.pragmaValue`.
       * @param ctx the parse tree
       */
      exitPragmaValue?: (ctx: PragmaValueContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.version`.
       * @param ctx the parse tree
       */
      enterVersion?: (ctx: VersionContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.version`.
       * @param ctx the parse tree
       */
      exitVersion?: (ctx: VersionContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.versionOperator`.
       * @param ctx the parse tree
       */
      enterVersionOperator?: (ctx: VersionOperatorContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.versionOperator`.
       * @param ctx the parse tree
       */
      exitVersionOperator?: (ctx: VersionOperatorContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.versionConstraint`.
       * @param ctx the parse tree
       */
      enterVersionConstraint?: (ctx: VersionConstraintContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.versionConstraint`.
       * @param ctx the parse tree
       */
      exitVersionConstraint?: (ctx: VersionConstraintContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.importDeclaration`.
       * @param ctx the parse tree
       */
      enterImportDeclaration?: (ctx: ImportDeclarationContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.importDeclaration`.
       * @param ctx the parse tree
       */
      exitImportDeclaration?: (ctx: ImportDeclarationContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.importDirective`.
       * @param ctx the parse tree
       */
      enterImportDirective?: (ctx: ImportDirectiveContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.importDirective`.
       * @param ctx the parse tree
       */
      exitImportDirective?: (ctx: ImportDirectiveContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.importPath`.
       * @param ctx the parse tree
       */
      enterImportPath?: (ctx: ImportPathContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.importPath`.
       * @param ctx the parse tree
       */
      exitImportPath?: (ctx: ImportPathContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.contractDefinition`.
       * @param ctx the parse tree
       */
      enterContractDefinition?: (ctx: ContractDefinitionContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.contractDefinition`.
       * @param ctx the parse tree
       */
      exitContractDefinition?: (ctx: ContractDefinitionContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.inheritanceSpecifier`.
       * @param ctx the parse tree
       */
      enterInheritanceSpecifier?: (ctx: InheritanceSpecifierContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.inheritanceSpecifier`.
       * @param ctx the parse tree
       */
      exitInheritanceSpecifier?: (ctx: InheritanceSpecifierContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.contractPart`.
       * @param ctx the parse tree
       */
      enterContractPart?: (ctx: ContractPartContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.contractPart`.
       * @param ctx the parse tree
       */
      exitContractPart?: (ctx: ContractPartContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.stateVariableDeclaration`.
       * @param ctx the parse tree
       */
      enterStateVariableDeclaration?: (ctx: StateVariableDeclarationContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.stateVariableDeclaration`.
       * @param ctx the parse tree
       */
      exitStateVariableDeclaration?: (ctx: StateVariableDeclarationContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.fileLevelConstant`.
       * @param ctx the parse tree
       */
      enterFileLevelConstant?: (ctx: FileLevelConstantContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.fileLevelConstant`.
       * @param ctx the parse tree
       */
      exitFileLevelConstant?: (ctx: FileLevelConstantContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.customErrorDefinition`.
       * @param ctx the parse tree
       */
      enterCustomErrorDefinition?: (ctx: CustomErrorDefinitionContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.customErrorDefinition`.
       * @param ctx the parse tree
       */
      exitCustomErrorDefinition?: (ctx: CustomErrorDefinitionContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.usingForDeclaration`.
       * @param ctx the parse tree
       */
      enterUsingForDeclaration?: (ctx: UsingForDeclarationContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.usingForDeclaration`.
       * @param ctx the parse tree
       */
      exitUsingForDeclaration?: (ctx: UsingForDeclarationContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.structDefinition`.
       * @param ctx the parse tree
       */
      enterStructDefinition?: (ctx: StructDefinitionContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.structDefinition`.
       * @param ctx the parse tree
       */
      exitStructDefinition?: (ctx: StructDefinitionContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.modifierDefinition`.
       * @param ctx the parse tree
       */
      enterModifierDefinition?: (ctx: ModifierDefinitionContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.modifierDefinition`.
       * @param ctx the parse tree
       */
      exitModifierDefinition?: (ctx: ModifierDefinitionContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.modifierInvocation`.
       * @param ctx the parse tree
       */
      enterModifierInvocation?: (ctx: ModifierInvocationContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.modifierInvocation`.
       * @param ctx the parse tree
       */
      exitModifierInvocation?: (ctx: ModifierInvocationContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.functionDefinition`.
       * @param ctx the parse tree
       */
      enterFunctionDefinition?: (ctx: FunctionDefinitionContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.functionDefinition`.
       * @param ctx the parse tree
       */
      exitFunctionDefinition?: (ctx: FunctionDefinitionContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.functionDescriptor`.
       * @param ctx the parse tree
       */
      enterFunctionDescriptor?: (ctx: FunctionDescriptorContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.functionDescriptor`.
       * @param ctx the parse tree
       */
      exitFunctionDescriptor?: (ctx: FunctionDescriptorContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.returnParameters`.
       * @param ctx the parse tree
       */
      enterReturnParameters?: (ctx: ReturnParametersContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.returnParameters`.
       * @param ctx the parse tree
       */
      exitReturnParameters?: (ctx: ReturnParametersContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.modifierList`.
       * @param ctx the parse tree
       */
      enterModifierList?: (ctx: ModifierListContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.modifierList`.
       * @param ctx the parse tree
       */
      exitModifierList?: (ctx: ModifierListContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.eventDefinition`.
       * @param ctx the parse tree
       */
      enterEventDefinition?: (ctx: EventDefinitionContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.eventDefinition`.
       * @param ctx the parse tree
       */
      exitEventDefinition?: (ctx: EventDefinitionContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.enumValue`.
       * @param ctx the parse tree
       */
      enterEnumValue?: (ctx: EnumValueContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.enumValue`.
       * @param ctx the parse tree
       */
      exitEnumValue?: (ctx: EnumValueContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.enumDefinition`.
       * @param ctx the parse tree
       */
      enterEnumDefinition?: (ctx: EnumDefinitionContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.enumDefinition`.
       * @param ctx the parse tree
       */
      exitEnumDefinition?: (ctx: EnumDefinitionContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.parameterList`.
       * @param ctx the parse tree
       */
      enterParameterList?: (ctx: ParameterListContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.parameterList`.
       * @param ctx the parse tree
       */
      exitParameterList?: (ctx: ParameterListContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.parameter`.
       * @param ctx the parse tree
       */
      enterParameter?: (ctx: ParameterContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.parameter`.
       * @param ctx the parse tree
       */
      exitParameter?: (ctx: ParameterContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.eventParameterList`.
       * @param ctx the parse tree
       */
      enterEventParameterList?: (ctx: EventParameterListContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.eventParameterList`.
       * @param ctx the parse tree
       */
      exitEventParameterList?: (ctx: EventParameterListContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.eventParameter`.
       * @param ctx the parse tree
       */
      enterEventParameter?: (ctx: EventParameterContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.eventParameter`.
       * @param ctx the parse tree
       */
      exitEventParameter?: (ctx: EventParameterContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.functionTypeParameterList`.
       * @param ctx the parse tree
       */
      enterFunctionTypeParameterList?: (ctx: FunctionTypeParameterListContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.functionTypeParameterList`.
       * @param ctx the parse tree
       */
      exitFunctionTypeParameterList?: (ctx: FunctionTypeParameterListContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.functionTypeParameter`.
       * @param ctx the parse tree
       */
      enterFunctionTypeParameter?: (ctx: FunctionTypeParameterContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.functionTypeParameter`.
       * @param ctx the parse tree
       */
      exitFunctionTypeParameter?: (ctx: FunctionTypeParameterContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.variableDeclaration`.
       * @param ctx the parse tree
       */
      enterVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.variableDeclaration`.
       * @param ctx the parse tree
       */
      exitVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.typeName`.
       * @param ctx the parse tree
       */
      enterTypeName?: (ctx: TypeNameContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.typeName`.
       * @param ctx the parse tree
       */
      exitTypeName?: (ctx: TypeNameContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.userDefinedTypeName`.
       * @param ctx the parse tree
       */
      enterUserDefinedTypeName?: (ctx: UserDefinedTypeNameContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.userDefinedTypeName`.
       * @param ctx the parse tree
       */
      exitUserDefinedTypeName?: (ctx: UserDefinedTypeNameContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.mappingKey`.
       * @param ctx the parse tree
       */
      enterMappingKey?: (ctx: MappingKeyContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.mappingKey`.
       * @param ctx the parse tree
       */
      exitMappingKey?: (ctx: MappingKeyContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.mapping`.
       * @param ctx the parse tree
       */
      enterMapping?: (ctx: MappingContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.mapping`.
       * @param ctx the parse tree
       */
      exitMapping?: (ctx: MappingContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.functionTypeName`.
       * @param ctx the parse tree
       */
      enterFunctionTypeName?: (ctx: FunctionTypeNameContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.functionTypeName`.
       * @param ctx the parse tree
       */
      exitFunctionTypeName?: (ctx: FunctionTypeNameContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.storageLocation`.
       * @param ctx the parse tree
       */
      enterStorageLocation?: (ctx: StorageLocationContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.storageLocation`.
       * @param ctx the parse tree
       */
      exitStorageLocation?: (ctx: StorageLocationContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.stateMutability`.
       * @param ctx the parse tree
       */
      enterStateMutability?: (ctx: StateMutabilityContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.stateMutability`.
       * @param ctx the parse tree
       */
      exitStateMutability?: (ctx: StateMutabilityContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.block`.
       * @param ctx the parse tree
       */
      enterBlock?: (ctx: BlockContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.block`.
       * @param ctx the parse tree
       */
      exitBlock?: (ctx: BlockContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.statement`.
       * @param ctx the parse tree
       */
      enterStatement?: (ctx: StatementContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.statement`.
       * @param ctx the parse tree
       */
      exitStatement?: (ctx: StatementContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.expressionStatement`.
       * @param ctx the parse tree
       */
      enterExpressionStatement?: (ctx: ExpressionStatementContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.expressionStatement`.
       * @param ctx the parse tree
       */
      exitExpressionStatement?: (ctx: ExpressionStatementContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.ifStatement`.
       * @param ctx the parse tree
       */
      enterIfStatement?: (ctx: IfStatementContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.ifStatement`.
       * @param ctx the parse tree
       */
      exitIfStatement?: (ctx: IfStatementContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.tryStatement`.
       * @param ctx the parse tree
       */
      enterTryStatement?: (ctx: TryStatementContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.tryStatement`.
       * @param ctx the parse tree
       */
      exitTryStatement?: (ctx: TryStatementContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.catchClause`.
       * @param ctx the parse tree
       */
      enterCatchClause?: (ctx: CatchClauseContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.catchClause`.
       * @param ctx the parse tree
       */
      exitCatchClause?: (ctx: CatchClauseContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.whileStatement`.
       * @param ctx the parse tree
       */
      enterWhileStatement?: (ctx: WhileStatementContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.whileStatement`.
       * @param ctx the parse tree
       */
      exitWhileStatement?: (ctx: WhileStatementContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.simpleStatement`.
       * @param ctx the parse tree
       */
      enterSimpleStatement?: (ctx: SimpleStatementContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.simpleStatement`.
       * @param ctx the parse tree
       */
      exitSimpleStatement?: (ctx: SimpleStatementContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.uncheckedStatement`.
       * @param ctx the parse tree
       */
      enterUncheckedStatement?: (ctx: UncheckedStatementContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.uncheckedStatement`.
       * @param ctx the parse tree
       */
      exitUncheckedStatement?: (ctx: UncheckedStatementContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.forStatement`.
       * @param ctx the parse tree
       */
      enterForStatement?: (ctx: ForStatementContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.forStatement`.
       * @param ctx the parse tree
       */
      exitForStatement?: (ctx: ForStatementContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.inlineAssemblyStatement`.
       * @param ctx the parse tree
       */
      enterInlineAssemblyStatement?: (ctx: InlineAssemblyStatementContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.inlineAssemblyStatement`.
       * @param ctx the parse tree
       */
      exitInlineAssemblyStatement?: (ctx: InlineAssemblyStatementContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.doWhileStatement`.
       * @param ctx the parse tree
       */
      enterDoWhileStatement?: (ctx: DoWhileStatementContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.doWhileStatement`.
       * @param ctx the parse tree
       */
      exitDoWhileStatement?: (ctx: DoWhileStatementContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.continueStatement`.
       * @param ctx the parse tree
       */
      enterContinueStatement?: (ctx: ContinueStatementContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.continueStatement`.
       * @param ctx the parse tree
       */
      exitContinueStatement?: (ctx: ContinueStatementContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.breakStatement`.
       * @param ctx the parse tree
       */
      enterBreakStatement?: (ctx: BreakStatementContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.breakStatement`.
       * @param ctx the parse tree
       */
      exitBreakStatement?: (ctx: BreakStatementContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.returnStatement`.
       * @param ctx the parse tree
       */
      enterReturnStatement?: (ctx: ReturnStatementContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.returnStatement`.
       * @param ctx the parse tree
       */
      exitReturnStatement?: (ctx: ReturnStatementContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.throwStatement`.
       * @param ctx the parse tree
       */
      enterThrowStatement?: (ctx: ThrowStatementContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.throwStatement`.
       * @param ctx the parse tree
       */
      exitThrowStatement?: (ctx: ThrowStatementContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.emitStatement`.
       * @param ctx the parse tree
       */
      enterEmitStatement?: (ctx: EmitStatementContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.emitStatement`.
       * @param ctx the parse tree
       */
      exitEmitStatement?: (ctx: EmitStatementContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.revertStatement`.
       * @param ctx the parse tree
       */
      enterRevertStatement?: (ctx: RevertStatementContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.revertStatement`.
       * @param ctx the parse tree
       */
      exitRevertStatement?: (ctx: RevertStatementContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.variableDeclarationStatement`.
       * @param ctx the parse tree
       */
      enterVariableDeclarationStatement?: (ctx: VariableDeclarationStatementContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.variableDeclarationStatement`.
       * @param ctx the parse tree
       */
      exitVariableDeclarationStatement?: (ctx: VariableDeclarationStatementContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.variableDeclarationList`.
       * @param ctx the parse tree
       */
      enterVariableDeclarationList?: (ctx: VariableDeclarationListContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.variableDeclarationList`.
       * @param ctx the parse tree
       */
      exitVariableDeclarationList?: (ctx: VariableDeclarationListContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.identifierList`.
       * @param ctx the parse tree
       */
      enterIdentifierList?: (ctx: IdentifierListContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.identifierList`.
       * @param ctx the parse tree
       */
      exitIdentifierList?: (ctx: IdentifierListContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.elementaryTypeName`.
       * @param ctx the parse tree
       */
      enterElementaryTypeName?: (ctx: ElementaryTypeNameContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.elementaryTypeName`.
       * @param ctx the parse tree
       */
      exitElementaryTypeName?: (ctx: ElementaryTypeNameContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.expression`.
       * @param ctx the parse tree
       */
      enterExpression?: (ctx: ExpressionContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.expression`.
       * @param ctx the parse tree
       */
      exitExpression?: (ctx: ExpressionContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.primaryExpression`.
       * @param ctx the parse tree
       */
      enterPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.primaryExpression`.
       * @param ctx the parse tree
       */
      exitPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.expressionList`.
       * @param ctx the parse tree
       */
      enterExpressionList?: (ctx: ExpressionListContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.expressionList`.
       * @param ctx the parse tree
       */
      exitExpressionList?: (ctx: ExpressionListContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.nameValueList`.
       * @param ctx the parse tree
       */
      enterNameValueList?: (ctx: NameValueListContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.nameValueList`.
       * @param ctx the parse tree
       */
      exitNameValueList?: (ctx: NameValueListContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.nameValue`.
       * @param ctx the parse tree
       */
      enterNameValue?: (ctx: NameValueContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.nameValue`.
       * @param ctx the parse tree
       */
      exitNameValue?: (ctx: NameValueContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.functionCallArguments`.
       * @param ctx the parse tree
       */
      enterFunctionCallArguments?: (ctx: FunctionCallArgumentsContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.functionCallArguments`.
       * @param ctx the parse tree
       */
      exitFunctionCallArguments?: (ctx: FunctionCallArgumentsContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.functionCall`.
       * @param ctx the parse tree
       */
      enterFunctionCall?: (ctx: FunctionCallContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.functionCall`.
       * @param ctx the parse tree
       */
      exitFunctionCall?: (ctx: FunctionCallContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.assemblyBlock`.
       * @param ctx the parse tree
       */
      enterAssemblyBlock?: (ctx: AssemblyBlockContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.assemblyBlock`.
       * @param ctx the parse tree
       */
      exitAssemblyBlock?: (ctx: AssemblyBlockContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.assemblyItem`.
       * @param ctx the parse tree
       */
      enterAssemblyItem?: (ctx: AssemblyItemContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.assemblyItem`.
       * @param ctx the parse tree
       */
      exitAssemblyItem?: (ctx: AssemblyItemContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.assemblyExpression`.
       * @param ctx the parse tree
       */
      enterAssemblyExpression?: (ctx: AssemblyExpressionContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.assemblyExpression`.
       * @param ctx the parse tree
       */
      exitAssemblyExpression?: (ctx: AssemblyExpressionContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.assemblyMember`.
       * @param ctx the parse tree
       */
      enterAssemblyMember?: (ctx: AssemblyMemberContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.assemblyMember`.
       * @param ctx the parse tree
       */
      exitAssemblyMember?: (ctx: AssemblyMemberContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.assemblyCall`.
       * @param ctx the parse tree
       */
      enterAssemblyCall?: (ctx: AssemblyCallContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.assemblyCall`.
       * @param ctx the parse tree
       */
      exitAssemblyCall?: (ctx: AssemblyCallContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.assemblyLocalDefinition`.
       * @param ctx the parse tree
       */
      enterAssemblyLocalDefinition?: (ctx: AssemblyLocalDefinitionContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.assemblyLocalDefinition`.
       * @param ctx the parse tree
       */
      exitAssemblyLocalDefinition?: (ctx: AssemblyLocalDefinitionContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.assemblyAssignment`.
       * @param ctx the parse tree
       */
      enterAssemblyAssignment?: (ctx: AssemblyAssignmentContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.assemblyAssignment`.
       * @param ctx the parse tree
       */
      exitAssemblyAssignment?: (ctx: AssemblyAssignmentContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.assemblyIdentifierOrList`.
       * @param ctx the parse tree
       */
      enterAssemblyIdentifierOrList?: (ctx: AssemblyIdentifierOrListContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.assemblyIdentifierOrList`.
       * @param ctx the parse tree
       */
      exitAssemblyIdentifierOrList?: (ctx: AssemblyIdentifierOrListContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.assemblyIdentifierList`.
       * @param ctx the parse tree
       */
      enterAssemblyIdentifierList?: (ctx: AssemblyIdentifierListContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.assemblyIdentifierList`.
       * @param ctx the parse tree
       */
      exitAssemblyIdentifierList?: (ctx: AssemblyIdentifierListContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.assemblyStackAssignment`.
       * @param ctx the parse tree
       */
      enterAssemblyStackAssignment?: (ctx: AssemblyStackAssignmentContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.assemblyStackAssignment`.
       * @param ctx the parse tree
       */
      exitAssemblyStackAssignment?: (ctx: AssemblyStackAssignmentContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.labelDefinition`.
       * @param ctx the parse tree
       */
      enterLabelDefinition?: (ctx: LabelDefinitionContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.labelDefinition`.
       * @param ctx the parse tree
       */
      exitLabelDefinition?: (ctx: LabelDefinitionContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.assemblySwitch`.
       * @param ctx the parse tree
       */
      enterAssemblySwitch?: (ctx: AssemblySwitchContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.assemblySwitch`.
       * @param ctx the parse tree
       */
      exitAssemblySwitch?: (ctx: AssemblySwitchContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.assemblyCase`.
       * @param ctx the parse tree
       */
      enterAssemblyCase?: (ctx: AssemblyCaseContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.assemblyCase`.
       * @param ctx the parse tree
       */
      exitAssemblyCase?: (ctx: AssemblyCaseContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.assemblyFunctionDefinition`.
       * @param ctx the parse tree
       */
      enterAssemblyFunctionDefinition?: (ctx: AssemblyFunctionDefinitionContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.assemblyFunctionDefinition`.
       * @param ctx the parse tree
       */
      exitAssemblyFunctionDefinition?: (ctx: AssemblyFunctionDefinitionContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.assemblyFunctionReturns`.
       * @param ctx the parse tree
       */
      enterAssemblyFunctionReturns?: (ctx: AssemblyFunctionReturnsContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.assemblyFunctionReturns`.
       * @param ctx the parse tree
       */
      exitAssemblyFunctionReturns?: (ctx: AssemblyFunctionReturnsContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.assemblyFor`.
       * @param ctx the parse tree
       */
      enterAssemblyFor?: (ctx: AssemblyForContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.assemblyFor`.
       * @param ctx the parse tree
       */
      exitAssemblyFor?: (ctx: AssemblyForContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.assemblyIf`.
       * @param ctx the parse tree
       */
      enterAssemblyIf?: (ctx: AssemblyIfContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.assemblyIf`.
       * @param ctx the parse tree
       */
      exitAssemblyIf?: (ctx: AssemblyIfContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.assemblyLiteral`.
       * @param ctx the parse tree
       */
      enterAssemblyLiteral?: (ctx: AssemblyLiteralContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.assemblyLiteral`.
       * @param ctx the parse tree
       */
      exitAssemblyLiteral?: (ctx: AssemblyLiteralContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.subAssembly`.
       * @param ctx the parse tree
       */
      enterSubAssembly?: (ctx: SubAssemblyContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.subAssembly`.
       * @param ctx the parse tree
       */
      exitSubAssembly?: (ctx: SubAssemblyContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.tupleExpression`.
       * @param ctx the parse tree
       */
      enterTupleExpression?: (ctx: TupleExpressionContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.tupleExpression`.
       * @param ctx the parse tree
       */
      exitTupleExpression?: (ctx: TupleExpressionContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.typeNameExpression`.
       * @param ctx the parse tree
       */
      enterTypeNameExpression?: (ctx: TypeNameExpressionContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.typeNameExpression`.
       * @param ctx the parse tree
       */
      exitTypeNameExpression?: (ctx: TypeNameExpressionContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.numberLiteral`.
       * @param ctx the parse tree
       */
      enterNumberLiteral?: (ctx: NumberLiteralContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.numberLiteral`.
       * @param ctx the parse tree
       */
      exitNumberLiteral?: (ctx: NumberLiteralContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.identifier`.
       * @param ctx the parse tree
       */
      enterIdentifier?: (ctx: IdentifierContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.identifier`.
       * @param ctx the parse tree
       */
      exitIdentifier?: (ctx: IdentifierContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.hexLiteral`.
       * @param ctx the parse tree
       */
      enterHexLiteral?: (ctx: HexLiteralContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.hexLiteral`.
       * @param ctx the parse tree
       */
      exitHexLiteral?: (ctx: HexLiteralContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.overrideSpecifier`.
       * @param ctx the parse tree
       */
      enterOverrideSpecifier?: (ctx: OverrideSpecifierContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.overrideSpecifier`.
       * @param ctx the parse tree
       */
      exitOverrideSpecifier?: (ctx: OverrideSpecifierContext) => void;
      /**
       * Enter a parse tree produced by `SolidityParser.stringLiteral`.
       * @param ctx the parse tree
       */
      enterStringLiteral?: (ctx: StringLiteralContext) => void;
      /**
       * Exit a parse tree produced by `SolidityParser.stringLiteral`.
       * @param ctx the parse tree
       */
      exitStringLiteral?: (ctx: StringLiteralContext) => void;
  }

}
declare module '@solidity-parser/parser/src/antlr/SolidityParser' {
  import { ATN } from "antlr4ts/atn/ATN";
  import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
  import { Parser } from "antlr4ts/Parser";
  import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
  import { RuleContext } from "antlr4ts/RuleContext";
  import { TerminalNode } from "antlr4ts/tree/TerminalNode";
  import { TokenStream } from "antlr4ts/TokenStream";
  import { Vocabulary } from "antlr4ts/Vocabulary";
  import { SolidityListener } from "@solidity-parser/parser/src/antlr/SolidityListener";
  import { SolidityVisitor } from "@solidity-parser/parser/src/antlr/SolidityVisitor";
  export class SolidityParser extends Parser {
      static readonly T__0 = 1;
      static readonly T__1 = 2;
      static readonly T__2 = 3;
      static readonly T__3 = 4;
      static readonly T__4 = 5;
      static readonly T__5 = 6;
      static readonly T__6 = 7;
      static readonly T__7 = 8;
      static readonly T__8 = 9;
      static readonly T__9 = 10;
      static readonly T__10 = 11;
      static readonly T__11 = 12;
      static readonly T__12 = 13;
      static readonly T__13 = 14;
      static readonly T__14 = 15;
      static readonly T__15 = 16;
      static readonly T__16 = 17;
      static readonly T__17 = 18;
      static readonly T__18 = 19;
      static readonly T__19 = 20;
      static readonly T__20 = 21;
      static readonly T__21 = 22;
      static readonly T__22 = 23;
      static readonly T__23 = 24;
      static readonly T__24 = 25;
      static readonly T__25 = 26;
      static readonly T__26 = 27;
      static readonly T__27 = 28;
      static readonly T__28 = 29;
      static readonly T__29 = 30;
      static readonly T__30 = 31;
      static readonly T__31 = 32;
      static readonly T__32 = 33;
      static readonly T__33 = 34;
      static readonly T__34 = 35;
      static readonly T__35 = 36;
      static readonly T__36 = 37;
      static readonly T__37 = 38;
      static readonly T__38 = 39;
      static readonly T__39 = 40;
      static readonly T__40 = 41;
      static readonly T__41 = 42;
      static readonly T__42 = 43;
      static readonly T__43 = 44;
      static readonly T__44 = 45;
      static readonly T__45 = 46;
      static readonly T__46 = 47;
      static readonly T__47 = 48;
      static readonly T__48 = 49;
      static readonly T__49 = 50;
      static readonly T__50 = 51;
      static readonly T__51 = 52;
      static readonly T__52 = 53;
      static readonly T__53 = 54;
      static readonly T__54 = 55;
      static readonly T__55 = 56;
      static readonly T__56 = 57;
      static readonly T__57 = 58;
      static readonly T__58 = 59;
      static readonly T__59 = 60;
      static readonly T__60 = 61;
      static readonly T__61 = 62;
      static readonly T__62 = 63;
      static readonly T__63 = 64;
      static readonly T__64 = 65;
      static readonly T__65 = 66;
      static readonly T__66 = 67;
      static readonly T__67 = 68;
      static readonly T__68 = 69;
      static readonly T__69 = 70;
      static readonly T__70 = 71;
      static readonly T__71 = 72;
      static readonly T__72 = 73;
      static readonly T__73 = 74;
      static readonly T__74 = 75;
      static readonly T__75 = 76;
      static readonly T__76 = 77;
      static readonly T__77 = 78;
      static readonly T__78 = 79;
      static readonly T__79 = 80;
      static readonly T__80 = 81;
      static readonly T__81 = 82;
      static readonly T__82 = 83;
      static readonly T__83 = 84;
      static readonly T__84 = 85;
      static readonly T__85 = 86;
      static readonly T__86 = 87;
      static readonly T__87 = 88;
      static readonly T__88 = 89;
      static readonly T__89 = 90;
      static readonly T__90 = 91;
      static readonly T__91 = 92;
      static readonly T__92 = 93;
      static readonly T__93 = 94;
      static readonly T__94 = 95;
      static readonly T__95 = 96;
      static readonly T__96 = 97;
      static readonly Int = 98;
      static readonly Uint = 99;
      static readonly Byte = 100;
      static readonly Fixed = 101;
      static readonly Ufixed = 102;
      static readonly BooleanLiteral = 103;
      static readonly DecimalNumber = 104;
      static readonly HexNumber = 105;
      static readonly NumberUnit = 106;
      static readonly HexLiteralFragment = 107;
      static readonly ReservedKeyword = 108;
      static readonly AnonymousKeyword = 109;
      static readonly BreakKeyword = 110;
      static readonly ConstantKeyword = 111;
      static readonly ImmutableKeyword = 112;
      static readonly ContinueKeyword = 113;
      static readonly LeaveKeyword = 114;
      static readonly ExternalKeyword = 115;
      static readonly IndexedKeyword = 116;
      static readonly InternalKeyword = 117;
      static readonly PayableKeyword = 118;
      static readonly PrivateKeyword = 119;
      static readonly PublicKeyword = 120;
      static readonly VirtualKeyword = 121;
      static readonly PureKeyword = 122;
      static readonly TypeKeyword = 123;
      static readonly ViewKeyword = 124;
      static readonly ConstructorKeyword = 125;
      static readonly FallbackKeyword = 126;
      static readonly ReceiveKeyword = 127;
      static readonly Identifier = 128;
      static readonly StringLiteralFragment = 129;
      static readonly VersionLiteral = 130;
      static readonly WS = 131;
      static readonly COMMENT = 132;
      static readonly LINE_COMMENT = 133;
      static readonly RULE_sourceUnit = 0;
      static readonly RULE_pragmaDirective = 1;
      static readonly RULE_pragmaName = 2;
      static readonly RULE_pragmaValue = 3;
      static readonly RULE_version = 4;
      static readonly RULE_versionOperator = 5;
      static readonly RULE_versionConstraint = 6;
      static readonly RULE_importDeclaration = 7;
      static readonly RULE_importDirective = 8;
      static readonly RULE_importPath = 9;
      static readonly RULE_contractDefinition = 10;
      static readonly RULE_inheritanceSpecifier = 11;
      static readonly RULE_contractPart = 12;
      static readonly RULE_stateVariableDeclaration = 13;
      static readonly RULE_fileLevelConstant = 14;
      static readonly RULE_customErrorDefinition = 15;
      static readonly RULE_usingForDeclaration = 16;
      static readonly RULE_structDefinition = 17;
      static readonly RULE_modifierDefinition = 18;
      static readonly RULE_modifierInvocation = 19;
      static readonly RULE_functionDefinition = 20;
      static readonly RULE_functionDescriptor = 21;
      static readonly RULE_returnParameters = 22;
      static readonly RULE_modifierList = 23;
      static readonly RULE_eventDefinition = 24;
      static readonly RULE_enumValue = 25;
      static readonly RULE_enumDefinition = 26;
      static readonly RULE_parameterList = 27;
      static readonly RULE_parameter = 28;
      static readonly RULE_eventParameterList = 29;
      static readonly RULE_eventParameter = 30;
      static readonly RULE_functionTypeParameterList = 31;
      static readonly RULE_functionTypeParameter = 32;
      static readonly RULE_variableDeclaration = 33;
      static readonly RULE_typeName = 34;
      static readonly RULE_userDefinedTypeName = 35;
      static readonly RULE_mappingKey = 36;
      static readonly RULE_mapping = 37;
      static readonly RULE_functionTypeName = 38;
      static readonly RULE_storageLocation = 39;
      static readonly RULE_stateMutability = 40;
      static readonly RULE_block = 41;
      static readonly RULE_statement = 42;
      static readonly RULE_expressionStatement = 43;
      static readonly RULE_ifStatement = 44;
      static readonly RULE_tryStatement = 45;
      static readonly RULE_catchClause = 46;
      static readonly RULE_whileStatement = 47;
      static readonly RULE_simpleStatement = 48;
      static readonly RULE_uncheckedStatement = 49;
      static readonly RULE_forStatement = 50;
      static readonly RULE_inlineAssemblyStatement = 51;
      static readonly RULE_doWhileStatement = 52;
      static readonly RULE_continueStatement = 53;
      static readonly RULE_breakStatement = 54;
      static readonly RULE_returnStatement = 55;
      static readonly RULE_throwStatement = 56;
      static readonly RULE_emitStatement = 57;
      static readonly RULE_revertStatement = 58;
      static readonly RULE_variableDeclarationStatement = 59;
      static readonly RULE_variableDeclarationList = 60;
      static readonly RULE_identifierList = 61;
      static readonly RULE_elementaryTypeName = 62;
      static readonly RULE_expression = 63;
      static readonly RULE_primaryExpression = 64;
      static readonly RULE_expressionList = 65;
      static readonly RULE_nameValueList = 66;
      static readonly RULE_nameValue = 67;
      static readonly RULE_functionCallArguments = 68;
      static readonly RULE_functionCall = 69;
      static readonly RULE_assemblyBlock = 70;
      static readonly RULE_assemblyItem = 71;
      static readonly RULE_assemblyExpression = 72;
      static readonly RULE_assemblyMember = 73;
      static readonly RULE_assemblyCall = 74;
      static readonly RULE_assemblyLocalDefinition = 75;
      static readonly RULE_assemblyAssignment = 76;
      static readonly RULE_assemblyIdentifierOrList = 77;
      static readonly RULE_assemblyIdentifierList = 78;
      static readonly RULE_assemblyStackAssignment = 79;
      static readonly RULE_labelDefinition = 80;
      static readonly RULE_assemblySwitch = 81;
      static readonly RULE_assemblyCase = 82;
      static readonly RULE_assemblyFunctionDefinition = 83;
      static readonly RULE_assemblyFunctionReturns = 84;
      static readonly RULE_assemblyFor = 85;
      static readonly RULE_assemblyIf = 86;
      static readonly RULE_assemblyLiteral = 87;
      static readonly RULE_subAssembly = 88;
      static readonly RULE_tupleExpression = 89;
      static readonly RULE_typeNameExpression = 90;
      static readonly RULE_numberLiteral = 91;
      static readonly RULE_identifier = 92;
      static readonly RULE_hexLiteral = 93;
      static readonly RULE_overrideSpecifier = 94;
      static readonly RULE_stringLiteral = 95;
      static readonly ruleNames: string[];
      private static readonly _LITERAL_NAMES;
      private static readonly _SYMBOLIC_NAMES;
      static readonly VOCABULARY: Vocabulary;
      get vocabulary(): Vocabulary;
      get grammarFileName(): string;
      get ruleNames(): string[];
      get serializedATN(): string;
      protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException;
      constructor(input: TokenStream);
      sourceUnit(): SourceUnitContext;
      pragmaDirective(): PragmaDirectiveContext;
      pragmaName(): PragmaNameContext;
      pragmaValue(): PragmaValueContext;
      version(): VersionContext;
      versionOperator(): VersionOperatorContext;
      versionConstraint(): VersionConstraintContext;
      importDeclaration(): ImportDeclarationContext;
      importDirective(): ImportDirectiveContext;
      importPath(): ImportPathContext;
      contractDefinition(): ContractDefinitionContext;
      inheritanceSpecifier(): InheritanceSpecifierContext;
      contractPart(): ContractPartContext;
      stateVariableDeclaration(): StateVariableDeclarationContext;
      fileLevelConstant(): FileLevelConstantContext;
      customErrorDefinition(): CustomErrorDefinitionContext;
      usingForDeclaration(): UsingForDeclarationContext;
      structDefinition(): StructDefinitionContext;
      modifierDefinition(): ModifierDefinitionContext;
      modifierInvocation(): ModifierInvocationContext;
      functionDefinition(): FunctionDefinitionContext;
      functionDescriptor(): FunctionDescriptorContext;
      returnParameters(): ReturnParametersContext;
      modifierList(): ModifierListContext;
      eventDefinition(): EventDefinitionContext;
      enumValue(): EnumValueContext;
      enumDefinition(): EnumDefinitionContext;
      parameterList(): ParameterListContext;
      parameter(): ParameterContext;
      eventParameterList(): EventParameterListContext;
      eventParameter(): EventParameterContext;
      functionTypeParameterList(): FunctionTypeParameterListContext;
      functionTypeParameter(): FunctionTypeParameterContext;
      variableDeclaration(): VariableDeclarationContext;
      typeName(): TypeNameContext;
      typeName(_p: number): TypeNameContext;
      userDefinedTypeName(): UserDefinedTypeNameContext;
      mappingKey(): MappingKeyContext;
      mapping(): MappingContext;
      functionTypeName(): FunctionTypeNameContext;
      storageLocation(): StorageLocationContext;
      stateMutability(): StateMutabilityContext;
      block(): BlockContext;
      statement(): StatementContext;
      expressionStatement(): ExpressionStatementContext;
      ifStatement(): IfStatementContext;
      tryStatement(): TryStatementContext;
      catchClause(): CatchClauseContext;
      whileStatement(): WhileStatementContext;
      simpleStatement(): SimpleStatementContext;
      uncheckedStatement(): UncheckedStatementContext;
      forStatement(): ForStatementContext;
      inlineAssemblyStatement(): InlineAssemblyStatementContext;
      doWhileStatement(): DoWhileStatementContext;
      continueStatement(): ContinueStatementContext;
      breakStatement(): BreakStatementContext;
      returnStatement(): ReturnStatementContext;
      throwStatement(): ThrowStatementContext;
      emitStatement(): EmitStatementContext;
      revertStatement(): RevertStatementContext;
      variableDeclarationStatement(): VariableDeclarationStatementContext;
      variableDeclarationList(): VariableDeclarationListContext;
      identifierList(): IdentifierListContext;
      elementaryTypeName(): ElementaryTypeNameContext;
      expression(): ExpressionContext;
      expression(_p: number): ExpressionContext;
      primaryExpression(): PrimaryExpressionContext;
      expressionList(): ExpressionListContext;
      nameValueList(): NameValueListContext;
      nameValue(): NameValueContext;
      functionCallArguments(): FunctionCallArgumentsContext;
      functionCall(): FunctionCallContext;
      assemblyBlock(): AssemblyBlockContext;
      assemblyItem(): AssemblyItemContext;
      assemblyExpression(): AssemblyExpressionContext;
      assemblyMember(): AssemblyMemberContext;
      assemblyCall(): AssemblyCallContext;
      assemblyLocalDefinition(): AssemblyLocalDefinitionContext;
      assemblyAssignment(): AssemblyAssignmentContext;
      assemblyIdentifierOrList(): AssemblyIdentifierOrListContext;
      assemblyIdentifierList(): AssemblyIdentifierListContext;
      assemblyStackAssignment(): AssemblyStackAssignmentContext;
      labelDefinition(): LabelDefinitionContext;
      assemblySwitch(): AssemblySwitchContext;
      assemblyCase(): AssemblyCaseContext;
      assemblyFunctionDefinition(): AssemblyFunctionDefinitionContext;
      assemblyFunctionReturns(): AssemblyFunctionReturnsContext;
      assemblyFor(): AssemblyForContext;
      assemblyIf(): AssemblyIfContext;
      assemblyLiteral(): AssemblyLiteralContext;
      subAssembly(): SubAssemblyContext;
      tupleExpression(): TupleExpressionContext;
      typeNameExpression(): TypeNameExpressionContext;
      numberLiteral(): NumberLiteralContext;
      identifier(): IdentifierContext;
      hexLiteral(): HexLiteralContext;
      overrideSpecifier(): OverrideSpecifierContext;
      stringLiteral(): StringLiteralContext;
      sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean;
      private typeName_sempred;
      private expression_sempred;
      private static readonly _serializedATNSegments;
      private static readonly _serializedATNSegment0;
      private static readonly _serializedATNSegment1;
      private static readonly _serializedATNSegment2;
      static readonly _serializedATN: string;
      static __ATN: ATN;
      static get _ATN(): ATN;
  }
  export class SourceUnitContext extends ParserRuleContext {
      EOF(): TerminalNode;
      pragmaDirective(): PragmaDirectiveContext[];
      pragmaDirective(i: number): PragmaDirectiveContext;
      importDirective(): ImportDirectiveContext[];
      importDirective(i: number): ImportDirectiveContext;
      contractDefinition(): ContractDefinitionContext[];
      contractDefinition(i: number): ContractDefinitionContext;
      enumDefinition(): EnumDefinitionContext[];
      enumDefinition(i: number): EnumDefinitionContext;
      structDefinition(): StructDefinitionContext[];
      structDefinition(i: number): StructDefinitionContext;
      functionDefinition(): FunctionDefinitionContext[];
      functionDefinition(i: number): FunctionDefinitionContext;
      fileLevelConstant(): FileLevelConstantContext[];
      fileLevelConstant(i: number): FileLevelConstantContext;
      customErrorDefinition(): CustomErrorDefinitionContext[];
      customErrorDefinition(i: number): CustomErrorDefinitionContext;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class PragmaDirectiveContext extends ParserRuleContext {
      pragmaName(): PragmaNameContext;
      pragmaValue(): PragmaValueContext;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class PragmaNameContext extends ParserRuleContext {
      identifier(): IdentifierContext;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class PragmaValueContext extends ParserRuleContext {
      version(): VersionContext | undefined;
      expression(): ExpressionContext | undefined;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class VersionContext extends ParserRuleContext {
      versionConstraint(): VersionConstraintContext[];
      versionConstraint(i: number): VersionConstraintContext;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class VersionOperatorContext extends ParserRuleContext {
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class VersionConstraintContext extends ParserRuleContext {
      VersionLiteral(): TerminalNode | undefined;
      versionOperator(): VersionOperatorContext | undefined;
      DecimalNumber(): TerminalNode | undefined;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class ImportDeclarationContext extends ParserRuleContext {
      identifier(): IdentifierContext[];
      identifier(i: number): IdentifierContext;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class ImportDirectiveContext extends ParserRuleContext {
      importPath(): ImportPathContext;
      identifier(): IdentifierContext[];
      identifier(i: number): IdentifierContext;
      importDeclaration(): ImportDeclarationContext[];
      importDeclaration(i: number): ImportDeclarationContext;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class ImportPathContext extends ParserRuleContext {
      StringLiteralFragment(): TerminalNode;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class ContractDefinitionContext extends ParserRuleContext {
      identifier(): IdentifierContext;
      inheritanceSpecifier(): InheritanceSpecifierContext[];
      inheritanceSpecifier(i: number): InheritanceSpecifierContext;
      contractPart(): ContractPartContext[];
      contractPart(i: number): ContractPartContext;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class InheritanceSpecifierContext extends ParserRuleContext {
      userDefinedTypeName(): UserDefinedTypeNameContext;
      expressionList(): ExpressionListContext | undefined;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class ContractPartContext extends ParserRuleContext {
      stateVariableDeclaration(): StateVariableDeclarationContext | undefined;
      usingForDeclaration(): UsingForDeclarationContext | undefined;
      structDefinition(): StructDefinitionContext | undefined;
      modifierDefinition(): ModifierDefinitionContext | undefined;
      functionDefinition(): FunctionDefinitionContext | undefined;
      eventDefinition(): EventDefinitionContext | undefined;
      enumDefinition(): EnumDefinitionContext | undefined;
      customErrorDefinition(): CustomErrorDefinitionContext | undefined;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class StateVariableDeclarationContext extends ParserRuleContext {
      typeName(): TypeNameContext;
      identifier(): IdentifierContext;
      PublicKeyword(): TerminalNode[];
      PublicKeyword(i: number): TerminalNode;
      InternalKeyword(): TerminalNode[];
      InternalKeyword(i: number): TerminalNode;
      PrivateKeyword(): TerminalNode[];
      PrivateKeyword(i: number): TerminalNode;
      ConstantKeyword(): TerminalNode[];
      ConstantKeyword(i: number): TerminalNode;
      ImmutableKeyword(): TerminalNode[];
      ImmutableKeyword(i: number): TerminalNode;
      overrideSpecifier(): OverrideSpecifierContext[];
      overrideSpecifier(i: number): OverrideSpecifierContext;
      expression(): ExpressionContext | undefined;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class FileLevelConstantContext extends ParserRuleContext {
      typeName(): TypeNameContext;
      ConstantKeyword(): TerminalNode;
      identifier(): IdentifierContext;
      expression(): ExpressionContext;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class CustomErrorDefinitionContext extends ParserRuleContext {
      identifier(): IdentifierContext;
      parameterList(): ParameterListContext;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class UsingForDeclarationContext extends ParserRuleContext {
      identifier(): IdentifierContext;
      typeName(): TypeNameContext | undefined;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class StructDefinitionContext extends ParserRuleContext {
      identifier(): IdentifierContext;
      variableDeclaration(): VariableDeclarationContext[];
      variableDeclaration(i: number): VariableDeclarationContext;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class ModifierDefinitionContext extends ParserRuleContext {
      identifier(): IdentifierContext;
      block(): BlockContext | undefined;
      parameterList(): ParameterListContext | undefined;
      VirtualKeyword(): TerminalNode[];
      VirtualKeyword(i: number): TerminalNode;
      overrideSpecifier(): OverrideSpecifierContext[];
      overrideSpecifier(i: number): OverrideSpecifierContext;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class ModifierInvocationContext extends ParserRuleContext {
      identifier(): IdentifierContext;
      expressionList(): ExpressionListContext | undefined;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class FunctionDefinitionContext extends ParserRuleContext {
      functionDescriptor(): FunctionDescriptorContext;
      parameterList(): ParameterListContext;
      modifierList(): ModifierListContext;
      block(): BlockContext | undefined;
      returnParameters(): ReturnParametersContext | undefined;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class FunctionDescriptorContext extends ParserRuleContext {
      identifier(): IdentifierContext | undefined;
      ConstructorKeyword(): TerminalNode | undefined;
      FallbackKeyword(): TerminalNode | undefined;
      ReceiveKeyword(): TerminalNode | undefined;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class ReturnParametersContext extends ParserRuleContext {
      parameterList(): ParameterListContext;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class ModifierListContext extends ParserRuleContext {
      ExternalKeyword(): TerminalNode[];
      ExternalKeyword(i: number): TerminalNode;
      PublicKeyword(): TerminalNode[];
      PublicKeyword(i: number): TerminalNode;
      InternalKeyword(): TerminalNode[];
      InternalKeyword(i: number): TerminalNode;
      PrivateKeyword(): TerminalNode[];
      PrivateKeyword(i: number): TerminalNode;
      VirtualKeyword(): TerminalNode[];
      VirtualKeyword(i: number): TerminalNode;
      stateMutability(): StateMutabilityContext[];
      stateMutability(i: number): StateMutabilityContext;
      modifierInvocation(): ModifierInvocationContext[];
      modifierInvocation(i: number): ModifierInvocationContext;
      overrideSpecifier(): OverrideSpecifierContext[];
      overrideSpecifier(i: number): OverrideSpecifierContext;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class EventDefinitionContext extends ParserRuleContext {
      identifier(): IdentifierContext;
      eventParameterList(): EventParameterListContext;
      AnonymousKeyword(): TerminalNode | undefined;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class EnumValueContext extends ParserRuleContext {
      identifier(): IdentifierContext;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class EnumDefinitionContext extends ParserRuleContext {
      identifier(): IdentifierContext;
      enumValue(): EnumValueContext[];
      enumValue(i: number): EnumValueContext;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class ParameterListContext extends ParserRuleContext {
      parameter(): ParameterContext[];
      parameter(i: number): ParameterContext;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class ParameterContext extends ParserRuleContext {
      typeName(): TypeNameContext;
      storageLocation(): StorageLocationContext | undefined;
      identifier(): IdentifierContext | undefined;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class EventParameterListContext extends ParserRuleContext {
      eventParameter(): EventParameterContext[];
      eventParameter(i: number): EventParameterContext;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class EventParameterContext extends ParserRuleContext {
      typeName(): TypeNameContext;
      IndexedKeyword(): TerminalNode | undefined;
      identifier(): IdentifierContext | undefined;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class FunctionTypeParameterListContext extends ParserRuleContext {
      functionTypeParameter(): FunctionTypeParameterContext[];
      functionTypeParameter(i: number): FunctionTypeParameterContext;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class FunctionTypeParameterContext extends ParserRuleContext {
      typeName(): TypeNameContext;
      storageLocation(): StorageLocationContext | undefined;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class VariableDeclarationContext extends ParserRuleContext {
      typeName(): TypeNameContext;
      identifier(): IdentifierContext;
      storageLocation(): StorageLocationContext | undefined;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class TypeNameContext extends ParserRuleContext {
      elementaryTypeName(): ElementaryTypeNameContext | undefined;
      userDefinedTypeName(): UserDefinedTypeNameContext | undefined;
      mapping(): MappingContext | undefined;
      typeName(): TypeNameContext | undefined;
      expression(): ExpressionContext | undefined;
      functionTypeName(): FunctionTypeNameContext | undefined;
      PayableKeyword(): TerminalNode | undefined;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class UserDefinedTypeNameContext extends ParserRuleContext {
      identifier(): IdentifierContext[];
      identifier(i: number): IdentifierContext;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class MappingKeyContext extends ParserRuleContext {
      elementaryTypeName(): ElementaryTypeNameContext | undefined;
      userDefinedTypeName(): UserDefinedTypeNameContext | undefined;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class MappingContext extends ParserRuleContext {
      mappingKey(): MappingKeyContext;
      typeName(): TypeNameContext;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class FunctionTypeNameContext extends ParserRuleContext {
      functionTypeParameterList(): FunctionTypeParameterListContext[];
      functionTypeParameterList(i: number): FunctionTypeParameterListContext;
      InternalKeyword(): TerminalNode[];
      InternalKeyword(i: number): TerminalNode;
      ExternalKeyword(): TerminalNode[];
      ExternalKeyword(i: number): TerminalNode;
      stateMutability(): StateMutabilityContext[];
      stateMutability(i: number): StateMutabilityContext;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class StorageLocationContext extends ParserRuleContext {
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class StateMutabilityContext extends ParserRuleContext {
      PureKeyword(): TerminalNode | undefined;
      ConstantKeyword(): TerminalNode | undefined;
      ViewKeyword(): TerminalNode | undefined;
      PayableKeyword(): TerminalNode | undefined;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class BlockContext extends ParserRuleContext {
      statement(): StatementContext[];
      statement(i: number): StatementContext;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class StatementContext extends ParserRuleContext {
      ifStatement(): IfStatementContext | undefined;
      tryStatement(): TryStatementContext | undefined;
      whileStatement(): WhileStatementContext | undefined;
      forStatement(): ForStatementContext | undefined;
      block(): BlockContext | undefined;
      inlineAssemblyStatement(): InlineAssemblyStatementContext | undefined;
      doWhileStatement(): DoWhileStatementContext | undefined;
      continueStatement(): ContinueStatementContext | undefined;
      breakStatement(): BreakStatementContext | undefined;
      returnStatement(): ReturnStatementContext | undefined;
      throwStatement(): ThrowStatementContext | undefined;
      emitStatement(): EmitStatementContext | undefined;
      simpleStatement(): SimpleStatementContext | undefined;
      uncheckedStatement(): UncheckedStatementContext | undefined;
      revertStatement(): RevertStatementContext | undefined;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class ExpressionStatementContext extends ParserRuleContext {
      expression(): ExpressionContext;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class IfStatementContext extends ParserRuleContext {
      expression(): ExpressionContext;
      statement(): StatementContext[];
      statement(i: number): StatementContext;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class TryStatementContext extends ParserRuleContext {
      expression(): ExpressionContext;
      block(): BlockContext;
      returnParameters(): ReturnParametersContext | undefined;
      catchClause(): CatchClauseContext[];
      catchClause(i: number): CatchClauseContext;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class CatchClauseContext extends ParserRuleContext {
      block(): BlockContext;
      parameterList(): ParameterListContext | undefined;
      identifier(): IdentifierContext | undefined;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class WhileStatementContext extends ParserRuleContext {
      expression(): ExpressionContext;
      statement(): StatementContext;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class SimpleStatementContext extends ParserRuleContext {
      variableDeclarationStatement(): VariableDeclarationStatementContext | undefined;
      expressionStatement(): ExpressionStatementContext | undefined;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class UncheckedStatementContext extends ParserRuleContext {
      block(): BlockContext;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class ForStatementContext extends ParserRuleContext {
      statement(): StatementContext;
      simpleStatement(): SimpleStatementContext | undefined;
      expressionStatement(): ExpressionStatementContext | undefined;
      expression(): ExpressionContext | undefined;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class InlineAssemblyStatementContext extends ParserRuleContext {
      assemblyBlock(): AssemblyBlockContext;
      StringLiteralFragment(): TerminalNode | undefined;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class DoWhileStatementContext extends ParserRuleContext {
      statement(): StatementContext;
      expression(): ExpressionContext;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class ContinueStatementContext extends ParserRuleContext {
      ContinueKeyword(): TerminalNode;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class BreakStatementContext extends ParserRuleContext {
      BreakKeyword(): TerminalNode;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class ReturnStatementContext extends ParserRuleContext {
      expression(): ExpressionContext | undefined;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class ThrowStatementContext extends ParserRuleContext {
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class EmitStatementContext extends ParserRuleContext {
      functionCall(): FunctionCallContext;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class RevertStatementContext extends ParserRuleContext {
      functionCall(): FunctionCallContext;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class VariableDeclarationStatementContext extends ParserRuleContext {
      identifierList(): IdentifierListContext | undefined;
      variableDeclaration(): VariableDeclarationContext | undefined;
      variableDeclarationList(): VariableDeclarationListContext | undefined;
      expression(): ExpressionContext | undefined;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class VariableDeclarationListContext extends ParserRuleContext {
      variableDeclaration(): VariableDeclarationContext[];
      variableDeclaration(i: number): VariableDeclarationContext;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class IdentifierListContext extends ParserRuleContext {
      identifier(): IdentifierContext[];
      identifier(i: number): IdentifierContext;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class ElementaryTypeNameContext extends ParserRuleContext {
      Int(): TerminalNode | undefined;
      Uint(): TerminalNode | undefined;
      Byte(): TerminalNode | undefined;
      Fixed(): TerminalNode | undefined;
      Ufixed(): TerminalNode | undefined;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class ExpressionContext extends ParserRuleContext {
      expression(): ExpressionContext[];
      expression(i: number): ExpressionContext;
      typeName(): TypeNameContext | undefined;
      identifier(): IdentifierContext | undefined;
      nameValueList(): NameValueListContext | undefined;
      functionCallArguments(): FunctionCallArgumentsContext | undefined;
      primaryExpression(): PrimaryExpressionContext | undefined;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class PrimaryExpressionContext extends ParserRuleContext {
      BooleanLiteral(): TerminalNode | undefined;
      numberLiteral(): NumberLiteralContext | undefined;
      hexLiteral(): HexLiteralContext | undefined;
      stringLiteral(): StringLiteralContext | undefined;
      identifier(): IdentifierContext | undefined;
      TypeKeyword(): TerminalNode | undefined;
      PayableKeyword(): TerminalNode | undefined;
      tupleExpression(): TupleExpressionContext | undefined;
      typeNameExpression(): TypeNameExpressionContext | undefined;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class ExpressionListContext extends ParserRuleContext {
      expression(): ExpressionContext[];
      expression(i: number): ExpressionContext;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class NameValueListContext extends ParserRuleContext {
      nameValue(): NameValueContext[];
      nameValue(i: number): NameValueContext;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class NameValueContext extends ParserRuleContext {
      identifier(): IdentifierContext;
      expression(): ExpressionContext;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class FunctionCallArgumentsContext extends ParserRuleContext {
      nameValueList(): NameValueListContext | undefined;
      expressionList(): ExpressionListContext | undefined;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class FunctionCallContext extends ParserRuleContext {
      expression(): ExpressionContext;
      functionCallArguments(): FunctionCallArgumentsContext;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class AssemblyBlockContext extends ParserRuleContext {
      assemblyItem(): AssemblyItemContext[];
      assemblyItem(i: number): AssemblyItemContext;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class AssemblyItemContext extends ParserRuleContext {
      identifier(): IdentifierContext | undefined;
      assemblyBlock(): AssemblyBlockContext | undefined;
      assemblyExpression(): AssemblyExpressionContext | undefined;
      assemblyLocalDefinition(): AssemblyLocalDefinitionContext | undefined;
      assemblyAssignment(): AssemblyAssignmentContext | undefined;
      assemblyStackAssignment(): AssemblyStackAssignmentContext | undefined;
      labelDefinition(): LabelDefinitionContext | undefined;
      assemblySwitch(): AssemblySwitchContext | undefined;
      assemblyFunctionDefinition(): AssemblyFunctionDefinitionContext | undefined;
      assemblyFor(): AssemblyForContext | undefined;
      assemblyIf(): AssemblyIfContext | undefined;
      BreakKeyword(): TerminalNode | undefined;
      ContinueKeyword(): TerminalNode | undefined;
      LeaveKeyword(): TerminalNode | undefined;
      subAssembly(): SubAssemblyContext | undefined;
      numberLiteral(): NumberLiteralContext | undefined;
      stringLiteral(): StringLiteralContext | undefined;
      hexLiteral(): HexLiteralContext | undefined;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class AssemblyExpressionContext extends ParserRuleContext {
      assemblyCall(): AssemblyCallContext | undefined;
      assemblyLiteral(): AssemblyLiteralContext | undefined;
      assemblyMember(): AssemblyMemberContext | undefined;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class AssemblyMemberContext extends ParserRuleContext {
      identifier(): IdentifierContext[];
      identifier(i: number): IdentifierContext;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class AssemblyCallContext extends ParserRuleContext {
      identifier(): IdentifierContext | undefined;
      assemblyExpression(): AssemblyExpressionContext[];
      assemblyExpression(i: number): AssemblyExpressionContext;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class AssemblyLocalDefinitionContext extends ParserRuleContext {
      assemblyIdentifierOrList(): AssemblyIdentifierOrListContext;
      assemblyExpression(): AssemblyExpressionContext | undefined;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class AssemblyAssignmentContext extends ParserRuleContext {
      assemblyIdentifierOrList(): AssemblyIdentifierOrListContext;
      assemblyExpression(): AssemblyExpressionContext;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class AssemblyIdentifierOrListContext extends ParserRuleContext {
      identifier(): IdentifierContext | undefined;
      assemblyMember(): AssemblyMemberContext | undefined;
      assemblyIdentifierList(): AssemblyIdentifierListContext | undefined;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class AssemblyIdentifierListContext extends ParserRuleContext {
      identifier(): IdentifierContext[];
      identifier(i: number): IdentifierContext;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class AssemblyStackAssignmentContext extends ParserRuleContext {
      identifier(): IdentifierContext;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class LabelDefinitionContext extends ParserRuleContext {
      identifier(): IdentifierContext;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class AssemblySwitchContext extends ParserRuleContext {
      assemblyExpression(): AssemblyExpressionContext;
      assemblyCase(): AssemblyCaseContext[];
      assemblyCase(i: number): AssemblyCaseContext;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class AssemblyCaseContext extends ParserRuleContext {
      assemblyLiteral(): AssemblyLiteralContext | undefined;
      assemblyBlock(): AssemblyBlockContext;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class AssemblyFunctionDefinitionContext extends ParserRuleContext {
      identifier(): IdentifierContext;
      assemblyBlock(): AssemblyBlockContext;
      assemblyIdentifierList(): AssemblyIdentifierListContext | undefined;
      assemblyFunctionReturns(): AssemblyFunctionReturnsContext | undefined;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class AssemblyFunctionReturnsContext extends ParserRuleContext {
      assemblyIdentifierList(): AssemblyIdentifierListContext | undefined;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class AssemblyForContext extends ParserRuleContext {
      assemblyExpression(): AssemblyExpressionContext[];
      assemblyExpression(i: number): AssemblyExpressionContext;
      assemblyBlock(): AssemblyBlockContext[];
      assemblyBlock(i: number): AssemblyBlockContext;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class AssemblyIfContext extends ParserRuleContext {
      assemblyExpression(): AssemblyExpressionContext;
      assemblyBlock(): AssemblyBlockContext;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class AssemblyLiteralContext extends ParserRuleContext {
      stringLiteral(): StringLiteralContext | undefined;
      DecimalNumber(): TerminalNode | undefined;
      HexNumber(): TerminalNode | undefined;
      hexLiteral(): HexLiteralContext | undefined;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class SubAssemblyContext extends ParserRuleContext {
      identifier(): IdentifierContext;
      assemblyBlock(): AssemblyBlockContext;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class TupleExpressionContext extends ParserRuleContext {
      expression(): ExpressionContext[];
      expression(i: number): ExpressionContext;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class TypeNameExpressionContext extends ParserRuleContext {
      elementaryTypeName(): ElementaryTypeNameContext | undefined;
      userDefinedTypeName(): UserDefinedTypeNameContext | undefined;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class NumberLiteralContext extends ParserRuleContext {
      DecimalNumber(): TerminalNode | undefined;
      HexNumber(): TerminalNode | undefined;
      NumberUnit(): TerminalNode | undefined;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class IdentifierContext extends ParserRuleContext {
      ReceiveKeyword(): TerminalNode | undefined;
      ConstructorKeyword(): TerminalNode | undefined;
      PayableKeyword(): TerminalNode | undefined;
      LeaveKeyword(): TerminalNode | undefined;
      Identifier(): TerminalNode | undefined;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class HexLiteralContext extends ParserRuleContext {
      HexLiteralFragment(): TerminalNode[];
      HexLiteralFragment(i: number): TerminalNode;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class OverrideSpecifierContext extends ParserRuleContext {
      userDefinedTypeName(): UserDefinedTypeNameContext[];
      userDefinedTypeName(i: number): UserDefinedTypeNameContext;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }
  export class StringLiteralContext extends ParserRuleContext {
      StringLiteralFragment(): TerminalNode[];
      StringLiteralFragment(i: number): TerminalNode;
      constructor(parent: ParserRuleContext | undefined, invokingState: number);
      get ruleIndex(): number;
      enterRule(listener: SolidityListener): void;
      exitRule(listener: SolidityListener): void;
      accept<Result>(visitor: SolidityVisitor<Result>): Result;
  }

}
declare module '@solidity-parser/parser/src/antlr/SolidityVisitor' {
  import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
  import { SourceUnitContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { PragmaDirectiveContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { PragmaNameContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { PragmaValueContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { VersionContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { VersionOperatorContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { VersionConstraintContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { ImportDeclarationContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { ImportDirectiveContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { ImportPathContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { ContractDefinitionContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { InheritanceSpecifierContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { ContractPartContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { StateVariableDeclarationContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { FileLevelConstantContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { CustomErrorDefinitionContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { UsingForDeclarationContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { StructDefinitionContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { ModifierDefinitionContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { ModifierInvocationContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { FunctionDefinitionContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { FunctionDescriptorContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { ReturnParametersContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { ModifierListContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { EventDefinitionContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { EnumValueContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { EnumDefinitionContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { ParameterListContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { ParameterContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { EventParameterListContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { EventParameterContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { FunctionTypeParameterListContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { FunctionTypeParameterContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { VariableDeclarationContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { TypeNameContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { UserDefinedTypeNameContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { MappingKeyContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { MappingContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { FunctionTypeNameContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { StorageLocationContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { StateMutabilityContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { BlockContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { StatementContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { ExpressionStatementContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { IfStatementContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { TryStatementContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { CatchClauseContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { WhileStatementContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { SimpleStatementContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { UncheckedStatementContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { ForStatementContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { InlineAssemblyStatementContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { DoWhileStatementContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { ContinueStatementContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { BreakStatementContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { ReturnStatementContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { ThrowStatementContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { EmitStatementContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { RevertStatementContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { VariableDeclarationStatementContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { VariableDeclarationListContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { IdentifierListContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { ElementaryTypeNameContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { ExpressionContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { PrimaryExpressionContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { ExpressionListContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { NameValueListContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { NameValueContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { FunctionCallArgumentsContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { FunctionCallContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { AssemblyBlockContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { AssemblyItemContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { AssemblyExpressionContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { AssemblyMemberContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { AssemblyCallContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { AssemblyLocalDefinitionContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { AssemblyAssignmentContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { AssemblyIdentifierOrListContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { AssemblyIdentifierListContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { AssemblyStackAssignmentContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { LabelDefinitionContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { AssemblySwitchContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { AssemblyCaseContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { AssemblyFunctionDefinitionContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { AssemblyFunctionReturnsContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { AssemblyForContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { AssemblyIfContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { AssemblyLiteralContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { SubAssemblyContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { TupleExpressionContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { TypeNameExpressionContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { NumberLiteralContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { IdentifierContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { HexLiteralContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { OverrideSpecifierContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  import { StringLiteralContext } from "@solidity-parser/parser/src/antlr/SolidityParser";
  /**
   * This interface defines a complete generic visitor for a parse tree produced
   * by `SolidityParser`.
   *
   * @param <Result> The return type of the visit operation. Use `void` for
   * operations with no return type.
   */
  export interface SolidityVisitor<Result> extends ParseTreeVisitor<Result> {
      /**
       * Visit a parse tree produced by `SolidityParser.sourceUnit`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitSourceUnit?: (ctx: SourceUnitContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.pragmaDirective`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitPragmaDirective?: (ctx: PragmaDirectiveContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.pragmaName`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitPragmaName?: (ctx: PragmaNameContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.pragmaValue`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitPragmaValue?: (ctx: PragmaValueContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.version`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitVersion?: (ctx: VersionContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.versionOperator`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitVersionOperator?: (ctx: VersionOperatorContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.versionConstraint`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitVersionConstraint?: (ctx: VersionConstraintContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.importDeclaration`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitImportDeclaration?: (ctx: ImportDeclarationContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.importDirective`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitImportDirective?: (ctx: ImportDirectiveContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.importPath`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitImportPath?: (ctx: ImportPathContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.contractDefinition`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitContractDefinition?: (ctx: ContractDefinitionContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.inheritanceSpecifier`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitInheritanceSpecifier?: (ctx: InheritanceSpecifierContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.contractPart`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitContractPart?: (ctx: ContractPartContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.stateVariableDeclaration`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitStateVariableDeclaration?: (ctx: StateVariableDeclarationContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.fileLevelConstant`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitFileLevelConstant?: (ctx: FileLevelConstantContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.customErrorDefinition`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitCustomErrorDefinition?: (ctx: CustomErrorDefinitionContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.usingForDeclaration`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitUsingForDeclaration?: (ctx: UsingForDeclarationContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.structDefinition`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitStructDefinition?: (ctx: StructDefinitionContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.modifierDefinition`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitModifierDefinition?: (ctx: ModifierDefinitionContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.modifierInvocation`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitModifierInvocation?: (ctx: ModifierInvocationContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.functionDefinition`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitFunctionDefinition?: (ctx: FunctionDefinitionContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.functionDescriptor`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitFunctionDescriptor?: (ctx: FunctionDescriptorContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.returnParameters`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitReturnParameters?: (ctx: ReturnParametersContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.modifierList`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitModifierList?: (ctx: ModifierListContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.eventDefinition`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitEventDefinition?: (ctx: EventDefinitionContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.enumValue`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitEnumValue?: (ctx: EnumValueContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.enumDefinition`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitEnumDefinition?: (ctx: EnumDefinitionContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.parameterList`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitParameterList?: (ctx: ParameterListContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.parameter`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitParameter?: (ctx: ParameterContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.eventParameterList`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitEventParameterList?: (ctx: EventParameterListContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.eventParameter`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitEventParameter?: (ctx: EventParameterContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.functionTypeParameterList`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitFunctionTypeParameterList?: (ctx: FunctionTypeParameterListContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.functionTypeParameter`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitFunctionTypeParameter?: (ctx: FunctionTypeParameterContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.variableDeclaration`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitVariableDeclaration?: (ctx: VariableDeclarationContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.typeName`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitTypeName?: (ctx: TypeNameContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.userDefinedTypeName`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitUserDefinedTypeName?: (ctx: UserDefinedTypeNameContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.mappingKey`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitMappingKey?: (ctx: MappingKeyContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.mapping`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitMapping?: (ctx: MappingContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.functionTypeName`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitFunctionTypeName?: (ctx: FunctionTypeNameContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.storageLocation`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitStorageLocation?: (ctx: StorageLocationContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.stateMutability`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitStateMutability?: (ctx: StateMutabilityContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.block`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitBlock?: (ctx: BlockContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.statement`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitStatement?: (ctx: StatementContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.expressionStatement`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitExpressionStatement?: (ctx: ExpressionStatementContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.ifStatement`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitIfStatement?: (ctx: IfStatementContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.tryStatement`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitTryStatement?: (ctx: TryStatementContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.catchClause`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitCatchClause?: (ctx: CatchClauseContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.whileStatement`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitWhileStatement?: (ctx: WhileStatementContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.simpleStatement`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitSimpleStatement?: (ctx: SimpleStatementContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.uncheckedStatement`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitUncheckedStatement?: (ctx: UncheckedStatementContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.forStatement`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitForStatement?: (ctx: ForStatementContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.inlineAssemblyStatement`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitInlineAssemblyStatement?: (ctx: InlineAssemblyStatementContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.doWhileStatement`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitDoWhileStatement?: (ctx: DoWhileStatementContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.continueStatement`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitContinueStatement?: (ctx: ContinueStatementContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.breakStatement`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitBreakStatement?: (ctx: BreakStatementContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.returnStatement`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitReturnStatement?: (ctx: ReturnStatementContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.throwStatement`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitThrowStatement?: (ctx: ThrowStatementContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.emitStatement`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitEmitStatement?: (ctx: EmitStatementContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.revertStatement`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitRevertStatement?: (ctx: RevertStatementContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.variableDeclarationStatement`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitVariableDeclarationStatement?: (ctx: VariableDeclarationStatementContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.variableDeclarationList`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitVariableDeclarationList?: (ctx: VariableDeclarationListContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.identifierList`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitIdentifierList?: (ctx: IdentifierListContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.elementaryTypeName`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitElementaryTypeName?: (ctx: ElementaryTypeNameContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.expression`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitExpression?: (ctx: ExpressionContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.primaryExpression`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitPrimaryExpression?: (ctx: PrimaryExpressionContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.expressionList`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitExpressionList?: (ctx: ExpressionListContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.nameValueList`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitNameValueList?: (ctx: NameValueListContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.nameValue`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitNameValue?: (ctx: NameValueContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.functionCallArguments`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitFunctionCallArguments?: (ctx: FunctionCallArgumentsContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.functionCall`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitFunctionCall?: (ctx: FunctionCallContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.assemblyBlock`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitAssemblyBlock?: (ctx: AssemblyBlockContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.assemblyItem`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitAssemblyItem?: (ctx: AssemblyItemContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.assemblyExpression`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitAssemblyExpression?: (ctx: AssemblyExpressionContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.assemblyMember`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitAssemblyMember?: (ctx: AssemblyMemberContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.assemblyCall`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitAssemblyCall?: (ctx: AssemblyCallContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.assemblyLocalDefinition`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitAssemblyLocalDefinition?: (ctx: AssemblyLocalDefinitionContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.assemblyAssignment`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitAssemblyAssignment?: (ctx: AssemblyAssignmentContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.assemblyIdentifierOrList`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitAssemblyIdentifierOrList?: (ctx: AssemblyIdentifierOrListContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.assemblyIdentifierList`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitAssemblyIdentifierList?: (ctx: AssemblyIdentifierListContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.assemblyStackAssignment`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitAssemblyStackAssignment?: (ctx: AssemblyStackAssignmentContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.labelDefinition`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitLabelDefinition?: (ctx: LabelDefinitionContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.assemblySwitch`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitAssemblySwitch?: (ctx: AssemblySwitchContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.assemblyCase`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitAssemblyCase?: (ctx: AssemblyCaseContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.assemblyFunctionDefinition`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitAssemblyFunctionDefinition?: (ctx: AssemblyFunctionDefinitionContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.assemblyFunctionReturns`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitAssemblyFunctionReturns?: (ctx: AssemblyFunctionReturnsContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.assemblyFor`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitAssemblyFor?: (ctx: AssemblyForContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.assemblyIf`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitAssemblyIf?: (ctx: AssemblyIfContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.assemblyLiteral`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitAssemblyLiteral?: (ctx: AssemblyLiteralContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.subAssembly`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitSubAssembly?: (ctx: SubAssemblyContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.tupleExpression`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitTupleExpression?: (ctx: TupleExpressionContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.typeNameExpression`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitTypeNameExpression?: (ctx: TypeNameExpressionContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.numberLiteral`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitNumberLiteral?: (ctx: NumberLiteralContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.identifier`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitIdentifier?: (ctx: IdentifierContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.hexLiteral`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitHexLiteral?: (ctx: HexLiteralContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.overrideSpecifier`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitOverrideSpecifier?: (ctx: OverrideSpecifierContext) => Result;
      /**
       * Visit a parse tree produced by `SolidityParser.stringLiteral`.
       * @param ctx the parse tree
       * @return the visitor result
       */
      visitStringLiteral?: (ctx: StringLiteralContext) => Result;
  }

}
declare module '@solidity-parser/parser/src/ast-types' {
  interface Location {
      start: {
          line: number;
          column: number;
      };
      end: {
          line: number;
          column: number;
      };
  }
  export interface BaseASTNode {
      type: ASTNodeTypeString;
      range?: [number, number];
      loc?: Location;
  }
  export interface SourceUnit extends BaseASTNode {
      type: 'SourceUnit';
      children: ASTNode[];
  }
  export interface ContractDefinition extends BaseASTNode {
      type: 'ContractDefinition';
      name: string;
      baseContracts: InheritanceSpecifier[];
      kind: string;
      subNodes: BaseASTNode[];
  }
  export interface InheritanceSpecifier extends BaseASTNode {
      type: 'InheritanceSpecifier';
      baseName: UserDefinedTypeName;
      arguments: Expression[];
  }
  export interface UserDefinedTypeName extends BaseASTNode {
      type: 'UserDefinedTypeName';
      namePath: string;
  }
  export const astNodeTypes: readonly ["SourceUnit", "PragmaDirective", "ImportDirective", "ContractDefinition", "InheritanceSpecifier", "StateVariableDeclaration", "UsingForDeclaration", "StructDefinition", "ModifierDefinition", "ModifierInvocation", "FunctionDefinition", "EventDefinition", "CustomErrorDefinition", "RevertStatement", "EnumValue", "EnumDefinition", "VariableDeclaration", "UserDefinedTypeName", "Mapping", "ArrayTypeName", "FunctionTypeName", "Block", "ExpressionStatement", "IfStatement", "WhileStatement", "ForStatement", "InlineAssemblyStatement", "DoWhileStatement", "ContinueStatement", "Break", "Continue", "BreakStatement", "ReturnStatement", "EmitStatement", "ThrowStatement", "VariableDeclarationStatement", "ElementaryTypeName", "FunctionCall", "AssemblyBlock", "AssemblyCall", "AssemblyLocalDefinition", "AssemblyAssignment", "AssemblyStackAssignment", "LabelDefinition", "AssemblySwitch", "AssemblyCase", "AssemblyFunctionDefinition", "AssemblyFunctionReturns", "AssemblyFor", "AssemblyIf", "SubAssembly", "TupleExpression", "TypeNameExpression", "NameValueExpression", "BooleanLiteral", "NumberLiteral", "Identifier", "BinaryOperation", "UnaryOperation", "NewExpression", "Conditional", "StringLiteral", "HexLiteral", "HexNumber", "DecimalNumber", "MemberAccess", "IndexAccess", "IndexRangeAccess", "NameValueList", "UncheckedStatement", "TryStatement", "CatchClause", "FileLevelConstant", "AssemblyMemberAccess"];
  export type ASTNodeTypeString = typeof astNodeTypes[number];
  export interface PragmaDirective extends BaseASTNode {
      type: 'PragmaDirective';
      name: string;
      value: string;
  }
  export interface ImportDirective extends BaseASTNode {
      type: 'ImportDirective';
      path: string;
      pathLiteral: StringLiteral;
      unitAlias: string | null;
      unitAliasIdentifier: Identifier | null;
      symbolAliases: Array<[string, string | null]> | null;
      symbolAliasesIdentifiers: Array<[Identifier, Identifier | null]> | null;
  }
  export interface StateVariableDeclaration extends BaseASTNode {
      type: 'StateVariableDeclaration';
      variables: StateVariableDeclarationVariable[];
      initialValue: Expression | null;
  }
  export interface FileLevelConstant extends BaseASTNode {
      type: 'FileLevelConstant';
      typeName: TypeName;
      name: string;
      initialValue: Expression;
      isDeclaredConst: boolean;
      isImmutable: boolean;
  }
  export interface UsingForDeclaration extends BaseASTNode {
      type: 'UsingForDeclaration';
      typeName: TypeName | null;
      libraryName: string;
  }
  export interface StructDefinition extends BaseASTNode {
      type: 'StructDefinition';
      name: string;
      members: VariableDeclaration[];
  }
  export interface ModifierDefinition extends BaseASTNode {
      type: 'ModifierDefinition';
      name: string;
      parameters: null | VariableDeclaration[];
      isVirtual: boolean;
      override: null | UserDefinedTypeName[];
      body: Block | null;
  }
  export interface ModifierInvocation extends BaseASTNode {
      type: 'ModifierInvocation';
      name: string;
      arguments: Expression[] | null;
  }
  export interface FunctionDefinition extends BaseASTNode {
      type: 'FunctionDefinition';
      name: string | null;
      parameters: VariableDeclaration[];
      modifiers: ModifierInvocation[];
      stateMutability: 'pure' | 'constant' | 'payable' | 'view' | null;
      visibility: 'default' | 'external' | 'internal' | 'public' | 'private';
      returnParameters: VariableDeclaration[] | null;
      body: Block | null;
      override: UserDefinedTypeName[] | null;
      isConstructor: boolean;
      isReceiveEther: boolean;
      isFallback: boolean;
      isVirtual: boolean;
  }
  export interface CustomErrorDefinition extends BaseASTNode {
      type: 'CustomErrorDefinition';
      name: string;
      parameters: VariableDeclaration[];
  }
  export interface RevertStatement extends BaseASTNode {
      type: 'RevertStatement';
      revertCall: FunctionCall;
  }
  export interface EventDefinition extends BaseASTNode {
      type: 'EventDefinition';
      name: string;
      parameters: VariableDeclaration[];
      isAnonymous: boolean;
  }
  export interface EnumValue extends BaseASTNode {
      type: 'EnumValue';
      name: string;
  }
  export interface EnumDefinition extends BaseASTNode {
      type: 'EnumDefinition';
      name: string;
      members: EnumValue[];
  }
  export interface VariableDeclaration extends BaseASTNode {
      type: 'VariableDeclaration';
      isIndexed: boolean;
      isStateVar: boolean;
      typeName: TypeName | null;
      name: string | null;
      identifier: Identifier | null;
      isDeclaredConst?: boolean;
      storageLocation: string | null;
      expression: Expression | null;
      visibility?: 'public' | 'private' | 'internal' | 'default';
  }
  export interface StateVariableDeclarationVariable extends VariableDeclaration {
      override: null | UserDefinedTypeName[];
      isImmutable: boolean;
  }
  export interface ArrayTypeName extends BaseASTNode {
      type: 'ArrayTypeName';
      baseTypeName: TypeName;
      length: Expression | null;
  }
  export interface Mapping extends BaseASTNode {
      type: 'Mapping';
      keyType: ElementaryTypeName | UserDefinedTypeName;
      valueType: TypeName;
  }
  export interface FunctionTypeName extends BaseASTNode {
      type: 'FunctionTypeName';
      parameterTypes: VariableDeclaration[];
      returnTypes: VariableDeclaration[];
      visibility: string;
      stateMutability: string | null;
  }
  export interface Block extends BaseASTNode {
      type: 'Block';
      statements: BaseASTNode[];
  }
  export interface ExpressionStatement extends BaseASTNode {
      type: 'ExpressionStatement';
      expression: Expression | null;
  }
  export interface IfStatement extends BaseASTNode {
      type: 'IfStatement';
      condition: Expression;
      trueBody: Statement;
      falseBody: Statement | null;
  }
  export interface UncheckedStatement extends BaseASTNode {
      type: 'UncheckedStatement';
      block: Block;
  }
  export interface TryStatement extends BaseASTNode {
      type: 'TryStatement';
      expression: Expression;
      returnParameters: VariableDeclaration[] | null;
      body: Block;
      catchClauses: CatchClause[];
  }
  export interface CatchClause extends BaseASTNode {
      type: 'CatchClause';
      isReasonStringType: boolean;
      kind: string | null;
      parameters: VariableDeclaration[] | null;
      body: Block;
  }
  export interface WhileStatement extends BaseASTNode {
      type: 'WhileStatement';
      condition: Expression;
      body: Statement;
  }
  export interface ForStatement extends BaseASTNode {
      type: 'ForStatement';
      initExpression: SimpleStatement | null;
      conditionExpression?: Expression;
      loopExpression: ExpressionStatement;
      body: Statement;
  }
  export interface InlineAssemblyStatement extends BaseASTNode {
      type: 'InlineAssemblyStatement';
      language: string | null;
      body: AssemblyBlock;
  }
  export interface DoWhileStatement extends BaseASTNode {
      type: 'DoWhileStatement';
      condition: Expression;
      body: Statement;
  }
  export interface ContinueStatement extends BaseASTNode {
      type: 'ContinueStatement';
  }
  export interface Break extends BaseASTNode {
      type: 'Break';
  }
  export interface Continue extends BaseASTNode {
      type: 'Continue';
  }
  export interface BreakStatement extends BaseASTNode {
      type: 'BreakStatement';
  }
  export interface ReturnStatement extends BaseASTNode {
      type: 'ReturnStatement';
      expression: Expression | null;
  }
  export interface EmitStatement extends BaseASTNode {
      type: 'EmitStatement';
      eventCall: FunctionCall;
  }
  export interface ThrowStatement extends BaseASTNode {
      type: 'ThrowStatement';
  }
  export interface VariableDeclarationStatement extends BaseASTNode {
      type: 'VariableDeclarationStatement';
      variables: Array<BaseASTNode | null>;
      initialValue: Expression | null;
  }
  export interface ElementaryTypeName extends BaseASTNode {
      type: 'ElementaryTypeName';
      name: string;
      stateMutability: string | null;
  }
  export interface FunctionCall extends BaseASTNode {
      type: 'FunctionCall';
      expression: Expression;
      arguments: Expression[];
      names: string[];
      identifiers: Identifier[];
  }
  export interface AssemblyBlock extends BaseASTNode {
      type: 'AssemblyBlock';
      operations: AssemblyItem[];
  }
  export interface AssemblyCall extends BaseASTNode {
      type: 'AssemblyCall';
      functionName: string;
      arguments: AssemblyExpression[];
  }
  export interface AssemblyLocalDefinition extends BaseASTNode {
      type: 'AssemblyLocalDefinition';
      names: Identifier[] | AssemblyMemberAccess[];
      expression: AssemblyExpression | null;
  }
  export interface AssemblyAssignment extends BaseASTNode {
      type: 'AssemblyAssignment';
      names: Identifier[] | AssemblyMemberAccess[];
      expression: AssemblyExpression;
  }
  export interface AssemblyStackAssignment extends BaseASTNode {
      type: 'AssemblyStackAssignment';
      name: string;
  }
  export interface LabelDefinition extends BaseASTNode {
      type: 'LabelDefinition';
      name: string;
  }
  export interface AssemblySwitch extends BaseASTNode {
      type: 'AssemblySwitch';
      expression: AssemblyExpression;
      cases: AssemblyCase[];
  }
  export interface AssemblyCase extends BaseASTNode {
      type: 'AssemblyCase';
      value: AssemblyLiteral | null;
      block: AssemblyBlock;
      default: boolean;
  }
  export interface AssemblyFunctionDefinition extends BaseASTNode {
      type: 'AssemblyFunctionDefinition';
      name: string;
      arguments: Identifier[];
      returnArguments: Identifier[];
      body: AssemblyBlock;
  }
  export interface AssemblyFunctionReturns extends BaseASTNode {
      type: 'AssemblyFunctionReturns';
  }
  export interface AssemblyFor extends BaseASTNode {
      type: 'AssemblyFor';
      pre: AssemblyBlock | AssemblyExpression;
      condition: AssemblyExpression;
      post: AssemblyBlock | AssemblyExpression;
      body: AssemblyBlock;
  }
  export interface AssemblyIf extends BaseASTNode {
      type: 'AssemblyIf';
      condition: AssemblyExpression;
      body: AssemblyBlock;
  }
  export type AssemblyLiteral = StringLiteral | DecimalNumber | HexNumber | HexLiteral;
  export interface SubAssembly extends BaseASTNode {
      type: 'SubAssembly';
  }
  export interface AssemblyMemberAccess extends BaseASTNode {
      type: 'AssemblyMemberAccess';
      expression: Identifier;
      memberName: Identifier;
  }
  export interface NewExpression extends BaseASTNode {
      type: 'NewExpression';
      typeName: TypeName;
  }
  export interface TupleExpression extends BaseASTNode {
      type: 'TupleExpression';
      components: Array<BaseASTNode | null>;
      isArray: boolean;
  }
  export interface TypeNameExpression extends BaseASTNode {
      type: 'TypeNameExpression';
      typeName: ElementaryTypeName | UserDefinedTypeName | ArrayTypeName;
  }
  export interface NameValueExpression extends BaseASTNode {
      type: 'NameValueExpression';
      expression: Expression;
      arguments: NameValueList;
  }
  export interface NumberLiteral extends BaseASTNode {
      type: 'NumberLiteral';
      number: string;
      subdenomination: null | 'wei' | 'szabo' | 'finney' | 'ether' | 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'years';
  }
  export interface BooleanLiteral extends BaseASTNode {
      type: 'BooleanLiteral';
      value: boolean;
  }
  export interface HexLiteral extends BaseASTNode {
      type: 'HexLiteral';
      value: string;
      parts: string[];
  }
  export interface StringLiteral extends BaseASTNode {
      type: 'StringLiteral';
      value: string;
      parts: string[];
      isUnicode: boolean[];
  }
  export interface Identifier extends BaseASTNode {
      type: 'Identifier';
      name: string;
  }
  export const binaryOpValues: readonly ["+", "-", "*", "/", "**", "%", "<<", ">>", "&&", "||", ",,", "&", ",", "^", "<", ">", "<=", ">=", "==", "!=", "=", ",=", "^=", "&=", "<<=", ">>=", "+=", "-=", "*=", "/=", "%=", "|", "|="];
  export type BinOp = typeof binaryOpValues[number];
  export const unaryOpValues: readonly ["-", "+", "++", "--", "~", "after", "delete", "!"];
  export type UnaryOp = typeof unaryOpValues[number];
  export interface BinaryOperation extends BaseASTNode {
      type: 'BinaryOperation';
      left: Expression;
      right: Expression;
      operator: BinOp;
  }
  export interface UnaryOperation extends BaseASTNode {
      type: 'UnaryOperation';
      operator: UnaryOp;
      subExpression: Expression;
      isPrefix: boolean;
  }
  export interface Conditional extends BaseASTNode {
      type: 'Conditional';
      condition: Expression;
      trueExpression: Expression;
      falseExpression: Expression;
  }
  export interface IndexAccess extends BaseASTNode {
      type: 'IndexAccess';
      base: Expression;
      index: Expression;
  }
  export interface IndexRangeAccess extends BaseASTNode {
      type: 'IndexRangeAccess';
      base: Expression;
      indexStart?: Expression;
      indexEnd?: Expression;
  }
  export interface MemberAccess extends BaseASTNode {
      type: 'MemberAccess';
      expression: Expression;
      memberName: string;
  }
  export interface HexNumber extends BaseASTNode {
      type: 'HexNumber';
      value: string;
  }
  export interface DecimalNumber extends BaseASTNode {
      type: 'DecimalNumber';
      value: string;
  }
  export interface NameValueList extends BaseASTNode {
      type: 'NameValueList';
      names: string[];
      identifiers: Identifier[];
      arguments: Expression[];
  }
  export type ASTNode = SourceUnit | PragmaDirective | ImportDirective | ContractDefinition | InheritanceSpecifier | StateVariableDeclaration | UsingForDeclaration | StructDefinition | ModifierDefinition | ModifierInvocation | FunctionDefinition | EventDefinition | CustomErrorDefinition | EnumValue | EnumDefinition | VariableDeclaration | TypeName | UserDefinedTypeName | Mapping | FunctionTypeName | Block | Statement | ElementaryTypeName | AssemblyBlock | AssemblyCall | AssemblyLocalDefinition | AssemblyAssignment | AssemblyStackAssignment | LabelDefinition | AssemblySwitch | AssemblyCase | AssemblyFunctionDefinition | AssemblyFunctionReturns | AssemblyFor | AssemblyIf | AssemblyLiteral | SubAssembly | TupleExpression | TypeNameExpression | BinaryOperation | Conditional | IndexAccess | IndexRangeAccess | AssemblyItem | Expression | NameValueList | AssemblyMemberAccess | CatchClause | FileLevelConstant;
  export type AssemblyItem = Identifier | AssemblyBlock | AssemblyExpression | AssemblyLocalDefinition | AssemblyAssignment | AssemblyStackAssignment | LabelDefinition | AssemblySwitch | AssemblyFunctionDefinition | AssemblyFor | AssemblyIf | Break | Continue | SubAssembly | NumberLiteral | StringLiteral | HexNumber | HexLiteral | DecimalNumber;
  export type AssemblyExpression = AssemblyCall | AssemblyLiteral;
  export type Expression = IndexAccess | IndexRangeAccess | TupleExpression | BinaryOperation | Conditional | MemberAccess | FunctionCall | UnaryOperation | NewExpression | PrimaryExpression | NameValueExpression;
  export type PrimaryExpression = BooleanLiteral | HexLiteral | StringLiteral | NumberLiteral | Identifier | TupleExpression | TypeNameExpression;
  export type SimpleStatement = VariableDeclarationStatement | ExpressionStatement;
  export type TypeName = ElementaryTypeName | UserDefinedTypeName | Mapping | ArrayTypeName | FunctionTypeName;
  export type Statement = IfStatement | WhileStatement | ForStatement | Block | InlineAssemblyStatement | DoWhileStatement | ContinueStatement | BreakStatement | ReturnStatement | EmitStatement | ThrowStatement | SimpleStatement | VariableDeclarationStatement | UncheckedStatement | TryStatement | RevertStatement;
  type ASTMap<U> = {
      [K in ASTNodeTypeString]: U extends {
          type: K;
      } ? U : never;
  };
  type ASTTypeMap = ASTMap<ASTNode>;
  type ASTVisitorEnter = {
      [K in keyof ASTTypeMap]?: (ast: ASTTypeMap[K], parent?: ASTNode) => any;
  };
  type ASTVisitorExit = {
      [K in keyof ASTTypeMap as `${K}:exit`]?: (ast: ASTTypeMap[K], parent?: ASTNode) => any;
  };
  export type ASTVisitor = ASTVisitorEnter & ASTVisitorExit;
  export {};

}
declare module '@solidity-parser/parser/src/index' {
  export * from "@solidity-parser/parser/src/parser";
  export type { ParseOptions } from "@solidity-parser/parser/src/types";

}
declare module '@solidity-parser/parser/src/parser' {
  import { ASTNode, ASTVisitor, SourceUnit } from '@solidity-parser/parser/src/ast-types';
  import { ParseOptions, Token, TokenizeOptions } from '@solidity-parser/parser/src/types';
  interface ParserErrorItem {
      message: string;
      line: number;
      column: number;
  }
  type ParseResult = SourceUnit & {
      errors?: any[];
      tokens?: Token[];
  };
  export class ParserError extends Error {
      errors: ParserErrorItem[];
      constructor(args: {
          errors: ParserErrorItem[];
      });
  }
  export function tokenize(input: string, options?: TokenizeOptions): any;
  export function parse(input: string, options?: ParseOptions): ParseResult;
  export function visit(node: unknown, visitor: ASTVisitor, nodeParent?: ASTNode): void;
  export {};

}
declare module '@solidity-parser/parser/src/tokens-string' {
  const _exports: any;
  export = _exports;

}
declare module '@solidity-parser/parser/src/tokens' {
  import { Token, AntlrToken, TokenizeOptions } from '@solidity-parser/parser/src/types';
  export function buildTokenList(tokensArg: AntlrToken[], options: TokenizeOptions): Token[];

}
declare module '@solidity-parser/parser/src/types' {
  import { Token as Antlr4TsToken } from "antlr4ts";
  export interface Node {
      type: string;
  }
  export type AntlrToken = Antlr4TsToken;
  export interface TokenizeOptions {
      range?: boolean;
      loc?: boolean;
  }
  export interface ParseOptions extends TokenizeOptions {
      tokens?: boolean;
      tolerant?: boolean;
  }
  export interface Token {
      type: string;
      value: string | undefined;
      range?: [number, number];
      loc?: {
          start: {
              line: number;
              column: number;
          };
          end: {
              line: number;
              column: number;
          };
      };
  }

}
declare module '@solidity-parser/parser/test/ast' {
  export {};

}
declare module '@solidity-parser/parser/test/index' {
  export {};

}
declare module '@solidity-parser/parser/test/utils' {
  import { ParseOptions } from '@solidity-parser/parser/src/types';
  export function parseContract(source: string, options?: ParseOptions): any;
  export function parseNode(source: string, options?: {}): any;
  export function parseStatement(source: string, options?: {}): any;
  export function parseExpression(source: string, options?: {}): any;
  export function parseAssembly(source: string, options?: {}): any;

}
declare module '@solidity-parser/parser' {
  import main = require('@solidity-parser/parser/index');
  export = main;
}