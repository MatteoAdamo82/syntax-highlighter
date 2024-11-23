export default {
    name: 'java',
    keywords: [
        'abstract', 'assert', 'boolean', 'break', 'byte', 'case', 'catch', 'char',
        'class', 'const', 'continue', 'default', 'do', 'double', 'else', 'enum',
        'extends', 'final', 'finally', 'float', 'for', 'if', 'implements', 'import',
        'instanceof', 'int', 'interface', 'long', 'native', 'new', 'package',
        'private', 'protected', 'public', 'return', 'short', 'static', 'strictfp',
        'super', 'switch', 'synchronized', 'this', 'throw', 'throws', 'transient',
        'try', 'void', 'volatile', 'while', 'true', 'false', 'null'
    ],
    patterns: [
        { type: 'function', regex: /\b(?:(?:public|private|protected|static|final|native|synchronized|abstract|transient)\s+)*(?:[a-zA-Z_$][\w$]*\s+)+([a-zA-Z_$][\w$]*)\s*\(/g },
        { type: 'comment', regex: /(?:\/\/[^\n]*|\/\*[\s\S]*?\*\/)/g },
        { type: 'string', regex: /"(?:[^"\\]|\\.)*"/g },
        { type: 'number', regex: /\b(?:0[xX][0-9a-fA-F]+|\d*\.\d+|\d+)[lLfF]?\b/g },
        { type: 'annotation', regex: /@[a-zA-Z_$][\w$]*/g },
        { type: 'operator', regex: /[+\-*/%=<>!&|^~?:]+/g }
    ],
    detect: {
        patterns: [
            /\bclass\s+\w+/,
            /\bpublic\s+(?:class|interface|enum)/,
            /\bimport\s+[\w.]+;/,
            /\bpackage\s+[\w.]+;/,
            /@Override\b/
        ],
        minMatches: 2
    }
};