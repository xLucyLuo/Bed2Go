import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import reviewErrorsReducer from './review_errors_reducer';
import reservationErrorsReducer from './reservation_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  reviews: reviewErrorsReducer,
  reservations: reservationErrorsReducer,
});

export default errorsReducer;