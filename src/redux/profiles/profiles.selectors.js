import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "../filter/filter.selectors";

export const selectProfiles = (state) => state.profiles.profiles;
export const selectShowUserList = (state) => state.profiles.showProfilesList;

export const selectFilteredProfiles = createSelector(
  [selectProfiles, selectFilter],
  (profiles, filterValue) =>
    profiles.filter((profile) => {
      return profile.name.toLowerCase().includes(filterValue.toLowerCase());
    })
);
