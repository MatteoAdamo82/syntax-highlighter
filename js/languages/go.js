// js/languages/go.js
export default {
    name: 'go',
    keywords: [
        'func', 'package', 'import', 'var', 'const', 'type', 'struct', 'interface',
        'map', 'chan', 'go', 'defer', 'if', 'else', 'switch', 'case', 'default',
        'for', 'range', 'break', 'continue', 'return', 'select', 'make', 'new',
        'true', 'false', 'nil'
    ],
    patterns: [
        { type: 'function', regex: /\b(?:func\s+([a-zA-Z_]\w*)|([a-zA-Z_]\w*)\s*\()/g },
        { type: 'comment', regex: /(?:\/\/[^\n]*|\/\*[\s\S]*?\*\/)/g },
        { type: 'string', regex: /(?:"[^"]*"|`[^`]*`)/g },
        { type: 'number', regex: /\b(?:0[xX][0-9a-fA-F]+|\d*\.\d+|\d+)\b/g },
        { type: 'type', regex: /\b(?:string|int|int64|bool|float64|error)\b/g },
        { type: 'operator', regex: /[+\-*/%=<>!&|^~?:]+/g },
        { type: 'builtin', regex: /\b(?:append|copy|delete|len|cap|make|new|close|complex|real|imag|panic|recover)\b/g }
    ],
    detect: {
        patterns: [
            /\bpackage\s+\w+/,
            /\bfunc\s+/,
            /\bimport\s+[("]/,
            /\bgo\s+/,
            /\bdefer\s+/
        ],
        minMatches: 2
    }
};