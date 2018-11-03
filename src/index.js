import React from "react";
import ReactDOM from "react-dom";
import App from "./view";

import "./index.css";

import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "state/reducers";

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
