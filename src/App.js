import { Route } from "react-router-dom";

import AllMeetUpsPage from "./pages/AllMeetups";
import NewMeetUpsPage from "./pages/NewMeetups";
import FavouritesPage from "./pages/favourites";


function App() {
  return (
    <div>
      <Route path="/">
        <AllMeetUpsPage />
      </Route>
      <Route path="/new-meetups">
        <NewMeetUpsPage />
      </Route>
      <Route path="/favourites">
        <FavouritesPage />
      </Route>
    </div>
  );
}

export default App;
