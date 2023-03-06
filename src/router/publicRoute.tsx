import { store } from "@/redux/index.store";
import { Navigate } from "react-router-dom";

export type ProtectedRouteProps = {
  authenticationPath: string;
  outlet: JSX.Element;
};

export default function UnprotectedRoute({
  authenticationPath,
  outlet,
}: ProtectedRouteProps) {
  if (store.getState().auth.token.length === 0) {
    return outlet;
  } else {
    return <Navigate to={{ pathname: authenticationPath }} />;
  }
}
