const initialState = {
  vacations: [],
  vacationDays: 147,
  vacationType: "",
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'VACATION_LOADED':{
      return {
        ...state,
        vacations: action.payload
      }
    }
    default:
      return state;
  }
};

export default reducer;
