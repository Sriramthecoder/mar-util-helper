// Tiny Utility Library

/**
 * Performs a deep clone of an object or array.
 * @param {Object|Array} obj - The object or array to clone.
 * @returns {Object|Array} - A deep clone of the input object or array.
 */
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
  
  /**
   * Creates a debounced version of a function that delays its execution.
   * @param {Function} func - The function to debounce.
   * @param {Number} wait - The number of milliseconds to delay.
   * @returns {Function} - A debounced version of the original function.
   */
  function debounce(func, wait) {
    let timeout;
    return function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }
  
  /**
   * Creates a throttled version of a function that can only be called once per specified time interval.
   * @param {Function} func - The function to throttle.
   * @param {Number} limit - The number of milliseconds to limit function calls.
   * @returns {Function} - A throttled version of the original function.
   */
  function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }
  
  /**
   * Determines the type of a given value.
   * @param {Any} value - The value to check.
   * @returns {String} - The type of the value ('array', 'object', 'null', etc.).
   */
  function getType(value) {
    if (Array.isArray(value)) return 'array';
    if (value === null) return 'null';
    return typeof value;
  }
  
  /**
   * Formats a number as a currency string according to a specified currency code and locale.
   * @param {Number} amount - The amount to format.
   * @param {String} [currency='USD'] - The currency code.
   * @param {String} [locale='en-US'] - The locale for formatting.
   * @returns {String} - The formatted currency string.
   */
  function formatCurrency(amount, currency = 'USD', locale = 'en-US') {
    return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount);
  }
  
  // Export the functions
  module.exports = {
    deepClone,
    debounce,
    throttle,
    getType,
    formatCurrency,
  };
  