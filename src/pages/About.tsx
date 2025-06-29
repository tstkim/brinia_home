import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            브리니아 이야기
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            1998년부터 대한민국 아웃도어 문화를 선도해온 브리니아는
            안전과 품질을 최우선으로 하는 아웃도어 전문 브랜드입니다.
          </p>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">우리의 미션</h2>
              <p className="text-lg text-gray-600 mb-4">
                브리니아는 모든 사람이 자연 속에서 안전하고 즐거운 경험을 
                할 수 있도록 최고 품질의 아웃도어 장비를 제공합니다.
              </p>
              <p className="text-lg text-gray-600">
                우리는 혁신적인 기술과 지속 가능한 소재를 사용하여 
                자연과 사람 모두를 위한 제품을 만들어갑니다.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-blue-50 rounded-lg p-8"
            >
              <div className="text-center">
                <span className="text-6xl">🏔️</span>
                <h3 className="text-2xl font-semibold text-gray-800 mt-4">25년의 역사</h3>
                <p className="text-gray-600 mt-2">믿음과 신뢰로 함께해온 시간</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">핵심 가치</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-4xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">안전</h3>
              <p className="text-gray-600">
                모든 제품은 국제 안전 기준을 초과하는 엄격한 테스트를 거칩니다
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center"
            >
              <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-4xl">♻️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">지속가능성</h3>
              <p className="text-gray-600">
                친환경 소재와 제조 공정으로 지구를 보호합니다
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-center"
            >
              <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-4xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">혁신</h3>
              <p className="text-gray-600">
                끊임없는 연구개발로 더 나은 제품을 만들어갑니다
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">브리니아의 발자취</h2>
          <div className="space-y-8">
            {[
              { year: '1998', event: '브리니아 창립' },
              { year: '2005', event: '국내 최초 친환경 침낭 개발' },
              { year: '2010', event: 'ISO 9001 품질경영시스템 인증' },
              { year: '2015', event: '글로벌 안전 인증 CE 마크 획득' },
              { year: '2020', event: '탄소중립 제조 공정 도입' },
              { year: '2023', event: '누적 판매 100만개 돌파' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center"
              >
                <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold min-w-[100px] text-center">
                  {item.year}
                </div>
                <div className="ml-8 text-lg text-gray-700">{item.event}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
