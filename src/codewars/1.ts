export function mergeArrays(arr1: Array<number>, arr2: Array<number>) {
    let arr = arr1.concat(arr2).sort((a, b) => a - b);
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            result.push(arr[i]);
        }
    }
    return result;
}

export function getAge(inputString: string) {
    let age = inputString.split('')
    let ageN = []
    for (let i = 0; i < age.length; i++) {
        if (inputString[i] !== ' ') {
            ageN.push(age[i])
        }
        return Number(ageN)
    }
}

export const multiply = (x: number, y: number) => {
    const m = x * y
    return m
}

export function checkForFactor(base: number, factor: number) {
    if (base > 0 && factor > 0) {
        return Number.isInteger((base) / (factor)) ? true : false
    }
}

export function getVolumeOfCuboid(length: number, width: number, height: number) {
    const cuboid = length * width * height
    return cuboid
}


export let humanYearsCatYearsDogYears = function (humanYears: number) {
    const arr = []
    let catYears = 0
    let dogYears = 0
    if (humanYears === 1) {
        catYears = 15
        dogYears = 15
        arr.push(Number(humanYears), Number(catYears), Number(dogYears))
    }
    if (humanYears === 2) {
        catYears = 15 + ((humanYears - 1) * 9)
        dogYears = 15 + ((humanYears - 1) * 9)
        arr.push(humanYears, catYears, dogYears)
    }
    if (humanYears >= 3) {
        catYears = 24 + ((humanYears - 2) * 4)
        dogYears = 24 + ((humanYears - 2) * 5)
        arr.push(humanYears, catYears, dogYears)
    }
    return arr
}

export const squareOrSquareRoot = (arr: Array<number>) => {
    let arr2 = []
    for (let i = 0; i < arr.length; i++) {
        if (Number.isInteger(Math.sqrt(arr[i]))) {
            arr2.push(Math.sqrt(arr[i]))
        } else {
            arr2.push(arr[i] * arr[i])
        }
    }
    return arr2
}

export const expressionMatter = (a: number, b: number, c: number) => {
    let val1 = a * (b + c)
    let val2 = a * b * c
    let val3 = a + b * c
    let val4 = (a + b) * c
    let val5 = a + b + c
    return Math.max(val1, val2, val3, val4, val5)
}

export const stray = (numbers: Array<number>) => {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === numbers[i + 1] || numbers[i] === numbers[i - 1]) {
        } else {
            return numbers[i]
        }
    }
}

// export const getMostProfitFromStockQuotes = (quotes: Array<number>) => {
//     let days = 0
//     let sum = 0
//     let diference = 0
//     for (let i = 0; i < quotes.length; i++) {
//             if (quotes[i + 1]) {
//                 days += 1
//                 diference += quotes[i]
//             }
//             else if (quotes[i] > quotes[i + 1]) {
//                 console.log('Nothing to do')
//             }
//             else {
//                 sum = sum + (days * quotes[i])
//                 days = 0
//             }
//     }
//     return sum - diference
// }

export const getDivisorsCnt = (n: number) => {
    let counter = 0
    let a = n
    for (let i = n; i > 0; i--) {
        if (Number.isInteger(n / a)) {
            counter = counter + 1
        }
        a--
    }
    return counter
}

export const roundToNext5 = (n: number) => {
    while (n % 5 !== 0) n++;
    return n;
}

export const twoOldestAges = (ages: Array<number>) => {
    let max1 = 0
    let max2 = 0
    let arr = []
    ages.sort((a, b) => b - a)
    max1 = arr.push(ages[1])
    max2 = arr.push(ages[0])
    return arr
}

export const arithmetic = (a: number, b: number, operator: string) => {
    let result = 0
        switch (operator) {
            case "add": {
                result = a + b
                return result
            }
            case "subtract": {
                result = a - b
                return result
            }
            case "multiply": {
                result = a * b
                return result
            }
            case "divide": {
                result = a  / b
                return result
            }
            default: {
                console.log("Error")
            }
        }
}
