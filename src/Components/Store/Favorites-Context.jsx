import React, { createContext, useState } from "react";

const FavoritesContext = createContext({
  Favorites: [],
  Totalfavorites: 0,
  addFavoritesHandler: (favoritemeetup) => {},
  removeFavoriteHandler: (meetupId) => {},
  itemIsFavoriteHandler: (meetupId) => {},
});

export function FavoritesContextProvider(props) {
  const [userfavorites, setuserfavorites] = useState([]);

  const addFavoritesHandler = (favoritemeetup) => {
    setuserfavorites((prevuserFavorites) => {
      return prevuserFavorites.concat(favoritemeetup);
    });
  };

  const removeFavoriteHandler = (meetupId) => {
    setuserfavorites((prevuserFavorites) => {
      return prevuserFavorites.filter((meetup) => meetup.id !== meetupId);
    });
  };

  const itemIsFavoriteHandler = (meetupId) => {
    return userfavorites.some((meetup) => meetup.id === meetupId);
  };

  const context = {
    Favorites: userfavorites,
    Totalfavorites: userfavorites.length,
    addFavoritesHandler: addFavoritesHandler,
    removeFavoriteHandler: removeFavoriteHandler,
    itemIsFavoriteHandler: itemIsFavoriteHandler,
  };
  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
