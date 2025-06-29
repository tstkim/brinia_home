import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-slate-800 text-white mt-16 mb-16 md:mb-0"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-2xl">🏔️</span>
              <h3 className="text-xl font-bold">브리니아</h3>
            </div>
            <p className="text-slate-300 mb-4 leading-relaxed">
              안전하고 편안한 아웃도어 라이프를 위한 프리미엄 제품을 제공합니다.
              최고의 품질과 신뢰할 수 있는 서비스로 고객의 모험을 함께합니다.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                📘
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                📷
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <span className="sr-only">YouTube</span>
                📹
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">빠른 링크</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-slate-300 hover:text-white transition-colors">
                  홈
                </a>
              </li>
              <li>
                <a href="/sleeping-bag" className="text-slate-300 hover:text-white transition-colors">
                  침낭
                </a>
              </li>
              <li>
                <a href="/life-jacket" className="text-slate-300 hover:text-white transition-colors">
                  구명조끼
                </a>
              </li>
              <li>
                <a href="/purchase-video" className="text-slate-300 hover:text-white transition-colors">
                  구매영상
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">연락처</h4>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-center space-x-2">
                <span>📞</span>
                <span>1588-0000</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>✉️</span>
                <span>info@brinia.co.kr</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>🕒</span>
                <span>평일 09:00 - 18:00</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>📍</span>
                <span>서울시 강남구</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2025 브리니아. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
              개인정보처리방침
            </a>
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
              이용약관
            </a>
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
              고객센터
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
