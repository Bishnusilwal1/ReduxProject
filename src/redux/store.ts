import { createStore, combineReducers } from 'redux';
import userReducer from './reducers/userReducer';
import counterReducer from './reducers/counterReducer';

const rootReducer = combineReducers({
  user: userReducer,
  counter: counterReducer,
});


export type RootState = ReturnType<typeof rootReducer>;


const store = createStore(rootReducer);


export default store;
