import React, { Suspense } from "react";
import "./App.css";
import "./scss/app.scss";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Loadable from "react-loadable";

const Cart = Loadable({
  loader: () => import(/* webpackChunkName: "Cart" */ "./pages/Cart"),
  loading: () => <div className="container">Идет загрузка корзины...</div>,
});
const FullPizza = React.lazy(
  () => import(/* webpackChunkName: "FullPizza" */ "./pages/FullPizza")
);
const NotFound = React.lazy(
  () => import(/* webpackChunkName: "NotFound" */ "./pages/NotFound")
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route
          path="pizza/:id"
          element={
            <Suspense
              fallback={<div className="container">Идет загрузка...</div>}
            >
              <FullPizza />
            </Suspense>
          }
        />
        <Route path="cart" element={<Cart />} />
        <Route
          path="*"
          element={
            <Suspense
              fallback={<div className="container">Идет загрузка...</div>}
            >
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
