import './App.css';

import { Route, Routes } from 'react-router';

import HomePage from './pages/homePage';
import MainLayout from './components/mainLayout';
import NotFound from './pages/notFound';
import UserDetails from './components/userDetails';

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/users/:id' element={<UserDetails/>} />
          <Route path='*' element={<NotFound />} />
        </Routes>

      </MainLayout>
    </div>
  );
}

export default App;
