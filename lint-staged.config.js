module.exports = {
    // concurrent: false,
    linters: {
        '**/*.+(js|md|ts|css|sass|less|graphql|yml|scss|json|vue)': [
            'prettier --write',
            'git add',
        ],
    },
}