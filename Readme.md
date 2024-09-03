# Mar util helper

A lightweight library of essential utility functions for everyday tasks. This library is designed to be simple, efficient, and easy to use, providing commonly needed functionalities such as deep cloning objects, debouncing and throttling functions, determining value types, and formatting currencies.

## Installation

To install the Mar util helper, use npm:

```bash
npm install mar-util-helper
```

## Features

    Easy usage 
    Lightweight
    Provides commonly needed utility functions
    
## QuickStart
#### deepClone(obj)

    Performs a deep clone of an object or array, creating a new instance with the same properties and values.

Parameters:

    obj (Object|Array) - The object or array to clone.

Returns: 

```(Object|Array) - A deep clone of the input object or array.```

Example:
```js
javascript

const { deepClone } = require('mar-util-helper');

const originalObj = { a: 1, b: { c: 2 } };
const clonedObj = deepClone(originalObj);

console.log('Original Object:', originalObj); // Output: { a: 1, b: { c: 2 } }
console.log('Cloned Object:', clonedObj);    // Output: { a: 1, b: { c: 2 } }
console.log('Are they equal?', originalObj === clonedObj); // Output: false
```
#### debounce(func, wait)

    Creates a debounced version of a function that delays its execution until after the specified wait time has elapsed since the last time it was invoked.

Parameters:

        func (Function) - The function to debounce.
        wait (Number) - The number of milliseconds to delay.

Returns: 

```(Function) - A debounced version of the original function.```

Example:
```js
javascript

const { debounce } = require('mar-util-helper');

const logMessage = () => console.log('Debounced!');
const debouncedLog = debounce(logMessage, 1000);

// Simulate rapid calls to debouncedLog
debouncedLog(); // Will log 'Debounced!' only once if called within 1000ms intervals
debouncedLog();
debouncedLog();
```
#### throttle(func, limit)

    Creates a throttled version of a function that can only be called once per specified time interval.

Parameters:

        func (Function) - The function to throttle.
        limit (Number) - The number of milliseconds to limit function calls.

Returns: 

```(Function) - A throttled version of the original function.```

Example:
```js
javascript

const { throttle } = require('mar-util-helper');

const throttleMessage = () => console.log('Throttled!');
const throttledLog = throttle(throttleMessage, 2000);

// Simulate rapid calls to throttledLog
throttledLog(); // Will log 'Throttled!' immediately
throttledLog(); // Will ignore this call if within 2000ms from the last call
```
#### getType(value)

    Determines the type of a given value, returning a string that represents its type.

Parameters:

        value (Any) - The value to check.

Returns: 

```(String) - The type of the value ('array', 'object', 'null', etc.).```

Example:
```js
javascript

const { getType } = require('mar-util-helper');

console.log(getType([]));      // Output: 'array'
console.log(getType({}));      // Output: 'object'
console.log(getType(null));    // Output: 'null'
console.log(getType(42));      // Output: 'number'
console.log(getType('hello')); // Output: 'string'
```
#### formatCurrency(amount, currency = 'USD', locale = 'en-US')

Formats a number as a currency string according to a specified currency code and locale.

Parameters:

        amount (Number) - The amount to format.
        currency (String) - The currency code (default: 'USD').
        locale (String) - The locale for formatting (default: 'en-US').
        
  Returns:
  
     (String) - The formatted currency string.

Example:
```js
javascript

const { formatCurrency } = require('mar-util-helper');

console.log(formatCurrency(1234.56)); // Output: '$1,234.56' (in 'en-US' locale)
console.log(formatCurrency(1234.56, 'EUR', 'de-DE')); // Output: '1.234,56 €' (in 'de-DE' locale)
```
## People
The original author of the package is **Sriram** 
## Contributing
We welcome contributions! Feel free to submit issues or pull requests.

## License
This project is licensed under the MIT License.



