import { createStore, combineReducers } from 'redux';
import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({
  user: userReducer,
});


export type RootState = ReturnType<typeof rootReducer>;


const store = createStore(rootReducer);


export default store;
export type AppDispatch = typeof store.dispatch;
