import { Link, Outlet, useLocation } from 'react-router-dom';
import { BoxSelect, MessageSquare, Layers } from 'lucide-react';

export function Layout() {
  const location = useLocation();

  const navItems = [
    { name: 'Select', path: '/select', icon: BoxSelect },
    { name: 'Dialog', path: '/dialog', icon: MessageSquare },
    { name: 'Popover', path: '/popover', icon: Layers },
  ];

  return (
    <div className="flex h-screen bg-zinc-50 font-sans text-zinc-900">
      <aside className="w-64 border-r border-zinc-200 bg-white shadow-sm z-10">
        <div className="p-6 border-b border-zinc-200">
          <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Headless UI Labs
          </h1>
          <p className="text-xs text-zinc-500 mt-1">Component Comparison</p>
        </div>
        <nav className="p-4 space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname.includes(item.path) || (location.pathname === '/' && item.path === '/select');
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors text-sm ${isActive
                    ? 'bg-blue-50 text-blue-700 font-semibold shadow-sm ring-1 ring-blue-100/50'
                    : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 font-medium'
                  }`}
              >
                <item.icon className="w-5 h-5" />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </aside>
      <main className="flex-1 overflow-auto bg-zinc-50/50">
        <Outlet />
      </main>
    </div>
  );
}
