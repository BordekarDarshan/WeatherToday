export const getResultByCityReducer = (state = {}, action) => {
  switch (action.type) {
    case "Data_Weather":
      return action.payload;

    default:
      return state;
  }
};
