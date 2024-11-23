export default {
    name: 'perl',
    keywords: [
        'my', 'local', 'our', 'sub', 'use', 'require', 'package', 'if', 'else',
        'elsif', 'unless', 'while', 'until', 'for', 'foreach', 'next', 'last',
        'redo', 'goto', 'return', 'die', 'exit', 'warn', 'print', 'say', 'true',
        'false', 'undef', 'defined', 'bless', 'ref', 'new'
    ],
    patterns: [
        { type: 'function', regex: /\b(?:sub\s+([a-zA-Z_]\w*)|([a-zA-Z_]\w*)\s*\()/g },
        { type: 'comment', regex: /#[^\n]*/g },
        { type: 'string', regex: /(?:"[^"]*"|'[^']*'|`[^`]*`)/g },
        { type: 'regex', regex: /(?:m|q[qrwx]?|s|tr|y)(?:\s*[^\w\s{(\[<])(?:[^\\]|\\[\s\S])*?\2(?:\s*[msixpodualngcer]*)/g },
        { type: 'variable', regex: /[\$@%]\w+/g },
        { type: 'pod', regex: /^=\w+[\s\S]*?^=cut/gm },
        { type: 'operator', regex: /[-+*\/=%]|!=|==|<=?|>=?|=~|!~|&&|\|\||\.{2,3}|\?:?|\b(?:and|or|not|eq|ne|lt|gt|le|ge)\b/g }
    ],
    detect: {
        patterns: [
            /\buse\s+strict/,
            /\bmy\s+[\$@%]\w+/,
            /\bpackage\s+\w+/,
            /\bsub\s+\w+/,
            /[\$@%]\w+/
        ],
        minMatches: 2
    }
};