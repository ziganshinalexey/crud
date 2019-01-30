// @flow
import {EXAMPLE_ACTION_TYPE} from 'modules/example/constants/index';

export type TExample = {
    id: string,
    name: string,
};

type TExampleData = {
    [string]: TExample,
};

export type TActionGetExampleStart = {type: EXAMPLE_ACTION_TYPE.GET_EXAMPLE_START};
export type TActionGetExampleFail = {type: EXAMPLE_ACTION_TYPE.GET_EXAMPLE_FAIL};
export type TActionGetExampleSuccess = {payload: TExample, type: EXAMPLE_ACTION_TYPE.GET_EXAMPLE_SUCCESS};
type TExampleAction = TActionGetExampleStart | TActionGetExampleFail | TActionGetExampleSuccess;

export type TExampleState = $ReadOnly<{|
    data: TExampleData,
    isLoading: boolean,
    list: string[],
|}>;

export const initialState: TExampleState = {
    data: {},
    isLoading: false,
    list: [],
};

export function exampleReducer(state: TExampleState = initialState, {type, payload}: TExampleAction = {}): TExampleState {
    switch (type) {
        case EXAMPLE_ACTION_TYPE.GET_EXAMPLE_FAIL:
            return {
                ...state,
                isLoading: false,
            };
        case EXAMPLE_ACTION_TYPE.GET_EXAMPLE_START:
            return {
                ...state,
                isLoading: true,
            };
        case EXAMPLE_ACTION_TYPE.GET_EXAMPLE_SUCCESS:
            return {
                ...state,
                data: payload,
                isLoading: false,
                list: Object.keys(payload),
            };
        default:
            return state;
    }
}
