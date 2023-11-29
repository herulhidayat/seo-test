/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { useTracking } from 'react-tracking'

import { getActivePageMenu } from '@app/helper/menu.helper'
import { setActivePage } from '@app/store/reducers/ui'
import { get, split } from 'lodash'

function ActiveNavigateRoute() {
  const { workspace } = useSelector((state: any) => state.app)
  const { menus } = useSelector((state: any) => state.ui)
  const location = useLocation()
  const dispatch = useDispatch()
  const source = axios.CancelToken.source()
  const { trackEvent } = useTracking()

  useEffect(() => {
    // getActive()
    // const activePageMenu = activePage;
    const activePage = getActivePageMenu(menus)
    const appname = get(split(workspace?.ws_styles?.applicationName,'-'),'1')
    document.title = activePage ? `${activePage?.display} - ${appname||process.env.APP_NAME}` : `${process.env.APP_NAME}`
    
    const activePageCurrent = {
      ...activePage,
      isSubUrl: activePage?.path != location.pathname,
    }

    dispatch(setActivePage(activePageCurrent))

    if (activePage) {
      trackEvent({
        actions: {
          group: 'menu',
          labels: `${activePage?.display || ''}`,
          name: 'select-menu',
          value: window.location.href,
        },
      })
    }
  }, [location?.pathname])

  return <></>
}

export default ActiveNavigateRoute
