// @flow
import {EXAMPLE_MODULE_NAME} from 'modules/example/constants';
import type {TRootState} from 'modules/types';
import {createSelector} from 'reselect';

export function selectModule(state: TRootState) {
    return state[EXAMPLE_MODULE_NAME];
}

export function selectExampleState(state: TRootState) {
    return selectModule(state).example;
}

export function selectExampleData(state: TRootState) {
    return selectExampleState(state).data;
}

export function selectExampleIdList(state: TRootState) {
    return selectExampleState(state).list;
}

export function selectExampleIsLoading(state: TRootState) {
    return selectExampleState(state).isLoading;
}

export const selectExampleList = createSelector(
    [selectExampleData, selectExampleIdList],
    (data, idList) => idList.map((id) => data[id])
);
