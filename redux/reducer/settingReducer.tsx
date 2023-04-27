import { AnyAction, createSlice } from "@reduxjs/toolkit";
import { getSetting } from "../actions/settingActions";
import { Dispatch } from "redux";
import { create } from "lodash";
import { createSetting } from "../actions/settingActions";
import { error } from "console";

export const botSetting = createSlice({
  name: "botSetting",
  initialState: {
    botSetting: {},
    error: "This is the Admin getOne Error",
  },
  reducers: {
    get_setting: (state, action) => {
      state.botSetting = action.payload;
    },
    update_setting: (state, action) => {
      state.botSetting = action.payload;
    },
    create_setting: (state, action) => {
      state.botSetting = action.payload;
    },
    getErrors: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default botSetting.reducer;

export const { get_setting, update_setting, create_setting } =
  botSetting.actions;

export const get_botSetting = (data: any) => (dispatch: any) => {
  getSetting(data)
    .then((res: any) => {
      dispatch(get_setting(res.data));
    })
    .catch((error: any) => {
      dispatch(get_setting(error));
    });
};

export const update_botSetting = (data: any) => (dispatch: any) => {
  getSetting(data)
    .then((res: any) => {
      dispatch(update_setting(res.data));
    })
    .catch((error: any) => {
      dispatch(update_setting(error));
    });
};

export const create_botSetting = (data: any) => (dispatch: any) => {
  createSetting(data)
    .then((res: any) => {
      dispatch(create_setting(res.data));
    })
    .catch((error: any) => {
      dispatch(create_setting(error));
    });
};
