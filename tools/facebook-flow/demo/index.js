/* @flow */

var str : string = 'hello world'
console.log(str)

// - type matching for parameters
function add (lhs : number, rhs: number): number {
    return lhs + rhs
}

add(1, 2.2)
add(1, NaN)
// add ("string", 1)
// add(1, undefined)


// - type matching for operators
function foo (l: number, r: string): string {
    return l * r
}

foor(1, 'a')

// - arrray
function sum (data: Array<number>): number {
    let total = 0.0
    for (let i = 0; i < data.length; i++) {
        total += data[i]
    }
    return total
}
total([1, 2, 3, 'ab'])

// - dynamic
function foo2 (x) {
    return x.length
}

dyn('h') + dyn(2) // failed

// - nullable
foo2(null)