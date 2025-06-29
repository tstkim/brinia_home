import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              자연과 함께하는 모험
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              브리니아와 함께 안전하고 편안한 아웃도어 라이프를 경험하세요
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-200">
                제품 둘러보기
              </Link>
              <Link to="/guide" className="bg-white hover:bg-gray-100 text-gray-800 border border-gray-300 px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-200">
                사용 가이드
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
          >
            브리니아가 특별한 이유
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">최고의 안전성</h3>
              <p className="text-gray-600">국제 안전 규격을 준수하며 철저한 품질 검사를 거친 제품</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🌿</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">친환경 소재</h3>
              <p className="text-gray-600">자연을 생각하는 지속 가능한 소재로 제작</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center"
            >
              <div className="bg-orange-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">혁신적인 디자인</h3>
              <p className="text-gray-600">사용자 중심의 편의성과 기능성을 갖춘 설계</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Preview Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            인기 제품
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: '프리미엄 침낭', price: '189,000원', category: '캠핑' },
              { name: '구명조끼 프로', price: '89,000원', category: '수상안전' },
              { name: '올웨더 텐트', price: '299,000원', category: '캠핑' }
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
              >
                <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <span className="text-6xl opacity-50">🏕️</span>
                </div>
                <div className="p-6">
                  <span className="text-sm text-blue-600 font-medium">{product.category}</span>
                  <h3 className="text-xl font-semibold text-gray-800 mt-1">{product.name}</h3>
                  <p className="text-2xl font-bold text-gray-900 mt-2">{product.price}</p>
                  <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors duration-200">
                    자세히 보기
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            브리니아와 함께 특별한 모험을 시작하세요
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            지금 회원가입하고 10% 할인 혜택을 받아보세요
          </p>
          <button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-200">
            회원가입하기
          </button>
        </div>
      </section>
    </div>
  );
}
