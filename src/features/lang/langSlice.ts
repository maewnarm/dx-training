import { createSlice,PayloadAction,createAsyncThunk } from "@reduxjs/toolkit";

import type {AppState,AppThunk} from '../../app/store'
import { testFuncAsync } from "./langAPI";

export interface LangState {
    language: 'EN'|'TH'
    status: 'idle'|'loading'|'failed'
    data: Array<any>
}

const initialState: LangState = {
    language: 'EN',
    status: 'idle',
    data: [],
}

export const testAsync = createAsyncThunk(
    'lang/testFuncAsync',
    async () => {
        const response = await testFuncAsync()
        //return becomes the `fulfilled` action payload
        return response
    }
)

export const langSlice = createSlice({
    name: 'lang',
    initialState,
    reducers: {
        changeLang: (state,action: PayloadAction<'EN'|'TH'>) => {
            state.language = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(testAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(testAsync.fulfilled, (state,action) => {
                state.status = 'idle'
                // console.log(action.payload)
                state.data = action.payload
            })
    }
})

export const {changeLang} = langSlice.actions

export const selectedLang = (state: AppState) => state.lang

export const toggleLanguage = (): AppThunk => (dispatch,getState) => {
    const currentValue = selectedLang(getState())
    if (currentValue.language === 'TH') {
        dispatch(changeLang('EN'))
    } else {
        dispatch(changeLang('TH'))
    }
}

export default langSlice.reducer