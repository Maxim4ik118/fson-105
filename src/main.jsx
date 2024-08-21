import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import { UserContextProvider } from "./context/UserContext";

import { store } from "./redux/store";

import "./index.css";

/*
Маршрутизація:

1. Навчитися змінювати URL адресу браузера. 
   Для цього можна використовувати компоненти <Link to="/about"> | <NavLink> 
2. Підготувати для відображення компоненти(сторінки), які будуть 
   рендеритися, коли їх шлях(pathname) співпаде з URL адресої. <Routes> & <Route path="/about" element={<AboutPage />}>

*/

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UserContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </UserContextProvider>
  </BrowserRouter>
);
