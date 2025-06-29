import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-blue-600">브리니아</span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              <Link to="/" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                홈
              </Link>
              <Link to="/products" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                제품
              </Link>
              <Link to="/guide" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                가이드
              </Link>
              <Link to="/about" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                회사소개
              </Link>
              <Link to="/contact" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                문의하기
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">메뉴 열기</span>
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-gray-900 hover:bg-gray-100 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              홈
            </Link>
            <Link to="/products" className="text-gray-900 hover:bg-gray-100 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              제품
            </Link>
            <Link to="/guide" className="text-gray-900 hover:bg-gray-100 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              가이드
            </Link>
            <Link to="/about" className="text-gray-900 hover:bg-gray-100 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              회사소개
            </Link>
            <Link to="/contact" className="text-gray-900 hover:bg-gray-100 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              문의하기
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
