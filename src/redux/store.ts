import { createStore, combineReducers } from 'redux';
import userReducer from './reducers/userReducer';
import counterReducer from './reducers/counterReducer';

// Combine reducers
const rootReducer = combineReducers({
  user: userReducer,
  counter: counterReducer,
});

// Define the RootState type
export type RootState = ReturnType<typeof rootReducer>;

// Create the store
const store = createStore(rootReducer);

// Export the store as the default export
export default store;
