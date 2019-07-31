const isString = value => {
    if (typeof value === 'string' || value instanceof String) {
        return true;
    } else {
        console.error(new Error("Input most likely contains a NON-string value"))
    }
};

const commaCat = ([...args]) => {
    return args.reduce((accumulator, currentValue, index) => {
        if (isString(currentValue)) {
            if (index < args.length - 1) {
                return accumulator += (currentValue + ", ");
            }
            else {
                return accumulator += currentValue;
            }
        }
    }, "");
};

module.exports = commaCat;
