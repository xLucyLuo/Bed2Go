import { combineReducers } from 'redux';
import filterReducer from './filters_reducer';
import modalReducer from './modal_reducer';

const uiReducer = combineReducers({
  filters: filterReducer,
  modal: modalReducer,
});

export default uiReducer;