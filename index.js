// Code your solution here
//declare a function that return all drivers

function findMatching(driversName,details){
    return driversName.filter(function(driversName)
    {return driversName.toLowerCase()===details.toLowerCase()})

}
//declare a function that return driver if letters match

function fuzzyMatch(driversName,details){
    return driversName.filter(function(driversName)
    {return driversName.toLowerCase().substring(0,details.lenght)===details.toLowerCase()})
}

//declare another function 

function matchName(driversName,details){
    return driversName.filter(function (driversName) 
    { return driversName.name === details })
}
