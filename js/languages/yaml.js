export default {
    name: 'yaml',
    keywords: ['true', 'false', 'null', 'yes', 'no', 'on', 'off'],
    patterns: [
        { type: 'comment', regex: /#[^\n]*/g },
        { type: 'key', regex: /^[ \t]*[^:#{}\n]+?(?=\s*:)/gm },
        { type: 'string', regex: /(?:"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/g },
        { type: 'number', regex: /\b[-+]?(?:\d*\.)?\d+(?:e[-+]?\d+)?\b/gi },
        { type: 'anchor', regex: /[&*][^\s\[\]{},:]+/g },
        { type: 'tag', regex: /!(?:\w+|\<[^>]+\>)/g },
        { type: 'directive', regex: /^%.+$/m },
        { type: 'operator', regex: /[-:>|]+/g }
    ],
    detect: {
        patterns: [
            /^---(?:\s|$)/m,
            /^\s*[\w-]+\s*:/m,
            /^\s*-\s+/m,
            /^[&*][^\s\[\]{},:]+/m,
            /^![\w<>]+/m
        ],
        minMatches: 2
    }
};