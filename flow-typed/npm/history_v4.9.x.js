// flow-typed signature: e9f847e1484ac219c138c7625c1cebfb
// flow-typed version: 295873fe88/history_v4.9.x/flow_>=v0.25.x

declare module 'history' {
    declare function Unblock(): void;

    declare export type Action = 'PUSH' | 'REPLACE' | 'POP';

    declare export type BrowserLocation = {
    hash: string,
    key: string,
    pathname: string,
    // Browser and Memory specific
    search: string,
    state: {},
  };

    declare interface IBrowserHistory {
    action: Action,
    block: block((location: BrowserLocation, action: Action) => string): typeof Unblock,
    block: block(message: string): typeof Unblock,
    go: go(n: number): void,
    goBack: goBack(): void,
    goForward: goForward(): void,
    length: number,
    listen: listen((location: BrowserLocation, action: Action) => void): void,
    location: BrowserLocation,
    push: push(location: $Shape<BrowserLocation>): void,
    push: push(path: string, state?: {}): void,
    replace: replace(location: $Shape<BrowserLocation>): void,
    replace: replace(path: string, state?: {}): void,
  }

    declare export type BrowserHistory = IBrowserHistory;

    declare type BrowserHistoryOpts = {
        basename?: string,
        forceRefresh?: boolean,
        getUserConfirmation?: (message: string, callback: (willContinue: boolean) => void) => void,
    };

    declare function createBrowserHistory(opts?: BrowserHistoryOpts): BrowserHistory;

    declare export type MemoryLocation = {
    hash: string,
    key: string,
    pathname: string,
    // Browser and Memory specific
    search: string,
    state: {},
  };

    declare interface IMemoryHistory {
    action: Action,
    block: block((location: MemoryLocation, action: Action) => string): typeof Unblock,
    block: block(message: string): typeof Unblock,
    canGo: canGo(n: number): boolean,
    entries: Array<string>,
    go: go(n: number): void,
    goBack: goBack(): void,
    goForward: goForward(): void,
    index: number,
    length: number,
    listen: listen((location: MemoryLocation, action: Action) => void): void,
    location: MemoryLocation,
    // Memory only
    push: push(location: $Shape<MemoryLocation>): void,
    push: push(path: string, state?: {}): void,
    replace: replace(location: $Shape<MemoryLocation>): void,
    replace: replace(path: string, state?: {}): void,
  }

    declare export type MemoryHistory = IMemoryHistory;

    declare type MemoryHistoryOpts = {
    getUserConfirmation?: (
      message: string,
      callback: (willContinue: boolean) => void,
    ) => void,
    initialEntries?: Array<string>,
    initialIndex?: number,
    keyLength?: number,
  };

    declare function createMemoryHistory(opts?: MemoryHistoryOpts): MemoryHistory;

    declare export type HashLocation = {
    hash: string,
    pathname: string,
    search: string,
  };

    declare interface IHashHistory {
    action: Action,
    block: block((location: HashLocation, action: Action) => string): typeof Unblock,
    block: block(message: string): typeof Unblock,
    go: go(n: number): void,
    goBack: goBack(): void,
    goForward: goForward(): void,
    length: number,
    listen: listen((location: HashLocation, action: Action) => void): void,
    location: HashLocation,
    push: push(path: string): void,
    push: push(location: $Shape<HashLocation>): void,
    push: push(path: string, state?: {}): void,
    replace: replace(location: $Shape<HashLocation>): void,
    replace: replace(path: string, state?: {}): void,
  }

    declare export type HashHistory = IHashHistory;

    declare type HashHistoryOpts = {
    basename?: string,
    getUserConfirmation?: (
      message: string,
      callback: (willContinue: boolean) => void,
    ) => void,
    hashType: "slash" | "noslash" | "hashbang",
  };

    declare function createHashHistory(opts?: HashHistoryOpts): HashHistory;
}
