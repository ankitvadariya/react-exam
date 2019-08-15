import "@babel/polyfill";

import * as React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import reducer from "./reducers";
import rootSaga from "./sagas";
import App from "./main";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

const THEME = createMuiTheme({
    typography: {
        fontFamily: "Helvetica",
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500
    },
    palette: {
        primary: {
            main: "#4077E4"
        },
    }
});

function render() {
    ReactDOM.render(
        <MuiThemeProvider theme={THEME}>
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route exact path="/" component={App} />
                    </Switch>
                </Router>
            </Provider>
        </MuiThemeProvider>,
        document.getElementById("app")
    );
}

render();
store.subscribe(render);

