import React, { lazy, Suspense } from "react";

const LoginComponent = lazy(() => import("../../application/User/Login"));
export const Login = props => {
  return (
    <Suspense fallback={null}>
      <LoginComponent {...props}></LoginComponent>
    </Suspense>
  )
}
