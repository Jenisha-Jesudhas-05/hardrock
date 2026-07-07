import { Routes, Route } from 'react-router-dom';

import Layout from './layout/HomeLayout/HomeLayout';
import Home from './pages/Home/Home';
import Rooms from './pages/Rooms/Rooms';
import NotFound from './pages/NotFound/NotFound';
import Test from './pages/Test';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/test" element={<Test />} />
      </Route>
    </Routes>
  );
}

export default App;
