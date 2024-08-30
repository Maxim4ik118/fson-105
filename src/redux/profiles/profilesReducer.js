import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const apiGetAllProfiles = createAsyncThunk(
  "profiles/getAll",
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get(
        "https://66cf5aa8901aab248421e5f8.mockapi.io/api/v1/profile"
      );

      return data; // те, що повертається з санки потрапляє в action.payload в статусі fullfilled
    } catch (error) {
      return thunkApi.rejectWithValue(error.message); // те, що повертається з санки потрапляє в action.payload в статусі rejected
    }
  }
);

export const apiDeleteProfile = createAsyncThunk(
  "profiles/delete",
  async (profileId, thunkApi) => {
    try {
      const { data } = await axios.delete(
        `https://66cf5aa8901aab248421e5f8.mockapi.io/api/v1/profile/${profileId}`
      );

      return data; // те, що повертається з санки потрапляє в action.payload в статусі fullfilled
    } catch (error) {
      return thunkApi.rejectWithValue(error.message); // те, що повертається з санки потрапляє в action.payload в статусі rejected
    }
  }
);

export const apiAddProfile = createAsyncThunk(
  "profiles/add",
  async (profile, thunkApi) => {
    try {
      const { data } = await axios.post(
        `https://66cf5aa8901aab248421e5f8.mockapi.io/api/v1/profile`,
        profile
      );

      return data; // те, що повертається з санки потрапляє в action.payload в статусі fullfilled
    } catch (error) {
      return thunkApi.rejectWithValue(error.message); // те, що повертається з санки потрапляє в action.payload в статусі rejected
    }
  }
);

const INITIAL_STATE = {
  profiles: [],
  isLoading: false,
  error: null,
  showProfilesList: true,
};

const profileSlice = createSlice({
  name: "profiles",
  initialState: INITIAL_STATE,
  reducers: {
    addProfile: (state, action) => {
      state.profiles.push(action.payload);
    },
    showProfilesList: (state, action) => {
      state.showProfilesList = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(apiGetAllProfiles.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(apiGetAllProfiles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.profiles = action.payload;
      })
      .addCase(apiGetAllProfiles.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(apiDeleteProfile.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(apiDeleteProfile.fulfilled, (state, action) => {
        // data -> action.payload
        state.isLoading = false;
        state.profiles = state.profiles.filter(
          (profile) => profile.id !== action.payload.id
        );
      })
      .addCase(apiDeleteProfile.rejected, (state, action) => {
        // error.message -> action.payload
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(apiAddProfile.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(apiAddProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.profiles.push(action.payload);
      })
      .addCase(apiAddProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const profilesReducer = profileSlice.reducer;
export const { addProfile, showProfilesList } = profileSlice.actions;

// export const profilesReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case "profiles/add": {
//       return {
//         ...state,
//         profiles: [...state.profiles, action.payload],
//       };
//     }
//     case "profiles/delete": {
//       return {
//         ...state,
//         profiles: state.profiles.filter(
//           (profile) => profile.id !== action.payload
//         ), // [{id: 1, name: "Alex"}] -> []
//       };
//     }
//     case "profiles/showProfilesList": {
//       return {
//         ...state,
//         showProfilesList: action.payload,
//       };
//     }

//     default:
//       return state;
//   }
// };

// export const addProfile = (payload) => {
//   return {
//     type: "profiles/add",
//     payload,
//   };
// };

// export const deleteProfile = (profileId) => {
//   return {
//     type: "profiles/delete",
//     payload: profileId,
//   };
// };

// export const showProfilesList = (payload) => {
//   return {
//     type: "profiles/showProfilesList",
//     payload,
//   };
// };
