'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const styles = sourceString.split(';');

  for (const style of styles) {
    const [key, value] = style.split(':');

    if ((key, value)) {
      result[key.trim()] = value.trim();
    }
  }

  return result;
}

module.exports = convertToObject;
