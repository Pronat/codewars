
export function mergeArrays(arr1: Array<number> , arr2: Array<number>) {
    let uniqArr = Array.from(new Set(arr1.concat(arr2).sort((a, b) => a - b )))
    return uniqArr

}