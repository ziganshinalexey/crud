// flow-typed signature: fa5a311e65b1a5cfa1dd98bd9b133aaa
// flow-typed version: 2973a15489/react-router-dom_v5.x.x/flow_>=v0.63.x <=v0.97.x

declare module 'react-router-dom' {
    declare export var BrowserRouter: React$ComponentType<{|
    basename?: string,
    children?: React$Node,
    forceRefresh?: boolean,
    getUserConfirmation?: GetUserConfirmation,
    keyLength?: number
  |}>

    declare export var HashRouter: React$ComponentType<{|
    basename?: string,
    children?: React$Node,
    getUserConfirmation?: GetUserConfirmation,
    hashType?: "slash" | "noslash" | "hashbang"
  |}>

    declare export var Link: React$ComponentType<{
    children?: React$Node,
    className?: string,
    replace?: boolean,
    to: string | LocationShape
  }>

    declare export var NavLink: React$ComponentType<{
    activeClassName?: string,
    activeStyle?: { +[string]: mixed },
    children?: React$Node,
    className?: string,
    exact?: boolean,
    isActive?: (match: Match, location: Location) => boolean,
    strict?: boolean,
    style?: { +[string]: mixed },
    to: string | LocationShape
  }>

    // NOTE: Below are duplicated from react-router. If updating these, please
    // update the react-router and react-router-native types as well.
    declare export type Location = {
    hash: string,
    key?: string,
    pathname: string,
    search: string,
    state?: any
  };

    declare export type LocationShape = {
    hash?: string,
    pathname?: string,
    search?: string,
    state?: any
  };

    declare export type HistoryAction = 'PUSH' | 'REPLACE' | 'POP';

    declare export type RouterHistory = {
    action: HistoryAction,
    block: block(
      callback: string | (location: Location, action: HistoryAction) => ?string
    ): () => void,
    canGo?: (n: number) => boolean,
    entries?: Array<Location>,
    go: go(n: number): void,
    goBack: goBack(): void,
    goForward: goForward(): void,
    index?: number,
    length: number,
    listen: listen(
      callback: (location: Location, action: HistoryAction) => void
    ): () => void,
    location: Location,
    // createMemoryHistory
    push: push(path: string | LocationShape, state?: any): void,
    replace: replace(path: string | LocationShape, state?: any): void
  };

    declare export type Match = {
    isExact: boolean,
    params: { [key: string]: ?string },
    path: string,
    url: string
  };

    declare export type ContextRouter = {|
        history: RouterHistory,
        location: Location,
        match: Match,
        staticContext?: StaticRouterContext,
    |};

    declare type ContextRouterVoid = {
        history: RouterHistory | void,
        location: Location | void,
        match: Match | void,
        staticContext?: StaticRouterContext | void,
    };

    declare export type GetUserConfirmation = (message: string, callback: (confirmed: boolean) => void) => void;

    declare export type StaticRouterContext = {
        url?: string,
    };

    declare export var StaticRouter: React$ComponentType<{|
    basename?: string,
    children?: React$Node,
    context: StaticRouterContext,
    location?: string | Location
  |}>

    declare export var MemoryRouter: React$ComponentType<{|
    children?: React$Node,
    getUserConfirmation?: GetUserConfirmation,
    initialEntries?: Array<LocationShape | string>,
    initialIndex?: number,
    keyLength?: number
  |}>

    declare export var Router: React$ComponentType<{|
    children?: React$Node,
    history: RouterHistory
  |}>

    declare export var Prompt: React$ComponentType<{|
        message: string | ((location: Location) => string | boolean),
        when?: boolean,
    |}>;

    declare export var Redirect: React$ComponentType<{|
    exact?: boolean,
    from?: string,
    push?: boolean,
    strict?: boolean,
    to: string | LocationShape
  |}>

    declare export var Route: React$ComponentType<{|
    children?: React$ComponentType<ContextRouter> | React$Node,
    component?: React$ComponentType<*>,
    exact?: boolean,
    location?: LocationShape,
    path?: string | Array<string>,
    render?: (router: ContextRouter) => React$Node,
    sensitive?: boolean,
    strict?: boolean
  |}>

    declare export var Switch: React$ComponentType<{|
        children?: React$Node,
        location?: Location,
    |}>;

    declare export function withRouter<Props: {}, Component: React$ComponentType<Props>>(
        WrappedComponent: Component
    ): React$ComponentType<$Diff<React$ElementConfig<$Supertype<Component>>, ContextRouterVoid>>;

    declare type MatchPathOptions = {
    exact?: boolean,
    path?: string,
    sensitive?: boolean,
    strict?: boolean
  };

    declare export function matchPath(pathname: string, options?: MatchPathOptions | string, parent?: Match): null | Match;

    declare export function generatePath(pattern?: string, params?: {+[string]: mixed}): string;
}
