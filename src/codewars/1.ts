
export function mergeArrays(arr1: Array<number> , arr2: Array<number>) {
    let uniqArr = []
    let arr = [...arr1, ...arr2].sort((a, b) => a - b)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i+1]) {
            uniqArr.push(arr[i])
        }
    }
    return uniqArr

}