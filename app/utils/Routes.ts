/**
 * Enum representing the available routes in the application.
 */

enum Routes {
  Home = "Home",
  Login = "Login",
  ArticleDetails = "ArticleDetails",
  Settings = "Settings",
}

/**
 * Represents the parameter types for the root stack navigation.
 */
type RootStackParams = {
  [Routes.Home]: undefined;
  [Routes.Login]: undefined;
  [Routes.ArticleDetails]: undefined;
  [Routes.Settings]: undefined;
};

/**
 * Extend the default React Navigation types
 */
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParams {}
  }
}

/**
 * Represents the navigation parameters for the root stack.
 */
export type NavigationParams = RootStackParams;

export default Routes;
