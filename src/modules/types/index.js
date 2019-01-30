// @flow

import type {TExampleState} from 'modules/example/reducers/example';
import type {IExampleApi} from 'modules/example/services/ExampleApi';

// TODO: from extra args
type TExtraArgs = {
    exampleApi: IExampleApi,
};
type TPromiseAction = Promise<Object>;
type TGetState = () => any;
type TDispatch = (action: Object | TThunkAction | TPromiseAction | Array<Object>) => any;
export type TThunkAction = (dispatch: TDispatch, getState: TGetState, extraArgs: TExtraArgs) => any;
// TODO: from root reducer
export type TRootState = {
    example: {
        example: TExampleState,
    },
};
