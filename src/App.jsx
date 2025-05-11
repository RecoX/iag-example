import { Routes, Route } from 'react-router-dom';
import UserDashboard from './pages/UserDashboard';
import CreateClaim from './pages/CreateClaim';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<UserDashboard />} />
        <Route path="/create-claim" element={<CreateClaim />} />
      </Route>
    </Routes>
  );
}

export default App;
