const vacationLoaded = (newVacation)=>{
  return {
    type: 'VACATION_LOADED',
    payload: newVacation
  }
}

export {
  vacationLoaded
}
