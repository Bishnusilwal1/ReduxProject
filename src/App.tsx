import React from 'react';
import UserForm from './components/UserForm';
import Counter from './components/Counter';
import { Provider } from 'react-redux';
import store from './redux/store'; 

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>My Redux App</h1>
        <UserForm />
        <Counter />
      </div>
    </Provider>
  );
};

export default App;
