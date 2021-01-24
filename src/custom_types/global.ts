//防抖
export const debounce = (fn:Function,time:number):Function => {
    let timer:number | undefined
    return function (...args:any) {
        if(timer)
            clearTimeout(timer)
        timer = window.setTimeout(()=>fn(...args), time);
    }
}