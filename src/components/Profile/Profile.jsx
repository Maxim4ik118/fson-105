import clsx from "clsx";
import { RiRadioButtonLine } from "react-icons/ri";
import { CiWifiOff } from "react-icons/ci";

import iconReact from "../../assets/react.svg";

import css from "./Profile.module.css";

const Profile = ({
  id,
  name,
  phone,
  email,
  status = "offline",
  hasPhisicalAddress,
  onDeleteProfile,
  onOpenModal,
}) => {

  return (
    <div
      className={clsx(
        css.profile,
        hasPhisicalAddress && css.hasPhisicalAddress
      )}
    >
      <button onClick={() => onDeleteProfile(id)} type="button" className={css.deleteBtn}>❌</button>
      <img src={iconReact} alt="" />
      <h2 className={css.title}>
        Name: {name} {hasPhisicalAddress ? "🏡" : ""}
      </h2>
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
    </div>
  );
};

export default Profile;
