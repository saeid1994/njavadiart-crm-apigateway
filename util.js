const crypto = require("crypto");

function convertNullFields(obj) {
  const convertedObj = {};

  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      if (
        obj[key].toLowerCase() === "null" ||
        obj[key].toLowerCase() == "undefined"
      ) {
        convertedObj[key] = null;
      } else {
        convertedObj[key] = obj[key];
      }
    }
  }

  return convertedObj;
}

const convertToNull = function (data) {
  if (data === "null") {
    return (data = null);
  }
};

// Function to generate encrypted ID
function generateEncryptedId(length) {
  const currentDateTime = Date.now().toString(); // Use any unique value for your ID
  const hash = crypto.createHash("sha256"); // You can choose a different algorithm if needed
  hash.update(currentDateTime);
  const fullHash = hash.digest("hex"); // Get the full hash
  return fullHash.substring(0, length); // Return the first 40 characters
}

const convertNullParams = function (params) {
  if (Array.isArray(params)) {
    // If params is an array
    return params.map((param) => (param === "null" ? null : param));
  } else if (typeof params === "object") {
    // If params is an object
    for (const key in params) {
      if (params.hasOwnProperty(key) && params[key] === "null") {
        params[key] = null;
      }
    }
    return params;
  } else {
    // If params is not an array or object, return it as is
    return params;
  }
};

// check if all of object's keys are null or not null

const checkNullInObject = function (obj) {
  // check boolean and convert to 1 and 2
  checkBooleanInObject(obj);

  const allNull = Object.values(obj).every((value) => value === null);
  if (allNull) {
    return null;
  }
  return obj;
};

const checkBooleanInObject = function (obj) {
  for (let key in obj) {
    if (obj[key] == false) {
      obj[key] = 2; // Change the value for a specific key (e.g., 'key2')
    }
    if (obj[key] == true) {
      obj[key] = 1; // Change the value for a specific key (e.g., 'key2')
    }
  }
};

module.exports = {
  checkNullInObject,
  convertNullParams,
  generateEncryptedId,
  convertToNull,
  convertNullFields,
};
