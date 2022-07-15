import {checkForFactor, getAge, getVolumeOfCuboid, mergeArrays, multiply} from "./1";

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

test()