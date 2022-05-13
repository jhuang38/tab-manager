import {FC} from 'react';
import {Route, Routes} from 'react-router-dom';
import Header from './Components/Header';

const App:FC = () => {
  return (
    <div className="App">
      <Header/>
      <Routes>
      </Routes>
    </div>
  );
}

export default App;
