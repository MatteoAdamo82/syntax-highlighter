# Syntax Highlighter

A lightweight, modular syntax highlighter for web applications. Supports multiple programming languages and is easily extensible.

## Features

- 🎨 Syntax highlighting for multiple languages
- 🔌 Modular architecture for easy language additions
- 🔍 Automatic language detection
- 📋 Code copy functionality
- 🏷 Language label display
- 🎯 Zero dependencies
- 📱 Responsive design
- 🌈 VS Code-inspired theme

### Supported Languages

- JavaScript
- TypeScript
- Python
- PHP
- Java
- Go
- Bash
- Perl
- Ruby
- YAML
- TOML

## Installation

1. Clone the repository:
```bash
git clone https://github.com/MatteoAdamo82/syntax-highlighter.git
cd syntax-highlighter
```

2. Install development dependencies and start the development server:
```bash
npm install
npm run dev
```

3. Open `http://localhost:8080` in your browser

Note: Due to ES modules usage, a local server is required. You can't run the highlighter by opening the HTML file directly in a browser.

## Usage

### 1. Include Required Files

```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="css/highlighter.css">
</head>
<body>
    <!-- Your code blocks here -->
    <script type="module">
        import { SyntaxHighlighter } from './js/highlighter.js';
        new SyntaxHighlighter();
    </script>
</body>
</html>
```

### 2. Add Code Blocks

```html
<pre>
<code class="language-javascript">
const greeting = "Hello, World!";
console.log(greeting);
</code>
</pre>
```

### 3. Configuration Options

```javascript
const highlighter = new SyntaxHighlighter({
    languages: ['javascript', 'python'], // languages to load
    autodetect: true,                   // enable/disable autodetect
    defaultLanguage: 'javascript',       // default if autodetect fails
    copyButton: true,                   // show/hide copy button
    languageLabel: true                 // show/hide language label
});
```

## Development Setup

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open `http://localhost:8080` in your browser

## Project Structure

```
project/
├── css/
│   └── highlighter.css
├── js/
│   ├── highlighter.js
│   └── languages/
│       ├── bash.js
│       ├── go.js
│       ├── java.js
│       ├── javascript.js
│       ├── perl.js
│       ├── php.js
│       ├── python.js
│       ├── ruby.js
│       └── toml.js
│       ├── typescript.js
│       ├── yaml.js
├── index.html
├── package.json
└── README.md
```

## Adding New Languages

1. Create a new file in `js/languages/` following this template:

```javascript
export default {
    name: 'languageName',
    keywords: [
        // language keywords
    ],
    patterns: [
        // regex patterns for syntax
    ],
    detect: {
        patterns: [
            // patterns for language detection
        ],
        minMatches: 2
    }
};
```

2. Add the language to the configuration:

```javascript
new SyntaxHighlighter({
    languages: ['existing-languages', 'your-new-language']
});
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/my-new-feature`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details

## Acknowledgments

- VS Code theme colors
- Modern JavaScript features
- Community feedback and contributions

## Known Issues

- Some complex regex patterns might need optimization for large code blocks
- Language detection might need fine-tuning for certain edge cases

## Contacts
[click here](https://www.mautoblog.com/contatti)