// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(x, key, value){
  const newDriver = { ...x };
  newDriver[key] = value;
  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver,key){

}
