// Write your solution in this file!
const driver = {};

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value;
  return driver;
}

function destructivelyDeleteFromDriverByKey(driver,key){
  delete driver.key;
  return driver;
}
