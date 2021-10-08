import { createContext,useState } from "react";

//react components should have capital starting letters by convention
const OwnerContext = createContext({
    favorites:[],
    totalFavorites:0,
    addFavorite: (favoriteMeetup) =>{},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {}
}); 