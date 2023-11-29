import { createSlice } from '@reduxjs/toolkit';
import { getItem, setItem } from '@app/helper/localstorage.helper';

const initialState = {
  reloadData: null,
  formStepSurat: 0,
  filters: null,
  workspace: getItem('wsp', null),
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setWorkspace: (state, { payload }) => {
      setItem('wsp', payload);
      state.workspace = payload;
    },
    reloadingData: (state, { payload }) => {
      state.reloadData = payload;
    },
    setFormStepSurat: (state, { payload }) => {
      state.formStepSurat = payload;
    },
    setFilters: (state, { payload }) => {
      state.filters = payload;
    },
  },
});

export const { setWorkspace, reloadingData, setFormStepSurat, setFilters } =
  appSlice.actions;
export default appSlice.reducer;
