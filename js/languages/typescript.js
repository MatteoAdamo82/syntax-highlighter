export default {
    name: 'typescript',
    keywords: [
        'abstract', 'as', 'async', 'await', 'break', 'case', 'catch', 'class',
        'const', 'continue', 'debugger', 'default', 'delete', 'do', 'else', 'enum',
        'export', 'extends', 'finally', 'for', 'from', 'function', 'get', 'if',
        'implements', 'import', 'in', 'instanceof', 'interface', 'let', 'new',
        'null', 'package', 'private', 'protected', 'public', 'return', 'set',
        'static', 'super', 'switch', 'this', 'throw', 'try', 'type', 'typeof',
        'var', 'void', 'while', 'with', 'yield', 'true', 'false', 'any', 'never',
        'unknown', 'undefined', 'string', 'number', 'boolean', 'symbol', 'bigint'
    ],
    patterns: [
        { type: 'function', regex: /\b(?:function\s+([a-zA-Z_$][\w$]*)|([a-zA-Z_$][\w$]*)\s*\(|([a-zA-Z_$][\w$]*)\s*=>)/g },
        { type: 'comment', regex: /(?:\/\/[^\n]*|\/\*[\s\S]*?\*\/)/g },
        { type: 'string', regex: /(?:"[^"]*"|'[^']*'|`[^`]*`)/g },
        { type: 'number', regex: /\b(?:0[xX][0-9a-fA-F]+|\d*\.\d+|\d+)\b/g },
        { type: 'type', regex: /(?::\s*)([A-Z][a-zA-Z]*|string|number|boolean|any|void|never|unknown|undefined)\b/g },
        { type: 'decorator', regex: /@[a-zA-Z_$][\w$]*/g },
        { type: 'operator', regex: /[+\-*/%=<>!&|^~?:]+/g }
    ],
    detect: {
        patterns: [
            /:\s*[A-Z][a-zA-Z]*|\b(?:string|number|boolean|any)\b/,
            /\binterface\s+\w+/,
            /\btype\s+\w+/,
            /@[a-zA-Z]\w*\s*/,
            /\b(?:public|private|protected)\s+\w+\s*:/
        ],
        minMatches: 2
    }
};