import {mergeArrays} from "./1";

test('merge array correct', ()=> {
    expect(mergeArrays([1,6,7,8,3,9,11], [1,2,3,4,5,10,12])).toBe([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
})