import React from "react";
import { BrowserRouter, Route, Link, Router } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";

import reduxThunk from "redux-thunk";
import StreamList from "./components/StreamList/StreamList";
import StreamCreate from "./components/StreamCreate/StreamCreate";
import StreamEdit from "./components/StreamEdit/StreamEdit";
import StreamDelete from "./components/StreamDelete/StreamDelete";
import StreamShow from "./components/StreamShow/StreamShow";
import Header from "./components/Header/Header";
import history from "./history";

const composeEnhancers =
  typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);

const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <div className="ui container">
          <Header></Header>
          <Route path="/" exact component={StreamList}></Route>
          <Route path="/streams/new" component={StreamCreate}></Route>
          <Route path="/streams/edit/:id" component={StreamEdit}></Route>
          <Route path="/streams/delete/:id" component={StreamDelete}></Route>
          <Route path="/streams/show" component={StreamShow}></Route>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
