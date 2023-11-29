import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

/** PROTECTED ROUTE / GUARD */

import TopBarLoader from '@app/components/Loader/TopBarLoader';
import Error404 from '@app/components/Error/Error404';

const Signin = React.lazy(() => import('@app/pages/Auth/SigninPage'));
const Index = React.lazy(() => import('@app/pages/IndexRouting'));

export default function AppRouting() { 
  return (
    <>
      <Routes>
        <Route path='' element={<Navigate to={'home'} />}></Route>
        <Route
          path='signin'
          element={
            <React.Suspense fallback={<TopBarLoader />}>
              <Signin />
            </React.Suspense>
          }
        />

        <Route
          path='*'
          element={
            // <ProtectedRoute>
              <React.Suspense fallback={<TopBarLoader />}>
                <Index />
              </React.Suspense>
            // </ProtectedRoute>
          }
        />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </>
  );
}
