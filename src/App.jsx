import { lazy, Suspense, useEffect } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import clsx from "clsx";

import css from "./App.module.css";
import Loader from "./components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAuthIsLoggedIn,
  selectAuthIsRefreshing,
  selectAuthUser,
} from "./redux/auth/selectors";
import { apiLogout, apiRefreshUser } from "./redux/auth/operations";
import { RestrictedRoute } from "./components/RestrictedRoute";
import { PrivateRoute } from "./components/PrivateRoute";

// import HomePage from "./pages/HomePage";
// import PostsPage from "./pages/PostsPage";
// import ContextExamplePage from "./pages/ContextExamplePage";
// import PostDetailsPage from "./pages/PostDetailsPage";

// import PostComments from "./components/PostComments/PostComments";
// import PostReviews from "./components/PostReviews/PostReviews";
const HomePage = lazy(() => import("./pages/HomePage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const PostsPage = lazy(() => import("./pages/PostsPage"));
const ContextExamplePage = lazy(() => import("./pages/ContextExamplePage"));
const PostDetailsPage = lazy(() => import("./pages/PostDetailsPage"));
const PostComments = lazy(() =>
  import("./components/PostComments/PostComments")
);
const PostReviews = lazy(() => import("./components/PostReviews/PostReviews"));

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  const isRefreshing = useSelector(selectAuthIsRefreshing);
  const user = useSelector(selectAuthUser);

  useEffect(() => {
    dispatch(apiRefreshUser());
  }, [dispatch]);

  const onLogout = () => {
    dispatch(apiLogout());
  };

  if (isRefreshing) return <p>User is refreshing, please wait</p>;

  return (
    <div>
      <header>
        <nav className={css.nav}>
          <NavLink
            className={({ isActive }) => clsx(css.link, isActive && css.active)}
            to="/"
          >
            Home
          </NavLink>
          {isLoggedIn ? (
            <>
              <NavLink
                className={({ isActive }) =>
                  clsx(css.link, isActive && css.active)
                }
                to="/posts"
              >
                Posts
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  clsx(css.link, isActive && css.active)
                }
                to="/context-example"
              >
                Context Example
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  clsx(css.link, isActive && css.active)
                }
                to="/contacts"
              >
                Contacts
              </NavLink>
              <div>
                <p>Hello, {user.name}!</p>
                <p>Email: {user.email}</p>
              </div>
              <button type="button" onClick={onLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink
                className={({ isActive }) =>
                  clsx(css.link, isActive && css.active)
                }
                to="/login"
              >
                Login
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  clsx(css.link, isActive && css.active)
                }
                to="/register"
              >
                Register
              </NavLink>
            </>
          )}
        </nav>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/register"
              element={<RestrictedRoute component={<RegisterPage />} />}
            />
            <Route
              path="/login"
              element={<RestrictedRoute component={<LoginPage />} />}
            />
            <Route
              path="/contacts"
              element={<PrivateRoute component={<ContactsPage />} />}
            />
            <Route
              path="/posts"
              element={<PrivateRoute component={<PostsPage />} />}
            />
            <Route
              path="/context-example"
              element={<PrivateRoute component={<ContextExamplePage />} />}
            />
            <Route
              path="/posts/:postId"
              element={<PrivateRoute component={<PostDetailsPage />} />}
            >
              <Route path="comments" element={<PostComments />} />
              <Route path="reviews" element={<PostReviews />} />
            </Route>
          </Routes>
        </Suspense>
      </main>
      <footer>Footer content</footer>
    </div>
  );
}

export default App;
