function combine<T, U>(a: T, b: U) {
    return `${a}${b}`
}

const combinedString = combine("Hello, ", "World!")
console.log(combinedString)

const combinedNumberString = combine(123, "456")
console.log(combinedNumberString)

const combinedBooleanString = combine(true, " is a boolean")
console.log(combinedBooleanString)
