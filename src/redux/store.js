import { configureStore } from "@reduxjs/toolkit";

// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";

import { profilesReducer } from "./profiles/profilesReducer";
import { filterReducer } from "./filter/filterReducer";

// const profilesConfig = {
//   key: "profilesKey",
//   storage,
//  whitelist: ["profiles"], // blacklist: ["showProfilesList"]
// };

export const store = configureStore({
  reducer: {
    profiles: profilesReducer,
    filter: filterReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
});

// export const persistor = persistStore(store);
