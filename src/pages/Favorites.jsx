import React, { useContext } from "react";

import FavoritesContext from "../Components/Store/Favorites-Context";
import MeetupList from "../Components/meetups/meetupList";

const FavoritesPage = () => {
  const favoritesctx = useContext(FavoritesContext);

  let content;

  if (favoritesctx.Totalfavorites === 0) {
    content = <p>No favorites Added Yet</p>;
  } else {
    content = <MeetupList meetups={favoritesctx.Favorites} />;
  }
  return (
    <section>
      <h1>Favorites</h1>
      {content}
    </section>
  );
};

export default FavoritesPage;
