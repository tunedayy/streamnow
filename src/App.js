import React from "react";
import { Switch, Route } from "react-router";
import Hero from "./home";
import { Discover, Popular, Upcoming } from "./movies";
import Single from "./single";
import Navbar from "./navbar";

function App() {
  return (
    <main>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Hero />
          <Popular />
          <Upcoming />
        </Route>
        <Route path="/:media_type/:id" children={<Single />} />
        <Route path="/movies">
          <Discover />
        </Route>
      </Switch>
    </main>
  );
}

export default App;
