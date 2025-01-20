export enum Screen {
  TabNavigator = 'TabNavigator',
  Analytics = 'Analytics',
  Home = 'Home',
  Detail = 'Detail',
  Settings = 'Settings',
  Favorites = 'Favorites',
}

export type TabParams = {
  [Screen.Home]: {
    hasFavoritesUpdated: boolean;
  };
  [Screen.Settings]: undefined;
  [Screen.Favorites]: {
    hasFavoritesUpdated: boolean;
  };
  [Screen.Analytics]: undefined;
};

export type MainParamList = {
  TabNavigator: undefined;
  [Screen.Detail]: {
    id: number;
    idsArray: number[];
  };
};