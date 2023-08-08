function saturdayFun(activity='roller-skate'){
    return `This Saturday, I want to ${activity}!`
}
saturdayFun()

const mondayWork = function(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
}
mondayWork();

function wrapAdjective(Adjective = 'Special') {
    if (Adjective === '*') {
      return function(adjective) {
        return `You are *${adjective}*!`;
      }
    }
    else {
      return function(adjective) {
        return `You are ||a dedicated programmer||!`;
      }
    }
  }
