import { lazy, Suspense } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import clsx from "clsx";

import css from "./App.module.css";
import Loader from "./components/Loader/Loader";

// import HomePage from "./pages/HomePage";
// import PostsPage from "./pages/PostsPage";
// import ContextExamplePage from "./pages/ContextExamplePage";
// import PostDetailsPage from "./pages/PostDetailsPage";

// import PostComments from "./components/PostComments/PostComments";
// import PostReviews from "./components/PostReviews/PostReviews";
const HomePage = lazy(() => import("./pages/HomePage"));
const PostsPage = lazy(() => import("./pages/PostsPage"));
const ContextExamplePage = lazy(() => import("./pages/ContextExamplePage"));
const PostDetailsPage = lazy(() => import("./pages/PostDetailsPage"));
const PostComments = lazy(() =>
  import("./components/PostComments/PostComments")
);
const PostReviews = lazy(() => import("./components/PostReviews/PostReviews"));

function App() {
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
          <NavLink
            className={({ isActive }) => clsx(css.link, isActive && css.active)}
            to="/posts"
          >
            Posts
          </NavLink>
          <NavLink
            className={({ isActive }) => clsx(css.link, isActive && css.active)}
            to="/context-example"
          >
            Context Example
          </NavLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/posts" element={<PostsPage />} />
            <Route path="/context-example" element={<ContextExamplePage />} />
            <Route path="/posts/:postId" element={<PostDetailsPage />}>
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
