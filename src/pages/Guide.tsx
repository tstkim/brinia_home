import { motion } from 'framer-motion';

export default function Guide() {
  const guides = [
    {
      title: '침낭 관리 가이드',
      description: '침낭을 오래 사용하기 위한 보관 및 세탁 방법',
      duration: '5분',
      level: '초급',
    },
    {
      title: '구명조끼 착용법',
      description: '올바른 구명조끼 착용 방법과 안전 수칙',
      duration: '3분',
      level: '초급',
    },
    {
      title: '텐트 설치 마스터',
      description: '다양한 환경에서의 텐트 설치 팁과 노하우',
      duration: '15분',
      level: '중급',
    },
    {
      title: '캠핑 장비 선택 가이드',
      description: '용도별 최적의 캠핑 장비 선택 방법',
      duration: '10분',
      level: '초급',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">사용 가이드</h1>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            브리니아 제품을 안전하고 효과적으로 사용하는 방법을 알려드립니다
          </p>

          {/* Guide Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guides.map((guide, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">{guide.title}</h3>
                  <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                    guide.level === '초급' ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'
                  }`}>
                    {guide.level}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{guide.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    <span className="inline-block mr-2">⏱️</span>
                    {guide.duration}
                  </span>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200">
                    시청하기
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">자주 묻는 질문</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    Q. 침낭은 어떻게 보관해야 하나요?
                  </h4>
                  <p className="text-gray-600">
                    A. 침낭은 압축하지 않은 상태로 통풍이 잘 되는 곳에 보관하세요. 장기 보관 시에는 
                    제공된 보관용 주머니를 사용하시면 좋습니다.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    Q. 구명조끼의 교체 시기는 언제인가요?
                  </h4>
                  <p className="text-gray-600">
                    A. 일반적으로 3-5년마다 교체를 권장하며, 손상이나 변형이 있을 경우 즉시 교체해야 합니다.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    Q. 제품 A/S는 어떻게 받나요?
                  </h4>
                  <p className="text-gray-600">
                    A. 고객센터(1588-1234)로 연락주시거나 홈페이지의 A/S 신청 페이지를 이용해주세요.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
