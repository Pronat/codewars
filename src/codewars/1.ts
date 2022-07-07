
export function mergeArrays(arr1: Array<number> , arr2: Array<number>) {
    let arr = arr1.concat(arr2).sort((a, b) => a - b);
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            result.push(arr[i]);
        }
    }
    return result;
}

export function getAge(inputString:string) {
    let age = inputString.split('')
    let ageN = []
    for (let i = 0; i < age.length; i++) {
        if(inputString[i] !==' ') {
            ageN.push(age[i])
        }
        return Number(ageN)
    }
}