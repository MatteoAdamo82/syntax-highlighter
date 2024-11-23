export default {
    name: 'toml',
    keywords: ['true', 'false', 'inf', 'nan'],
    patterns: [
        { type: 'comment', regex: /#[^\n]*/g },
        { type: 'section', regex: /^\s*\[([^\]]+)\]/gm },
        { type: 'key', regex: /^[^=\s][^=]*?(?=\s*=)/gm },
        { type: 'string', regex: /"""[\s\S]*?"""|'''[\s\S]*?'''|"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'/g },
        { type: 'datetime', regex: /\d{4}-\d{2}-\d{2}(?:[T\s]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:?\d{2})?)?/g },
        { type: 'number', regex: /[+-]?(?:\d+\.?\d*|\.?\d+)(?:[eE][+-]?\d+)?/g },
        { type: 'array', regex: /\[.*?\]/g },
        { type: 'operator', regex: /[=\[\].,]/g }
    ],
    detect: {
        patterns: [
            /^\s*\[[^\]]+\]/m,
            /^\s*[a-zA-Z_-]+\s*=/m,
            /^\s*#/m,
            /"""[\s\S]*?"""/,
            /\d{4}-\d{2}-\d{2}/
        ],
        minMatches: 2
    }
};