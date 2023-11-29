import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {useSelector } from 'react-redux'; 
import ReactTooltip from 'react-tooltip';

/** PROTECTED ROUTE / GUARD */
import TopBarLoader from '@app/components/Loader/TopBarLoader';
import Error404 from '@app/components/Error/Error404';
import NotificationPopup from '@app/components/Notification/NotificationPopup'; 
import AppRouting from './AppRouting';
import ActiveNavigateRoute from './routes/ActiveNavigateRoute';

function App(): React.ReactElement { 
  const { themeMode, themeColor, loading } = useSelector((state: any) => state.ui);

  /** STYLE THEME MODE */
  useEffect(() => {
    document.documentElement.setAttribute('theme-mode', themeMode || 'light');
  }, [themeMode]);

  /** STYLE THEME COLOR ACCENT */
  useEffect(() => {
    const bodyThemeColor = document.body.getAttribute('theme-color')

    if(themeColor!=bodyThemeColor){
      document.body.setAttribute('theme-color', themeColor);
    }
  }, [themeColor]);

  useEffect(() => {
    ReactTooltip.rebuild();
  });

  return (
    <>
      <TopBarLoader isLoading={loading} />

      <Router>
        <ActiveNavigateRoute />
        <Routes>
          <Route path='404' element={<Error404 />} />
          <Route path={'*'} element={<AppRouting/>}></Route>
        </Routes>
      </Router>

      <NotificationPopup />
      <ReactTooltip />
    </>
  );
}

export default App; 

