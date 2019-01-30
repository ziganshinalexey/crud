// @flow
import {exampleReducer, initialState} from './example';
import {EXAMPLE_ACTION_TYPE} from 'modules/example/constants/index';

describe('Example reducer', () => {
    test('should return the initial state', () => {
        const nextState = exampleReducer();
        expect(nextState).toEqual(initialState);
    });

    describe('EXAMPLE_ACTION_TYPE.GET_EXAMPLE_START', () => {
        test('should handle', () => {
            const expectedState = {
                ...initialState,
                isLoading: true,
            };
            const nextState = exampleReducer(initialState, {
                type: EXAMPLE_ACTION_TYPE.GET_EXAMPLE_START,
            });
            expect(nextState).toEqual(expectedState);
        });
    });

    describe('EXAMPLE_ACTION_TYPE.GET_EXAMPLE_SUCCESS', () => {
        test('should handle', () => {
            const expectedState = {
                ...initialState,
                data: {
                    '1': {id: '1', name: 'sample text'},
                },
                isLoading: false,
                list: ['1'],
            };
            const nextState = exampleReducer(initialState, {
                payload: {'1': {id: '1', name: 'sample text'}},
                type: EXAMPLE_ACTION_TYPE.GET_EXAMPLE_SUCCESS,
            });
            expect(nextState).toEqual(expectedState);
        });

        test('should replace previous data', () => {
            const prevState = {
                ...initialState,
                data: {
                    '1': {id: '1', name: 'sample text'},
                },
                isLoading: false,
                list: ['1'],
            };
            const expectedState = {
                ...initialState,
                data: {
                    '2': {id: '2', name: 'sample text'},
                },
                isLoading: false,
                list: ['2'],
            };
            const nextState = exampleReducer(prevState, {
                payload: {'2': {id: '2', name: 'sample text'}},
                type: EXAMPLE_ACTION_TYPE.GET_EXAMPLE_SUCCESS,
            });
            expect(nextState).toEqual(expectedState);
        });
    });

    describe('EXAMPLE_LIST_LOAD_FAIL', () => {
        test('should handle', () => {
            const expectedState = {
                ...initialState,
                isLoading: false,
            };
            const nextState = exampleReducer(initialState, {
                type: EXAMPLE_ACTION_TYPE.GET_EXAMPLE_FAIL,
            });
            expect(nextState).toEqual(expectedState);
        });
    });
});
