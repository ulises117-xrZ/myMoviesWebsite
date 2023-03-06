import { store } from "@/redux/index.store";
import React, { Component } from "react";
import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";

export type ProtectedRouteProps = {
  authenticationPath: string;
  outlet: JSX.Element;
};

export default function ProtectedRoute({
  authenticationPath,
  outlet,
}: ProtectedRouteProps) {
  if (store.getState().auth.token.length > 0) {
    return outlet;
  } else {
    return <Navigate to={{ pathname: authenticationPath }} />;
  }
}
