// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(obj, key, value){
//  return Object.assign({}, obj, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver,key){
  delete.driver(key);
  return driver;
}
