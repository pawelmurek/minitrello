import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./view";

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
