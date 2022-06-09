import { createStore, combineReducers } from "redux";

import save from "./modules/save";

const rootReducer = combineReducers({ save });

const store = createStore(rootReducer);

export default store;
