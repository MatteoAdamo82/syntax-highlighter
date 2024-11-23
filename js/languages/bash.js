export default {
    name: 'bash',
    keywords: [
        'if', 'then', 'else', 'elif', 'fi', 'case', 'esac', 'for', 'select',
        'while', 'until', 'do', 'done', 'in', 'function', 'time', 'return',
        'break', 'continue', 'eval', 'exec', 'exit', 'export', 'readonly',
        'set', 'shift', 'source', 'test', 'trap', 'unset'
    ],
    patterns: [
        { type: 'function', regex: /\b(?:function\s+([a-zA-Z_]\w*)|([a-zA-Z_]\w*)\s*\(\))/g },
        { type: 'comment', regex: /#[^\n]*/g },
        { type: 'string', regex: /(?:"[^"]*"|'[^']*')/g },
        { type: 'variable', regex: /\$(?:[a-zA-Z_]\w*|\{[^}]+\})/g },
        { type: 'command', regex: /\b(?:echo|cd|pwd|ls|cp|mv|rm|mkdir|chmod|chown|grep|sed|awk|cut|sort|uniq|find|curl|wget)\b/g },
        { type: 'operator', regex: /[|&;><\[\](){}+=!`,]+/g }
    ],
    detect: {
        patterns: [
            /^#!.*(?:bash|sh)\b/m,
            /\$\{?\w+\}?/,
            /\b(?:echo|cd|pwd|ls)\b/,
            /\[\[.*\]\]/,
            /\$\(\(/
        ],
        minMatches: 2
    }
};