import {
    arithmetic,
    checkForFactor, expressionMatter,
    getAge, getDivisorsCnt,
    getVolumeOfCuboid,
    humanYearsCatYearsDogYears,
    mergeArrays,
    multiply, roundToNext5,
    squareOrSquareRoot, stray, twoOldestAges
} from "./1";

test('merge array correct', ()=> {
    expect(mergeArrays([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    expect(mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    expect(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12])).toStrictEqual([1, 2, 3, 4, 5, 7, 9, 10, 11, 12])
})

test('get Age of girl correct', ()=>{
    expect(getAge("4 years old")).toBe(4)
    expect(getAge("443 years old")).toBe(4)
    expect(getAge("400983 years old")).toBe(4)
})

test("multiply two numbers", () => {
    expect(multiply(3, 2)).toBe(6)
    expect(multiply(5, 1)).toBe(5)
    expect(multiply(0, 384)).toBe(0)
})

test('check for factor', () => {
    expect(checkForFactor(10,2)).toBe(true)
    expect(checkForFactor(10,2)).toBe(true)
    expect(checkForFactor(63,7)).toBe(true)
    expect(checkForFactor(2450,5)).toBe(true)
    expect(checkForFactor(24612,3)).toBe(true)
    expect(checkForFactor(9,2)).toBe( false)
    expect(checkForFactor(653,7)).toBe(false)
    expect(checkForFactor(2453,5)).toBe(false)
    expect(checkForFactor(24617,3)).toBe(false)
})

test('calculate volume of cuboid', () => {
    expect(getVolumeOfCuboid(1,2,2)).toBe(4);
    expect(getVolumeOfCuboid(6.3,2,5)).toBe(63);
})

test("Cat years, Dog years", () => {
    expect(humanYearsCatYearsDogYears(1)).toEqual([1,15,15])
    expect(humanYearsCatYearsDogYears(2)).toEqual([2,24,24])
    expect(humanYearsCatYearsDogYears(10)).toEqual([10,56,64])
})

test("To square(root) or not to square(root)", () => {
    expect(squareOrSquareRoot([ 4, 3, 9, 7, 2, 1 ])).toEqual([ 2, 9, 3, 49, 4, 1 ])
    expect(squareOrSquareRoot([ 1, 2, 3, 4, 5, 6])).toEqual([ 1, 4, 9, 2, 25, 36 ])
})

test("Expressions Matter", () => {
    expect(expressionMatter(2, 1, 2)).toBe(6)
    expect(expressionMatter(2, 1, 1)).toBe(4)
    expect(expressionMatter(1, 1, 1)).toBe(3)

    expect(expressionMatter(5, 1, 3)).toBe(20)
    expect(expressionMatter(3, 5, 7)).toBe(105)

    expect(expressionMatter(2, 10, 3)).toBe(60)
    expect(expressionMatter(10, 5, 6)).toBe(300)
})

test('Find the stray number', () => {
    expect(stray([1, 1, 2])).toBe(2)
    expect(stray([17, 17, 3, 17, 17, 17, 17])).toBe(3)
    expect(stray([1, 1, 25, 1, 1, 1, 1])).toBe(25)
})

// test('Most profit from stock quotes', () => {
//     expect(getMostProfitFromStockQuotes([1, 2, 3, 4, 5, 6])).toBe(15)
//     expect(getMostProfitFromStockQuotes([6, 5, 4, 3, 2, 1])).toBe(0)
//     expect(getMostProfitFromStockQuotes([1, 6, 5, 10, 8, 7])).toBe(18)
//     expect(getMostProfitFromStockQuotes([1, 2, 10, 3, 2, 7, 3, 2])).toBe(26)
// })

test('Count the number of divisors of a positive integer n', () => {
    expect(getDivisorsCnt(1)).toBe(1)
    expect(getDivisorsCnt(10)).toBe(4)
    expect(getDivisorsCnt(11)).toBe(2)
    expect(getDivisorsCnt(54)).toBe(8)
})

test('Round up to the next multiple of 5', ()=> {
    expect(roundToNext5(0)).toBe(0)
    expect(roundToNext5(2)).toBe(5)
    expect(roundToNext5(3)).toBe(5)
    expect(roundToNext5(12)).toBe(15)
    expect(roundToNext5(21)).toBe(25)
    expect(roundToNext5(30)).toBe(30)
    expect(roundToNext5(-2)).toBe(0)
    expect(roundToNext5(-5)).toBe(-5)
})

test('Two Oldest Ages', () => {
    expect(twoOldestAges([1,5,87,45,8,8])).toEqual([45,87])
    expect(twoOldestAges([1,5,87,45,8,8])).toEqual ([45, 87])
    expect(twoOldestAges([6,5,83,5,3,18])).toEqual([18, 83])
    expect(twoOldestAges([6,5,83,5,3,18])).toEqual([18, 83])
    expect(twoOldestAges([67,58,98,97,59,35,38,76,23,76,66,80,54,20,15,66,99,66,71,5,94,93,12,22,17,32,69,76,79,11])).toEqual([98,99])
})

test('Make a function that does arithmetic!', () => {
    expect(arithmetic(1, 2, "add")).toBe(3)
    expect(arithmetic(8, 2, "subtract")).toBe(6)
    expect(arithmetic(5, 2, "multiply")).toBe(10)
    expect(arithmetic(8, 2, "divide")).toBe(4)
})