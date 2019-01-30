// @flow
import {EXAMPLE_ACTION_TYPE} from 'modules/example/constants';
import type {TThunkAction} from 'modules/types';

function getExampleFail(payload) {
    return {
        payload,
        type: EXAMPLE_ACTION_TYPE.GET_EXAMPLE_FAIL,
    };
}

function getExampleStart() {
    return {
        type: EXAMPLE_ACTION_TYPE.GET_EXAMPLE_START,
    };
}

function getExampleSuccess(payload) {
    return {
        payload,
        type: EXAMPLE_ACTION_TYPE.GET_EXAMPLE_SUCCESS,
    };
}

export function getExample(): TThunkAction {
    return async (dispatch, getState, {exampleApi}) => {
        dispatch(getExampleStart());
        const {data, errors} = await exampleApi.getExample();
        if (!errors) {
            dispatch(getExampleSuccess(data));
        } else {
            dispatch(getExampleFail(errors));
        }
    };
}
