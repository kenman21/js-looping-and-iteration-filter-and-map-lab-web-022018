// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (object) {return object["revenue"] >= revenue});
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (object) {return object["revenue"] >= revenue}).map(function (object) {return object["name"]});
}

function exactMatch(drivers, match) {
  return drivers.filter(function (object) {return object[Object.keys(match)] == Object.values(match)})
}

function exactMatchToList(drivers, match) {
  return drivers.filter(function (object) {return object[Object.keys(match)] == Object.values(match)}).map(function (object) {return object["name"]});
}
