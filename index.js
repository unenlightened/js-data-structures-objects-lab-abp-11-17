// Write your solution in this file!
const driver = {};

function updatedriverWithKeyAndValue(driver, key, value){
  const newDriver = {...driver};
  newDriver[key] = value;
  return newDriver;
}

function destructivelyUpdatedriverWithKeyAndValue(driver, key, value){
  driver[key] = value;
  return driver;
}
