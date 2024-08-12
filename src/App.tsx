import React from 'react';
import UserForm from './components/UserForm';
// import Counter from './components/Counter';
import { Provider } from 'react-redux';
import store from './redux/store'; 

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className=''>
        <h1 className='flex justify-center items-center text-2xl font-medium mt-10'>My Redux App</h1>
        <div className='flex justify-center items-center '>
        <UserForm  />
        

        </div>
        {/* <div className='flex justify-center items-center mt-12'>
        <Counter />

        </div>
         */}
        
      </div>
    </Provider>
  );
};

export default App;
