import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import StreamList from "./components/StreamList/StreamList";
import StreamCreate from "./components/StreamCreate/StreamCreate";
import StreamEdit from "./components/StreamEdit/StreamEdit";
import StreamDelete from "./components/StreamDelete/StreamDelete";
import StreamShow from "./components/StreamShow/StreamShow";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Route path="/" exact component={StreamList}></Route>
        <Route path="/streams/new" component={StreamCreate}></Route>
        <Route path="/streams/edit" component={StreamEdit}></Route>
        <Route path="/streams/delete" component={StreamDelete}></Route>
        <Route path="/streams/show" component={StreamShow}></Route>
      </BrowserRouter>
    </div>
  );
};

export default App;
