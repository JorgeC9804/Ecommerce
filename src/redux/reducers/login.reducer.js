const initalState = { admin: false, user: false, token: "" };

export const loginReducer = (state = initalState, action) => {
  switch (action.type) {
    case "ADMIN":
      return { admin: action.payload.admin };
    case "USER":
      return { user: action.payload.user };
    case "TOKEN":
      return { token: action.payload.token };
    default:
      return state;
  }
};
