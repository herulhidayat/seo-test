import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import Error404 from '@app/components/Error/Error404';
import ErrorOffline from '@app/components/Error/ErrorOffline';
import TopBarLoader from '@app/components/Loader/TopBarLoader';
import AppLayout from '@app/modules/Layouts/AppLayout/AppLayout';
import { setActivePage } from '@app/store/reducers/ui';
import { getActivePageMenu } from '@app/helper/menu.helper';
import HomePage from './Home/HomePage';
import AboutPage from './About/About';


/** PAGE COMPONENT */
const ProfilePage = React.lazy(() => import('@app/pages/Account/ProfilePage'));

/**
 * NOTE: ROUTING APPS PAGE ADA DISINI
 * @returns
 */
export default function AppsPage(): React.ReactElement {
  const [connection, setConnection] = React.useState<'offline' | 'online'>(
    'online'
  );

  const location = useLocation();
  const dispatch = useDispatch();
  const { activePage } = useSelector((state: any) => state?.ui);

  useEffect(() => {
    document.body.classList.remove('overflow-hidden');
    document.body.removeAttribute('style');

    function listenerOffline() {
      setConnection('offline');
    }

    function listenerOnline() {
      setConnection('online');
    }

    window.addEventListener('offline', listenerOffline);
    window.addEventListener('online', listenerOnline);

    return () => {
      document.body.style.overflow = 'hidden';
      window.removeEventListener('offline', listenerOffline);
      window.removeEventListener('online', listenerOnline);
    };
  }, []);

  /** DETECT CHANGE URL */
  useEffect(() => {
    const activeMenu: any = getActivePageMenu();

    if (activePage?.id != activeMenu?.id) {
      document.title = activeMenu
        ? `${activeMenu?.display} - ${process.env.APP_NAME}`
        : `${process.env.APP_NAME}`;

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const activePageCurrent = {
        ...activeMenu,
        isSubUrl: activeMenu?.path != location.pathname,
      };
      dispatch(setActivePage(activePageCurrent));
    }
  }, [location?.pathname]);

  if (connection === 'offline') {
    return <ErrorOffline />;
  }

  return (
    <>
      <Routes>
        {/* ==== SIDEBAR LAYOUT ===== */}
        <Route path=''>
          <Route path='home'>
            <Route path={''} element={<HomePage/>}></Route>
            <Route path={'about'} element={<AboutPage/>}></Route>
          </Route>
          {/* MAIN OTHER  */}
          <Route path='' element={<AppLayout />}>
          
            {/* ACCOUNT  */}
            <Route path='account'>
              <Route path='' element={<Navigate to={'profile'}></Navigate>} ></Route>
              <Route path='profile' element={ <React.Suspense fallback={<TopBarLoader />}> <ProfilePage /> </React.Suspense> } />
            </Route>
          </Route>
          <Route path='*' element={<Error404  />}></Route>
        </Route>
      </Routes>
    </>
  );
}
