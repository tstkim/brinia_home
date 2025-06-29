import { motion } from 'framer-motion';

const LifeJacketPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
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
          안전 구명조끼
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg text-slate-600 mb-12 text-center max-w-3xl mx-auto"
        >
          국제 안전 기준을 충족하는 브리니아의 구명조끼로 수상 활동의 안전을 보장하세요.
          편안함과 안전성을 동시에 제공하는 프리미엄 제품입니다.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "프로페셔널 마린",
              buoyancy: "150N",
              certification: "CE 인증",
              price: "₩189,000",
              features: ["자동팽창", "수동백업", "위치표시등"]
            },
            {
              name: "레크리에이션 스탠다드",
              buoyancy: "100N",
              certification: "KS 인증",
              price: "₩129,000", 
              features: ["폼 타입", "조절 가능", "반사 테이프"]
            },
            {
              name: "키즈 세이프티",
              buoyancy: "100N",
              certification: "아동용 인증",
              price: "₩89,000",
              features: ["어린이 전용", "밝은 색상", "안전 호루라기"]
            }
          ].map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.2, duration: 0.8 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center">
                <div className="text-6xl">🚤</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">{product.name}</h3>
                <div className="text-slate-600 mb-4">
                  <p>부력: <span className="font-semibold">{product.buoyancy}</span></p>
                  <p>인증: <span className="font-semibold">{product.certification}</span></p>
                </div>
                <div className="mb-4">
                  {product.features.map((feature, idx) => (
                    <span key={idx} className="inline-block bg-orange-100 text-orange-800 text-sm px-2 py-1 rounded mr-2 mb-1">
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-orange-600">{product.price}</span>
                  <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg transition-colors">
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
          <h2 className="text-2xl font-bold text-slate-800 mb-6">안전 인증 및 사용법</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-slate-700 mb-3">국제 안전 기준</h3>
              <ul className="text-slate-600 space-y-2">
                <li>• <strong>ISO 12402:</strong> 개인용 부유장치 국제 표준</li>
                <li>• <strong>CE 마킹:</strong> 유럽 안전 기준 충족</li>
                <li>• <strong>KS 인증:</strong> 한국 산업 표준 인증</li>
                <li>• <strong>SOLAS:</strong> 해상 인명 안전 협약</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-700 mb-3">올바른 착용법</h3>
              <ul className="text-slate-600 space-y-2">
                <li>• 어깨끈을 먼저 착용하세요</li>
                <li>• 가슴끈을 단단히 조여주세요</li>
                <li>• 허리끈으로 몸에 밀착시키세요</li>
                <li>• 활동에 방해되지 않도록 조절하세요</li>
              </ul>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-12 bg-red-50 border border-red-200 rounded-2xl p-8"
        >
          <h2 className="text-2xl font-bold text-red-800 mb-4 flex items-center">
            <span className="mr-2">⚠️</span>
            안전 주의사항
          </h2>
          <div className="text-red-700">
            <p className="mb-3">
              구명조끼는 생명을 지키는 중요한 안전 장비입니다. 다음 사항을 반드시 지켜주세요:
            </p>
            <ul className="space-y-2 list-disc ml-5">
              <li>구매 전 체중과 가슴 둘레를 정확히 측정하여 적합한 사이즈 선택</li>
              <li>사용 전 항상 팽창 장치와 모든 부속품의 정상 작동 확인</li>
              <li>물에 들어가기 전 반드시 착용하고 모든 끈을 단단히 조여주세요</li>
              <li>정기적인 점검과 관리로 항상 최상의 상태를 유지하세요</li>
            </ul>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default LifeJacketPage;
