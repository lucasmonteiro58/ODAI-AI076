'use strict'

const path = require('@/assets/spritesheet.png').default

// const path = null

function runBlock(context) {
  if (!context.isDev)
    window.onload = () => {
      const image = new Image()
      image.onload = isAssetReady
      image.src = path
    }
  else {
    window.onload = isAssetReady
  }
  return false
}
function isAssetReady() {
  setTimeout(() => {
    document.querySelector('.loading-screen').classList.add('not-ready')
  }, 2400)
}

// ----------------------------------------------------------

export default runBlock
