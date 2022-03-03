import { Route, Routes } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from "./Components/Layout/layout";
import { UserContextProvider } from "./Components/Store/UserAuthContext";
import Modal from "./Components/UI/Modal/Modal";

function App() {
  return (
    <UserContextProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Modal />} />
          <Route path="/all-meetup" element={<AllMeetupsPage />} />
          <Route path="/new-meetup" element={<NewMeetupPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </Layout>
    </UserContextProvider>
  );
}

export default App;
