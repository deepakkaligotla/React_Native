declare module '@react-navigation/native' {
    export type RootParamList = {
      Home: undefined;
      Details: undefined;
    };
  }
  
  declare module '@react-navigation/drawer' {
    import { DrawerNavigationProp } from '@react-navigation/drawer';
  
    export type DrawerParamList = {
      Home: undefined;
      Settings: undefined;
    };
  
    export type DrawerNavigationProps<T extends keyof DrawerParamList> = DrawerNavigationProp<DrawerParamList, T>;
  }
  