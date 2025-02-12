/**
 * 节流
 * @param {*} fn
 * @param {*} delay
 * @returns
 */
function throttle(fn, delay=100) {
    let timeout, context, args
    let previous = 0

    let later = function () {
        previous = +new Date()
        timeout = null
        fn.apply(context, args)
    };

    let throttled = function () {
        let now = +new Date()
        //下次触发 fn 剩余的时间
        let remaining = delay - (now - previous)
        context = this
        args = arguments
        // 如果没有剩余的时间了或者你改了系统时间
        if (remaining <= 0 || remaining > delay) {
            if (timeout) {
                clearTimeout(timeout)
                timeout = null
            }
            previous = now;
            fn.apply(context, args)
        } else if (!timeout) {
            timeout = setTimeout(later, remaining)
        }
    };
    return throttled
}

export {
    throttle
}