import { createSlice } from '@reduxjs/toolkit'
import { calculateWindowSize } from '@app/helper/browser.helper'
import { getItem, setItem } from '@app/helper/localstorage.helper'
import { getActivePageMenu } from '@app/helper/menu.helper'

const isCollapsed = getItem('_sidebar_collapsed', false)

const initialState = {
  themeMode: getItem('_theme_mode'),
  themeColor: getItem('_theme_color', process.env.APP_ALIAS),
  activePage: getActivePageMenu(),
  activeFilters: null,
  isSidebarMenuCollapsed: isCollapsed == 0 ? false : isCollapsed,
  activePaging: undefined,
  reloadData: null,
  callbackForm: null,
  screenSize: calculateWindowSize(window.innerWidth),
  loading: 0,
  searchValue: '',
  showModalBlank: false,
  triggerAddBlock: null,
  menuStyle: getItem('_m_style', 'v2'),
  pagingLimit: getItem("pagingLimit", 10)
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setThemeMode: (state, { payload }) => {
      setItem('_theme_mode', payload)
      state.themeMode = payload
    },
    setThemeColor: (state, { payload }) => {
      setItem('_theme_color', payload)
      state.themeColor = payload
    },
    setMenuStyle: (state, { payload }) => {
      setItem('_m_style', payload)
      state.menuStyle = payload
    },
    setActivePage: (state, { payload }) => {
      state.activePage = payload
    },
    setActiveFilters: (state, { payload }) => {
      state.activeFilters = payload
    },
    setCallbackForm: (state, { payload }) => {
      state.callbackForm = payload
    },
    toggleSidebarMenu: (state, { payload = undefined }: { payload: number | undefined }) => {
      let toggle = state.isSidebarMenuCollapsed == 1 ? 0 : 1
      toggle = payload != undefined ? payload : toggle
      setItem('_sidebar_collapsed', toggle)
      state.isSidebarMenuCollapsed = toggle
    },
    setWindowSize: (state, { payload }) => {
      state.screenSize = payload
    },
    setActivePaging: (state, { payload }) => {
      state.activePaging = payload
    },
    reloadingData: (state, { payload }) => {
      state.reloadData = payload
    },
    setLoading: (state, { payload }) => {
      const loading = state.loading
      state.loading = payload ? loading + 1 : loading == 0 ? 0 : loading - 1
    },
    setSearchValue: (state, { payload }) => {
      state.searchValue = payload
    },
    setShowModalBlank: (state, { payload }) => {
      state.showModalBlank = payload
    },
    setTriggerAddBlock: (state, { payload }) => {
      state.triggerAddBlock = payload
    },
    setPagingLimit: (state, { payload }) => {
      state.pagingLimit = payload
      setItem("pagingLimit", payload)
    }
  },
})

export const {
  toggleSidebarMenu,
  setWindowSize,
  setThemeMode,
  setActivePage,
  setActivePaging,
  reloadingData,
  setActiveFilters,
  setCallbackForm,
  setLoading,
  setSearchValue,
  setMenuStyle,
  setThemeColor,
  setShowModalBlank,
  setTriggerAddBlock,
  setPagingLimit
} = uiSlice.actions
export default uiSlice.reducer
