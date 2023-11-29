import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux'

import * as Yup from 'yup';

import store from './app/store'
import App from "./app/App";

import AOS from 'aos';

AOS.init();

Yup.setLocale({
  mixed: {
    default:'Invalid data',
    required: 'This is required',
    notType: "Invalid data",
  },
  number: {
    min: 'Min ${min} character',
    max: 'Max ${max} character',
  },
  string: {
    min: 'Min ${min} character',
    max: 'Max ${max} character',
  },
});

import "./index.scss";

const root = ReactDOM.createRoot((document.getElementById("root") as any))
root.render(<Provider store={store}>
  <App />
</Provider>);