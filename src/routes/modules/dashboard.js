import React, { lazy, Suspense } from 'react'

const DashboardComponrnt = lazy(() => import("../../application/Dashboard/index"));

export const Dashboard = props => {
  return (
    <Suspense fallback={null}>
      <DashboardComponrnt {...props}></DashboardComponrnt>
    </Suspense>
  )
}
