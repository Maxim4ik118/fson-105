import { useState } from "react";
import Profile from "./components/Profile/Profile";
import Section from "./components/Section/Section";

import dataFromServer from "./db/profiles.json";
import Bar from "./components/Bar/Bar";

function App() {
  const [showUserList, setShowUserList] = useState(false);
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
    console.log("click", alcoName);
    // alcoName -> "beer"
  
    setBottles({ ...bottles, [alcoName]: bottles[alcoName] + 1 });
    // setBottles((state) => ({ ...state, [alcoName]: state[alcoName] + 1 }));

    // if (alcoName === "beer") {
    //   setBottles({ ...bottles, beer: bottles["beer"] + 1 });
    //   // { beer: 2, wine: 3, whiskey: 1}; -> { beer: 2, wine: 3, whiskey: 1, beer: 2 + 1   }
    //   // -> { wine: 3, whiskey: 1, beer: 3 }
    // }
    // if (alcoName === "wine") {
    //   setBottles({ ...bottles, wine: bottles["wine"] + 1 });
    // }
    // if (alcoName === "whiskey") {
    //   setBottles({ ...bottles, whiskey: bottles["whiskey"] + 1 });
    // }
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
