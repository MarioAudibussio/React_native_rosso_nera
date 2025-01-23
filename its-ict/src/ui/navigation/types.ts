import { Product } from "../screens/hook/useProducts.facade";

export enum Screen {
  TabNavigator = 'TabNavigator',
  Home = 'Home',
  Detail = 'Detail',
  Favorites = 'Favorites',
}

export type TabParams = {
  [Screen.Home]: {
    hasFavoritesUpdated: boolean;
  };
  [Screen.Favorites]: {
    hasFavoritesUpdated: boolean;
  };
};

export type MainParamList = {
  TabNavigator: undefined;
  [Screen.Home]: undefined; 
  [Screen.Detail]: {
    product: Product; 
  };
  [Screen.Favorites]: undefined;
};