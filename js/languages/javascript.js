// js/languages/javascript.js
export default {
    name: 'javascript',
    keywords: ['const', 'let', 'var', 'function', 'return', 'if', 'else', 'for', 'while', 'class', 'extends', 'new', 'try', 'catch', 'console'],
    patterns: [
        {
            type: 'function',
            regex: /\b(?:function\s+(\w+)|\b(\w+)\s*\(|console\.(\w+))/g
        },
        { type: 'comment', regex: /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)/g },
        { type: 'template', regex: /(`[^`]*`)/g },
        { type: 'string', regex: /(["'])((?:\\\1|(?!\1)[^\\])*)\1/g },
        { type: 'number', regex: /\b\d+(\.\d+)?\b/g },
        { type: 'operator', regex: /([+\-*/%=<>!&|^~?:]+)/g }
    ],
    detect: {
        patterns: [
            /\bconst\s+/,
            /\blet\s+/,
            /\bvar\s+/,
            /=>/,
            /\bfunction\s+/,
            /\breturn\s+/,
            /console\./
        ],
        minMatches: 2
    }
};