/**
 * 调整iframe高度，实现自适应高度（随内容扩充高度）
 * @param {*} frameElement 
 * @param {*} height 
 */
function resize(frameElement, height) {
    frameElement.height = height
}

export {
    resize
}