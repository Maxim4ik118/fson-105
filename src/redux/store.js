import { configureStore } from "@reduxjs/toolkit";
import { profilesReducer } from "./profiles/profilesReducer";


export const store = configureStore({
    reducer: {
        profiles: profilesReducer
    },
});

// state = {
//  profiles: {
//         profiles: [],
//         showProfilesList: true,
//  }
//}