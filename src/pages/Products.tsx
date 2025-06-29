import { useState } from 'react';
import { motion } from 'framer-motion';

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  description: string;
}

const products: Product[] = [
  { id: 1, name: '프리미엄 침낭 X1', category: '침낭', price: '189,000원', description: '영하 20도까지 견디는 프리미엄 구스다운 침낭' },
  { id: 2, name: '구명조끼 프로 V2', category: '구명조끼', price: '89,000원', description: 'CE 인증 획득한 전문가용 구명조끼' },
  { id: 3, name: '올웨더 텐트 4P', category: '텐트', price: '299,000원', description: '4계절 사용 가능한 방수 텐트' },
  { id: 4, name: '초경량 침낭 UL', category: '침낭', price: '129,000원', description: '무게 600g의 초경량 3계절 침낭' },
  { id: 5, name: '아동용 구명조끼', category: '구명조끼', price: '59,000원', description: '어린이 전용 안전 구명조끼' },
  { id: 6, name: '백패킹 텐트 2P', category: '텐트', price: '199,000원', description: '초경량 2인용 백패킹 텐트' },
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const categories = ['전체', '침낭', '구명조끼', '텐트'];

  const filteredProducts = selectedCategory === '전체' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">제품 목록</h1>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <span className="text-6xl opacity-50">
                    {product.category === '침낭' ? '🛏️' : product.category === '구명조끼' ? '🦺' : '⛺'}
                  </span>
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full mb-2">
                    {product.category}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200">
                      상세보기
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
