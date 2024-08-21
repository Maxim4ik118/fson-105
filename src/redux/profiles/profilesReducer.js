const INITIAL_STATE = {
  profiles: [],
  showProfilesList: true,
};

export const profilesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "profiles/add": {
      return {
        ...state,
        profiles: [...state.profiles, action.payload],
      };
    }
    case "profiles/delete": {
      return {
        ...state,
        profiles: state.profiles.filter(
          (profile) => profile.id !== action.payload
        ), // [{id: 1, name: "Alex"}] -> []
      };
    }
    case "profiles/showProfilesList": {
      return {
        ...state,
        showProfilesList: action.payload,
      };
    }

    default:
      return state;
  }
};

export const addProfile = (payload) => {
  return {
    type: "profiles/add",
    payload,
  };
};

export const deleteProfile = (profileId) => {
  return {
    type: "profiles/delete",
    payload: profileId,
  };
};

export const showProfilesList = (payload) => {
  return {
    type: "profiles/showProfilesList",
    payload,
  };
};
