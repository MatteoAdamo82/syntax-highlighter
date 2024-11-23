const javascript = {
    name: 'javascript',
    keywords: ['const', 'let', 'var', 'function', 'return', 'if', 'else', 'for', 'while', 'class', 'extends', 'new', 'try', 'catch', 'finally', 'break', 'continue', 'console'],
    patterns: [
        { type: 'comment', regex: /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)/g },
        { type: 'template', regex: /(`[^`]*`)/g },
        { type: 'string', regex: /(["'])((?:\\\1|(?!\1)[^\\])*)\1/g },
        { type: 'number', regex: /\b\d+(\.\d+)?\b/g },
        { type: 'function', regex: /\b([a-zA-Z_$][\w$]*)\s*(?=\()/g },
        { type: 'operator', regex: /([+\-*/%=<>!&|^~?:]+)/g }
    ],
    detect: (code) => {
        return code.includes('const ') || code.includes('let ') || code.includes('var ') ||
               code.includes('=>') || code.includes('function');
    }
};