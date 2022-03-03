import { useContext } from "react";

import Card from "../UI/Card/card";
import classes from "./Meetupitem.module.css";
import FavoritesContext from "../Store/Favorites-Context";

function MeetupItem(props) {
  const favoritectx = useContext(FavoritesContext);

  const ItemisFavorites = favoritectx.itemIsFavoriteHandler(props.id);

  const favoriteToggleHandler = () => {
    if (ItemisFavorites) {
      favoritectx.removeFavoriteHandler(props.id);
    } else {
      favoritectx.addFavoritesHandler({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  };
  return (
    <Card>
      <li className={classes.item}>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={favoriteToggleHandler}>
            {ItemisFavorites ? "remove from Favorites" : "TO Favorites"}
          </button>
        </div>
      </li>
    </Card>
  );
}

export default MeetupItem;
