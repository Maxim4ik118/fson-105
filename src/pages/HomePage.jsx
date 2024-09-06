import { useEffect, useState } from "react";

import Section from "../components/Section/Section";

import AddProfileForm from "../components/AddProfileForm/AddProfileForm";
import Profile from "../components/Profile/Profile";
import Modal from "../components/Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  apiAddProfile,
  apiDeleteProfile,
  apiGetAllProfiles,
  showProfilesList,
} from "../redux/profiles/profilesReducer";
import { setFilterValue } from "../redux/filter/filterReducer";
import {
  selectFilteredProfiles,
  selectShowUserList,
} from "../redux/profiles/profiles.selectors";
import { selectFilter } from "../redux/filter/filter.selectors";

const HomePage = () => {
  const dispatch = useDispatch();
  // const users = useSelector(selectProfiles);
  const showUserList = useSelector(selectShowUserList);
  const filterValue = useSelector(selectFilter);
  const filteredProfiles = useSelector(selectFilteredProfiles);

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [serverDataForModal, setServerDataForModal] = useState(null);

  useEffect(() => {
    dispatch(apiGetAllProfiles());
  }, [dispatch]);

  const onOpenModal = (profileName) => {
    setIsOpenModal(true);
    setServerDataForModal(profileName);
  };
  const onCloseModal = () => {
    setIsOpenModal(false);
  };

  const handleClick = (userName) => {
    console.log("name: ", userName);
  };

  const onAddProfile = (profile) => {
    dispatch(apiAddProfile(profile));
  };

  const onDeleteProfile = (profileId) => {
    const thunk = apiDeleteProfile(profileId);

    dispatch(thunk);
  };

  const handleFilter = (event) => {
    const value = event.target.value;

    const action = setFilterValue(value);

    dispatch(action);
  };

  const toggleUserList = () => {
    const action = showProfilesList(!showUserList);

    dispatch(action);
  };

  // const filteredProfiles = useMemo(
  //   () =>
  //     users.filter((profile) => {
  //       return profile.name.toLowerCase().includes(filterValue.toLowerCase());
  //     }),
  //   [users, filterValue]
  // );

  return (
    <div>
      <Section>
        <AddProfileForm onAddProfile={onAddProfile} />
      </Section>

      <button type="button" onClick={toggleUserList}>
        Toggle User List
      </button>
      {/* <button type="button" onClick={onOpenModal}>
        Open Modal
      </button> */}
      {isOpenModal && (
        <Modal onCloseModal={onCloseModal} serverData={serverDataForModal} />
      )}

      <div>
        <h2>Search profile:</h2>
        <input
          type="text"
          placeholder="Enter profile name"
          value={filterValue}
          onChange={handleFilter}
        />
      </div>

      {showUserList && (
        <div>
          {filteredProfiles.map((profile) => {
            return (
              <Profile
                key={profile.id}
                id={profile.id}
                name={profile.name}
                phone={profile.phone}
                email={profile.email}
                isOnline={profile.isOnline}
                hasPhisicalAddress={profile.hasPhisicalAddress}
                onDeleteProfile={onDeleteProfile}
                handleClick={handleClick}
                onOpenModal={onOpenModal}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default HomePage;
