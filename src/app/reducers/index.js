// @flow
import {combineReducers} from 'redux';
import {exampleReducers} from 'modules/example/reducers';
import {EXAMPLE_MODULE_NAME} from 'modules/example/constants';

export const rootReducer = combineReducers({
    [EXAMPLE_MODULE_NAME]: exampleReducers,
});
