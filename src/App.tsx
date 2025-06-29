import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Guide from './pages/Guide';
import About from './pages/About';
import Contact from './pages/Contact';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">브리니아</h3>
                <p className="text-gray-400">
                  자연과 함께하는 모험을 위한<br />
                  최고의 아웃도어 파트너
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">빠른 링크</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="/products" className="hover:text-white transition-colors">제품 보기</a></li>
                  <li><a href="/guide" className="hover:text-white transition-colors">사용 가이드</a></li>
                  <li><a href="/about" className="hover:text-white transition-colors">회사 소개</a></li>
                  <li><a href="/contact" className="hover:text-white transition-colors">문의하기</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">고객 지원</h4>
                <p className="text-gray-400">
                  고객센터: 1588-1234<br />
                  평일 09:00 - 18:00<br />
                  support@brinia.co.kr
                </p>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2025 브리니아. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
