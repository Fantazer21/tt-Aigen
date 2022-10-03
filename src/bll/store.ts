import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {documentsReducer} from "./documentsReducer";



const rootReducer = combineReducers({
    documents: documentsReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducer>
