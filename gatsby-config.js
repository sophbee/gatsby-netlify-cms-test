module.exports = {
    plugins: [`gatsby-plugin-netlify-cms`],
}

plugins: [
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            path: `${__dirname}/path/to/markdown/files`,
            name: "markdown-pages",
        },
    },
    `gatsby-transformer-remark`,
]