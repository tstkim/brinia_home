import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-12"
      >
        {/* Hero Section */}
        <section className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-slate-800 mb-6"
          >
            브리니아 홈
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto"
          >
            안전하고 편안한 아웃도어 라이프를 위한 프리미엄 제품들을 만나보세요
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="inline-flex gap-4"
          >
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              제품 둘러보기
            </button>
            <button className="border-2 border-slate-300 hover:border-slate-400 text-slate-700 px-8 py-3 rounded-lg font-semibold transition-colors">
              구매영상 보기
            </button>
          </motion.div>
        </section>

        {/* Feature Cards */}
        <section className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "프리미엄 침낭",
              description: "극한의 추위에서도 따뜻함을 지켜주는 고급 침낭",
              icon: "🏕️"
            },
            {
              title: "안전 구명조끼",
              description: "국제 안전 기준을 충족하는 신뢰할 수 있는 구명조끼",
              icon: "🚤"
            },
            {
              title: "전문 가이드",
              description: "제품 사용법과 구매 가이드 영상으로 안전하게",
              icon: "📹"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.2, duration: 0.8 }}
              className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </motion.div>
          ))}
        </section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="bg-slate-800 text-white rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">
            최고의 아웃도어 경험을 시작하세요
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            브리니아의 프리미엄 제품으로 안전하고 편안한 모험을 떠나보세요
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-colors">
            지금 시작하기
          </button>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default HomePage;
