import { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext(null);
FavoritesContext.displayName = "Favoritos";

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavoriteContext = () => {
  const { favorites, setFavorites } = useContext(FavoritesContext);

  const toggleFavorite = (newFavorite) => {
    const hasNewFavoriteInFavoritesList = favorites.some(
      (item) => item.id === newFavorite.id
    );

    let newList = [...favorites];

    if (!hasNewFavoriteInFavoritesList) {
      newList.push(newFavorite);
      return setFavorites(newList);
    }

    newList.splice(newList.indexOf(newFavorite), 1);
    return setFavorites(newList);
  };

  return { favorites, toggleFavorite };
};
