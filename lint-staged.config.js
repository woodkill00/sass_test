module.exports = {
    // concurrent: false,
    linters: {
        "*.js": ["prettier --write", 'git add'],
        "*.md": ["prettier --write", 'git add'],
        "*.ts": ["prettier --write", 'git add'],
        "*.css": ["prettier --write", 'git add'],
        "*.sass": ["prettier --write", 'git add'],
        "*.less": ["prettier --write", 'git add'],
        "*.graphql": ["prettier --write", 'git add'],
        "*.yml": ["prettier --write", 'git add'],
        "*.scss": ["prettier --write", 'git add'],
        "*.json": ["prettier --write", 'git add'],
        "*.vue": ["prettier --write", 'git add'],
    },
}