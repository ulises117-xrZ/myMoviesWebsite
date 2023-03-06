import { Layout } from "@/components/Layout";
import { Home } from "@/views/Home";
import { Login } from "@/views/Login";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute, { ProtectedRouteProps } from "./privateRoute";
import { useSelector } from "react-redux";
import { store } from "@/redux/index.store";
import UnprotectedRoute from "./publicRoute";
import MovieItem from "@/components/MovieItem";
import MovieDescScreen from "@/views/Movie/MovieDescScreen";
import FavoritoScreen from "@/views/Movie/FavoritoScreen";
import NotFoundScreen from "@/views/NotFound/NotFoundScreen";
const RouterWrapper = () => {
  const [isAuth, setAuth] = useState<boolean>(
    store.getState().auth.token.length > 0
  );
  const defaultProtectedProps: Omit<ProtectedRouteProps, "outlet"> = {
    authenticationPath: "/logIn",
  };
  const defaultUnProtectedProps: Omit<ProtectedRouteProps, "outlet"> = {
    authenticationPath: "/",
  };


  return (
    <div>
      <Layout>
        <BrowserRouter>
          <nav></nav>
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute {...defaultProtectedProps} outlet={<Home />} />
              }
            />
            <Route
              path="/favorites"
              element={
                <ProtectedRoute {...defaultProtectedProps} outlet={<FavoritoScreen />} />
              }
            />
            <Route
              path="/movie/:id"
              element={
                <ProtectedRoute {...defaultProtectedProps} outlet={<MovieDescScreen />} />
              }
            />
            <Route
              path="/movie/:id/suggestion/:idSuggestion"
              element={
                <ProtectedRoute {...defaultProtectedProps} outlet={<MovieDescScreen />} />
              }
            />
            <Route
              path="/logIn"
              element={
                <UnprotectedRoute
                  {...defaultUnProtectedProps}
                  outlet={<Login />}
                />
              }
            />
            <Route 
            path="*" element={<NotFoundScreen />}/>
          </Routes>
        </BrowserRouter>
      </Layout>
    </div>
  );
};

export default RouterWrapper;
