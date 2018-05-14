const fs = require('fs')

const tachyonsGenerator = require('tachyons-generator')
const config = {
  customMedia: [],
  colors: {
    black: '#000',
    white: '#fff',
  },
  skipModules: ['normalize', 'boxSizing'],
}

const generate = async () => {
  const output = await tachyonsGenerator(config).generate()

  fs.writeFileSync('tachyons-lite.css', output.css)
  fs.writeFileSync('tachyons-lite.min.css', output.min)
}

generate()
