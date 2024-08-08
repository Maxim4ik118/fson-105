import { useState } from "react";
import { nanoid } from "nanoid";

import Profile from "./components/Profile/Profile";

import Section from "./components/Section/Section";
import AddProfileForm from "./components/AddProfileForm/AddProfileForm";

import dataFromServer from "./db/profiles.json";

function App() {
  const [showUserList, setShowUserList] = useState(true);
  const [users, setUsers] = useState(dataFromServer);
  const [filterValue, setFilterValue] = useState("");

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

  const filteredProfiles = users.filter((profile) =>
    profile.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <div>
      <Section>
        <AddProfileForm onAddProfile={onAddProfile} />
      </Section>

      <button type="button" onClick={toggleUserList}>
        Toggle User List
      </button>

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
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;
