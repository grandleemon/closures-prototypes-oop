function getMathModule(x) {
    const y = 9;

    return {
        sum: () => {
            return x + y
        },
        subtract: () => {
            return x - y
        },
        multiply: () => {
            return x * y
        },
        divide: () => {
            return x / y
        }
    }
}

const func = getMathModule(9)

console.log(func.sum())
console.log(func.subtract())
console.log(func.multiply())
console.log(func.divide())