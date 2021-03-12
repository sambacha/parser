import { ATN } from "antlr4ts/atn/ATN";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { Vocabulary } from "antlr4ts/Vocabulary";
export declare class SolidityLexer extends Lexer {
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
    static readonly Int = 96;
    static readonly Uint = 97;
    static readonly Byte = 98;
    static readonly Fixed = 99;
    static readonly Ufixed = 100;
    static readonly BooleanLiteral = 101;
    static readonly DecimalNumber = 102;
    static readonly HexNumber = 103;
    static readonly NumberUnit = 104;
    static readonly HexLiteralFragment = 105;
    static readonly ReservedKeyword = 106;
    static readonly AnonymousKeyword = 107;
    static readonly BreakKeyword = 108;
    static readonly ConstantKeyword = 109;
    static readonly ImmutableKeyword = 110;
    static readonly ContinueKeyword = 111;
    static readonly LeaveKeyword = 112;
    static readonly ExternalKeyword = 113;
    static readonly IndexedKeyword = 114;
    static readonly InternalKeyword = 115;
    static readonly PayableKeyword = 116;
    static readonly PrivateKeyword = 117;
    static readonly PublicKeyword = 118;
    static readonly VirtualKeyword = 119;
    static readonly PureKeyword = 120;
    static readonly TypeKeyword = 121;
    static readonly ViewKeyword = 122;
    static readonly ConstructorKeyword = 123;
    static readonly FallbackKeyword = 124;
    static readonly ReceiveKeyword = 125;
    static readonly Identifier = 126;
    static readonly StringLiteralFragment = 127;
    static readonly VersionLiteral = 128;
    static readonly WS = 129;
    static readonly COMMENT = 130;
    static readonly LINE_COMMENT = 131;
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
