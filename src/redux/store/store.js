import { createStore, combineReducers } from "redux";

// reducers
import { user } from "../reducers/user.reducer";
import { loginReducer } from "../reducers/login.reducer";

// extensions
import { composeWithDevTools } from "redux-devtools-extension";
/**
 * store sera nuestra caja, que contiene otras cajas con informacion
 * estas cajas son reducers
 *
 * -- redux solo recibe un reducer de el store, asi que necesitamos una funcion para
 * tener mas reducers y combinarlos
 *
 * -- reducers recibira un objeto que contendra todos aquellos reducers creados
 */

const reducers = combineReducers({
  users: user,
  login: loginReducer,
});

export const store = createStore(reducers, composeWithDevTools());
