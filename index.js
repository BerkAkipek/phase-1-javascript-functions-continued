// code your solution here
function saturdayFun(activity='roller-skate'){
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function (activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

// I never imagined scope more then 2Dimensional. Space-time magic!

const wrapAdjective = (highLight="*") => {
    return function (compliment="special") {
        return `You are ${highLight}${compliment}${highLight}!`
    }
}

