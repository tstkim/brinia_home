import { motion } from 'framer-motion';

const SleepingBagPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-12"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-slate-800 mb-8 text-center"
        >
          프리미엄 침낭 컬렉션
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg text-slate-600 mb-12 text-center max-w-3xl mx-auto"
        >
          극한의 환경에서도 따뜻하고 편안한 잠자리를 제공하는 브리니아의 침낭을 만나보세요.
          최고급 소재와 첨단 기술로 제작된 프리미엄 침낭입니다.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "알파인 프로",
              temperature: "-20°C",
              weight: "1.2kg",
              price: "₩299,000",
              features: ["다운 충전재", "방수 처리", "압축 가능"]
            },
            {
              name: "트레커 라이트",
              temperature: "-10°C", 
              weight: "0.9kg",
              price: "₩199,000",
              features: ["경량 소재", "투습 원단", "컴팩트 사이즈"]
            },
            {
              name: "베이스캠프 플러스",
              temperature: "-15°C",
              weight: "1.5kg", 
              price: "₩249,000",
              features: ["넓은 공간", "이중 지퍼", "발열 라이너"]
            }
          ].map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.2, duration: 0.8 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                <div className="text-6xl">🏕️</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">{product.name}</h3>
                <div className="text-slate-600 mb-4">
                  <p>온도 등급: <span className="font-semibold">{product.temperature}</span></p>
                  <p>무게: <span className="font-semibold">{product.weight}</span></p>
                </div>
                <div className="mb-4">
                  {product.features.map((feature, idx) => (
                    <span key={idx} className="inline-block bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded mr-2 mb-1">
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                    자세히 보기
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg"
        >
          <h2 className="text-2xl font-bold text-slate-800 mb-6">침낭 선택 가이드</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-slate-700 mb-3">온도 등급 이해하기</h3>
              <ul className="text-slate-600 space-y-2">
                <li>• <strong>컴포트 온도:</strong> 일반적으로 편안한 수면 온도</li>
                <li>• <strong>리미트 온도:</strong> 최저 사용 가능 온도</li>
                <li>• <strong>익스트림 온도:</strong> 생존 가능한 최저 온도</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-700 mb-3">관리 및 보관법</h3>
              <ul className="text-slate-600 space-y-2">
                <li>• 사용 후 충분히 건조시키세요</li>
                <li>• 압축 보관보다 느슨하게 보관하세요</li>
                <li>• 정기적으로 뒤집어서 보관하세요</li>
              </ul>
            </div>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default SleepingBagPage;
