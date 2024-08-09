import ReactDOM from "react-dom/client";

import App from "./App";
// import AppWithHTTPS from "./AppWithHTTPS";
// import AppWIthContextAPI from "./AppWIthContextAPI";

import "./index.css";
// import { UserContextProvider } from "./context/UserContext";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <UserContextProvider>
//     <AppWIthContextAPI />
//   </UserContextProvider>
// );
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
