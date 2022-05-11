const initialState = {
  myBaby: "wendy",
};

export const counterReducer = (state = initialState, action) => {
  /*
   * la forma en como se utiliza es la misma que un reducer, incluyendo el state,
   * que recibe un objeto o quiero pensar que tambien puede recibir
   * un arreglo
   */
  switch (action.type) {
    default:
      return state;
  }
};
