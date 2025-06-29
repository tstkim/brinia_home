import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import SleepingBagPage from './pages/SleepingBagPage';
import LifeJacketPage from './pages/LifeJacketPage';
import PurchaseVideoPage from './pages/PurchaseVideoPage';
import NotFoundPage from './pages/NotFoundPage';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sleeping-bag" element={<SleepingBagPage />} />
          <Route path="/life-jacket" element={<LifeJacketPage />} />
          <Route path="/purchase-video" element={<PurchaseVideoPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
