import { useContext } from "react";
import Loader from "../Loader/Loader";
import { UserContext } from "../../context/UserContext";

const UserMenu = () => {
  const { isLoading, userName, onLogout } = useContext(UserContext);

  if (isLoading) return <Loader />;

  return (
    <div>
      {userName === null ? (
        <div>
          <button type="button">Sign In</button>
        </div>
      ) : (
        <div>
          <p>Hello, {userName} ❤</p>
          <button type="button" onClick={onLogout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
