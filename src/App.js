import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import NewPlace from "./places/pages/NewPlace";
import Users from "./user/pages/Users";
import UserPlaces from "./places/pages/UserPlaces";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UpdatePlace from "./places/pages/UpdatePlace";
import Auth from "../src/user/pages/Auth";

function App() {
  return (
    <Router>
      {/* as our MainNavigation component is using Link component from react-dom-router, we can include it inside Router*/}
      <MainNavigation />
      <main>
        {/* main used for styling, as defined to the stylesheet */}
        <Routes>
          <Route exact path="/" element={<Users />} />
          {/* route with dynamic segment, /: signals the router */}
          <Route exact path="/:userId/places" element={<UserPlaces />} />
          <Route exact path="/places/new" element={<NewPlace />} />
          <Route exact path="/places/:placeId" element={<UpdatePlace />} />
          <Route exact path="/auth" element={<Auth />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
