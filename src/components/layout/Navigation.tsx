import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navigation = () => {
  const navItems = [
    { path: '/', label: '홈', icon: '🏠' },
    { path: '/sleeping-bag', label: '침낭', icon: '🏕️' },
    { path: '/life-jacket', label: '구명조끼', icon: '🚤' },
    { path: '/purchase-video', label: '구매영상', icon: '📹' }
  ];

  return (
    <nav className="bg-white border-t border-slate-200 md:border-t-0 md:bg-transparent">
      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center space-x-8 py-4"
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                        : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'
                    }`
                  }
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.label}</span>
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile Navigation - Bottom Fixed */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-lg"
        >
          <div className="grid grid-cols-4 py-2">
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex flex-col items-center justify-center py-3 px-2 transition-all duration-300 ${
                      isActive
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-slate-500 hover:text-blue-600'
                    }`
                  }
                >
                  <span className="text-xl mb-1">{item.icon}</span>
                  <span className="text-xs font-semibold">{item.label}</span>
                </NavLink>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navigation;
