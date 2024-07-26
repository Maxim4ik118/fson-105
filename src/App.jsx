import { useState } from "react";

import Profile from "./components/Profile/Profile";
import Section from "./components/Section/Section";
import Bar from "./components/Bar/Bar";
import Modal from "./components/Modal/Modal";

import dataFromServer from "./db/profiles.json";

function App() {
  const [showUserList, setShowUserList] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bottles, setBottles] = useState({
    beer: 2,
    wine: 3,
    whiskey: 1,
  });

  const handleClick = (userName) => {
    console.log("name: ", userName);
  };

  const toggleUserList = () => {
    setShowUserList(!showUserList);
  };

  const onBarSupplyAdd = (alcoName) => {
    setBottles({ ...bottles, [alcoName]: bottles[alcoName] + 1 });
  };

  const onOpenModal = () => {
    setIsModalOpen(true);
  };

  const onCloseModal = () => {
    setIsModalOpen(false);
  };

  const total = bottles.beer + bottles.wine + bottles.whiskey;

  return (
    <div>
      <Section title="FSON105 weekend bar">
        <Bar
          beer={bottles.beer}
          wine={bottles.wine}
          whiskey={bottles.whiskey}
          total={total}
          onBarSupplyAdd={onBarSupplyAdd}
        />
      </Section>
      <Section title="Modal">
        <button onClick={onOpenModal} type="button">
          Open Modal
        </button>
        {isModalOpen && <Modal onCloseModal={onCloseModal} />}
      </Section>
      <Section>
        <button type="button" onClick={toggleUserList}>
          Toggle User List
        </button>
        {showUserList && (
          <div>
            {dataFromServer.map((profile) => {
              return (
                <Profile
                  key={profile.email} // id
                  name={profile.name}
                  phone={profile.phone}
                  email={profile.email}
                  status={profile.status}
                  hasPhisicalAddress={profile.hasPhisicalAddress}
                  handleClick={handleClick}
                />
              );
            })}
          </div>
        )}
      </Section>
    </div>
  );
}

export default App;
