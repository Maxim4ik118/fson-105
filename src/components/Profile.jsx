const Profile = ({
  name,
  phone,
  email,
  status = "offline",
  hasPhisicalAddress
}) => {
  return (
    <div className="profile">
      {/* <h2>Name: {name} {hasPhisicalAddress && "🏡"}</h2> */}
      <h2>Name: {name} {hasPhisicalAddress ? "🏡" : ""}</h2>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
      <p>Status: {status === "online" ? "🔛" : "📴"} </p>
    </div>
  );
};

export default Profile;
