import clsx from "clsx";
import { RiRadioButtonLine } from "react-icons/ri";
import { CiWifiOff } from "react-icons/ci";

import iconReact from '../../assets/react.svg';

import css from "./Profile.module.css";

const Profile = ({
  name,
  phone,
  email,
  status = "offline",
  hasPhisicalAddress,
}) => {
  return (
    <div
      className={clsx(
        css.profile,
        hasPhisicalAddress && css.hasPhisicalAddress
      )}
    >
      <img src={iconReact} alt="" />
      <h2 className={css.title}>
        Name: {name} {hasPhisicalAddress ? "🏡" : ""}
      </h2>
      <p className={css.fieldRow}>Phone: {phone}</p>
      <p className={css.fieldRow}>Email: {email}</p>
      <p
        // className={clsx(
        //   css.fieldRow,
        //   status === "online" && css.online,
        //   status === "offline" && css.offline
        // )}
        className={clsx(css.fieldRow, {
          [css.online]: status === "online",
          [css.offline]: status === "offline",
        })}
      >
        Status: {status === "online" ? <RiRadioButtonLine /> : <CiWifiOff />}{" "}
      </p>
    </div>
  );
};

export default Profile;

// <div className={clsx("profile", {
//   "hasPhisicalAddress": hasPhisicalAddress === true
// })}>
// а якщо у нас умова: якщо статус онлайн то текст зеленим,
// а якщо офлайн-червоним, то треба додавати додаткові класи
// на статус, описати в css, а потім їх вказувати в цій умові?
