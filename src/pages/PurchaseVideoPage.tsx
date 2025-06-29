import { motion } from 'framer-motion';

const PurchaseVideoPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50">
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
          구매 가이드 영상
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg text-slate-600 mb-12 text-center max-w-3xl mx-auto"
        >
          브리니아 제품의 올바른 선택과 사용법을 자세한 영상으로 안내해드립니다.
          전문가의 노하우와 실제 사용 후기를 통해 최적의 제품을 선택하세요.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Featured Video */}
          <motion.section
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">📹</div>
                  <h3 className="text-2xl font-bold mb-2">메인 구매 가이드</h3>
                  <p className="text-slate-300">브리니아 제품 완벽 구매 가이드 (15분)</p>
                  <button className="mt-4 bg-white text-slate-800 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors">
                    ▶ 재생하기
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  브리니아 제품 완벽 구매 가이드
                </h3>
                <p className="text-slate-600 mb-4">
                  침낭과 구명조끼 선택부터 사용법, 관리법까지 모든 것을 담은 종합 가이드입니다.
                  초보자도 쉽게 따라할 수 있도록 단계별로 설명드립니다.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">제품 선택</span>
                  <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">사용법</span>
                  <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">관리법</span>
                  <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">안전수칙</span>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Video List */}
          <motion.section
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-6">침낭 가이드</h2>
            <div className="space-y-4">
              {[
                {
                  title: "침낭 사이즈 선택법",
                  duration: "5:32",
                  description: "체형에 맞는 침낭 사이즈 고르는 방법"
                },
                {
                  title: "온도 등급 이해하기",
                  duration: "7:18", 
                  description: "계절별 온도 등급 선택 가이드"
                },
                {
                  title: "침낭 관리 및 보관법",
                  duration: "4:45",
                  description: "오래 사용하는 침낭 관리의 비밀"
                }
              ].map((video, index) => (
                <div key={index} className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-20 h-14 bg-gradient-to-br from-green-100 to-blue-100 rounded flex items-center justify-center">
                      <span className="text-2xl">🏕️</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-800 mb-1">{video.title}</h3>
                      <p className="text-sm text-slate-600 mb-2">{video.description}</p>
                      <span className="text-xs text-slate-500">{video.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-6">구명조끼 가이드</h2>
            <div className="space-y-4">
              {[
                {
                  title: "구명조끼 착용법",
                  duration: "6:15",
                  description: "올바른 착용법과 조절 방법"
                },
                {
                  title: "부력 등급별 선택",
                  duration: "8:42",
                  description: "활동별 적합한 부력 등급 가이드"
                },
                {
                  title: "안전 점검 체크리스트",
                  duration: "3:28",
                  description: "사용 전 필수 안전 점검 항목"
                }
              ].map((video, index) => (
                <div key={index} className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-20 h-14 bg-gradient-to-br from-orange-100 to-red-100 rounded flex items-center justify-center">
                      <span className="text-2xl">🚤</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-800 mb-1">{video.title}</h3>
                      <p className="text-sm text-slate-600 mb-2">{video.description}</p>
                      <span className="text-xs text-slate-500">{video.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Customer Reviews */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">고객 사용 후기</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "김○○님",
                product: "알파인 프로 침낭",
                rating: 5,
                comment: "영상 가이드 덕분에 완벽한 제품을 선택했어요. 히말라야 트레킹에서 정말 따뜻했습니다!"
              },
              {
                name: "박○○님", 
                product: "프로페셔널 마린 구명조끼",
                rating: 5,
                comment: "착용법 영상이 너무 도움됐어요. 요트 활동할 때 안전하고 편안합니다."
              },
              {
                name: "이○○님",
                product: "트레커 라이트 침낭", 
                rating: 5,
                comment: "관리법 영상 보고 제대로 관리하니 5년째 새것 같아요. 감사합니다!"
              }
            ].map((review, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center mb-3">
                  <div className="flex text-yellow-400 mr-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                  <span className="font-semibold text-slate-800">{review.name}</span>
                </div>
                <p className="text-sm text-blue-600 mb-2">{review.product}</p>
                <p className="text-slate-600">"{review.comment}"</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">
            더 많은 영상과 가이드가 필요하신가요?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            브리니아 유튜브 채널에서 더 자세한 가이드와 사용 팁을 확인하세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
              유튜브 채널 방문
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
              구매 문의하기
            </button>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default PurchaseVideoPage;
