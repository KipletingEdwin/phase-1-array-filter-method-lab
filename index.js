// Code your solution here
//declare a function that return all drivers

function findMatching(drivers, name) {
    const driversArr = drivers.filter(
        (match) => match.toLowerCase() === name.toLowerCase());
    return driversArr;
}

function fuzzyMatch(drivers, name) {
    const driversArr = drivers.filter(
        (match) => match.toLowerCase().indexOf(name.toLowerCase()) === 0
    )
    return driversArr;
}

function matchName(driver, name) {
    const driverArr = driver.filter(
        (match) => match.name === name
    )
    return driverArr;

}