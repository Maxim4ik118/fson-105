import clsx from "clsx";

import "./Profile.css";

const Profile = ({
  name,
  phone,
  email,
  status = "offline",
  hasPhisicalAddress,
<<<<<<< HEAD
=======
  handleClick,
  onDeleteProfile,
  onOpenModal,
>>>>>>> 835d173 (new: advanced react;)
}) => {
  return (
    <div
      className={clsx("profile", hasPhisicalAddress && "hasPhisicalAddress")}
    >
      <h2>
        Name: {name} {hasPhisicalAddress ? "🏡" : ""}
      </h2>
<<<<<<< HEAD
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
      <p>Status: {status === "online" ? "🔛" : "📴"} </p>
=======
      <p className={css.fieldRow}>Phone: {phone}</p>
      <p className={css.fieldRow}>Email: {email}</p>
      <p
        className={clsx(css.fieldRow, {
          [css.online]: status === "online",
          [css.offline]: status === "offline",
        })}
      >
        Status: {status === "online" ? <RiRadioButtonLine /> : <CiWifiOff />}{" "}
      </p>
      <button type="button" onClick={() => onOpenModal(name)}>
        Click to Alert
      </button>
>>>>>>> 835d173 (new: advanced react;)
    </div>
  );
};

export default Profile;

// <div className={clsx("profile", {
//   "hasPhisicalAddress": hasPhisicalAddress === true
// })}>
