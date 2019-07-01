// flow-typed signature: f6bad512110ebc6da85b1ddda297fe3d
// flow-typed version: f04d291d8b/enzyme_v3.x.x/flow_>=v0.53.x

declare module 'enzyme' {
    declare type PredicateFunction<T: Wrapper<*>> = (wrapper: T, index: number) => boolean;
    declare type UntypedSelector = string | {[key: string]: number | string | boolean};
    declare type EnzymeSelector = UntypedSelector | React$ElementType;

    // CheerioWrapper is a type alias for an actual cheerio instance
    // TODO: Reference correct type from cheerio's type declarations
    declare type CheerioWrapper = any;

    declare class Wrapper<RootComponent> {
    at: at(index: number): this,
    childAt: childAt(index: number): this,
    children: children<T: React$ElementType>(selector: T): ReactWrapper<T>,
    children: children(selector?: UntypedSelector): this,
    closest: closest<T: React$ElementType>(selector: T): ReactWrapper<T>,
    closest: closest(selector: UntypedSelector): this,
    contains: contains(nodes: React$Node): boolean,
    containsAllMatchingElements: containsAllMatchingElements(nodes: React$Node): boolean,
    containsAnyMatchingElements: containsAnyMatchingElements(nodes: React$Node): boolean,
    containsMatchingElement: containsMatchingElement(node: React$Node): boolean,
    context: context(key?: string): any,
    debug: debug(options?: Object): string,
    dive: dive(option?: { context?: Object }): this,
    equals: equals(node: React$Element<any>): boolean,
    every: every(selector: EnzymeSelector): boolean,
    everyWhere: everyWhere(predicate: PredicateFunction<this>): boolean,
    exists: exists(selector?: EnzymeSelector): boolean,
    filter: filter<T: React$ElementType>(selector: T): ReactWrapper<T>,
    filter: filter(selector: UntypedSelector): this,
    filterWhere: filterWhere(predicate: PredicateFunction<this>): this,
    find: find<T: React$ElementType>(selector: T): ReactWrapper<T>,
    find: find(selector: UntypedSelector): this,
    findWhere: findWhere(predicate: PredicateFunction<this>): this,
    first: first(): this,
    forEach: forEach(fn: (node: this, index: number) => mixed): this,
    get: get(index: number): React$Node,
    getDOMNode: getDOMNode(): HTMLElement | HTMLInputElement,
    hasClass: hasClass(className: string): boolean,
    hostNodes: hostNodes(): this,
    html: html(): string,
    instance: instance(): React$ElementRef<RootComponent>,
    is: is(selector: EnzymeSelector): boolean,
    isEmpty: isEmpty(): boolean,
    isEmptyRender: isEmptyRender(): boolean,
    key: key(): string,
    last: last(): this,
    length: number,
    map: map<T>(fn: (node: this, index: number) => T): Array<T>,
    matchesElement: matchesElement(node: React$Node): boolean,
    name: name(): string,
    not: not(selector: EnzymeSelector): this,
    parent: parent(): this,
    parents: parents<T: React$ElementType>(selector: T): ReactWrapper<T>,
    parents: parents(selector?: UntypedSelector): this,
    prop: prop(key: string): any,
    props: props(): Object,
    reduce: reduce<T>(
      fn: (value: T, node: this, index: number) => T,
      initialValue?: T
    ): Array<T>,
    reduceRight: reduceRight<T>(
      fn: (value: T, node: this, index: number) => T,
      initialValue?: T
    ): Array<T>,
    render: render(): CheerioWrapper,
    renderProp: renderProp(propName: string): (...args: Array<any>) => this,
    setContext: setContext(context: Object): this,
    setProps: setProps(props: {}, callback?: () => void): this,
    setState: setState(state: {}, callback?: () => void): this,
    simulate: simulate(event: string, ...args: Array<any>): this,
    simulateError: simulateError(error: Error): this,
    slice: slice(begin?: number, end?: number): this,
    some: some(selector: EnzymeSelector): boolean,
    someWhere: someWhere(predicate: PredicateFunction<this>): boolean,
    state: state(key?: string): any,
    text: text(): string,
    type: type(): string | Function | null,
    unmount: unmount(): this,
    update: update(): this
  }

    declare class ReactWrapper<T> extends Wrapper<T> {
    constructor: constructor(nodes: React$Element<T>, root: any, options?: ?Object): ReactWrapper<T>,
    detach: detach(): void,
    mount: mount(): this,
    ref: ref(refName: string): this
  }

    declare class ShallowWrapper<T> extends Wrapper<T> {
    constructor: constructor(
      nodes: React$Element<T>,
      root: any,
      options?: ?Object
    ): ShallowWrapper<T>,
    equals: equals(node: React$Node): boolean,
    getElement: getElement(): React$Node,
    getElements: getElements(): Array<React$Node>,
    shallow: shallow(options?: { context?: Object }): ShallowWrapper<T>
  }

    declare function shallow<T>(node: React$Element<T>, options?: {context?: Object, disableLifecycleMethods?: boolean}): ShallowWrapper<T>;
    declare function mount<T>(
        node: React$Element<T>,
        options?: {
      attachTo?: HTMLElement,
      childContextTypes?: Object,
      context?: Object
    }
    ): ReactWrapper<T>;
    declare function render<T>(node: React$Element<T>, options?: {context?: Object}): CheerioWrapper;

    declare module.exports: {
    configure: configure(options: {
      Adapter?: any,
      disableLifecycleMethods?: boolean
    }): void,
    mount: typeof mount,
    ReactWrapper: typeof ReactWrapper,
    render: typeof render,
    shallow: typeof shallow,
    ShallowWrapper: typeof ShallowWrapper
  };
}
