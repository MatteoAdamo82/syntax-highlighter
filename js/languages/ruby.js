export default {
    name: 'ruby',
    keywords: [
        'alias', 'and', 'begin', 'break', 'case', 'class', 'def', 'defined?',
        'do', 'else', 'elsif', 'end', 'ensure', 'false', 'for', 'if', 'in',
        'module', 'next', 'nil', 'not', 'or', 'redo', 'rescue', 'retry',
        'return', 'self', 'super', 'then', 'true', 'undef', 'unless', 'until',
        'when', 'while', 'yield', 'require', 'include', 'extend', 'attr_reader',
        'attr_writer', 'attr_accessor', 'private', 'protected', 'public'
    ],
    patterns: [
        { type: 'function', regex: /\b(?:def\s+([a-zA-Z_]\w*[!?]?)|([a-zA-Z_]\w*[!?]?)\s*\()/g },
        { type: 'comment', regex: /#[^\n]*/g },
        { type: 'string', regex: /(?:"[^"]*"|'[^']*'|`[^`]*`|%[qQrwWx]?(?:\{(?:[^{}\\]|\\[\s\S])*\}|\[(?:[^\[\]\\]|\\[\s\S])*\]|\((?:[^()\\]|\\[\s\S])*\)|<(?:[^<>\\]|\\[\s\S])*>))/g },
        { type: 'symbol', regex: /:[a-zA-Z_]\w*[!?]?|\b[a-zA-Z_]\w*[!?]?:/g },
        { type: 'variable', regex: /[@$]\w+/g },
        { type: 'constant', regex: /\b[A-Z][A-Z0-9_]*\b/g },
        { type: 'number', regex: /\b(?:0[xX][0-9a-fA-F]+|\d*\.\d+|\d+)\b/g },
        { type: 'operator', regex: /[-+*\/%=]=?|!=|==|<=?|>=?|<=>|&&|\|\||\.{2,3}|\?:|:[a-zA-Z_]\w*[!?]?/g }
    ],
    detect: {
        patterns: [
            /\b(?:def|class|module)\s+\w+/,
            /\bend\b/,
            /@\w+/,
            /\bdo\b|\{\s*\|.*?\|/,
            /\brequire\s+['"].*?['"]/
        ],
        minMatches: 2
    }
};