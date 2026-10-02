import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../layouts/Main";
const Home = lazy(() => import("../pages/Home"));
const BlogPost = lazy(() => import("../pages/BlogPost"));

export default function AppRoutes() {
  return (
    <Suspense fallback={<p role="status">Loading page…</p>}>
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Home />} />
        <Route path="blog/:slug" element={<BlogPost />} />
      </Route>
    </Routes>
    </Suspense>
  );
}
