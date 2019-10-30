import React, { lazy, Suspense } from "react";

const CommunityComponent = lazy(() => import("../../application/User/Community"))

export const Community = props => {
  return (
    <Suspense fallback={null}>
      <CommunityComponent {...props}></CommunityComponent>
    </Suspense>
  )
}
