import { configureStore,ThunkAction,Action } from "@reduxjs/toolkit";
// import reduxLogger from 'redux-logger'
import langReducer from "../features/lang/langSlice"

export function makeStore() {
    return configureStore({
        reducer: {lang: langReducer},
        middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    })
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action<string>
>

export default store