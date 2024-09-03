// Import the utility functions from the Tiny Utility Library
const {
    deepClone,
    debounce,
    throttle,
    getType,
    formatCurrency
  } = require('./index'); // Adjust the path if the library file is located elsewhere
  
  // 1. deepClone Example
  const originalObj = { a: 1, b: { c: 2 } };
  const clonedObj = deepClone(originalObj);
  console.log('Original Object:', originalObj); // Output: { a: 1, b: { c: 2 } }
  console.log('Cloned Object:', clonedObj);    // Output: { a: 1, b: { c: 2 } }
  console.log('Are they equal?', originalObj === clonedObj); // Output: false
  
  // 2. debounce Example
  const logMessage = () => console.log('Debounced!');
  const debouncedLog = debounce(logMessage, 1000);
  
  // Simulate rapid calls to debouncedLog
  debouncedLog(); // Will log 'Debounced!' only once if called within 1000ms intervals
  debouncedLog();
  debouncedLog();
  
  // 3. throttle Example
  const throttleMessage = () => console.log('Throttled!');
  const throttledLog = throttle(throttleMessage, 2000);
  
  // Simulate rapid calls to throttledLog
  throttledLog(); // Will log 'Throttled!' immediately
  throttledLog(); // Will ignore this call if within 2000ms from the last call
  
  // 4. getType Example
  console.log(getType([]));      // Output: 'array'
  console.log(getType({}));      // Output: 'object'
  console.log(getType(null));    // Output: 'null'
  console.log(getType(42));      // Output: 'number'
  console.log(getType('hello')); // Output: 'string'
  
  // 5. formatCurrency Example
  console.log(formatCurrency(1234.56)); // Output: '$1,234.56' (in 'en-US' locale)
  console.log(formatCurrency(1234.56, 'EUR', 'de-DE')); // Output: '1.234,56 €' (in 'de-DE' locale)
  