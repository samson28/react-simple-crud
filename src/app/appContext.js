import { createContext, useState } from "react";

export const AppContext = createContext();

export const useAppState=()=>{
    const initialState = {
        articles:[],
        currentPage:1,
        pageSize:4,
        keyword:'',
        totalPages:0
    };

    const appState = useState(initialState);

    return appState;
}