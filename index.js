import renderPage from './src/html/renderPage.js'

//const { open } = require('fs/promises')

import { open } from 'fs/promises';

async function main() {
    const fd = await open('index.html', 'w')
    const html = renderPage({}, 'Testing')
    const result = await fd.write(html, 0, 'utf8')
}

main()