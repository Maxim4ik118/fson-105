import React from 'react'
import ReactDOM from 'react-dom/client'

<<<<<<< HEAD
import App from './App.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
=======
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
>>>>>>> 835d173 (new: advanced react;)
