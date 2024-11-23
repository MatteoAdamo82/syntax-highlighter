export default {
    name: 'python',
    keywords: [
        'def', 'class', 'return', 'if', 'else', 'elif', 'for', 'while', 'try',
        'except', 'finally', 'raise', 'import', 'from', 'as', 'with', 'pass',
        'break', 'continue', 'in', 'is', 'not', 'and', 'or', 'None', 'True', 'False'
    ],
    patterns: [
        { type: 'function', regex: /\b(?:def\s+([a-zA-Z_]\w*)|([a-zA-Z_]\w*)\s*\()/g },
        { type: 'comment', regex: /#[^\n]*/g },
        { type: 'string', regex: /(?:"""[\s\S]*?"""|'''[\s\S]*?'''|"[^"]*"|'[^']*')/g },
        { type: 'number', regex: /\b(?:0[xX][0-9a-fA-F]+|\d*\.\d+|\d+)\b/g },
        { type: 'decorator', regex: /@[\w.]+/g },
        { type: 'operator', regex: /[+\-*/%=<>!&|^~?:]+/g },
        { type: 'builtin', regex: /\b(?:print|len|range|list|dict|set|int|str|float|bool|type)\b/g }
    ],
    detect: {
        patterns: [
            /\bdef\s+\w+\s*\(/,
            /\bclass\s+\w+:/,
            /\bimport\s+/,
            /\bfrom\s+\w+\s+import/,
            /#.*$/m,
            /:\s*$/m
        ],
        minMatches: 2
    }
};