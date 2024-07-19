import Profile from "./components/Profile/Profile";
import Section from "./components/Section/Section";

import css from "./components/Profile/Profile.module.css";

import dataFromServer from './db/profiles.json'

function App() {
  return (
    <div>
      <p className={css.fieldRow}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum suscipit
        sint sed ullam quod, pariatur unde vero quia commodi minima.
      </p>

      <Section title="Profile list">
        <Profile
          name="Max"
          phone="123456789"
          email="0i5k0@example.com"
          status="online"
          hasPhisicalAddress={false}
        />
        <Profile
          name="Max"
          phone="123456789"
          email="0i5k0@example.com"
          status="online"
          hasPhisicalAddress={false}
        />
        <Profile
          name="Max"
          phone="123456789"
          email="0i5k0@example.com"
          status="online"
          hasPhisicalAddress={false}
        />
      </Section>

      <Section>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
          atque unde omnis officia debitis. Eaque impedit quis, quos nobis
          officia, debitis ab beatae a, consequatur voluptate animi quia illum
          alias. Reiciendis, sed nesciunt voluptatem officiis obcaecati deserunt
          nobis velit voluptas numquam reprehenderit! Impedit quo labore, esse
          doloremque odio suscipit delectus.
        </p>
        <button>Lorem, ipsum.</button>
      </Section>

      <Section>
        {dataFromServer.map((profile) => {
          return (
            <Profile
              key={profile.email} // id
              name={profile.name}
              phone={profile.phone}
              email={profile.email}
              status={profile.status}
              hasPhisicalAddress={profile.hasPhisicalAddress}
            />
          );
        })}
      </Section>

      {/* <Profile
        name="Max"
        phone="123456789"
        email="0i5k0@example.com"
        status="online"
        hasPhisicalAddress={false}
      /> */}
    </div>
  );
}

export default App;
