import {CONTAINER_ID} from './constant.js'
import {resize} from './iframe.js'
import {throttle} from './throttle.js'

const CONTAINER_ELEMENT = document.getElementById(CONTAINER_ID)

function initContainer() {
    function styleReset() {
        CONTAINER_ELEMENT.style.margin = `${0}px`
        CONTAINER_ELEMENT.style.padding = `${0}px`
    }

    function resizeWatch() {
        let fn = throttle((entries, observer) => {
            for (let entry of entries) {
                resize(window.frameElement, entry.contentRect.height)
            }
        })
        let resizeObserver = new ResizeObserver(fn)
        resizeObserver.observe(CONTAINER_ELEMENT)
    }

    styleReset()
    resizeWatch()
}

;(function main() {
    console.log('preload js completed')
    initContainer()
    console.log('start to preload js ...')
})()
