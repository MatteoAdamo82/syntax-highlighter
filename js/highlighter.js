// highlighter.js
const defaultConfig = {
    languages: ['javascript'],     // language to load
    autodetect: true,             // enable/disable autodetect
    defaultLanguage: 'javascript', // default language if autodetect is disabled
    copyButton: true,             // show/hide copy button
    languageLabel: true           // show/hide language label
};

export class SyntaxHighlighter {
    constructor(userConfig = {}) {
        this.config = { ...defaultConfig, ...userConfig };
        this.languages = new Map();
        this.loadLanguages();
    }

    async loadLanguages() {
        try {
            for (const lang of this.config.languages) {
                try {
                    const module = await import(`./languages/${lang}.js`);
                    this.languages.set(lang, module.default);
                } catch (error) {
                    console.warn(`Failed to load language '${lang}':`, error);
                }
            }
            this.initHighlighter();
        } catch (error) {
            console.error('Error loading languages:', error);
        }
    }

    detectLanguage(code, classLanguage) {
        if (classLanguage) {
            const lang = classLanguage.replace('language-', '');
            if (this.languages.has(lang)) {
                return lang;
            }
        }

        if (this.config.autodetect) {
            for (const [name, lang] of this.languages.entries()) {
                if (lang.detect) {
                    const matches = lang.detect.patterns.filter(pattern =>
                        pattern.test(code)
                    ).length;
                    if (matches >= lang.detect.minMatches) {
                        return name;
                    }
                }
            }
        }

        return this.config.defaultLanguage;
    }

    highlight(code, language) {
        const langConfig = this.languages.get(language);
        if (!langConfig) {
            return this.escapeHTML(code);
        }

        let tokens = [];

        // Prima processa i pattern
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

        // Poi processa le keywords
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

        tokens.sort((a, b) => a.index - b.index);
        tokens = this.removeOverlappingTokens(tokens);

        return this.buildOutput(code, tokens);
    }

    removeOverlappingTokens(tokens) {
        return tokens.filter((token, index) => {
            for (let i = 0; i < index; i++) {
                const prevToken = tokens[i];
                if (token.index >= prevToken.index &&
                    token.index < prevToken.index + prevToken.length) {
                    // Se il token corrente è una funzione, ha la precedenza
                    if (token.type === 'function' && prevToken.type !== 'function') {
                        tokens[i] = token;
                        return false;
                    }
                    return false;
                }
            }
            return true;
        });
    }

    buildOutput(code, tokens) {
        let result = '';
        let lastIndex = 0;

        tokens.forEach(token => {
            if (token.index > lastIndex) {
                result += this.escapeHTML(code.substring(lastIndex, token.index));
            }
            result += `<span class="token ${token.type}">${this.escapeHTML(token.text)}</span>`;
            lastIndex = token.index + token.length;
        });

        result += this.escapeHTML(code.substring(lastIndex));
        return result;
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

    initHighlighter() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.highlightAll());
        } else {
            this.highlightAll();
        }
    }

    highlightAll() {
        const codeBlocks = document.querySelectorAll('pre code');
        codeBlocks.forEach(block => {
            if (!block.getAttribute('data-highlighted')) {
                const pre = block.parentElement;
                pre.style.position = 'relative';

                const code = block.textContent || block.innerText;
                const classLanguage = [...block.classList].find(cls => cls.startsWith('language-'));
                const language = this.detectLanguage(code, classLanguage);

                if (this.config.languageLabel) {
                    pre.appendChild(this.createLanguageLabel(language));
                }

                block.innerHTML = this.highlight(code.trim(), language);

                if (this.config.copyButton) {
                    pre.appendChild(this.createCopyButton(code.trim()));
                }

                block.setAttribute('data-highlighted', 'true');
            }
        });
    }

    createCopyButton(code) {
        const button = document.createElement('button');
        button.className = 'syntax-highlighter-copy';
        button.innerHTML = 'Copy';
        button.addEventListener('click', () => {
            navigator.clipboard.writeText(code)
                .then(() => {
                    button.innerHTML = 'Copied!';
                    setTimeout(() => button.innerHTML = 'Copy', 2000);
                })
                .catch(() => {
                    button.innerHTML = 'Error!';
                    setTimeout(() => button.innerHTML = 'Copy', 2000);
                });
        });
        return button;
    }

    createLanguageLabel(language) {
        const label = document.createElement('div');
        label.className = 'syntax-highlighter-lang';
        label.textContent = language;
        return label;
    }
}