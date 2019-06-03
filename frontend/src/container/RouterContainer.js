import React from "react";
import FetchSong from "./FetchSong";
import FetchSongDetail from "./FetchSongDetail";
import { BrowserRouter, Route } from "react-router-dom";

// No need for class syntax here

export default () => (
  <BrowserRouter>
    <Route path="/" exact component={FetchSong} />
    <Route path="/detail/:rank" component={FetchSongDetail} />
  </BrowserRouter>
);
