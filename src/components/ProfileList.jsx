import Profile from "./Profile/Profile";

const ProfileList = ({ list }) => {
  return list.map((profile) => {
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
  });
};

export default ProfileList;
