const _ = require('lodash')
const visit = require('async-unist-util-visit')

const ENDPOINT = 'https://embed.music.apple.com/'

const pluginFunction = async ({markdownAST}, options) => {
  const res = await visit(markdownAST, 'inlineCode', async node => {
    if (!node.value.startsWith('itunes:')) return

    const baseUrl = node.value.substring(7)

    const embedUrl = baseUrl.replace('https://itunes.apple.com/', ENDPOINT)

    let height = 450

    if (!_.isEmpty(baseUrl.split('i=')[1])) height = 150

    node.type = 'html'
    node.value = `<iframe src="${embedUrl}" style="border: 0; width: 100%; height: ${height};" allowtransparency="true" allow="encrypted-media"></iframe>`

    return markdownAST
  })

  return res
}

module.exports = pluginFunction
