#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const browserify = require('browserify')
const tsify = require('tsify')
const watchify = require('watchify')

const inFile = path.join(__dirname, '../src')
const outFile = path.join(__dirname, '../public/bundle.js')

const b = browserify(Object.assign({}, watchify.args, {
  debug: true,
  entries: [inFile],
  plugin: [
    watchify,
    tsify
  ]
}))

if (process.env.ERRORS === 'browser') {
  const errorify = require('errorify')
  b.plugin(errorify)
}

function bundle () {
  b.bundle()
    .on('error', error => { console.error(error.toString()) })
    .pipe(fs.createWriteStream(outFile))
}

b.on('log', msg => {
  const relativeOutFile = path.relative(path.join(__dirname, '..'), outFile)
  const time = new Date().toLocaleTimeString()

  console.info(`${msg} to ${relativeOutFile} at ${time}`)
})
b.on('update', bundle)

bundle()
