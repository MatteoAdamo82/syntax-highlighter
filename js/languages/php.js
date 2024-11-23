// js/languages/php.js
export default {
    name: 'php',
    keywords: [
        'function', 'class', 'extends', 'implements', 'namespace', 'trait', 'interface',
        'public', 'private', 'protected', 'static', 'final', 'abstract', 'const',
        'if', 'else', 'elseif', 'while', 'do', 'for', 'foreach', 'as', 'return',
        'break', 'continue', 'switch', 'case', 'default', 'throw', 'try', 'catch',
        'finally', 'true', 'false', 'null', 'echo', 'print', 'include', 'require',
        'include_once', 'require_once', 'use', 'new'
    ],
    patterns: [
        { type: 'function', regex: /\b(?:function\s+([a-zA-Z_]\w*)|([a-zA-Z_]\w*)\s*\()/g },
        { type: 'comment', regex: /(?:\/\/[^\n]*|#[^\n]*|\/\*[\s\S]*?\*\/)/g },
        { type: 'string', regex: /(?:"[^"]*"|'[^']*')/g },
        { type: 'variable', regex: /\$[\w]+\b/g },
        { type: 'number', regex: /\b(?:0[xX][0-9a-fA-F]+|\d*\.\d+|\d+)\b/g },
        { type: 'operator', regex: /[+\-*/%=<>!&|^~?:\.]+/g },
        { type: 'builtin', regex: /\b(?:array|isset|unset|empty|die|exit|eval|list|compact|array_merge|count)\b/g }
    ],
    detect: {
        patterns: [
            /<\?php/,
            /\$\w+/,
            /\b(?:namespace|use)\s+[\w\\]+/,
            /\b(?:public|private|protected)\s+function/,
            /\becho\s+/,
            /\bphp_/
        ],
        minMatches: 2
    }
};