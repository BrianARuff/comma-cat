# Comma Cat NPM Package:
Concatenate(combine) a sequence(array) of string values with a comma-and-space(the delimiter) to separate each value excluding the last value, so an array like this `["1", "2", "3"]` will end up looking like this `1, 2, 3`.

## How to require(import) this package:

`
  const commaCat = require("comma-cat.js");
`

`
  import commatCat from "comma-cat.js";
`

### Code usage:
`
  commaCat(["value-1", "value-2", "value-3"])
`

#### Notes about package:
1. commaCat is a function.
2. it accepts an array that must contain string values or else you will get a console error message telling you otherwise.
3. This package will not convert value to a string, so passing in `1` will not be converted to `"1"`. This is intentional and is meant to resemble strict type checking like typescript or a strongly typed language such as JAVA or C.


##### TODO:
 1. Add a testing framework to test code with code rather than relying purely on myself and other humans to test.