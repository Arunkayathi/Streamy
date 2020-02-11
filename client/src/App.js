import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
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

const composeEnhancers =
  typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header></Header>
        <Route path="/" exact component={StreamList}></Route>
        <Route path="/streams/new" component={StreamCreate}></Route>
        <Route path="/streams/edit" component={StreamEdit}></Route>
        <Route path="/streams/delete" component={StreamDelete}></Route>
        <Route path="/streams/show" component={StreamShow}></Route>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
