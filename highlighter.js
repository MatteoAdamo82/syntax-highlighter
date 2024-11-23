class SyntaxHighlighter {
    constructor() {
        this.languagePatterns = {
            javascript: {
                keywords: ['const', 'let', 'var', 'function', 'return', 'if', 'else', 'for', 'while', 'class', 'extends', 'new', 'try', 'catch', 'finally', 'break', 'continue', 'console'],
                patterns: [
                    { type: 'comment', regex: /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)/g },
                    { type: 'template', regex: /(`[^`]*`)/g },
                    { type: 'string', regex: /(["'])((?:\\\1|(?!\1)[^\\])*)\1/g },
                    { type: 'number', regex: /\b\d+(\.\d+)?\b/g },
                    { type: 'function', regex: /\b([a-zA-Z_$][\w$]*)\s*(?=\()/g },
                    { type: 'operator', regex: /([+\-*/%=<>!&|^~?:]+)/g }
                ]
            },
            python: {
                keywords: ['def', 'class', 'return', 'if', 'else', 'for', 'while', 'try', 'except', 'import', 'from', 'as', 'pass', 'None', 'True', 'False'],
                patterns: [
                    { type: 'comment', regex: /#[^\n]*/g },
                    { type: 'string', regex: /("""[\s\S]*?"""|'''[\s\S]*?'''|"[^"]*"|'[^']*')/g },
                    { type: 'number', regex: /\b\d+(\.\d+)?\b/g },
                    { type: 'function', regex: /\bdef\s+([a-zA-Z_]\w*)/g },
                    { type: 'operator', regex: /([+\-*/%=<>!&|^~?:]+)/g }
                ]
            },
            html: {
                keywords: [],
                patterns: [
                    { type: 'tag', regex: /(<\/?[^\s>]+)[^>]*>/g },
                    { type: 'attribute', regex: /\s([a-zA-Z-]+)=/g },
                    { type: 'string', regex: /(["'])((?:\\\1|(?!\1)[^\\])*)\1/g },
                    { type: 'comment', regex: /<!--[\s\S]*?-->/g }
                ]
            },
            // Nuovi linguaggi aggiunti
            php: {
                keywords: ['echo', 'print', 'function', 'return', 'if', 'else', 'elseif', 'while', 'for', 'foreach', 'as', 'do', 'class', 'public', 'private', 'protected', 'namespace', 'use', 'require', 'include', 'new', 'true', 'false', 'null'],
                patterns: [
                    { type: 'comment', regex: /(\/\/[^\n]*|\/\*[\s\S]*?\*\/|#[^\n]*)/g },
                    { type: 'string', regex: /(["'])((?:\\\1|(?!\1)[^\\])*)\1/g },
                    { type: 'number', regex: /\b\d+(\.\d+)?\b/g },
                    { type: 'function', regex: /\bfunction\s+([a-zA-Z_]\w*)/g },
                    { type: 'variable', regex: /\$\w+\b/g },
                    { type: 'operator', regex: /([+\-*/%=<>!&|^~?:]+)/g }
                ]
            },
            bash: {
                keywords: ['if', 'then', 'else', 'elif', 'fi', 'case', 'esac', 'for', 'while', 'do', 'done', 'in', 'function', 'return', 'exit', 'export', 'source', 'echo'],
                patterns: [
                    { type: 'comment', regex: /#[^\n]*/g },
                    { type: 'string', regex: /(["'])((?:\\\1|(?!\1)[^\\])*)\1/g },
                    { type: 'variable', regex: /\$\w+|\$\{[^}]+\}/g },
                    { type: 'function', regex: /\bfunction\s+([a-zA-Z_]\w*)/g },
                    { type: 'operator', regex: /([+\-*/%=<>!&|^~?:]+)/g }
                ]
            },
            yaml: {
                keywords: ['true', 'false', 'null', 'yes', 'no', 'on', 'off'],
                patterns: [
                    { type: 'comment', regex: /#[^\n]*/g },
                    { type: 'string', regex: /(["'])((?:\\\1|(?!\1)[^\\])*)\1/g },
                    { type: 'key', regex: /^[^:]+(?=:)/gm },
                    { type: 'number', regex: /\b\d+(\.\d+)?\b/g }
                ]
            },
            toml: {
                keywords: ['true', 'false'],
                patterns: [
                    { type: 'comment', regex: /#[^\n]*/g },
                    { type: 'section', regex: /\[([^\]]+)\]/g },
                    { type: 'string', regex: /(["'])((?:\\\1|(?!\1)[^\\])*)\1/g },
                    { type: 'key', regex: /^[^=]+(?==)/gm },
                    { type: 'number', regex: /\b\d+(\.\d+)?\b/g }
                ]
            },
            java: {
                keywords: ['public', 'private', 'protected', 'class', 'interface', 'extends', 'implements', 'return', 'if', 'else', 'while', 'for', 'new', 'static', 'void', 'int', 'boolean', 'String', 'true', 'false', 'null', 'package', 'import'],
                patterns: [
                    { type: 'comment', regex: /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)/g },
                    { type: 'string', regex: /(["'])((?:\\\1|(?!\1)[^\\])*)\1/g },
                    { type: 'number', regex: /\b\d+(\.\d+)?\b/g },
                    { type: 'function', regex: /\b([a-zA-Z_$][\w$]*)\s*(?=\()/g },
                    { type: 'operator', regex: /([+\-*/%=<>!&|^~?:]+)/g }
                ]
            },
            perl: {
                keywords: ['my', 'sub', 'use', 'package', 'if', 'else', 'elsif', 'for', 'foreach', 'while', 'until', 'do', 'return', 'print', 'say'],
                patterns: [
                    { type: 'comment', regex: /#[^\n]*/g },
                    { type: 'string', regex: /(["'])((?:\\\1|(?!\1)[^\\])*)\1/g },
                    { type: 'variable', regex: /[\$@%]\w+/g },
                    { type: 'function', regex: /\bsub\s+([a-zA-Z_]\w*)/g },
                    { type: 'operator', regex: /([+\-*/%=<>!&|^~?:]+)/g }
                ]
            },
            rust: {
                keywords: ['fn', 'let', 'mut', 'pub', 'use', 'mod', 'struct', 'enum', 'trait', 'impl', 'self', 'Self', 'where', 'match', 'if', 'else', 'for', 'while', 'loop', 'return', 'true', 'false'],
                patterns: [
                    { type: 'comment', regex: /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)/g },
                    { type: 'string', regex: /(["'])((?:\\\1|(?!\1)[^\\])*)\1/g },
                    { type: 'number', regex: /\b\d+(\.\d+)?\b/g },
                    { type: 'function', regex: /\bfn\s+([a-zA-Z_]\w*)/g },
                    { type: 'lifetime', regex: /'\w+/g },
                    { type: 'operator', regex: /([+\-*/%=<>!&|^~?:]+)/g }
                ]
            },
            go: {
                keywords: ['func', 'var', 'const', 'package', 'import', 'return', 'if', 'else', 'for', 'range', 'type', 'struct', 'interface', 'map', 'chan', 'go', 'defer', 'select', 'case', 'break', 'continue', 'default', 'fallthrough'],
                patterns: [
                    { type: 'comment', regex: /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)/g },
                    { type: 'string', regex: /(["'`])((?:\\\1|(?!\1)[^\\])*)\1/g },
                    { type: 'number', regex: /\b\d+(\.\d+)?\b/g },
                    { type: 'function', regex: /\bfunc\s+([a-zA-Z_]\w*)/g },
                    { type: 'operator', regex: /([+\-*/%=<>!&|^~?:]+)/g }
                ]
            }
        };

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.highlightAll());
        } else {
            this.highlightAll();
        }
    }

    detectLanguage(code) {
        // Semplice euristica per il rilevamento del linguaggio
        if (code.includes('<?php') || code.includes('->')) {
            return 'php';
        } else if (code.includes('package main') || code.includes('func main()')) {
            return 'go';
        } else if (code.includes('fn main') || code.includes('impl')) {
            return 'rust';
        } else if (code.includes('#!/bin/bash') || code.includes('#!/usr/bin/env bash')) {
            return 'bash';
        } else if (code.includes('public class') || code.includes('public static void main')) {
            return 'java';
        } else if (code.includes('use strict') || code.includes('my $')) {
            return 'perl';
        } else if (code.includes('def ') || code.includes('import ') || code.includes('#')) {
            return 'python';
        } else if (code.includes('</') || code.includes('/>') || code.match(/<[a-z]+>/)) {
            return 'html';
        }
        return 'javascript'; // Default
    }createCopyButton() {
        const button = document.createElement('button');
        button.className = 'syntax-highlighter-copy';
        button.innerHTML = 'Copia';
        return button;
    }

    createLanguageLabel(language) {
        const label = document.createElement('div');
        label.className = 'syntax-highlighter-lang';
        label.textContent = language;
        return label;
    }

    highlightAll() {
        const codeBlocks = document.querySelectorAll('pre code');
        codeBlocks.forEach(block => {
            if (!block.getAttribute('data-highlighted')) {
                // Prepara il contenitore
                const pre = block.parentElement;
                pre.style.position = 'relative';

                // Ottieni e pulisci il codice
                let code = block.textContent || block.innerText;

                // Rileva il linguaggio
                const language = block.className.includes('language-')
                    ? block.className.split('language-')[1]
                    : this.detectLanguage(code);

                // Aggiungi l'etichetta del linguaggio
                pre.appendChild(this.createLanguageLabel(language));

                // Evidenzia il codice
                block.innerHTML = this.highlight(code, language);

                // Aggiungi il pulsante di copia
                const copyButton = this.createCopyButton();
                copyButton.addEventListener('click', () => {
                    navigator.clipboard.writeText(code.trim())
                        .then(() => {
                            copyButton.innerHTML = 'Copiato!';
                            setTimeout(() => copyButton.innerHTML = 'Copia', 2000);
                        })
                        .catch(() => {
                            copyButton.innerHTML = 'Errore!';
                            setTimeout(() => copyButton.innerHTML = 'Copia', 2000);
                        });
                });
                pre.appendChild(copyButton);

                block.setAttribute('data-highlighted', 'true');
            }
        });
    }

    highlight(code, language = 'javascript') {
        const langConfig = this.languagePatterns[language] || this.languagePatterns.javascript;

        // Pulizia iniziale
        code = code.trim();

        let tokens = [];

        // Processa ogni pattern del linguaggio
        langConfig.patterns.forEach(({ type, regex }) => {
            let match;
            while ((match = regex.exec(code)) !== null) {
                tokens.push({
                    type,
                    text: match[0],
                    index: match.index,
                    length: match[0].length
                });
            }
        });

        // Processa le keywords
        if (langConfig.keywords.length > 0) {
            const keywordRegex = new RegExp(`\\b(${langConfig.keywords.join('|')})\\b`, 'g');
            let match;
            while ((match = keywordRegex.exec(code)) !== null) {
                tokens.push({
                    type: 'keyword',
                    text: match[0],
                    index: match.index,
                    length: match[0].length
                });
            }
        }

        // Ordina e rimuovi sovrapposizioni
        tokens.sort((a, b) => a.index - b.index);
        tokens = this.removeOverlappingTokens(tokens);

        // Costruisci l'output
        let result = '';
        let lastIndex = 0;

        tokens.forEach(token => {
            if (token.index > lastIndex) {
                result += code.substring(lastIndex, token.index);
            }
            result += `<span class="token ${token.type}">${token.text}</span>`;
            lastIndex = token.index + token.length;
        });

        result += this.escapeHTML(code.substring(lastIndex));
        return result;
    }

    removeOverlappingTokens(tokens) {
        return tokens.filter((token, index) => {
            for (let i = 0; i < index; i++) {
                if (token.index >= tokens[i].index &&
                    token.index < tokens[i].index + tokens[i].length) {
                    return false;
                }
            }
            return true;
        });
    }

    escapeHTML(text) {
        const htmlEntities = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, char => htmlEntities[char]);
    }
}

// Auto-inizializzazione
new SyntaxHighlighter();