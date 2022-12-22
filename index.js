// Write your solution in this file!
const employee = {
    name: "Paul",
    address: "Country rd",
};

function updateEmployeeWithKeyAndValue(object, key, value) {
    const newObj = {...object};
    newObj[key] = value;
    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
    object[key] = value;
    return object;
}

function deleteFromEmployeeByKey(object, key, value) {
    const newObj = {...object};
    newObj[key] = value;
    delete newObj.key;
    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(object, key, value) {
    object[key] = value;
    delete object.key;
    return object;
}