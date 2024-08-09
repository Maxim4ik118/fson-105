import { useMemo, useState } from "react";
import { nanoid } from "nanoid";

import Profile from "./components/Profile/Profile";

import Section from "./components/Section/Section";
import AddProfileForm from "./components/AddProfileForm/AddProfileForm";

import dataFromServer from "./db/profiles.json";
import Modal from "./components/Modal/Modal";

function App() {
  const [showUserList, setShowUserList] = useState(true);
  const [users, setUsers] = useState(dataFromServer);
  const [filterValue, setFilterValue] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [serverDataForModal, setServerDataForModal] = useState(null);

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
    const finalProfile = {
      ...profile,
      id: nanoid(),
    };

    setUsers([finalProfile, ...users]);
  };

  const onDeleteProfile = (profileId) => {
    setUsers(users.filter((item) => item.id !== profileId));
  };

  const handleFilter = (event) => {
    const value = event.target.value;

    setFilterValue(value);
  };

  const toggleUserList = () => {
    setShowUserList(!showUserList);
  };

  const filteredProfiles = useMemo(
    () =>
      users.filter((profile) => {
        return profile.name.toLowerCase().includes(filterValue.toLowerCase());
      }),
    [users, filterValue]
  );

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
                status={profile.status}
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
}

export default App;
