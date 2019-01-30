// @flow
import {combineReducers} from 'redux';
import {exampleReducer} from 'modules/example/reducers/example';

export const exampleReducers = combineReducers({
    example: exampleReducer,
});
